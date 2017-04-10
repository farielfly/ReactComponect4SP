import PaginationArrows from './paginationArrows.jsx';
import PaginationDataFrame from './paginationDataFrame.jsx';
import PaginationSearch from './paginationSearch.jsx';

export default class PaginationFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPage: 1,
            searchInfo:'',
            currentItems:null
        };
    }

    componentWillMount(){
        this.setState({
            currentItems:this.props.config.data
        })
    }

    turnPage(n){
        var pageCount = this.state.nowPage + n;
        this.setState({nowPage:pageCount});
        this.getData();
    }

    searchFun(cond1,cond2){

    }

    getData(){
        var tempConfig = this.props.config , reactThis = this;
        var filterObj={
            PageNo: this.state.nowPage,
            PageSize: this.props.countInPage
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
        let {hasTitle,frameTitle,config,hasTurning,countInPage,hasSearch} = this.props;
        let currentpage = this.state.nowPage;
        let child =  React.cloneElement(this.props.children, {
            listData: this.state.currentItems,
        });


        let turningPanel = hasTurning?<PaginationArrows turnPage={this.turnPage.bind(this)} currentPage={currentpage} countInPage={config.pageSize} totalItems={config.totalCount}></PaginationArrows>:null;
        let dataFrame = hasTitle?<PaginationDataFrame frameTitle={frameTitle}>{child}</PaginationDataFrame>:<div>{child}</div>;
        let searchPanel = hasSearch?<PaginationSearch searchFun={this.searchFun.bind(this)}></PaginationSearch>:null;
     

        return <div className="acs-turningframe">
                    {searchPanel}
                    <div style={{clear:both}}></div>
                    {dataFrame}
                    {turningPanel}
                </div>
    }
}
