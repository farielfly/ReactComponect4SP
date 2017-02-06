(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MyLibrary = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WPFrame = function (_React$Component) {
    _inherits(WPFrame, _React$Component);

    function WPFrame(props) {
        _classCallCheck(this, WPFrame);

        return _possibleConstructorReturn(this, (WPFrame.__proto__ || Object.getPrototypeOf(WPFrame)).call(this, props));
    }

    _createClass(WPFrame, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                hasMore = _props.hasMore,
                link = _props.link,
                hasTopLine = _props.hasTopLine;


            return React.createElement(
                "div",
                { className: "asc-wpFrame", style: { "border-top": hasTopLine ? "5px solid #f57d30" : "none" } },
                React.createElement(
                    "a",
                    { className: "head-part", href: link },
                    React.createElement("span", { className: "logoicon" }),
                    React.createElement(
                        "span",
                        { className: "headtitle" },
                        title,
                        " "
                    ),
                    React.createElement(
                        "span",
                        { className: "headmore" },
                        hasMore ? "More" : ""
                    )
                ),
                this.props.children
            );
        }
    }]);

    return WPFrame;
}(React.Component);

exports.default = WPFrame;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var titleDescriptionPanel = function (_React$Component) {
    _inherits(titleDescriptionPanel, _React$Component);

    function titleDescriptionPanel(props) {
        _classCallCheck(this, titleDescriptionPanel);

        return _possibleConstructorReturn(this, (titleDescriptionPanel.__proto__ || Object.getPrototypeOf(titleDescriptionPanel)).call(this, props));
    }

    _createClass(titleDescriptionPanel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                description = _props.description,
                itemhref = _props.itemhref;

            return React.createElement(
                'div',
                { className: 'acs-titledescriptionpanel-wrap' },
                React.createElement(
                    'a',
                    { href: itemhref },
                    React.createElement(
                        'span',
                        { className: 'acs-titledescriptionpanel-title' },
                        title
                    ),
                    React.createElement(
                        'span',
                        { className: 'acs-titledescriptionpanel-description' },
                        description
                    )
                )
            );
        }
    }]);

    return titleDescriptionPanel;
}(React.Component);

exports.default = titleDescriptionPanel;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
                    { className: "acs-slider-arrow acs-slider-arrow-left", onClick: this.handleArrowClick.bind(this, -1) },
                    " Pre "
                ),
                React.createElement(
                    "span",
                    { className: "acs-slider-arrow acs-slider-arrow-right", onClick: this.handleArrowClick.bind(this, 1) },
                    " Next "
                )
            );
        }
    }]);

    return SliderArrows;
}(React.Component);

exports.default = SliderArrows;

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

var Slider = function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.state = {
            nowLocal: 0
        };
        return _this;
    }

    _createClass(Slider, [{
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

    return Slider;
}(React.Component);

exports.default = Slider;


Slider.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    itemCount: 0
};
Slider.autoPlayFlag = null;

},{"./sliderArrows.jsx":4,"./sliderDots.jsx":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderLinks = function (_React$Component) {
    _inherits(SliderLinks, _React$Component);

    function SliderLinks(props) {
        _classCallCheck(this, SliderLinks);

        return _possibleConstructorReturn(this, (SliderLinks.__proto__ || Object.getPrototypeOf(SliderLinks)).call(this, props));
    }

    _createClass(SliderLinks, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal;

            var count = items.length;
            var width = 100 / count + '%';

            var itemCollection = this.props.items.map(function (items, idx) {
                if (items.length) {
                    var itemNodes = items.map(function (item, idn) {
                        return React.createElement(
                            'a',
                            { href: item.src, key: 'link' + idn, className: 'item-link' },
                            React.createElement(
                                'span',
                                null,
                                item.title
                            ),
                            React.createElement(
                                'span',
                                null,
                                item.icon
                            )
                        );
                    });
                    return React.createElement(
                        'li',
                        { className: 'slider-link', style: { width: width } },
                        itemNodes
                    );
                }
            });

            return React.createElement(
                'ul',
                { className: 'acs-slider-link', style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "s",
                        width: count * 100 + "%"
                    } },
                itemCollection
            );
        }
    }]);

    return SliderLinks;
}(React.Component);

exports.default = SliderLinks;

},{}],8:[function(require,module,exports){
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

var NewItem = function (_Component) {
    _inherits(NewItem, _Component);

    function NewItem(props) {
        _classCallCheck(this, NewItem);

        return _possibleConstructorReturn(this, (NewItem.__proto__ || Object.getPrototypeOf(NewItem)).call(this, props));
    }

    _createClass(NewItem, [{
        key: 'render',
        value: function render() {
            var height = 100 / this.props.maxCount + '%';

            return _react2.default.createElement(
                'div',
                null,
                this.props.children.map(function (item, idx) {
                    return _react2.default.createElement(
                        'div',
                        { key: idx, style: { height: height } },
                        _react2.default.createElement(
                            'div',
                            { className: 'newContent' },
                            _react2.default.createElement('img', { src: item.src })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'newContent' },
                            _react2.default.createElement(
                                'a',
                                { href: item.href },
                                item.value
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'newContent' },
                            _react2.default.createElement('span', { className: 'icon-clock' }),
                            item.date
                        )
                    );
                })
            );
        }
    }]);

    return NewItem;
}(_react.Component);

var News = function (_Component2) {
    _inherits(News, _Component2);

    function News(props) {
        _classCallCheck(this, News);

        return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));
    }

    _createClass(News, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal,
                maxCount = _props.maxCount;

            var count = items.length;
            var width = 100 / items.length + '%';

            var itemNodes = this.props.items.map(function (item, idx) {
                return _react2.default.createElement(
                    'li',
                    { style: { width: width } },
                    _react2.default.createElement(NewItem, { children: item.props.children, key: idx, maxCount: maxCount })
                );
            });

            return _react2.default.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "s",
                        width: count * 100 + "%"
                    } },
                itemNodes
            );
        }
    }]);

    return News;
}(_react.Component);

exports.default = News;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _titleDescriptionPanel = require('../common/titleDescriptionPanel.jsx');

var _titleDescriptionPanel2 = _interopRequireDefault(_titleDescriptionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderPics = function (_React$Component) {
    _inherits(SliderPics, _React$Component);

    function SliderPics(props) {
        _classCallCheck(this, SliderPics);

        return _possibleConstructorReturn(this, (SliderPics.__proto__ || Object.getPrototypeOf(SliderPics)).call(this, props));
    }

    _createClass(SliderPics, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal;

            var count = items.length;
            var width = 100 / count + '%';

            var itemNodes = this.props.items.map(function (item, idx) {
                var panel = React.createElement('div', null);
                if (item.title || item.description) {
                    panel = React.createElement(_titleDescriptionPanel2.default, { title: item.title, description: item.description, itemhref: item.itemhref });
                }
                return React.createElement(
                    'li',
                    { key: 'pic' + idx, className: 'acs-slider-pic', style: { width: width } },
                    React.createElement(
                        'a',
                        { href: item.href },
                        React.createElement('img', { src: item.src })
                    ),
                    panel
                );
            });

            return React.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "s",
                        width: count * 100 + "%"
                    } },
                itemNodes
            );
        }
    }]);

    return SliderPics;
}(React.Component);

exports.default = SliderPics;

},{"../common/titleDescriptionPanel.jsx":2}],10:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrame = require('../../components/slider/sliderFrame.jsx');

var _sliderFrame2 = _interopRequireDefault(_sliderFrame);

var _sliderNews = require('../../components/slider/sliderNews.jsx');

var _sliderNews2 = _interopRequireDefault(_sliderNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{ 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image2.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image3.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }];

var maxCount = 3;
var itemNodes = [];
for (var i = 0, len = data.length; i < len; i += maxCount) {
  itemNodes.push(_react2.default.createElement(_sliderNews2.default, { children: data.slice(i, i + maxCount), count: Math.ceil(data.length / maxCount), idx: i }));
}

if (document.getElementById('news')) {
  (0, _reactDom.render)(_react2.default.createElement(
    _sliderFrame2.default,
    {
      itemCount: itemNodes.length,
      speed: 1.2,
      delay: 2.1,
      pause: true,
      autoplay: false,
      dots: true,
      arrows: false
    },
    _react2.default.createElement(_sliderNews2.default, { items: itemNodes, maxCount: maxCount })
  ), document.getElementById('news'));
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/slider/sliderFrame.jsx":6,"../../components/slider/sliderNews.jsx":8}],11:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrame = require('../../components/slider/sliderFrame.jsx');

var _sliderFrame2 = _interopRequireDefault(_sliderFrame);

var _sliderPics = require('../../components/slider/sliderPics.jsx');

var _sliderPics2 = _interopRequireDefault(_sliderPics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sliderRender() {

  var IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' }, { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' }, { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

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

  if (document.getElementById('slider')) {
    (0, _reactDom.render)(React.createElement(
      _sliderFrame2.default,
      {
        itemCount: IMAGE_DATA.length,
        speed: 1.2,
        delay: 2.1,
        pause: true,
        autoplay: false,
        dots: true,
        arrows: true
      },
      React.createElement(_sliderPics2.default, { items: IMAGE_DATA })
    ), document.getElementById('slider'));
  }
}

global.sliderRender = sliderRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/slider/sliderFrame.jsx":6,"../../components/slider/sliderPics.jsx":9}],12:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrame = require('../../components/slider/sliderFrame.jsx');

var _sliderFrame2 = _interopRequireDefault(_sliderFrame);

var _sliderLinks = require('../../components/slider/sliderLinks.jsx');

var _sliderLinks2 = _interopRequireDefault(_sliderLinks);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LINK_DATA = [[{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }], [{ 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }, { 'itemhref': 'www.baidu.com', 'icon': 'aaa', 'title': 'aaa description' }]];

if (document.getElementById('acclinks')) {
    (0, _reactDom.render)(React.createElement(
        _webPartFrame2.default,
        {
            title: "Frequently Accessed List",
            hasMore: false,
            link: "wwww.baidu.com",
            hasTopLine: false
        },
        React.createElement(
            _sliderFrame2.default,
            {
                itemCount: LINK_DATA.length,
                speed: 1.2,
                delay: 2.1,
                pause: true,
                autoplay: false,
                dots: true,
                arrows: true
            },
            React.createElement(_sliderLinks2.default, { items: LINK_DATA })
        )
    ), document.getElementById('acclinks'));
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":1,"../../components/slider/sliderFrame.jsx":6,"../../components/slider/sliderLinks.jsx":7}],13:[function(require,module,exports){
'use strict';

var Name = require('../../components/componenta/ca.jsx');
if (document.getElementById('app')) {
  ReactDOM.render(document.getElementById('app'));
}

},{"../../components/componenta/ca.jsx":3}]},{},[12,11,13,10])(13)
});