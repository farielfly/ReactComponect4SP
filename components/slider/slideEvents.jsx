const React = require('react');
const ReactDom = require('react-dom');
import { render } from 'react-dom';

var New = React.createClass({
    render: function () {
        return (<div className="evnet-container">
            <div className="event-timePic">
                <div className="monthAndDate">
                    <div>
                        <span id="month">{this.props.month}</span>
                    </div>
                    <div id="date" className="date">
                        <span>{this.props.day}</span>
                    </div>
                </div>
            </div>
            <div className="timeDes">
                <div className="timeDes-title">
                    <a className="title" href={this.props.href}>{this.props.title}</a>
                </div>
                <div className="timeDes-time">
                    <div className="pic-clock"></div><span className="event-time">{this.props.time}</span></div>
                <div className="timeDes-location">
                    <div className="pic-location"></div><span className="event-location">{this.props.location}</span>
                </div>
            </div>
        </div>);
    }
}
);

var News = React.createClass(
    {
        getInitialState: function () {
            return { NewInformation: this.props.NewInformation }
        },
        render: function () {
            var News = this.state.NewInformation.map(function (d, key) {
                return (
                    <New key={key} title={d.title} month={d.month} day={d.day} href={d.href} time={d.time} location={d.location} />
                )
            });
            return (
                <div>{News}</div>
            );

        }
    }
);
var SliderNews = React.createClass(
    {
        getInitialState: function () {
            return { inputDate: this.props.inputDate }
        },
        render: function () {
            let {inputDate, left, speed, nowLocal } = this.props;
            let count = inputDate.length;
            let width = 100 / count + '%';

            var SliderNews = this.state.inputDate.map((a, key) => {
                return (<li className="acs-slider-pic" style={{ width: width }} >
                    <News key={key} NewInformation={a.NewInformation} />
                </li>
                )
            });
            return (
                <div>
                    <div className="corporate-events">
                        <span id="eventPic" ></span><span id="eventTitle" className="eventTitle">CORPORATE EVENTS</span><a href="https://www.baidu.com/s" className="more">MORE</a>
                    </div>
                    <ul style={{
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "s",
                        width: count * 100 + "%"
                    }}>
                        {SliderNews}
                    </ul>
                </div>
            );

        }
    }
)
module.exports = SliderNews;