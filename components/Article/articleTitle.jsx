export default class ArticleTitle extends React.Component {
    constructor(props) {
        super(props);
    }
  
    handleResize() {  
        if(window.document.body.offsetWidth <768){
            this.refs.articleframe.style.width = "100%";
        }
        else{
            this.refs.articleframe.style.width = this.props.width+"%";
        }
    } 
    
    componentDidMount() {  
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize();
    }  
    
    componentWillUnmount() {  
        window.removeEventListener('resize', this.handleResize.bind(this));  
    } 

    openCollection(url){
        window.open(url);
    }

    render() {
        let {hasTitle, title, iconPath, link,width,partUrl} = this.props;
        let lineHead = !hasTitle? null:(<div className={"acs-articleframe-header"} onClick={this.openCollection.bind(this,partUrl)}> 
                                            <div className={"acs-articleframe-header-icon"}></div>
                                            <div className={"acs-articleframe-header-title"}>{title}</div>
                                        </div>);
        return (
            <div ref="articleframe" className={"acs-articleframe"} style={{width:width+"%"}} >
                <div>
                {lineHead}
                {this.props.children}
                </div>
            </div>
        );
    }
}
