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
        let {NewInformation} = this.props.NewInformation;
        let count = NewInformation.length;
        for (let i = 0; i < count; i++) {
            Events[i] = (
                <Event title={NewInformation[i].title} month={NewInformation[i].month} day={NewInformation[i].day} href={NewInformation[i].href} time={NewInformation[i].time} location={NewInformation[i].location} />
            )
        }
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
        for (let i = 0; i < count; i++) {
            SliderEvents[i] = (
                <li className="acs-slider-pic" style={{ width: width }} >
                    <Events NewInformation={inputDate[i]} />
                </li>
            );
        }
        return (
            <div>
                <div className="acs-corporate-events">
                    <span className="acs-eventPic"></span><span className="acs-eventTitle">CORPORATE EVENTS</span><a href="https://www.baidu.com/s" className="acs-more">MORE</a>
                </div>
                <ul style={{
                    left: -100 * nowLocal + "%",
                    transitionDuration: speed + "s",
                    width: count * 100 + "%"
                }}>
                    {SliderEvents}
                </ul>
            </div>
        );
    }
}