import LinkItem from './linkItem.jsx';

export default class AccordionFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.activeStatus
        }
    }


    componentWillReceiveProps(nextProps) {
        if (typeof (nextProps.activeStatus) != "undefined" && this.state.active != nextProps.activeStatus) {
            this.setState({
                active: nextProps.activeStatus
            });
        }
    }

    handleShow() {
        if (!this.state.active) {
            this.setState({
                active: true
            });
            this.props.detailEvent(this.props.accordionData, true, this.props.dataIndex, true);

        }
        else {
            this.setState({
                active: false
            });
            this.props.detailEvent(null, false, this.props.dataIndex, false);
        }
    }

    render() {
        return (

            <div className="acs-division-item">
                <div className="acs-divisionitem-head" onClick={this.handleShow.bind(this)}>
                    <span>Arrow</span>
                    <span className="acs-divisionhead-title">{this.props.accordionData.title}</span>
                </div>
                <div className="acs-divisionitem-content " style={{ height: this.state.active ? "120px" : "0" }}>
                    {this.props.accordionData.children.map((item, index) => {
                        return (
                            <LinkItem itemData={item} key={'link' + index} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
