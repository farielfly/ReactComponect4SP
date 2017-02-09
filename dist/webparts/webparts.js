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
                { className: "acs-webpartframe", style: { "borderTop": hasTopLine ? "3px solid #f57d30" : "none" } },
                React.createElement(
                    "a",
                    { className: "acs-webpartframe-header", href: link },
                    React.createElement("span", { className: "acs-header-icon" }),
                    React.createElement(
                        "span",
                        { className: "acs-header-title" },
                        title,
                        " "
                    ),
                    React.createElement(
                        "span",
                        { className: "acs-header-more" },
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbarTitleBtn = require("./navbarTitleBtn.jsx");

var _navbarTitleBtn2 = _interopRequireDefault(_navbarTitleBtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarItem = function (_React$Component) {
    _inherits(NavbarItem, _React$Component);

    function NavbarItem(props) {
        _classCallCheck(this, NavbarItem);

        var _this = _possibleConstructorReturn(this, (NavbarItem.__proto__ || Object.getPrototypeOf(NavbarItem)).call(this, props));

        _this.state = {
            open: false,
            sopen: false
        };
        return _this;
    }

    _createClass(NavbarItem, [{
        key: "menushow",
        value: function menushow(isSecond) {
            if (!isSecond) {
                this.setState({
                    open: true
                });
            } else {
                this.setState({
                    sopen: true
                });
            }
        }
    }, {
        key: "menuhidden",
        value: function menuhidden(isSecond) {
            if (!isSecond) {
                this.setState({
                    open: false
                });
            } else {
                this.setState({
                    sopen: false
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var secondMenuC = React.createElement(
                "ul",
                { onMouseOver: this.menushow.bind(this, false), onMouseOut: this.menuhidden.bind(this, false), className: "acs-navbaritem-second acs-navbaritem-secondO", style: { display: this.state.open ? "flex" : "none", top: this.state.open ? "65px" : "60px", "flexDirection": "row" } },
                React.createElement(
                    "div",
                    { style: { "flexDirection": "column" } },
                    this.props.menuData.arr.map(function (els, index) {
                        if (index < 8) {
                            return React.createElement(
                                "div",
                                { className: "acs-itemlink", key: index },
                                React.createElement("span", { className: "acs-itemlink-icon" }),
                                els.name
                            );
                        }
                    })
                ),
                React.createElement(
                    "div",
                    { style: { "flexDirection": "column" } },
                    this.props.menuData.arr.map(function (els, index) {
                        if (index > 8) {
                            return React.createElement(
                                "div",
                                { className: "acs-itemlink", key: index },
                                React.createElement("span", { className: "acs-itemlink-icon" }),
                                els.name
                            );
                        }
                    })
                )
            );

            var secondMenu = React.createElement(
                "ul",
                { onMouseOver: this.menushow.bind(this, false), onMouseOut: this.menuhidden.bind(this, false), className: "acs-navbaritem-second", style: { display: this.state.open ? "block" : "none", top: this.state.open ? "65px" : "60px" } },
                this.props.menuData.arr.map(function (els, index) {
                    if (_typeof(els.arr) === 'object') {
                        if (els.arr.length === 0) {
                            return React.createElement(
                                "div",
                                { className: "acs-secondnav-item", key: index },
                                els.name
                            );
                        } else {
                            return React.createElement(SecondItem, { key: index, menuData: els });
                        }
                    } else {
                        return React.createElement(
                            "div",
                            { className: "acs-itemlink", style: { float: index > 7 ? "right" : "none" }, key: index },
                            React.createElement("span", { className: "acs-itemlink-icon" }),
                            els.name
                        );
                    }
                })
            );
            secondMenu = this.props.hasGrandChild ? secondMenu : secondMenuC;
            secondMenu = this.props.menuData.hasChild ? secondMenu : null;

            return React.createElement(
                "div",
                { className: "acs-navbar-item", onMouseOver: this.menushow.bind(this, false), onMouseOut: this.menuhidden.bind(this, false) },
                React.createElement(_navbarTitleBtn2.default, { classname: "acs-navbaritem-titlebtn", isSecond: false, name: this.props.menuData.name, open: this.state.open, hasChild: this.props.menuData.hasChild }),
                secondMenu
            );
        }
    }]);

    return NavbarItem;
}(React.Component);

exports.default = NavbarItem;

var SecondItem = function (_React$Component2) {
    _inherits(SecondItem, _React$Component2);

    function SecondItem(props) {
        _classCallCheck(this, SecondItem);

        var _this2 = _possibleConstructorReturn(this, (SecondItem.__proto__ || Object.getPrototypeOf(SecondItem)).call(this, props));

        _this2.state = {
            open: false,
            sopen: false
        };
        return _this2;
    }

    _createClass(SecondItem, [{
        key: "menushow",
        value: function menushow(isSecond) {
            if (!isSecond) {
                this.setState({
                    open: true
                });
            } else {
                this.setState({
                    sopen: true
                });
            }
        }
    }, {
        key: "menuhidden",
        value: function menuhidden(isSecond) {
            if (!isSecond) {
                this.setState({
                    open: false
                });
            } else {
                this.setState({
                    sopen: false
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acs-secondnav-item", onMouseOver: this.menushow.bind(this, true), onMouseOut: this.menuhidden.bind(this, true) },
                React.createElement(_navbarTitleBtn2.default, { classname: "", isSecond: true, name: this.props.menuData.name, open: this.state.sopen, hasChild: true }),
                React.createElement(
                    "ul",
                    { onMouseOver: this.menushow.bind(this, true), onMouseOut: this.menuhidden.bind(this, true), className: "acs-thirdnav-itemlist", style: { display: this.state.sopen ? "block" : "none", width: "400px" } },
                    this.props.menuData.arr.map(function (el, index) {
                        return React.createElement(
                            "div",
                            { className: "acs-itemlink", key: index },
                            React.createElement("span", { className: "acs-itemlink-icon" }),
                            el.name
                        );
                    })
                )
            );
        }
    }]);

    return SecondItem;
}(React.Component);

},{"./navbarTitleBtn.jsx":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbarItem = require("./navbarItem.jsx");

var _navbarItem2 = _interopRequireDefault(_navbarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navbarMenuList = function (_React$Component) {
    _inherits(navbarMenuList, _React$Component);

    function navbarMenuList(props) {
        _classCallCheck(this, navbarMenuList);

        return _possibleConstructorReturn(this, (navbarMenuList.__proto__ || Object.getPrototypeOf(navbarMenuList)).call(this, props));
    }

    _createClass(navbarMenuList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acs-navbar" },
                this.props.data.map(function (el, index) {
                    return React.createElement(_navbarItem2.default, { key: index, menuData: el, hasGrandChild: el.hasGrandChild });
                })
            );
        }
    }]);

    return navbarMenuList;
}(React.Component);

exports.default = navbarMenuList;

},{"./navbarItem.jsx":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarTitleBtn = function (_React$Component) {
    _inherits(NavbarTitleBtn, _React$Component);

    function NavbarTitleBtn(props) {
        _classCallCheck(this, NavbarTitleBtn);

        var _this = _possibleConstructorReturn(this, (NavbarTitleBtn.__proto__ || Object.getPrototypeOf(NavbarTitleBtn)).call(this, props));

        _this.state = {
            icon: _this.props.hasChild ? _this.props.isSecond ? "acs-titlebtn-right" : "acs-titlebtn-down" : ""
        };
        return _this;
    }

    _createClass(NavbarTitleBtn, [{
        key: "render",
        value: function render() {
            var borderShow = this.props.open && !this.props.isSecond;
            var heightChange = this.props.classname === '' ? "20px" : "60px";
            var icon = this.props.hasChild ? this.props.open ? this.props.isSecond ? "acs-titlebtn-rightw" : "acs-titlebtn-up" : this.props.isSecond ? "acs-titlebtn-right" : "acs-titlebtn-down" : "";
            var fontColor = this.props.hasChild ? this.props.open ? this.props.isSecond ? "#fff" : "#fb4f14" : "#000" : "#000";
            return React.createElement(
                "div",
                { className: this.props.classname, style: { "borderTop": borderShow ? "1px solid #fb4f14" : "none",
                        "borderLeft": borderShow ? "1px solid #fb4f14" : "none",
                        "borderRight": borderShow ? "1px solid #fb4f14" : "none",
                        height: borderShow ? "65px" : heightChange } },
                React.createElement(
                    "span",
                    { className: "acs-titlebtn-span", style: { color: fontColor } },
                    this.props.name,
                    React.createElement("span", { className: icon })
                )
            );
        }
    }]);

    return NavbarTitleBtn;
}(React.Component);

exports.default = NavbarTitleBtn;

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _event = require('../widget/event.jsx');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);


var Events = React.createClass({
    displayName: 'Events',

    getInitialState: function getInitialState() {
        return { NewInformation: this.props.NewInformation };
    },
    render: function render() {
        var Events = this.state.NewInformation.map(function (d, key) {
            return React.createElement(_event2.default, { key: key, title: d.title, month: d.month, day: d.day, href: d.href, time: d.time, location: d.location });
        });
        return React.createElement(
            'div',
            null,
            Events
        );
    }
});
var SliderEvents = React.createClass({
    displayName: 'SliderEvents',

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

        var SliderEvents = this.state.inputDate.map(function (a, key) {
            return React.createElement(
                'li',
                { className: 'acs-slider-pic', style: { width: width } },
                React.createElement(Events, { key: key, NewInformation: a.NewInformation })
            );
        });
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'acs-corporate-events' },
                React.createElement('span', { className: 'acs-eventPic' }),
                React.createElement(
                    'span',
                    { className: 'acs-eventTitle' },
                    'CORPORATE EVENTS'
                ),
                React.createElement(
                    'a',
                    { href: 'https://www.baidu.com/s', className: 'acs-more' },
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
                SliderEvents
            )
        );
    }
});
module.exports = SliderEvents;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../widget/event.jsx":14}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./sliderArrows.jsx":7,"./sliderDots.jsx":8}],10:[function(require,module,exports){
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

},{"./sliderArrows.jsx":7,"./sliderDots.jsx":8,"./sliderFrame.jsx":9}],11:[function(require,module,exports){
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

            var itemCollection = this.props.items.map(function (items, idc) {
                if (typeof items.length === 'number') {
                    var itemNodes = items.map(function (item, idn) {
                        return React.createElement(
                            'a',
                            { key: 'link' + idn, href: item.itemhref, className: 'acs-link-bgcolor' },
                            React.createElement('span', { className: 'acs-linkitem-icon' }),
                            React.createElement(
                                'span',
                                { className: 'acs-linkitem-title' },
                                item.title
                            )
                        );
                    });
                    return React.createElement(
                        'li',
                        { key: 'coll' + idc, style: { width: width } },
                        itemNodes
                    );
                }
            });

            return React.createElement(
                'ul',
                { style: {
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

},{}],12:[function(require,module,exports){
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
                        { key: 'news' + idx, style: { height: height } },
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
},{}],13:[function(require,module,exports){
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

},{"../common/titleDescriptionPanel.jsx":2}],14:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);


var Event = React.createClass({
    displayName: 'Event',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'acs-evnet-container' },
            React.createElement(
                'div',
                { className: 'acs-event-timePic' },
                React.createElement(
                    'div',
                    { className: 'acs-monthAndDate' },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            null,
                            this.props.month
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'acs-date' },
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
                { className: 'acs-timeDes' },
                React.createElement(
                    'div',
                    { className: 'acs-timeDes-title' },
                    React.createElement(
                        'a',
                        { className: 'acs-title', href: this.props.href },
                        this.props.title
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'acs-timeDes-time' },
                    React.createElement('div', { className: 'acs-pic-clock' }),
                    React.createElement(
                        'span',
                        { className: 'acs-event-time' },
                        this.props.time
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'acs-timeDes-location' },
                    React.createElement('div', { className: 'acs-pic-location' }),
                    React.createElement(
                        'span',
                        { className: 'acs-event-location' },
                        this.props.location
                    )
                )
            )
        );
    }
});
module.exports = Event;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _navbarMenu = require('../../components/navigation/navbarMenu.jsx');

var _navbarMenu2 = _interopRequireDefault(_navbarMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavigationRender(config) {
    var param = {};
    var data = [{
        name: "Home", itemHref: "", arr: [], hasChild: false, hasGrandChild: false
    }, {
        name: "Division", itemHref: "", hasChild: true, hasGrandChild: true,
        arr: [{
            name: "Care Integration Division", itemHref: "",
            arr: [{ name: "Assessment & Co-ordination Services Devt", itemHref: "" }, { name: "Care Innovations & Integration Devt", itemHref: "" }, { name: "Palliative Care Services Development", itemHref: "" }]
        }, {
            name: "Care Transition Division", itemHref: "",
            arr: [{ name: "ACTION & Ops Support", itemHref: "" }, { name: "Care Transition Office", itemHref: "" }, { name: "CCMS & Comm CAT", itemHref: "" }, { name: "Helpdesk Infosystem and Projects (HIP)", itemHref: "" }, { name: "Referral Management Teams", itemHref: "" }]
        }, {
            name: "CEO Office", itemHref: "", arr: []
        }, {
            name: "Community Mental Health Division", itemHref: "",
            arr: [{ name: "Capability Building & Sector Development", itemHref: "" }, { name: "Community Engagement & Development", itemHref: "" }, { name: "Community Support", itemHref: "" }, { name: "Resource Planning", itemHref: "" }, { name: "Service Implementation & Development", itemHref: "" }]
        }, {
            name: "Corporate Services & Strategy Division", itemHref: "",
            arr: [{ name: "Corporate & Marketing Comm", itemHref: "" }, { name: "Corporate Development", itemHref: "" }, { name: "Finance", itemHref: "" }, { name: "Human Resource", itemHref: "" }, { name: "Office Administration", itemHref: "" }]
        }, {
            name: "Grants Management Office", itemHref: "",
            arr: [{ name: "Grant Policy & Management", itemHref: "" }, { name: "Resource Management", itemHref: "" }]
        }, {
            name: "Home & Primary Care Division", itemHref: "",
            arr: [{ name: "Home & Community Care", itemHref: "" }, { name: "Primary Care Development", itemHref: "" }]
        }, {
            name: "ILTC IT Enablement Office", itemHref: "",
            arr: [{ name: "ILTC IT Development", itemHref: "" }]
        }]
    }, {
        name: "APPLICATION", itemHref: "", hasChild: true, hasGrandChild: false,
        arr: [{ name: "FAQ", itemHref: "" }, { name: "AIC library", itemHref: "" }, { name: "PRM Conversations", itemHref: "" }, { name: "iHR", itemHref: "" }, { name: "LMS", itemHref: "" }, { name: "PRM", itemHref: "" }, { name: "Integrated Referral Management System (IRMS)", itemHref: "" }, { name: "eForms", itemHref: "" }, { name: "I-innovate", itemHref: "" }, { name: "Webmail", itemHref: "" }, { name: "Grants Management System (GMS)", itemHref: "" }, { name: "Budget and Reporting System (BARS)", itemHref: "" }]
    }, {
        name: "CROSS-DIVISIONS", itemHref: "", hasChild: false, hasGrandChild: false, arr: []
    }, {
        name: "ABOUT AIC", itemHref: "", hasChild: true, hasGrandChild: false,
        arr: [{ name: "Org Structure", itemHref: "" }, { name: "Staff Directory", itemHref: "" }, { name: "Policies", itemHref: "" }, { name: "SMM", itemHref: "" }]
    }];

    function loadData() {
        $.ajax({
            type: "post",
            url: config.url,
            data: {},
            datatype: "xml",
            async: false,
            success: function success(data) {
                data = data;
            },
            error: function error(data) {}
        });
    }

    if (config && !config.debug) {
        loadData();
    }
    if (document.getElementById('navigation')) {
        (0, _reactDom.render)(React.createElement(_navbarMenu2.default, { data: data }), document.getElementById('navigation'));
    }
}

global.NavigationRender = NavigationRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/navigation/navbarMenu.jsx":4}],16:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _sliderLinks = require('../../components/slider/sliderLinks.jsx');

var _sliderLinks2 = _interopRequireDefault(_sliderLinks);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linksRender(config) {
    var LINK_DATA = [];
    var param = {};

    if (config && !config.debug) {
        loadData();
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
    } else {
        LINK_DATA = [[{ 'itemhref': 'www.baidu.com', 'title': 'LMS' }, { 'itemhref': 'www.baidu.com', 'title': 'PRM' }, { 'itemhref': 'www.baidu.com', 'title': 'IRMS' }, { 'itemhref': 'www.baidu.com', 'title': 'eForms' }, { 'itemhref': 'www.baidu.com', 'title': 'I-innovate' }, { 'itemhref': 'www.baidu.com', 'title': 'Webmail' }, { 'itemhref': 'www.baidu.com', 'title': 'App' }, { 'itemhref': 'www.baidu.com', 'title': 'App' }, { 'itemhref': 'www.baidu.com', 'title': 'App' }], [{ 'itemhref': 'www.baidu.com', 'title': 'LMS' }, { 'itemhref': 'www.baidu.com', 'title': 'PRM' }, { 'itemhref': 'www.baidu.com', 'title': 'IRMS' }, { 'itemhref': 'www.baidu.com', 'title': 'eForms' }, { 'itemhref': 'www.baidu.com', 'title': 'I-innovate' }, { 'itemhref': 'www.baidu.com', 'title': 'Webmail' }, { 'itemhref': 'www.baidu.com', 'title': 'App' }, { 'itemhref': 'www.baidu.com', 'title': 'App' }, { 'itemhref': 'www.baidu.com', 'title': 'App' }], [{ 'itemhref': 'www.baidu.com', 'title': 'LMS' }]];

        param = {
            items: [],
            speed: 1,
            delay: 2,
            pause: true,
            autoplay: false,
            dots: true,
            arrows: true,
            url: ''
        };
    }

    function loadData() {
        $.ajax({
            type: "post",
            url: config.url,
            data: {},
            datatype: "xml",
            async: false,
            success: function success(data) {
                LINK_DATA = data;
            },
            error: function error(data) {}
        });
    }

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
                _sliderFrameArrowOnBottom2.default,
                {
                    itemCount: LINK_DATA.length,
                    speed: param.speed,
                    delay: param.delay,
                    pause: param.pause,
                    autoplay: param.deautoplaylay,
                    dots: param.dots,
                    arrows: param.arrows
                },
                React.createElement(_sliderLinks2.default, { items: LINK_DATA })
            )
        ), document.getElementById('acclinks'));
    }
}

global.linksRender = linksRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":1,"../../components/slider/sliderFrameArrowOnBottom.jsx":10,"../../components/slider/sliderLinks.jsx":11}],17:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

var _sliderNews = require('../../components/slider/sliderNews.jsx');

var _sliderNews2 = _interopRequireDefault(_sliderNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newsRender(config) {
  var data = [{ 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image2.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image3.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }];

  var maxCount = 3;
  var itemNodes = [];
  var param = {};

  function loadDate() {
    $.ajax({
      type: "post",
      url: config.url,
      data: {},
      datatype: "xml",
      async: false,
      success: function success(data) {
        data = data;
      },
      error: function error(data) {}
    });
  }

  if (config && !config.debug) {
    loadData();
    param.speed = config.speed ? config.speed : 1;
    param.delay = config.delay ? config.delay : 1;
    param.pause = config.pause ? config.pause : true;
    param.autoplay = config.autoplay ? config.autoplay : false;
    param.dots = config.dots ? config.dots : true;
    param.arrows = config.arrows ? config.arrows : true;
  } else {
    param.url = '';
    param.speed = 1;
    param.delay = 1;
    param.pause = true;
    param.autoplay = false;
    param.dots = true;
    param.arrows = true;
  }

  for (var i = 0, len = data.length; i < len; i += maxCount) {
    itemNodes.push(React.createElement(_sliderNews2.default, { children: data.slice(i, i + maxCount), count: Math.ceil(data.length / maxCount), idx: i }));
  }

  if (document.getElementById('news')) {
    (0, _reactDom.render)(React.createElement(
      _webPartFrame2.default,
      {
        title: "NEWS & ANNOUNCEMENTS",
        hasMore: true,
        link: "wwww.baidu.com",
        hasTopLine: true
      },
      React.createElement(
        _sliderFrameArrowOnBottom2.default,
        {
          itemCount: itemNodes.length,
          speed: param.speed,
          delay: param.delay,
          pause: param.pause,
          autoplay: param.autoplay,
          dots: param.dots,
          arrows: param.arrows
        },
        React.createElement(_sliderNews2.default, { items: itemNodes, maxCount: maxCount })
      )
    ), document.getElementById('news'));
  }
}

global.newsRender = newsRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":1,"../../components/slider/sliderFrameArrowOnBottom.jsx":10,"../../components/slider/sliderNews.jsx":12}],18:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrame = require('../../components/slider/sliderFrame.jsx');

var _sliderFrame2 = _interopRequireDefault(_sliderFrame);

var _sliderPics = require('../../components/slider/sliderPics.jsx');

var _sliderPics2 = _interopRequireDefault(_sliderPics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sliderRender(config) {

  var IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' }, { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' }, { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

  var param = {};

  function loadDate() {
    $.ajax({
      type: "post",
      url: config.url,
      data: {},
      datatype: "xml",
      async: false,
      success: function success(data) {
        IMAGE_DATA = data;
      },
      error: function error(data) {}
    });
  }

  if (config && !config.debug) {
    loadData();
    param.speed = config.speed ? config.speed : 1;
    param.delay = config.delay ? config.delay : 1;
    param.pause = config.pause ? config.pause : true;
    param.autoplay = config.autoplay ? config.autoplay : false;
    param.dots = config.dots ? config.dots : true;
    param.arrows = config.arrows ? config.arrows : true;
  } else {
    param.url = '';
    param.speed = 1;
    param.delay = 1;
    param.pause = true;
    param.autoplay = false;
    param.dots = true;
    param.arrows = true;
  }

  if (document.getElementById('slider')) {
    (0, _reactDom.render)(React.createElement(
      _sliderFrame2.default,
      {
        itemCount: IMAGE_DATA.length,
        speed: param.speed,
        delay: param.delay,
        pause: param.pause,
        autoplay: param.autoplay,
        dots: param.dots,
        arrows: param.arrows
      },
      React.createElement(_sliderPics2.default, { items: IMAGE_DATA })
    ), document.getElementById('slider'));
  }
}

global.sliderRender = sliderRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/slider/sliderFrame.jsx":9,"../../components/slider/sliderPics.jsx":13}],19:[function(require,module,exports){
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
},{"../../components/slider/slideEvents.jsx":6,"../../components/slider/sliderFrameArrowOnBottom.jsx":10}]},{},[16,18,15,17,19])(19)
});