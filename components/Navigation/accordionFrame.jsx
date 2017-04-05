export default class AccordionFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.accordionData.isSearch
        }
    }

    handleShow() {
        if (!this.state.active) {
            this.setState({active: true},function () {
              if(this.props.hasInfoPanel)  {
                  this.props.informationEvent(this.props.accordionData, true);
                }
            });
        }
        else {
             this.setState({ active: false },function(){
                if(this.props.hasInfoPanel) {
                    this.props.informationEvent(null, false)
                };
            });
        }
    }

    render() {
        let {accordionData,itemHeight,informationEvent,hasInfoPanel,isFirst} = this.props;
        let firstColor="#f58220",secondColor="#f2f4f6",whiteColor ="#fff",blackColor = "#333";
        let titleBgcolor = isFirst?secondColor:whiteColor,fontcolor = isFirst?blackColor:firstColor,borderColor = isFirst?"none":"1px solid #f58220";
        let contentHeight =itemHeight==='auto'?itemHeight: accordionData.Items.length * itemHeight +"px";
        let divisionIcon = '';
        if(isFirst){
             divisionIcon = accordionData.Items.length===0?'':(this.state.active?"acs-accordionitem-expandiconw":"acs-accordionitem-retracticonw");
        }
        else{
            divisionIcon = accordionData.Items.length===0?'':(this.state.active?"acs-accordionitem-expandicong":"acs-accordionitem-retracticong");
        }
        return (
            <div className="acs-accordion-item">
                <div className={"acs-accordionitem-head" } onClick={this.handleShow.bind(this)} 
                style={{"backgroundColor":titleBgcolor,"borderBottom":borderColor}}>
                    <span className="acs-divisionhead-title" style={{color:fontcolor}}>{this.props.accordionData.Title}</span>
                    <span className={divisionIcon}></span>
                </div>
                <div className="acs-accordionitem-content" style={{ height: this.state.active ? contentHeight : "0" }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
