import DivisionDetail from './divisionDetail.jsx';
import ExpandedView from './accordionFrame.jsx';

export default class Division extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divisionDetail: null,
            showDetail: false
        }
    }


    handleDataClick(object, isShow) {
        this.setState({
            divisionDetail: object,
            showDetail: isShow
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
        return (
            <div >
                <div className="acs-division-leftpart">
                    {this.props.data.map((dataitem, index) => {
                        return (
                            <ExpandedView ref="expandedBtn" accordionData={dataitem} detailEvent={this.handleDataClick.bind(this) }/>
                        )
                    }) }
                </div>
                <div style={{ display: this.state.showDetail ? "block" : "none" }} className="acs-division-rightpart">
                    <DivisionDetail  detail={this.state.divisionDetail}></DivisionDetail>
                </div>
            </div>
        )

    }
}
