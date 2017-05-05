import PaginationArrows from './paginationArrows.jsx';
import PaginationDataFrame from './paginationDataFrame.jsx';
import PaginationSearch from './paginationSearch.jsx';
import LetterSearchFrame from './letterSearchFrame.jsx';
import DropDownList from './../Common/dropDownList.jsx';
import ButtonCell from './../table/ajaxButtonCell.jsx';

export default class PaginationFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPage: 1,
            searchInfo:'',
            currentItems:null,
            tempTotalItems:null,
            tempPageSize:this.props.config.pageSize,
            itemsToDo:''
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
                        if(item[header[i].Key].toString().indexOf(cond2) !== -1){
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
                        if(item[header[i].Key].toString().indexOf(cond2) !== -1){
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
                if(item.Name.toUpperCase().indexOf(letter) === 0){
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

    getToDoItems(items){
        this.state.itemsToDo = items;
    }

    createOperationBtn(buttons){
      return  buttons.map((item,index)=>{
            return <ButtonCell itemData={item} tableOperation={this.tableOperation.bind(this)} key={"btn"+index}></ButtonCell>
        }) ;
    }

    tableOperation(url,parameter){
        let data = this.state.itemsToDo;
        let finalUrl = url+"?"+parameter+"="+data;
        if(data !==''){
             $.ajax({
                type: "GET",
                url: finalUrl,
                headers: {
                    "Accept": "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                },
                dataType: "json",
                cache:false,
                async: false,
                success: function () {
                    window.location.reload();
                },
                error: function (error) {
                    window.location.reload();
                    console.log(error);
                }
            });
        }
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
        let {config,hasTitle,hasTurning,hasSearch,hasLetterSearch,canChangeSize,canOperationTable} = this.props;
        let currentpage = this.state.nowPage;
        let child =  React.cloneElement(this.props.children, {
            listData: this.state.currentItems,
            selectItems:this.getToDoItems.bind(this)
        });

        global.allItems =  this.props.config.data;

        let totalcount = this.props.searchInBack?this.props.config.totalCount:this.state.tempTotalItems.length;
        child = hasLetterSearch?<LetterSearchFrame letterSearch={this.letterFun.bind(this)}>{child} </LetterSearchFrame>:child;

        let turningPanel = hasTurning?<PaginationArrows turnPage={this.turnPage.bind(this)} currentPage={currentpage} countInPage={this.state.tempPageSize} totalCount={totalcount}></PaginationArrows>:null;
        let dataFrame = hasTitle?<PaginationDataFrame frameTitle={config.frameTitle}>{child}</PaginationDataFrame>:<div>{child}</div>;
        let searchPanel = hasSearch.hasSearch?<PaginationSearch hasDrop={hasSearch.hasDrop} searchFun={this.searchFun.bind(this)}></PaginationSearch>:null;
        let tableOperation = <div className="acs-turningframe-operation">
                                {canChangeSize? <div><span>Show</span><DropDownList selectAction={this.changePageSize.bind(this)} listData={config.dropList} defaultValue={""}></DropDownList><span>entries</span></div>:null}
                                {canOperationTable?<div>{this.createOperationBtn(config.buttons)}</div>:null}
                             </div>   ;
        
        //let pageSizeSelect = canChangeSize?<div style={{float:"left"}}>Show <DropDownList selectAction={this.changePageSize.bind(this)} listData={config.dropList} defaultValue={""}></DropDownList> entries</div>:null;

        return <div className="acs-turningframe">
                    {tableOperation}
                    {searchPanel}
                    <div style={{clear:"both"}}></div>
                    {dataFrame}
                    {turningPanel}
                </div>
    }
}
