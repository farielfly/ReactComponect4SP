export default class PanelFrame extends React.Component{
    constructor(props){
        super(props);
    }

    gotoDetails(url){
        window.location.href = url;
    }

    render(){
        let {title, msgCount, iconPosition, url} = this.props;

        return(
            <div className="acs-panelframe" onClick={this.gotoDetails.bind(this,this.props.url)}>
                <div className="acs-panelframe-title">
                    <b>{this.props.title}</b>
                    {this.props.msgCount>0?<div className="acs-panelframe-alert">{this.props.msgCount}</div>:null}
                </div>
                <div className="acs-panelframe-ico" style={{backgroundPosition:this.props.iconPosition}}></div>
            </div>
        );
    }
}