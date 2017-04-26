import PaginationArrows from './paginationArrows.jsx';
import PaginationDataFrame from './paginationDataFrame.jsx';
import PaginationSearch from './paginationSearch.jsx';
import LetterSearchFrame from './letterSearchFrame.jsx';
import DropDownList from './../Common/dropDownList.jsx';

export default class PaginationFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPage: 1,
            searchInfo:'',
            currentItems:null,
            tempTotalItems:null,
            tempPageSize:this.props.config.pageSize
        };
    }

    changePageSize(size){
        this.state.tempPageSize = parseInt(size);
        this.state.nowPage = 1;
        this.setState({
            currentItems:this.props.config.data.slice(0,parseInt(size))
        });
    }

    componentWillMount(){
        let listData = this.props.config.data.slice(0,this.state.tempPageSize);
        this.setState({
            currentItems:listData,
            tempTotalItems:this.props.config.data
        })
    }

    turnPage(n){
        let pageCount = this.state.nowPage + n;
        if(this.props.searchInBack){
            this.getData(pageCount);
        }
        else{
            let startCount = (pageCount-1)*this.state.tempPageSize;
            let endCount = pageCount*this.state.tempPageSize > this.state.tempTotalItems.length?this.state.tempTotalItems.length:pageCount*this.state.tempPageSize;
            let listData = this.state.tempTotalItems.slice(startCount,endCount);
            this.state.nowPage = pageCount;
            this.setState({nowPage:pageCount,currentItems:listData});
        }
    }

    searchFun(cond1,cond2){
        let tempData = global.allItems,header = this.props.config.header;
        let searchResultFirst = [],searchResultSecond = [],finalResult=[];
        if(cond1!==''){
            tempData.map((item)=>{
                if(item['Status'] === cond1){
                    searchResultFirst.push(item);
                }
            })
            if(cond2!==''){
                searchResultFirst.map((item)=>{
                    for(var i = 0;i<header.length;i++){
                        if(item[header[i]].indexOf(cond2) !== -1){
                            searchResultSecond.push(item);
                            break;
                        }
                    }
                });
                finalResult = searchResultSecond;
            }
            else{
                finalResult = searchResultFirst;
            }
        }
        else{
            if(cond2!==''){
                 tempData.map((item)=>{
                     for(var i = 0;i<header.length;i++){
                        if(item[header[i]].indexOf(cond2) !== -1){
                            searchResultSecond.push(item);
                            break;
                        }
                    }
                });
                finalResult = searchResultSecond;
            }
        }
        this.setState({
            currentItems:finalResult.slice(0,this.state.tempPageSize),
            tempTotalItems:finalResult,
            nowPage:1
        });
    }

    letterFun(letter){
        let tempList = [];
        if(letter === "ALL"){
            tempList = this.props.config.data;
        }
        else{
            this.props.config.data.map((item)=>{
                if(item.Name.indexOf(letter) === 0){
                    tempList.push(item);
                }
            });
        }
        this.setState({
            currentItems:tempList.slice(0,this.state.tempPageSize),
            tempTotalItems:tempList,
            nowPage:1
        })
    }

    getData(pageCount){
        var tempConfig = this.props.config , reactThis = this;
        var filterObj={
            PageNo: pageCount,
            PageSize: tempConfig.pageSize
        };
        $.when(AvePointSocialRequest.GetSharedDocument(pageCount, tempConfig.pageSize)).done(function(data){
            reactThis.setState(
                {currentItems:data.allItem,
                nowPage:pageCount}
            );
        }).fail(function(){
            

        })
        
    }

    render() {
        let {config,hasTitle,hasTurning,hasSearch,hasLetterSearch,canChangeSize} = this.props;
        let currentpage = this.state.nowPage;
        let child =  React.cloneElement(this.props.children, {
            listData: this.state.currentItems,
        });

        global.allItems =  this.props.config.data;

        let totalcount = this.props.searchInBack?this.props.config.totalCount:this.state.tempTotalItems.length;
        child = hasLetterSearch?<LetterSearchFrame letterSearch={this.letterFun.bind(this)}>{child} </LetterSearchFrame>:child;

        let turningPanel = hasTurning?<PaginationArrows turnPage={this.turnPage.bind(this)} currentPage={currentpage} countInPage={this.state.tempPageSize} totalCount={totalcount}></PaginationArrows>:null;
        let dataFrame = hasTitle?<PaginationDataFrame frameTitle={config.frameTitle}>{child}</PaginationDataFrame>:<div>{child}</div>;
        let searchPanel = hasSearch.hasSearch?<PaginationSearch hasDrop={hasSearch.hasDrop} searchFun={this.searchFun.bind(this)}></PaginationSearch>:null;
        let pageSizeSelect = canChangeSize?<div style={{float:"left"}}>Show <DropDownList selectAction={this.changePageSize.bind(this)} listData={config.dropList} defaultValue={""}></DropDownList> entries</div>:null;

        return <div className="acs-turningframe">
                    {pageSizeSelect}
                    {searchPanel}
                    <div style={{clear:"both"}}></div>
                    {dataFrame}
                    {turningPanel}
                </div>
    }
}
