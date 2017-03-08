import WebPartFrame from '../Comment/webPartFrame.jsx'

export default class EventLine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items, title } = this.props;

        let itemCollection = this.props.items.map((item, idc) => {
            return (
                <div className="acs-eventline-item">
                    <div className="acs-eventline-dot"></div>
                    <div className="acs-eventline-content">
                        <div className="acs-eventline-name">{item.name}</div>
                        <div className="acs-eventline-time">{item.time}</div>
                    </div>
                </div>
            );
        });
        return (
            <WebPartFrame
                title={this.props.title}
                hasMore={false}
                link={""}
                hasTopLine={false}>
                <div className="acs-eventline">
                    {itemCollection}
                </div>
            </WebPartFrame>
        );
    }
}