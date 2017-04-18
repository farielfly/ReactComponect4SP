import PaginationArrows from './paginationArrows.jsx';
import PaginationDataFrame from './paginationDataFrame.jsx';
import PaginationSearch from './paginationSearch.jsx';
import LetterSearchFrame from './letterSearchFrame.jsx';

export default class PaginationFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPage: 1,
            searchInfo:'',
            currentItems:null,
            tempTotalItems:null
        };
    }

    componentWillMount(){
        let listData = this.props.config.data.slice(0,this.props.config.pageSize);
        this.setState({
            currentItems:listData,
            tempTotalItems:this.props.config.data
        })
    }

    turnPage(n){
        let pageCount = this.state.nowPage + n;
        let startCount = (pageCount-1)*this.props.config.pageSize;
        let endCount = pageCount*this.props.config.pageSize > this.state.tempTotalItems.length?this.state.tempTotalItems.length:pageCount*this.props.config.pageSize;
        let listData = this.state.tempTotalItems.slice(startCount,endCount);
        this.state.nowPage = pageCount;
        this.setState({nowPage:pageCount,currentItems:listData});
        //this.getData();
    }

    searchFun(cond1,cond2){
        let tempData = global.allItems;
        let searchResultFirst = [],searchResultSecond = [],finalResult=[];
        if(cond1!==''){
            tempData.map((item)=>{
                if(item['Status'] === cond1){
                    searchResultFirst.push(item);
                }
            })
            if(cond2!==''){
                searchResultFirst.map((item)=>{
                    if(item['RequestType'].indexOf(cond2) !== -1 ||item['RequestDate'].indexOf(cond2) !== -1 ||item['ProcessedDate'].indexOf(cond2) !== -1 ||
                        item['ProcessedBy'].indexOf(cond2) !== -1){
                            searchResultSecond.push(item);
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
                    if(item['RequestType'].indexOf(cond2) !== -1 ||item['RequestDate'].indexOf(cond2) !== -1 ||item['ProcessedDate'].indexOf(cond2) !== -1 ||
                        item['ProcessedBy'].indexOf(cond2) !== -1){
                            searchResultSecond.push(item);
                        }
                });
                finalResult = searchResultSecond;
            }
        }
        this.setState({
            currentItems:finalResult.slice(0,this.props.config.pageSize),
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
            currentItems:tempList.slice(0,this.props.config.pageSize),
            tempTotalItems:tempList,
            nowPage:1
        })
    }

    getData(){
        var tempConfig = this.props.config , reactThis = this;
        var filterObj={
            PageNo: this.state.nowPage,
            PageSize: tempConfig.countInPage
        };
         $.ajax({
            url: tempConfig.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            type: "POST",
            dataType:'json',
            data: JSON.stringify(filterObj),
            success:function(data){
                reactThis.setState(
                    {currentItems:data[tempConfig.dataResult]}
                );
            },
            error:function(er){
                console.log(er);
            }
        });
    }

    render() {
        let {config,hasTitle,hasTurning,hasSearch,hasLetterSearch} = this.props;
        let currentpage = this.state.nowPage;
        let child =  React.cloneElement(this.props.children, {
            listData: this.state.currentItems,
        });

        global.allItems =  this.props.config.data;

        child = hasLetterSearch?<LetterSearchFrame letterSearch={this.letterFun.bind(this)}>{child} </LetterSearchFrame>:child;

        let turningPanel = hasTurning?<PaginationArrows turnPage={this.turnPage.bind(this)} currentPage={currentpage} countInPage={config.pageSize} totalCount={this.state.tempTotalItems.length}></PaginationArrows>:null;
        let dataFrame = hasTitle?<PaginationDataFrame frameTitle={config.frameTitle}>{child}</PaginationDataFrame>:<div>{child}</div>;
        let searchPanel = hasSearch?<PaginationSearch searchFun={this.searchFun.bind(this)}></PaginationSearch>:null;
     

        return <div className="acs-turningframe">
                    {searchPanel}
                    <div style={{clear:"both"}}></div>
                    {dataFrame}
                    {turningPanel}
                </div>
    }
}
