export default class AccordionFrame extends React.Component {
     constructor(props) {
        super(props);
    }

    handleShow() {
        this.props.expandEvent();
    }

    render() {
        let {accordionData,itemHeight,informationEvent,hasInfoPanel} = this.props;
        let contentHeight =itemHeight==='auto'?itemHeight: accordionData.Items.length * itemHeight +"px";
        let divisionIcon = accordionData.Items.length===0?'acs-accordionitem-nullicon':(this.props.expandActive?"acs-accordionitem-expandicon":"acs-accordionitem-retracticon");
        return (
            <div className="acs-accordion-item">
                <div className={"acs-accordionitem-head" + (this.props.expandActive?" acs-accordionitem-visited":"")} onClick={this.handleShow.bind(this)}>
                    <span className={divisionIcon}></span>
                    <span className="acs-divisionhead-title">{this.props.accordionData.Title}</span>
                </div>
                <div className="acs-accordionitem-content" style={{ height: this.props.expandActive ? contentHeight : "0" }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
