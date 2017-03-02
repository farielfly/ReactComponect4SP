import DivisionDetail from './divisionDetail.jsx';
import ExpandedView from './accordionFrame.jsx';

export default class Division extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divisionDetail: null,
            showDetail: false,
            needInit: true,
            needRefresh : false,
            ChangedItemIndex: -1,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.refresh) {
            this.state.needRefresh = true;
        }
    }


    handleDataClick(object, isShow, changedItemIndex, changedStatus) {
        this.setState({
            divisionDetail: object,
            showDetail: isShow,
            ChangedItemIndex: changedItemIndex,
            ChangedStatus: changedStatus
        });
    }

    componentWillMount() {
        if (true) {
            this.setState({
                showDetail: true
            });
        }
    }

    render() {
        let ExpandedViews = [];

        if (this.state.needInit || this.state.needRefresh) {
            this.props.data.map((dataitem, index) => {
                ExpandedViews.push(<ExpandedView ref="expandedBtn" accordionData={dataitem} activeStatus={dataitem.isOpen} dataIndex={index} detailEvent={this.handleDataClick.bind(this)} />)
            })
        }
        else {
            this.props.data.map((dataitem, index) => {
                if (index == this.state.ChangedItemIndex) {
                    ExpandedViews.push(<ExpandedView ref="expandedBtn" accordionData={dataitem} activeStatus={this.state.ChangedStatus} dataIndex={index} detailEvent={this.handleDataClick.bind(this)} />);
                }
                else {
                    ExpandedViews.push(<ExpandedView ref="expandedBtn" accordionData={dataitem} detailEvent={this.handleDataClick.bind(this)} />);
                }
            })
        }

        let detail = [];
        if (this.state.needInit) {
            detail = "";
        }
        if (this.state.needRefresh) {
            detail = <DivisionDetail detail={this.props.data[0]}></DivisionDetail>;
            this.state.showDetail = true;
        }
        else {
            detail = <DivisionDetail detail={this.state.divisionDetail}></DivisionDetail>;
        }

        this.state.needInit = false;
        this.state.needRefresh = false;
        return (
            <div >
                <div className="acs-division-leftpart">
                    {ExpandedViews}
                </div>
                <div style={{ display: this.state.showDetail ? "block" : "none" }} className="acs-division-rightpart">
                    {detail}
                </div>
            </div>
        )

    }
}
