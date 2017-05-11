import $ from 'jquery';

export default class NavbarTitleBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: this.props.hasChild?(this.props.isSecond?"acs-titlebtn-right":"acs-titlebtn-down"):"",
			underLocaiton: {}
        };
    }
	
	componentDidUpdate(prevProps, prevState){
		if(this.props.open != prevProps.open){
			var location = {};
			if(this.props.open){
				location = {top: "0", left: "0px", height: "1px", width: "1px", background: "red", display: "block", position: "absolute"};
				
				var titleContainer = ReactDOM.findDOMNode(this.refs.TitleRef);
				var spanObj = ReactDOM.findDOMNode(this.refs.TitleTextRef);
				var iconObj = ReactDOM.findDOMNode(this.refs.IconRef);
				location.top = $(titleContainer).innerHeight()/2 + $(spanObj).height() / 2;
				location.left = ($(titleContainer).width() - $(spanObj).innerWidth()) / 2;
				location.width = $(spanObj).width() - $(iconObj).outerWidth();
				this.props.hasChild ? location.background = "#ff8800" : location.background = "#fff";
				location.display = "inline-block";
				this.setState({underLocaiton : location});
			}
			else
			{
				location = {display: "none"};
				this.setState({underLocaiton : location});
			}
		}
	}
	
    render(){
        let borderShow = (this.props.open && (!this.props.isSecond) ) && this.props.hasChild;
        let icon = this.props.hasChild?(
            this.props.open?(this.props.isSecond?"acs-titlebtn-rightw":"acs-titlebtn-up"):(this.props.isSecond?"acs-titlebtn-right":"acs-titlebtn-down")):"";
        let fontColor=this.props.hasChild?(
            this.props.open?(this.props.isSecond?" stitle-selectcolor":" ftitle-selectcolor"):""):"";
		
        return(
             <a href = {this.props.ItemHref} ref = "TitleRef" className = {(!this.props.isSecond?"acs-titlebtn-noneborder ":" ") + this.props.classname + fontColor}>
				 <span  ref = "TitleTextRef" className={'acs-titlebtn-span'}>{this.props.name}<span ref = "IconRef" className={icon}></span></span>
				 
				 <div className="_TitleUnderLine" style={this.state.underLocaiton}></div>
             </a>
        );
    }
}
