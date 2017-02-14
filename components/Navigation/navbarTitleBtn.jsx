export default class NavbarTitleBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: this.props.hasChild?(this.props.isSecond?"acs-titlebtn-right":"acs-titlebtn-down"):""
        };
    }

    render(){
        let borderShow = (this.props.open && (!this.props.isSecond) ) && this.props.hasChild;
        let heightChange = this.props.classname === ''?"20px":"60px";
        let icon = this.props.hasChild?(
            this.props.open?(this.props.isSecond?"acs-titlebtn-rightw":"acs-titlebtn-up"):(this.props.isSecond?"acs-titlebtn-right":"acs-titlebtn-down")):""
            ;
        let fontColor=this.props.hasChild?(
            this.props.open?(this.props.isSecond?"#fff":"#fb4f14"):"#000"):"#000"
        ;
        let isHome = this.props.name.toString().toUpperCase() ==="HOME";
        return(
             <a href={this.props.ItemHref} className={this.props.classname + (borderShow?" acs-titlebtn-boxshadow":"") } style={{"borderTop":borderShow? "1px solid #fb4f14" : "none",
                 "borderLeft":borderShow ? "1px solid #fb4f14" : "none",
                 "borderRight":borderShow ? "1px solid #fb4f14" : "none",
                 height:borderShow?"65px":heightChange}
             }>
                     <span className="acs-titlebtn-span" style={{color:fontColor}}>{this.props.name}<span className={icon}></span></span>
                     <div className="acs-titlebtn-bottomline" style={{display:isHome?"block":"none"}}></div>
             </a>
            )
    }
}
