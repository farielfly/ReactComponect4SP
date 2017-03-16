export default class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {date,title,href,tiem,location} = this.props;
        return (<div className="acs-evnet-container">
            <div className="acs-event-timePic">
                <span>{date}</span>
            </div>
            <div className="acs-timeDes">
                <div className="acs-timeDes-title">
                    <a className="acs-title" title={title} href={href}>{title}</a>
                </div>
                <div className="acs-timeDes-time">
                    <div className="acs-pic-clock"></div><span className="acs-event-time">{time}</span></div>
                <div className="acs-timeDes-location">
                    <div className="acs-pic-location"></div><span className="acs-event-location">{location}</span>
                </div>
            </div>
        </div>);
    }
}