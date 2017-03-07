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
              if(!this.hasInfoPanel)  {
                  this.props.informationEvent(this.props.accordionData, true);
                }
            });
        }
        else {
             this.setState({ active: false },function(){
                if(!this.hasInfoPanel) {
                    this.props.informationEvent(null, false)
                };
            });
        }
    }

    render() {
        var contentHeight = this.props.accordionData.Children.length * this.props.itemHeight +"px";
        return (
            <div className="acs-accordion-item">
                <div className={"acs-accordionitem-head" + (this.state.active?" acs-accordionitem-visited":"")} onClick={this.handleShow.bind(this)}>
                    <span className={this.state.active?"acs-accordionitem-expandicon":"acs-accordionitem-retracticon"}></span>
                    <span className="acs-divisionhead-title">{this.props.accordionData.Name}</span>
                </div>
                <div className="acs-accordionitem-content" style={{ height: this.state.active ? contentHeight : "0" }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
