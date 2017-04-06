export default class PaginationSearch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            droplistOpen:false
        }
    }

    selectOption(value){
        this.refs.selectInput.value = value;
        this.setState({droplistOpen:false});
        this.props.searchFun(value,this.refs.searchInfo.value);
    }

    searchClick(){
        this.props.searchFun(this.refs.selectInput.value,this.refs.searchInfo.value);
    }

    clearSearchClick(){
        this.props.searchFun(this.refs.selectInput.value,'');
    }

    showList(){
        this.setState({droplistOpen:!this.state.droplistOpen});
    }

    createList(){
        var items = this.props.dropData;
        var reactThis = this;
        var dropList = items.map((item)=>{
            return <div onClick={this.selectOption.bind(reactThis,item.value)}>
                        {item.value}
                    </div>
        })
        return dropList;
    }
   

    render(){
        let {dropdown,searchFun} = this.props;
        let listItems = this.createList();
        return <div>
                    <div className="acs-dropdown">
                        <div className="acs-dropdown-selectedvalue"><input ref="selectInput" /><span onClick={this.showList.bind(this)}>V</span></div>
                        <div className="acs-dropdown-list" style={{height:this.state.droplistOpen?"200px":"0"}}>
                            {listItems}
                        </div>
                    </div>
                    <div ref="searchInput" className="acs-searchpanel-div">
                        <input type="text" ref="searchInfo" onKeyDown={this.enterSearch.bind(this,event)} placeholder="Search business news"/>
                        <span id="searchinput" className="acs-searchicon" onClick={this.searchClick.bind(this)}  ></span>
                        <span id="clearsearch" className="acs-clearsearchicon" onClick={this.clearSearchClick.bind(this)}>X</span>
                    </div>
                </div>
    }

}
