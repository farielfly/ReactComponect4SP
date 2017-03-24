export default class ArticlesSearchFrame extends React.Component{
     constructor(props){
        super(props);
        this.state={
            businessArticles:null,
            loadmore:0
        }
    }

    componentWillMount(){
        this.setState({
            businessArticles:this.props.data
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
        let searchUrl='';
        if(this.refs.latest.className.contains('acs-searchpanel-tabbtn')){
            searchUrl + '&type=latest&searchinfo='+this.refs.searchInfo.innerText;
        }
        else{
            searchUrl + '&type=popular&searchinfo='+this.refs.searchInfo.innerText;
        }
        this.loadData(searchUrl);
    }

    tabTitleSearch(condition){
        let searchUrl='';
        this.refs.latest.className = 'acs-searchpanel-tabbtn';
        this.refs.popular.className = 'acs-searchpanel-tabbtn';
        if(condition === 'Latest'){
            this.refs.latest.className = 'acs-searchpanel-tabbtn acs-searchpanel-tabselect';
            searchUrl + '&type=latest&searchinfo='+this.refs.searchInfo.innerText;
        }
        else{
            this.refs.popular.className = 'acs-searchpanel-tabbtn acs-searchpanel-tabselect';
            searchUrl + '&type=popular&searchinfo='+this.refs.searchInfo.innerText;
        }
        this.loadData(searchUrl);
    }

    loadMore(){
        var loadmore = this.state.loadmore +1;
        this.setState({
            loadmore:loadmore
        })
    }

    loadData(searchUrl){
        $.ajax({
            url: searchUrl,
            type: "GET",
            dataType:'json',
            success:function(data){
                this.setState(
                    {businessArticles:data.articles}
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
                loadmore:this.state.loadmore
            });
        });

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
                        </div>
                    </div>
                    {children}
                    <div className="acs-articles-loadmore" onClick={this.loadMore.bind(this)}>Load More</div>
                </div>);
    }
}

