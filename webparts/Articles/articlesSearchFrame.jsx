export default class ArticlesSearchFrame extends React.Component{
     constructor(props){
        super(props);
        this.state={
            businessArticles:null,
            articlePageCount:2
        }
    }

    componentWillMount(){
        this.setState({
            businessArticles:this.props.config.data
        })
    }

    showMobileSearch(){
      if(this.refs.searchInput.style.display ==='none' ||this.refs.searchInput.style.display ===''){
          this.refs.searchInput.style.display = 'flex';
      } 
      else{
          this.refs.searchInput.style.display = 'none';
      }
    }

    searchArticles(){
        if(this.refs.latest.className.contains('acs-searchpanel-tabbtn')){
            searchUrl + '&type=latest&searchinfo='+this.refs.searchInfo.innerText;
        }
        else{
            searchUrl + '&type=popular&searchinfo='+this.refs.searchInfo.innerText;
        }
        this.loadData(searchUrl);
    }

    tabTitleSearch(condition){
        this.refs.latest.className = 'acs-searchpanel-tabbtn';
        this.refs.popular.className = 'acs-searchpanel-tabbtn';
        if(condition === 'Latest'){
            this.refs.latest.className = 'acs-searchpanel-tabbtn acs-searchpanel-tabselect';
           global.articleType = "Created";
        }
        else{
            this.refs.popular.className = 'acs-searchpanel-tabbtn acs-searchpanel-tabselect';
            global.articleType = "LikesCount";
        }
        this.loadData(true);
    }

    loadMore(){
        var loadmore = this.state.articlePageCount +1;
        this.setState({
            articlePageCount:loadmore
        });
        this.loadData(false);
    }

    loadData(clearData){
        let reactThis = this;
        let tempConfig = this.props.config;
        tempConfig.order.Name = global.articleType;
         let dataConfig={
            condition: tempConfig.condition,
            order: JSON.stringify(tempConfig.order),
            pageNo:clearData?0:this.state.articlePageCount,
            pageSize:clearData?8:4
        }
        $.ajax({
            url: this.props.config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            type: "POST",
            dataType:'json',
            data: JSON.stringify(dataConfig),
            success:function(data){
                var tempData =[];
                if(!clearData){
                    tempData = reactThis.state.businessArticles;
                }
                tempData.push.apply(tempData,data.RetreiveArticlesResult);
                reactThis.setState(
                    {businessArticles:tempData}
                )
            },
            error:function(er){
                console.log(er);
            }
        });
    }

    enterSearch(e) {
        if (!e) {
            e = window.event;
        }
        if ((e.keyCode || e.which) == 13) {
            searchClick(false);
        }
    }

    render(){
        let children = React.Children.map(this.props.children, (item, i) => {
            return React.cloneElement(item, {
                data: this.state.businessArticles,
                articlePageCount:this.state.articlePageCount,
                category:this.props.config.categoryType
            });
        });

        global.articleType = "Created";

        return (<div>
                    <div className="acs-searchpanel">
                        <div  ref="latest" className="acs-searchpanel-tabbtn acs-searchpanel-tabselect" onClick={this.tabTitleSearch.bind(this,'Latest')}>
                            <span>Latest</span>
                            <div></div>
                        </div>
                        <div ref="popular" className="acs-searchpanel-tabbtn" onClick={this.tabTitleSearch.bind(this,'Most Popular')}>
                            <span>Most Popular</span>
                            <div></div>
                        </div>
                        <div ref="searchInput" className="acs-searchpanel-div">
                            <input type="text" ref="searchInfo" onKeyDown={this.enterSearch.bind(this,event)} placeholder="Search business news"/>
                            <span id="searchinput" className="acs-searchicon" onClick={this.searchArticles}  ></span>
                            <span id="clearsearch" className="acs-clearsearchicon" onClick={this.searchArticles}>X</span>
                        </div>
                        <div className="acs-searchpanel-ctrlbtn" onClick={this.showMobileSearch.bind(this)}>
                            <span id="mobile-searchinput" className="acs-searchicon"></span>
                        </div>
                    </div>
                    {children}
                    <div className="acs-articles-loadmore" onClick={this.loadMore.bind(this)}>Load More</div>
                </div>);
    }
}

