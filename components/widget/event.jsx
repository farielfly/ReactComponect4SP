export default class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="acs-evnet-container">
            <div className="acs-event-timePic">
                <div className="acs-monthAndDate">
                    <div>
                        <span>{this.props.month}</span>
                    </div>
                    <div className="acs-date">
                        <span>{this.props.day}</span>
                    </div>
                </div>
            </div>
            <div className="acs-timeDes">
                <div className="acs-timeDes-title">
                    <a className="acs-title" href={this.props.href}>{this.props.title}</a>
                </div>
                <div className="acs-timeDes-time">
                    <div className="acs-pic-clock"></div><span className="acs-event-time">{this.props.time}</span></div>
                <div className="acs-timeDes-location">
                    <div className="acs-pic-location"></div><span className="acs-event-location">{this.props.location}</span>
                </div>
            </div>
        </div>);
    }
}