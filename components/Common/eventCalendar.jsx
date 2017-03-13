import WebPartFrame from '../common/webPartFrame.jsx'

export default class EventCalendar extends React.Component {
    constructor(props) {
        super(props);
    }

    fillZero(value) {
        return value > 9 ? value : ("0" + value);
    }

    formatTime(value) {
        let date = new Date(value);
        let hour = date.getHours();
        return this.fillZero(date.getDate()) + "/" + this.fillZero(date.getMonth() + 1) + "/" + date.getFullYear() + " "
            + this.fillZero(hour % 12) + ":" + this.fillZero(date.getMinutes()) + (hour > 11 ? " PM" : " AM");
    }

    render() {
        let { items, title } = this.props;

        let itemCollection = this.props.items.map((item, idc) => {
            return (
                <div className="acs-eventline-item">
                    <div className="acs-eventline-dot"></div>
                    {idc < this.props.items.length - 1 ? <div className="acs-eventline-line"></div> : null}
                    {/*<div className="acs-eventline-triangle"></div>*/}
                    <div className="acs-eventline-content">
                        <div className="acs-eventline-name">{item.name}</div>
                        <div className="acs-eventline-time">{this.formatTime(item.time)}</div>
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
                <div className="acs-eventcalendar">

                </div>
            </WebPartFrame>
        );
    }
}