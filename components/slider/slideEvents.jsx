const React = require('react');
const ReactDom = require('react-dom');
import { render } from 'react-dom';
import Event from "../widget/event.jsx";

var Events = React.createClass(
    {
        getInitialState: function () {
            return { NewInformation: this.props.NewInformation }
        },
        render: function () {
            var Events = this.state.NewInformation.map(function (d, key) {
                return (
                    <Event key={key} title={d.title} month={d.month} day={d.day} href={d.href} time={d.time} location={d.location} />
                )
            });
            return (
                <div>{Events}</div>
            );

        }
    }
);
var SliderEvents = React.createClass(
    {
        getInitialState: function () {
            return { inputDate: this.props.inputDate }
        },
        render: function () {
            let {inputDate, left, speed, nowLocal } = this.props;
            let count = inputDate.length;
            let width = 100 / count + '%';

            var SliderEvents = this.state.inputDate.map((a, key) => {
                return (<li className="acs-slider-pic" style={{ width: width }} >
                    <Events key={key} NewInformation={a.NewInformation} />
                </li>
                )
            });
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
)
module.exports = SliderEvents;