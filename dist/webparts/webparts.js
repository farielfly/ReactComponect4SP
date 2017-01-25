(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Name = function (_React$Component) {
  _inherits(Name, _React$Component);

  function Name() {
    _classCallCheck(this, Name);

    return _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).call(this));
  }

  _createClass(Name, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "1122222"
      );
    }
  }]);

  return Name;
}(React.Component);

exports.default = Name;

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _sliderPics = require('./sliderPics/sliderPics.jsx');

var _sliderPics2 = _interopRequireDefault(_sliderPics);

var _sliderDots = require('./sliderDots/sliderDots.jsx');

var _sliderDots2 = _interopRequireDefault(_sliderDots);

var _sliderArrows = require('./sliderArrows/sliderArrows.jsx');

var _sliderArrows2 = _interopRequireDefault(_sliderArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//require('./slider.less');

var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.state = {
            nowLocal: 0
        };
        return _this;
    }

    // 向前向后多少


    _createClass(Slider, [{
        key: 'turn',
        value: function turn(n) {
            var _n = this.state.nowLocal + n;
            if (_n < 0) {
                _n = _n + this.props.items.length;
            }
            if (_n >= this.props.items.length) {
                _n = _n - this.props.items.length;
            }
            this.setState({ nowLocal: _n });
        }

        // 开始自动轮播

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

        // 暂停自动轮播

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
            var count = this.props.items.length;

            var itemNodes = this.props.items.map(function (item, idx) {
                return _react2.default.createElement(_sliderPics2.default, { item: item, count: count, key: 'item' + idx });
            });

            var arrowsNode = _react2.default.createElement(_sliderArrows2.default, { turn: this.turn.bind(this) });

            var dotsNode = _react2.default.createElement(_sliderDots2.default, { turn: this.turn.bind(this), count: count, nowLocal: this.state.nowLocal });

            return _react2.default.createElement(
                'div',
                {
                    className: 'm-slider',
                    onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null },
                _react2.default.createElement(
                    'ul',
                    { style: {
                            left: -100 * this.state.nowLocal + "%",
                            transitionDuration: this.props.speed + "s",
                            width: this.props.items.length * 100 + "%"
                        } },
                    itemNodes
                ),
                this.props.arrows ? arrowsNode : null,
                this.props.dots ? dotsNode : null
            );
        }
    }]);

    return Slider;
}(_react.Component);

exports.default = Slider;


Slider.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: []
};
Slider.autoPlayFlag = null;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./sliderArrows/sliderArrows.jsx":3,"./sliderDots/sliderDots.jsx":4,"./sliderPics/sliderPics.jsx":5}],3:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderArrows = function (_Component) {
    _inherits(SliderArrows, _Component);

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
            return _react2.default.createElement(
                "div",
                { className: "u-slider-arrow-wrap" },
                _react2.default.createElement(
                    "span",
                    { className: "u-slider-arrow u-slider-arrow-left", onClick: this.handleArrowClick.bind(this, -1) },
                    " Pre "
                ),
                _react2.default.createElement(
                    "span",
                    { className: "u-slider-arrow u-slider-arrow-right", onClick: this.handleArrowClick.bind(this, 1) },
                    " Next "
                )
            );
        }
    }]);

    return SliderArrows;
}(_react.Component);

exports.default = SliderArrows;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderDots = function (_Component) {
    _inherits(SliderDots, _Component);

    function SliderDots(props) {
        _classCallCheck(this, SliderDots);

        return _possibleConstructorReturn(this, (SliderDots.__proto__ || Object.getPrototypeOf(SliderDots)).call(this, props));
    }

    _createClass(SliderDots, [{
        key: 'handleDotClick',
        value: function handleDotClick(i) {
            var option = i - this.props.nowLocal;
            this.props.turn(option);
        }
    }, {
        key: 'render',
        value: function render() {
            var dotNodes = [];
            var _props = this.props,
                count = _props.count,
                nowLocal = _props.nowLocal;

            for (var i = 0; i < count; i++) {
                dotNodes[i] = _react2.default.createElement('span', {
                    key: 'dot' + i,
                    className: "slider-dot" + (i === this.props.nowLocal ? " slider-dot-selected" : ""),
                    onClick: this.handleDotClick.bind(this, i) });
            }
            return _react2.default.createElement(
                'div',
                { className: 'u-slider-dots' },
                dotNodes
            );
        }
    }]);

    return SliderDots;
}(_react.Component);

exports.default = SliderDots;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderItem = function (_Component) {
    _inherits(SliderItem, _Component);

    function SliderItem(props) {
        _classCallCheck(this, SliderItem);

        return _possibleConstructorReturn(this, (SliderItem.__proto__ || Object.getPrototypeOf(SliderItem)).call(this, props));
    }

    _createClass(SliderItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                count = _props.count,
                item = _props.item;

            var width = 100 / count + '%';
            return _react2.default.createElement(
                'li',
                { className: 'u-slider-item', style: { width: width } },
                _react2.default.createElement('img', { src: item.src, alt: item.alt })
            );
        }
    }]);

    return SliderItem;
}(_react.Component);

exports.default = SliderItem;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _slider = require('../../components/slider/slider.jsx');

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1' }, { 'src': '../../components/img/image2.jpg', 'alt': 'image2' }, { 'src': '../../components/img/image3.jpg', 'alt': 'image3' }]; //import SliderDots from '../../components/sliderdots/sliderdots.jsx';
//import SliderPics from '../../components/sliderpics/sliderpics.jsx';
//import SliderArrs from '../../components/sliderArrows/sliderArrows.jsx'
//class Slider extends React.Component {
//  constructor() {
//    super();
//    return "Slider";
//  }

//  render() {
//    return (
//      <div id='slider'>
//        <SliderPics></SliderPics>
//        <SliderDots></SliderDots>
//        <SliderArrs></SliderArrs>
//      </div>
//    );
//  }
//}

//if (document.getElementById('slider')) {
//  ReactDOM.render(
//    <Slider />,
//    document.getElementById('slider')
//  );
//}

(0, _reactDom.render)(_react2.default.createElement(_slider2.default, {
  items: IMAGE_DATA,
  speed: 1.2,
  delay: 2.1,
  pause: true,
  autoplay: false,
  dots: true,
  arrows: true
}), document.getElementById('slider'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/slider/slider.jsx":2}],7:[function(require,module,exports){
'use strict';

var _ca = require('../../components/componenta/ca.jsx');

var _ca2 = _interopRequireDefault(_ca);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (document.getElementById('app')) {
    ReactDOM.render(React.createElement(_ca2.default, null), document.getElementById('app'));
}

},{"../../components/componenta/ca.jsx":1}],8:[function(require,module,exports){
'use strict';

var Name = require('../../components/componenta/ca.jsx');

ReactDOM.render(document.getElementById('app'));

},{"../../components/componenta/ca.jsx":1}]},{},[7,6,8]);
