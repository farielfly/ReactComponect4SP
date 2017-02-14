// const React = require('react');
// const ReactDom = require('react-dom');
import { render } from 'react-dom';
import Event from "../widget/event.jsx";

class Events extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let Events = [];
        this.props.NewInformation.map((item, ind) => {
            Events.push(<Event key={'Event' + ind} title={item.title} month={item.month} day={item.day} href={item.href} time={item.time} location={item.location} />);
        });
        return (
            <div>{Events}</div>
        );
    }
}
export default class SliderEvents extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {inputDate, left, speed, nowLocal } = this.props;
        let count = inputDate.length;
        let width = 100 / count + '%';

        let SliderEvents = [];
        inputDate.map((item, ind) => {
            SliderEvents.push(
                <li key={'Events' + ind} className="acs-slider-pic" style={{ width: width }} >
                    <Events NewInformation={item} />
                </li>
            )
        });

        return (
            //<div>
            //<div className="acs-corporate-events">
            //    <span className="acs-eventPic"></span><span className="acs-eventTitle">CORPORATE EVENTS</span><a href="https://www.baidu.com/s" className="acs-more">MORE</a>
            //</div>
            <ul style={{
                left: -100 * nowLocal + "%",
                transitionDuration: speed + "s",
                width: count * 100 + "%"
            }}>
                {SliderEvents}
            </ul>
            //</div>
        );
    }
}