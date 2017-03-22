export default class NavbarTitleBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: this.props.hasChild?(this.props.isSecond?"acs-titlebtn-right":"acs-titlebtn-down"):""
        };
    }

    render(){
        let borderShow = (this.props.open && (!this.props.isSecond) ) && this.props.hasChild;
        let icon = this.props.hasChild?(
            this.props.open?(this.props.isSecond?"acs-titlebtn-rightw":"acs-titlebtn-up"):(this.props.isSecond?"acs-titlebtn-right":"acs-titlebtn-down")):""
            ;
        let fontColor=this.props.hasChild?(
            this.props.open?(this.props.isSecond?" stitle-selectcolor":" ftitle-selectcolor"):""):""
        ;

        return(
             <a href={this.props.ItemHref} className={(!this.props.isSecond?"acs-titlebtn-noneborder ":" ")+this.props.classname + fontColor}>
                     <span className={'acs-titlebtn-span'}>{this.props.name}<span className={icon}></span></span>
             </a>
            )
    }
}
