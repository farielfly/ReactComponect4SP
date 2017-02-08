(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MyLibrary = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);


var New = React.createClass({
    displayName: 'New',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'evnet-container' },
            React.createElement(
                'div',
                { className: 'event-timePic' },
                React.createElement(
                    'div',
                    { className: 'monthAndDate' },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { id: 'month' },
                            this.props.month
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'date', className: 'date' },
                        React.createElement(
                            'span',
                            null,
                            this.props.day
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'timeDes' },
                React.createElement(
                    'div',
                    { className: 'timeDes-title' },
                    React.createElement(
                        'a',
                        { className: 'title', href: this.props.href },
                        this.props.title
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'timeDes-time' },
                    React.createElement('div', { className: 'pic-clock' }),
                    React.createElement(
                        'span',
                        { className: 'event-time' },
                        this.props.time
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'timeDes-location' },
                    React.createElement('div', { className: 'pic-location' }),
                    React.createElement(
                        'span',
                        { className: 'event-location' },
                        this.props.location
                    )
                )
            )
        );
    }
});

var News = React.createClass({
    displayName: 'News',

    getInitialState: function getInitialState() {
        return { NewInformation: this.props.NewInformation };
    },
    render: function render() {
        var News = this.state.NewInformation.map(function (d, key) {
            return React.createElement(New, { key: key, title: d.title, month: d.month, day: d.day, href: d.href, time: d.time, location: d.location });
        });
        return React.createElement(
            'div',
            null,
            News
        );
    }
});
var SliderNews = React.createClass({
    displayName: 'SliderNews',

    getInitialState: function getInitialState() {
        return { inputDate: this.props.inputDate };
    },
    render: function render() {
        var _props = this.props,
            inputDate = _props.inputDate,
            left = _props.left,
            speed = _props.speed,
            nowLocal = _props.nowLocal;

        var count = inputDate.length;
        var width = 100 / count + '%';

        var SliderNews = this.state.inputDate.map(function (a, key) {
            return React.createElement(
                'li',
                { className: 'acs-slider-pic', style: { width: width } },
                React.createElement(News, { key: key, NewInformation: a.NewInformation })
            );
        });
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'corporate-events' },
                React.createElement('span', { id: 'eventPic' }),
                React.createElement(
                    'span',
                    { id: 'eventTitle', className: 'eventTitle' },
                    'CORPORATE EVENTS'
                ),
                React.createElement(
                    'a',
                    { href: 'https://www.baidu.com/s', className: 'more' },
                    'MORE'
                )
            ),
            React.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "s",
                        width: count * 100 + "%"
                    } },
                SliderNews
            )
        );
    }
});
module.exports = SliderNews;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderArrows = function (_React$Component) {
    _inherits(SliderArrows, _React$Component);

    function SliderArrows(props) {
        _classCallCheck(this, SliderArrows);

        return _possibleConstructorReturn(this, (SliderArrows.__proto__ || Object.getPrototypeOf(SliderArrows)).call(this, props));
    }

    _createClass(SliderArrows, [{
        key: "handleArrowClick",
        value: function handleArrowClick(option) {
            this.props.turn(option);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acs-slider-arrow-wrap" },
                React.createElement(
                    "span",
                    { className: "acs-slider-arrow-left", onClick: this.handleArrowClick.bind(this, -1) },
                    " "
                ),
                this.props.children ? this.props.children : '',
                React.createElement("span", { className: "acs-slider-arrow-right", onClick: this.handleArrowClick.bind(this, 1) })
            );
        }
    }]);

    return SliderArrows;
}(React.Component);

exports.default = SliderArrows;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderDots = function (_React$Component) {
    _inherits(SliderDots, _React$Component);

    function SliderDots(props) {
        _classCallCheck(this, SliderDots);

        return _possibleConstructorReturn(this, (SliderDots.__proto__ || Object.getPrototypeOf(SliderDots)).call(this, props));
    }

    _createClass(SliderDots, [{
        key: "handleDotClick",
        value: function handleDotClick(i) {
            var option = i - this.props.nowLocal;
            this.props.turn(option);
        }
    }, {
        key: "render",
        value: function render() {
            var dotNodes = [];
            var _props = this.props,
                count = _props.count,
                nowLocal = _props.nowLocal;

            for (var i = 0; i < count; i++) {
                dotNodes[i] = React.createElement("span", {
                    key: 'dot' + i,
                    className: "acs-slider-dot" + (i === this.props.nowLocal ? " acs-slider-dot-selected" : ""),
                    onClick: this.handleDotClick.bind(this, i) });
            }
            return React.createElement(
                "div",
                { className: "acs-slider-dots" },
                dotNodes
            );
        }
    }]);

    return SliderDots;
}(React.Component);

exports.default = SliderDots;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sliderDots = require('./sliderDots.jsx');

var _sliderDots2 = _interopRequireDefault(_sliderDots);

var _sliderArrows = require('./sliderArrows.jsx');

var _sliderArrows2 = _interopRequireDefault(_sliderArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderFrame = function (_React$Component) {
    _inherits(SliderFrame, _React$Component);

    function SliderFrame(props) {
        _classCallCheck(this, SliderFrame);

        var _this = _possibleConstructorReturn(this, (SliderFrame.__proto__ || Object.getPrototypeOf(SliderFrame)).call(this, props));

        _this.state = {
            nowLocal: 0
        };
        return _this;
    }

    _createClass(SliderFrame, [{
        key: 'turn',
        value: function turn(n) {
            var _n = this.state.nowLocal + n;
            if (_n < 0) {
                _n = _n + this.props.itemCount;
            }
            if (_n >= this.props.itemCount) {
                _n = _n - this.props.itemCount;
            }
            this.setState({ nowLocal: _n });
        }
    }, {
        key: 'goPlay',
        value: function goPlay() {
            var _this2 = this;

            if (this.props.autoplay) {
                this.autoPlayFlag = setInterval(function () {
                    _this2.turn(1);
                }, this.props.delay * 1000);
            }
        }
    }, {
        key: 'pausePlay',
        value: function pausePlay() {
            clearInterval(this.autoPlayFlag);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.goPlay();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var arrowsNode = React.createElement(_sliderArrows2.default, { turn: this.turn.bind(this) });
            var dotsNode = React.createElement(_sliderDots2.default, { turn: this.turn.bind(this), count: this.props.itemCount, nowLocal: this.state.nowLocal });
            var children = React.Children.map(this.props.children, function (item, i) {
                return React.cloneElement(item, {
                    left: _this3.props.left,
                    speed: _this3.props.speed,
                    nowLocal: _this3.state.nowLocal
                });
            });

            return React.createElement(
                'div',
                {
                    className: 'acs-sliderframe',
                    onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null },
                children,
                this.props.arrows ? arrowsNode : null,
                this.props.dots ? dotsNode : null
            );
        }
    }]);

    return SliderFrame;
}(React.Component);

exports.default = SliderFrame;


SliderFrame.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    itemCount: 0
};
SliderFrame.autoPlayFlag = null;

},{"./sliderArrows.jsx":2,"./sliderDots.jsx":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sliderDots = require('./sliderDots.jsx');

var _sliderDots2 = _interopRequireDefault(_sliderDots);

var _sliderArrows = require('./sliderArrows.jsx');

var _sliderArrows2 = _interopRequireDefault(_sliderArrows);

var _sliderFrame = require('./sliderFrame.jsx');

var _sliderFrame2 = _interopRequireDefault(_sliderFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderFrameArrowOnBottom = function (_SliderFrame) {
    _inherits(SliderFrameArrowOnBottom, _SliderFrame);

    function SliderFrameArrowOnBottom(props) {
        _classCallCheck(this, SliderFrameArrowOnBottom);

        return _possibleConstructorReturn(this, (SliderFrameArrowOnBottom.__proto__ || Object.getPrototypeOf(SliderFrameArrowOnBottom)).call(this, props));
    }

    _createClass(SliderFrameArrowOnBottom, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var showArrows = this.props.arrows && this.props.itemCount >= 1;
            var showDots = this.props.dots && this.props.itemCount >= 1;
            var dotsNode = React.createElement(_sliderDots2.default, { turn: this.turn.bind(this), count: this.props.itemCount, nowLocal: this.state.nowLocal });

            var arrowsAndDotsNode = '';
            if (showArrows && showDots) {
                arrowsAndDotsNode = React.createElement(
                    _sliderArrows2.default,
                    { turn: this.turn.bind(this) },
                    dotsNode
                );
            } else if (showArrows && !showDots) {
                arrowsAndDotsNode = React.createElement(_sliderArrows2.default, { turn: this.turn.bind(this) });
            } else if (!showArrows && showDots) {
                arrowsAndDotsNode = { dotsNode: dotsNode };
            }

            var children = React.Children.map(this.props.children, function (item, i) {
                return React.cloneElement(item, {
                    left: _this2.props.left,
                    speed: _this2.props.speed,
                    nowLocal: _this2.state.nowLocal
                });
            });

            return React.createElement(
                'div',
                {
                    className: 'acs-sliderframe',
                    onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null },
                children,
                arrowsAndDotsNode
            );
        }
    }]);

    return SliderFrameArrowOnBottom;
}(_sliderFrame2.default);

exports.default = SliderFrameArrowOnBottom;

},{"./sliderArrows.jsx":2,"./sliderDots.jsx":3,"./sliderFrame.jsx":4}],6:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _slideEvents = require('../../components/slider/slideEvents.jsx');

var _slideEvents2 = _interopRequireDefault(_slideEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sliderRender() {
    var NewInformation = [{ title: 'AIC Family day', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }, { title: 'Anniversary Celebration', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }, { title: 'Global Conference on Integrated Care', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }];
    var IMAGE_DATA = [{ NewInformation: NewInformation }, { NewInformation: NewInformation }, { NewInformation: NewInformation }];

    var param = {
        items: [],
        speed: 1,
        delay: 2,
        pause: true,
        autoplay: false,
        dots: true,
        arrows: true,
        url: ''
    };

    param.url = '';
    param.speed = 1;
    param.delay = 1;
    param.pause = true;
    param.autoplay = false;
    param.dots = true;
    param.arrows = true;

    (0, _reactDom.render)(React.createElement(
        _sliderFrameArrowOnBottom2.default,
        {
            itemCount: IMAGE_DATA.length,
            speed: 1.2,
            delay: 2.1,
            pause: true,
            autoplay: false,
            dots: true,
            arrows: true
        },
        React.createElement(_slideEvents2.default, { inputDate: IMAGE_DATA })
    ), document.getElementById('eventSlider'));
}

global.sliderRender = sliderRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/slider/slideEvents.jsx":1,"../../components/slider/sliderFrameArrowOnBottom.jsx":5}]},{},[6])(6)
});