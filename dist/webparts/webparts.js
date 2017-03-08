(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MyLibrary = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleFrame = function (_React$Component) {
    _inherits(ArticleFrame, _React$Component);

    function ArticleFrame(props) {
        _classCallCheck(this, ArticleFrame);

        return _possibleConstructorReturn(this, (ArticleFrame.__proto__ || Object.getPrototypeOf(ArticleFrame)).call(this, props));
    }

    _createClass(ArticleFrame, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                iconPath = _props.iconPath,
                link = _props.link,
                picturePath = _props.picturePath,
                headline = _props.headline,
                intro = _props.intro;


            return React.createElement(
                "div",
                { className: "acs-articleframe" },
                React.createElement(
                    "div",
                    { className: "acs-articleframe-header" },
                    React.createElement("div", { className: "acs-articleframe-header-icon" }),
                    React.createElement(
                        "div",
                        { className: "acs-articleframe-header-title" },
                        title
                    )
                ),
                React.createElement(
                    "div",
                    { className: "acs-articleframe-picture" },
                    React.createElement("img", { src: picturePath })
                ),
                React.createElement(
                    "div",
                    { className: "acs-articleframe-headline" },
                    headline
                ),
                React.createElement(
                    "div",
                    { className: "acs-articleframe-intro" },
                    intro
                )
            );
        }
    }]);

    return ArticleFrame;
}(React.Component);

exports.default = ArticleFrame;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListFrame = function (_React$Component) {
    _inherits(ListFrame, _React$Component);

    function ListFrame(props) {
        _classCallCheck(this, ListFrame);

        return _possibleConstructorReturn(this, (ListFrame.__proto__ || Object.getPrototypeOf(ListFrame)).call(this, props));
    }

    _createClass(ListFrame, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                hasPager = _props.hasPager;


            return React.createElement(
                "div",
                { className: "acs-listframe" },
                React.createElement(
                    "div",
                    { className: "acs-listframe-title" },
                    React.createElement(
                        "span",
                        null,
                        this.props.title
                    )
                ),
                React.createElement(
                    "div",
                    { className: "acs-listframe-content" },
                    this.props.children
                )
            );
        }
    }]);

    return ListFrame;
}(React.Component);

exports.default = ListFrame;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelFrame = function (_React$Component) {
    _inherits(PanelFrame, _React$Component);

    function PanelFrame(props) {
        _classCallCheck(this, PanelFrame);

        return _possibleConstructorReturn(this, (PanelFrame.__proto__ || Object.getPrototypeOf(PanelFrame)).call(this, props));
    }

    _createClass(PanelFrame, [{
        key: "gotoDetails",
        value: function gotoDetails(url) {
            window.location.href = url;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                msgCount = _props.msgCount,
                iconClass = _props.iconClass,
                url = _props.url;


            return React.createElement(
                "div",
                { className: "acs-panelframe", onClick: this.gotoDetails.bind(this, this.props.url) },
                React.createElement(
                    "div",
                    { className: "acs-panelframe-title" },
                    React.createElement(
                        "b",
                        null,
                        this.props.title
                    ),
                    this.props.msgCount > 0 ? React.createElement(
                        "div",
                        { className: "acs-panelframe-alert" },
                        this.props.msgCount
                    ) : null
                ),
                React.createElement("div", { className: "acs-panelframe-ico" })
            );
        }
    }]);

    return PanelFrame;
}(React.Component);

exports.default = PanelFrame;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBox = function (_React$Component) {
    _inherits(SearchBox, _React$Component);

    function SearchBox(props) {
        _classCallCheck(this, SearchBox);

        return _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));
    }

    _createClass(SearchBox, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                iconPosition = _props.iconPosition,
                placeHolder = _props.placeHolder,
                link = _props.link;

            iconPosition = '-26px -40px';

            return React.createElement(
                "div",
                { className: "acs-searchbox" },
                React.createElement("div", { className: "acs-searchbox-headericon", style: { backgroundposition: iconPosition } })
            );
        }
    }]);

    return SearchBox;
}(React.Component);

exports.default = SearchBox;

},{}],5:[function(require,module,exports){
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
                { className: "acs-webpartframe" + (hasTopLine ? " acs-webpartframe-topline" : "") },
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbarTitleBtn = require('./navbarTitleBtn.jsx');

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
            ulWidth: '402px'
        };
        return _this;
    }

    _createClass(NavbarItem, [{
        key: 'menushow',
        value: function menushow(isSecond) {
            if (!isSecond) {
                this.setState({
                    open: true
                });
            } else {
                this.setState({
                    ulWidth: '800px'
                });
            }
        }
    }, {
        key: 'menuhidden',
        value: function menuhidden(isSecond) {
            if (!isSecond) {
                this.setState({
                    open: false,
                    ulWidth: '402px'
                });
            } else {
                this.setState({
                    ulWidth: '402px'
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var minWidth = Math.ceil(this.props.menuData.Items.length / 9) * 400 + 'px';
            var maxCount = 9;
            var itemNodes = [];
            for (var i = 0, len = this.props.menuData.Items.length; i < len; i += maxCount) {
                itemNodes.push(this.props.menuData.Items.slice(i, i + maxCount));
            }

            var secondMenuC = React.createElement(
                'ul',
                { onMouseOver: this.menushow.bind(this, false), onMouseOut: this.menuhidden.bind(this, false), className: 'acs-navbaritem-second acs-navbaritem-secondO', style: { display: this.state.open ? "flex" : "none", top: this.state.open ? "65px" : "60px", "flexDirection": "row", minWidth: minWidth } },
                itemNodes.map(function (item, index) {
                    return React.createElement(
                        'div',
                        { style: { "flexDirection": "column" } },
                        item.map(function (els, index) {
                            return React.createElement(
                                'a',
                                { href: els.ItemHref, className: 'acs-itemlink', key: index },
                                React.createElement('span', { className: 'acs-itemlink-icon' }),
                                els.Title
                            );
                        })
                    );
                })
            );

            var secondMenu = React.createElement(
                'ul',
                { onMouseOver: this.menushow.bind(this, false), onMouseOut: this.menuhidden.bind(this, false), className: 'acs-navbaritem-second',
                    style: { display: this.state.open ? "block" : "none", top: this.state.open ? "65px" : "60px", width: this.state.ulWidth } },
                this.props.menuData.Items.map(function (els, index) {
                    if (_typeof(els.Items) === 'object') {
                        if (els.Items.length === 0) {
                            return React.createElement(
                                'a',
                                { href: els.ItemHref, className: 'acs-secondnav-item', key: index },
                                els.Title
                            );
                        } else {
                            return React.createElement(SecondItem, { key: index, menuData: els, menushow: _this2.menushow.bind(_this2, true), menuhidden: _this2.menuhidden.bind(_this2, true) });
                        }
                    } else {
                        return React.createElement(
                            'a',
                            { href: els.ItemHref, className: 'acs-itemlink', style: { float: index > 7 ? "right" : "none" }, key: index },
                            React.createElement('span', { className: 'acs-itemlink-icon' }),
                            els.Title
                        );
                    }
                })
            );
            secondMenu = this.props.hasGrandChild ? secondMenu : secondMenuC;
            secondMenu = this.props.menuData.hasChild ? secondMenu : null;

            return React.createElement(
                'div',
                { className: 'acs-navbar-item', onMouseOver: this.menushow.bind(this, false), onMouseOut: this.menuhidden.bind(this, false) },
                React.createElement(_navbarTitleBtn2.default, { classname: "acs-navbaritem-titlebtn", isSecond: false, name: this.props.menuData.Title, open: this.state.open, hasChild: this.props.menuData.hasChild, ItemHref: this.props.menuData.ItemHref }),
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

        var _this3 = _possibleConstructorReturn(this, (SecondItem.__proto__ || Object.getPrototypeOf(SecondItem)).call(this, props));

        _this3.state = {
            sopen: false
        };
        return _this3;
    }

    _createClass(SecondItem, [{
        key: 'menushow',
        value: function menushow() {
            this.props.menushow();
            this.setState({
                sopen: true
            });
        }
    }, {
        key: 'menuhidden',
        value: function menuhidden() {
            this.props.menuhidden();
            this.setState({
                sopen: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'acs-secondnav-item', onMouseOver: this.menushow.bind(this), onMouseOut: this.menuhidden.bind(this) },
                React.createElement(_navbarTitleBtn2.default, { classname: "", isSecond: true, name: this.props.menuData.Title, open: this.state.sopen, hasChild: true, ItemHref: this.props.menuData.ItemHref }),
                React.createElement(
                    'ul',
                    { onMouseOver: this.menushow.bind(this), onMouseOut: this.menuhidden.bind(this), className: 'acs-thirdnav-itemlist', style: { display: this.state.sopen ? "block" : "none", width: "400px" } },
                    this.props.menuData.Items.map(function (el, index) {
                        return React.createElement(
                            'a',
                            { href: el.ItemHref, className: 'acs-itemlink', key: index },
                            React.createElement('span', { className: 'acs-itemlink-icon' }),
                            el.Title
                        );
                    })
                )
            );
        }
    }]);

    return SecondItem;
}(React.Component);

},{"./navbarTitleBtn.jsx":9}],8:[function(require,module,exports){
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

},{"./navbarItem.jsx":7}],9:[function(require,module,exports){
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
            var borderShow = this.props.open && !this.props.isSecond && this.props.hasChild;
            var heightChange = this.props.classname === '' ? "20px" : "60px";
            var icon = this.props.hasChild ? this.props.open ? this.props.isSecond ? "acs-titlebtn-rightw" : "acs-titlebtn-up" : this.props.isSecond ? "acs-titlebtn-right" : "acs-titlebtn-down" : "";
            var fontColor = this.props.hasChild ? this.props.open ? this.props.isSecond ? "stitle-selectcolor" : "ftitle-selectcolor" : "" : "";

            return React.createElement(
                "a",
                { href: this.props.ItemHref, className: (!this.props.isSecond ? "acs-titlebtn-noneborder " : " ") + this.props.classname + (borderShow ? " acs-titlebtn-boxshadow acs-titlebtn-border" : ""), style: { height: borderShow ? "65px" : heightChange } },
                React.createElement(
                    "span",
                    { className: 'acs-titlebtn-span ' + fontColor },
                    this.props.name,
                    React.createElement("span", { className: icon })
                )
            );
        }
    }]);

    return NavbarTitleBtn;
}(React.Component);

exports.default = NavbarTitleBtn;

},{}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _event = require('../widget/event.jsx');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // const React = require('react');
// const ReactDom = require('react-dom');


var Events = function (_React$Component) {
    _inherits(Events, _React$Component);

    function Events(props) {
        _classCallCheck(this, Events);

        return _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props));
    }

    _createClass(Events, [{
        key: 'render',
        value: function render() {
            var Events = [];
            this.props.NewInformation.map(function (item, ind) {
                Events.push(React.createElement(_event2.default, { key: 'Event' + ind, title: item.title, month: item.month, day: item.day, href: item.href, time: item.time, location: item.location }));
            });
            return React.createElement(
                'div',
                null,
                Events
            );
        }
    }]);

    return Events;
}(React.Component);

var SliderEvents = function (_React$Component2) {
    _inherits(SliderEvents, _React$Component2);

    function SliderEvents(props) {
        _classCallCheck(this, SliderEvents);

        return _possibleConstructorReturn(this, (SliderEvents.__proto__ || Object.getPrototypeOf(SliderEvents)).call(this, props));
    }

    _createClass(SliderEvents, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                inputDate = _props.inputDate,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal;

            var count = inputDate.length;
            var width = 100 / count + '%';

            var SliderEvents = [];
            inputDate.map(function (item, ind) {
                SliderEvents.push(React.createElement(
                    'li',
                    { key: 'Events' + ind, className: 'acs-slider-pic', style: { width: width } },
                    React.createElement(Events, { NewInformation: item })
                ));
            });

            return (
                //<div>
                //<div className="acs-corporate-events">
                //    <span className="acs-eventPic"></span><span className="acs-eventTitle">CORPORATE EVENTS</span><a href="https://www.baidu.com/s" className="acs-more">MORE</a>
                //</div>
                React.createElement(
                    'ul',
                    { style: {
                            left: -100 * nowLocal + "%",
                            transitionDuration: speed + "ms",
                            width: count * 100 + "%"
                        } },
                    SliderEvents
                )
                //</div>

            );
        }
    }]);

    return SliderEvents;
}(React.Component);

exports.default = SliderEvents;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../widget/event.jsx":18}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

            if (this.props.autoplay || this.props.autoplay === 'True' || this.props.autoplay === 'true') {
                this.autoPlayFlag = setInterval(function () {
                    _this2.turn(1);
                }, this.props.delay);
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

            var arrowsNode = '';
            var dotsNode = '';
            if (this.props.dots && this.props.itemCount > 1) {
                dotsNode = React.createElement(_sliderDots2.default, { turn: this.turn.bind(this), count: this.props.itemCount, nowLocal: this.state.nowLocal });
            }
            if (this.props.arrows && this.props.itemCount > 1) {
                arrowsNode = React.createElement(_sliderArrows2.default, { turn: this.turn.bind(this) });
            }
            var children = React.Children.map(this.props.children, function (item, i) {
                return React.cloneElement(item, {
                    left: _this3.props.left,
                    speed: _this3.props.speed,
                    nowLocal: _this3.state.nowLocal,
                    autoplay: _this3.props.autoplay
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
    speed: 1000,
    delay: 2000,
    pause: true,
    autoplay: false,
    dots: true,
    arrows: true,
    itemCount: 0
};
SliderFrame.autoPlayFlag = null;

},{"./sliderArrows.jsx":11,"./sliderDots.jsx":12}],14:[function(require,module,exports){
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

            var showArrows = this.props.arrows && this.props.itemCount > 1;
            var showDots = this.props.dots && this.props.itemCount > 1;
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
                    nowLocal: _this2.state.nowLocal,
                    autoplay: _this2.props.autoplay
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

},{"./sliderArrows.jsx":11,"./sliderDots.jsx":12,"./sliderFrame.jsx":13}],15:[function(require,module,exports){
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
                var itemNodes = items.map(function (item, idn) {
                    return React.createElement(
                        'a',
                        { key: 'link' + idn, href: item.itemhref, className: 'acs-link-bgcolor', target: '_blank', title: item.title },
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
            });

            return React.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "ms",
                        width: count * 100 + "%"
                    } },
                itemCollection
            );
        }
    }]);

    return SliderLinks;
}(React.Component);

exports.default = SliderLinks;

},{}],16:[function(require,module,exports){
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
                                { href: item.href, title: item.value },
                                item.value
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'newContent' },
                            _react2.default.createElement('div', { className: 'acs-pic-clock' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                item.date
                            )
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
                        transitionDuration: speed + "ms",
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
},{}],17:[function(require,module,exports){
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
                        { href: item.itemhref },
                        React.createElement('img', { src: item.src })
                    ),
                    panel
                );
            });

            return React.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "ms",
                        width: count * 100 + "%"
                    } },
                itemNodes
            );
        }
    }]);

    return SliderPics;
}(React.Component);

exports.default = SliderPics;

},{"../common/titleDescriptionPanel.jsx":6}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_React$Component) {
    _inherits(Event, _React$Component);

    function Event(props) {
        _classCallCheck(this, Event);

        return _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));
    }

    _createClass(Event, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acs-evnet-container" },
                React.createElement(
                    "div",
                    { className: "acs-event-timePic" },
                    React.createElement(
                        "div",
                        { className: "acs-month" },
                        React.createElement(
                            "span",
                            null,
                            this.props.month
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "acs-date" },
                        React.createElement(
                            "span",
                            null,
                            this.props.day
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "acs-timeDes" },
                    React.createElement(
                        "div",
                        { className: "acs-timeDes-title" },
                        React.createElement(
                            "a",
                            { className: "acs-title", title: this.props.title, href: this.props.href },
                            this.props.title
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "acs-timeDes-time" },
                        React.createElement("div", { className: "acs-pic-clock" }),
                        React.createElement(
                            "span",
                            { className: "acs-event-time" },
                            this.props.time
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "acs-timeDes-location" },
                        React.createElement("div", { className: "acs-pic-location" }),
                        React.createElement(
                            "span",
                            { className: "acs-event-location" },
                            this.props.location
                        )
                    )
                )
            );
        }
    }]);

    return Event;
}(React.Component);

exports.default = Event;

},{}],19:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _articleFrame = require('../../components/Common/articleFrame.jsx');

var _articleFrame2 = _interopRequireDefault(_articleFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function articleRender(params) {
    if (!params) {
        params = [{
            Title: 'Kevin', PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection."
        }, {
            Title: 'Tom', PicturePath: '../../components/img/image2.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system."
        }, {
            Title: 'Justin', PicturePath: '../../components/img/image3.jpg',
            Headline: 'Overview',
            Intro: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React."
        }, {
            Title: 'Bill', PicturePath: '../../components/img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Intro: "You do not have permission to view this directory or page using the credentials that you supplied"
        }];
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('articles')) {
            (0, _reactDom.render)(React.createElement(
                'div',
                null,
                params.map(function (article, i) {
                    return React.createElement(_articleFrame2.default, {
                        key: i,
                        title: article.Title,
                        picturePath: article.PicturePath,
                        headline: article.Headline,
                        intro: article.Intro
                    });
                })
            ), document.getElementById('articles'));
        }
    }
}

global.articleRender = articleRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/articleFrame.jsx":1}],20:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _slideEvents = require('../../components/slider/slideEvents.jsx');

var _slideEvents2 = _interopRequireDefault(_slideEvents);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function eventRender(config) {
    var NewInformation = [{ title: 'AIC Family day', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }, { title: 'Anniversary Celebration', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }, { title: 'Global Conference on Integrated Care', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }];
    var data = NewInformation;
    var param = { url: '', speed: 1, delay: 2, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '' };

    function renderUI(data, param) {
        var itemNodes = [];
        var maxCount = 3;
        for (var i = 0, len = data.length; i < len; i += maxCount) {
            var cell = Math.ceil(data.length / maxCount);
            itemNodes.push(data.slice(i, i + maxCount));
        }
        if (document.getElementById('eventSlider')) {
            (0, _reactDom.render)(React.createElement(
                _webPartFrame2.default,
                {
                    title: param.webparttitle,
                    hasMore: true,
                    link: param.moreurl,
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
                    React.createElement(_slideEvents2.default, { inputDate: itemNodes })
                )
            ), document.getElementById('eventSlider'));
        }
    };

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function success(dataInput) {
                var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    var date = dataInput.d.results[i].EventDate ? new Date(dataInput.d.results[i].EventDate) : '';
                    var day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
                    var hour = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
                    var minute = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();
                    var pmOrAm = date.getHours() > 12 ? "PM" : "AM";
                    data.push({
                        'href': param.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'month': date === '' ? '' : month[date.getMonth()],
                        'day': day,
                        'time': hour + ":" + minute + " " + pmOrAm,
                        'location': dataInput.d.results[i].Location,
                        'title': dataInput.d.results[i].Title
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {}
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.eventRender = eventRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":5,"../../components/slider/slideEvents.jsx":10,"../../components/slider/sliderFrameArrowOnBottom.jsx":14}],21:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _sliderLinks = require('../../components/slider/sliderLinks.jsx');

var _sliderLinks2 = _interopRequireDefault(_sliderLinks);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linksRender(config) {
    var data = [{ 'itemhref': 'http://www.baidu.com', 'title': 'LMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'PRM' }, { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'eForms' }, { 'itemhref': 'http://www.baidu.com', 'title': 'I-innovate' }, { 'itemhref': 'http://www.baidu.com', 'title': 'Webmail' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'LMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'PRM' }, { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'eForms' }, { 'itemhref': 'http://www.baidu.com', 'title': 'I-innovate' }, { 'itemhref': 'http://www.baidu.com', 'title': 'Webmail' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'LMS' }];
    var param = { url: '', speed: 1, delay: 2, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: 'frequently accessed links', moreurl: '' };

    function renderUI(data, param) {
        var itemNodes = [];
        var maxCount = 9;
        for (var i = 0, len = data.length; i < len; i += maxCount) {
            itemNodes.push(data.slice(i, i + maxCount));
        }
        if (document.getElementById('acclinks')) {
            (0, _reactDom.render)(React.createElement(
                _webPartFrame2.default,
                {
                    title: param.webparttitle,
                    hasMore: false,
                    link: param.moreurl,
                    hasTopLine: false
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
                    React.createElement(_sliderLinks2.default, { items: itemNodes })
                )
            ), document.getElementById('acclinks'));
            AIC.wordLimit('.acs-linkitem-title');
        }
    }

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        'itemhref': dataInput.d.results[i].ACSUrl ? dataInput.d.results[i].ACSUrl.Url : '',
                        'title': dataInput.d.results[i].Title
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {}
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.linksRender = linksRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":5,"../../components/slider/sliderFrameArrowOnBottom.jsx":14,"../../components/slider/sliderLinks.jsx":15}],22:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _listFrame = require('../../components/Common/listFrame.jsx');

var _listFrame2 = _interopRequireDefault(_listFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newsListRender(config) {
    var param = { title: 'Latest News', hasPager: false };
    var data = [{
        title: 'Verizon is bringing back unlimited data',
        modifiedOn: new Date().setHours(14),
        url: 'www.baidu.com'
    }, {
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        modifiedOn: new Date().setHours(12),
        url: 'www.baidu.com'
    }, {
        title: 'There are many variations of passages of Lorem Ipsum available',
        modifiedOn: new Date().setHours(5),
        url: 'www.baidu.com'
    }, {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        modifiedOn: new Date().setHours(0),
        url: 'www.baidu.com'
    }];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function fillZero(value) {
        return value > 9 ? value : "0" + value;
    }

    function formatDate(value) {
        var date = new Date(value);
        var hour = date.getHours();
        return months[date.getMonth()] + " " + fillZero(date.getDate()) + ", " + date.getFullYear() + " " + fillZero(hour % 12) + ":" + fillZero(date.getMinutes()) + (hour > 11 ? " PM" : " AM");
    }

    function renderUI(data, param) {
        if (document.getElementById('news-list')) {
            var listItems = data.map(function (item, idn) {
                return React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'div',
                        { className: 'content-title' },
                        item.title
                    ),
                    React.createElement(
                        'div',
                        { className: 'content-footer' },
                        formatDate(item.modifiedOn)
                    )
                );
            });
            (0, _reactDom.render)(React.createElement(
                _listFrame2.default,
                { title: param.title, hasPager: param.hasPager },
                React.createElement(
                    'ul',
                    null,
                    listItems
                )
            ), document.getElementById('news-list'));
        }
    }

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        title: dataInput.d.results[i].Title,
                        modifiedOn: dataInput.d.results[i].ModifiedOn,
                        url: dataInput.d.results[i].Url
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {
                debugger;
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.newsListRender = newsListRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/listFrame.jsx":2}],23:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _listFrame = require('../../components/Common/listFrame.jsx');

var _listFrame2 = _interopRequireDefault(_listFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popularListRender(config) {
    var param = { title: 'Most Popular', hasPager: false };
    var data = [{
        title: 'How social media filter bubbles work',
        likeCount: 221,
        url: 'www.baidu.com'
    }, {
        title: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        likeCount: 199,
        url: 'www.baidu.com'
    }, {
        title: 'There are many variations of passages of Lorem Ipsum available',
        likeCount: 169,
        url: 'www.baidu.com'
    }, {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        likeCount: 152,
        url: 'www.baidu.com'
    }];

    function renderUI(data, param) {
        if (document.getElementById('popular-list')) {
            var listItems = data.map(function (item, idn) {
                return React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'div',
                        { className: 'content-title' },
                        item.title
                    ),
                    React.createElement(
                        'div',
                        { className: 'content-footer' },
                        React.createElement('span', { className: '' }),
                        React.createElement(
                            'span',
                            null,
                            item.likeCount + ' likes'
                        )
                    )
                );
            });
            (0, _reactDom.render)(React.createElement(
                _listFrame2.default,
                { title: param.title, hasPager: param.hasPager },
                React.createElement(
                    'ul',
                    null,
                    listItems
                )
            ), document.getElementById('popular-list'));
        }
    }

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        title: dataInput.d.results[i].Title,
                        likeCount: dataInput.d.results[i].LikeCount,
                        url: dataInput.d.results[i].Url
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {
                debugger;
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.popularListRender = popularListRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/listFrame.jsx":2}],24:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _navbarMenu = require('../../components/navigation/navbarMenu.jsx');

var _navbarMenu2 = _interopRequireDefault(_navbarMenu);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavigationRender(config) {
    var param = {};
    var data = [{
        Title: "Home", ItemHref: "", Items: [], hasChild: false, hasGrandChild: false
    }, {
        Title: "Division", ItemHref: "", hasChild: true, hasGrandChild: true,
        Items: [{
            Title: "Care Integration Division", ItemHref: "",
            Items: [{ Title: "Assessment & Co-ordination Services Devt", ItemHref: "" }, { Title: "Care Innovations & Integration Devt", ItemHref: "" }, { Title: "Palliative Care Services Development", ItemHref: "" }]
        }, {
            Title: "Care Transition Division", ItemHref: "",
            Items: [{ Title: "ACTION & Ops Support", ItemHref: "" }, { Title: "Care Transition Office", ItemHref: "" }, { Title: "CCMS & Comm CAT", ItemHref: "" }, { Title: "Helpdesk Infosystem and Projects (HIP)", ItemHref: "" }, { Title: "Referral Management Teams", ItemHref: "" }]
        }, {
            Title: "CEO Office", ItemHref: "", Items: []
        }, {
            Title: "Community Mental Health Division", ItemHref: "",
            Items: [{ Title: "Capability Building & Sector Development", ItemHref: "" }, { Title: "Community Engagement & Development", ItemHref: "" }, { Title: "Community Support", ItemHref: "" }, { Title: "Resource Planning", ItemHref: "" }, { Title: "Service Implementation & Development", ItemHref: "" }]
        }, {
            Title: "Corporate Services & Strategy Division", ItemHref: "",
            Items: [{ Title: "Corporate & Marketing Comm", ItemHref: "" }, { Title: "Corporate Development", ItemHref: "" }, { Title: "Finance", ItemHref: "" }, { Title: "Human Resource", ItemHref: "" }, { Title: "Office Administration", ItemHref: "" }]
        }, {
            Title: "Grants Management Office", ItemHref: "",
            Items: [{ Title: "Grant Policy & Management", ItemHref: "" }, { Title: "Resource Management", ItemHref: "" }]
        }, {
            Title: "Home & Primary Care Division", ItemHref: "",
            Items: [{ Title: "Home & Community Care", ItemHref: "" }, { Title: "Primary Care Development", ItemHref: "" }]
        }, {
            Title: "ILTC IT Enablement Office", ItemHref: "",
            Items: [{ Title: "ILTC IT Development", ItemHref: "" }]
        }]
    }, {
        Title: "APPLICATION", ItemHref: "", hasChild: true, hasGrandChild: false,
        Items: [{ Title: "FAQ", ItemHref: "" }, { Title: "AIC library", ItemHref: "" }, { Title: "PRM Conversations", ItemHref: "" }, { Title: "iHR", ItemHref: "" }, { Title: "LMS", ItemHref: "" }, { Title: "PRM", ItemHref: "" }, { Title: "Integrated Referral Management System (IRMS)", ItemHref: "" }, { Title: "eForms", ItemHref: "" }, { Title: "I-innovate", ItemHref: "" }, { Title: "Webmail", ItemHref: "" }, { Title: "Grants Management System (GMS)", ItemHref: "" }, { Title: "Budget and Reporting System (BARS)", ItemHref: "" }]
    }, {
        Title: "CROSS-DIVISIONS", ItemHref: "", hasChild: false, hasGrandChild: false, Items: []
    }, {
        Title: "ABOUT AIC", ItemHref: "", hasChild: true, hasGrandChild: false,
        Items: [{ Title: "Org Structure", ItemHref: "" }, { Title: "Staff Directory", ItemHref: "" }, { Title: "Policies", ItemHref: "" }, { Title: "SMM", ItemHref: "" }]
    }];

    function renderUI(data) {
        var minWidth = data.length * 130;
        var elementDiv = document.getElementById('navigation');
        if (elementDiv) {
            elementDiv.style.minWidth = minWidth + 'px';
            (0, _reactDom.render)(React.createElement(_navbarMenu2.default, { data: data }), document.getElementById('navigation'));
        }
    }

    function loadData() {
        _jquery2.default.ajax({
            cache: false,
            type: "GET",
            url: config.url,
            headers: { "accept": "application/json;odata=verbose" },
            async: false,
            success: function success(data) {
                renderUI(data);
            },
            error: function error(data) {}
        });
    }

    if (config && !config.debug) {
        loadData();
    } else {
        renderUI(data);
    }
}

global.NavigationRender = NavigationRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/navigation/navbarMenu.jsx":8}],25:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

var _sliderNews = require('../../components/slider/sliderNews.jsx');

var _sliderNews2 = _interopRequireDefault(_sliderNews);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newsRender(config) {
    var data = [{ 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image2.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image3.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }];

    var maxCount = 3;
    var param = { url: '', speed: 1, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '', defaultPicUrl: '' };

    function renderUI(data, param) {
        var itemNodes = [];

        for (var i = 0, len = data.length; i < len; i += maxCount) {
            var cell = Math.ceil(data.length / maxCount);
            itemNodes.push(React.createElement(_sliderNews2.default, { children: data.slice(i, i + maxCount), count: cell, idx: i }));
        }

        if (document.getElementById('news')) {
            (0, _reactDom.render)(React.createElement(
                _webPartFrame2.default,
                {
                    title: param.webparttitle,
                    hasMore: true,
                    link: param.listurl,
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

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    var date = new Date(dataInput.d.results[i].ACSPublishedDate);
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var hour = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
                    var minute = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();
                    var pmOrAm = date.getHours() > 12 ? "PM" : "AM";
                    data.push({
                        'src': dataInput.d.results[i].ACSImageUrl ? dataInput.d.results[i].ACSImageUrl : param.defaultPicUrl,
                        'date': month + "/" + day + "/" + year + " " + hour + ":" + minute + " " + pmOrAm,
                        'href': this.config.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'value': dataInput.d.results[i].Title
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {}
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.defaultPicUrl = config.defaultPicUrl ? config.defaultPicUrl : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.newsRender = newsRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":5,"../../components/slider/sliderFrameArrowOnBottom.jsx":14,"../../components/slider/sliderNews.jsx":16}],26:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _panelFrame = require('../../components/Common/panelFrame.jsx');

var _panelFrame2 = _interopRequireDefault(_panelFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function panelRender() {
    var panels = [{
        title: 'My Task',
        msgCount: 3,
        iconClass: 'acs-header-icon',
        url: 'www.baidu.com'
    }, {
        title: 'HR Connect',
        msgCount: 0,
        iconClass: 'acs-header-icon',
        url: 'www.baidu.com'
    }];

    function renderUI(panels) {
        var panelsFrame = panels.map(function (panel, idn) {
            return React.createElement(_panelFrame2.default, {
                title: panel.title,
                msgCount: panel.msgCount,
                iconClass: panel.iconClass,
                url: panel.url });
        });
        (0, _reactDom.render)(React.createElement(
            'div',
            null,
            panelsFrame
        ), document.getElementById('panel'));
    }

    renderUI(panels);
}

global.panelRender = panelRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/panelFrame.jsx":3}],27:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _searchBox = require('../../components/Common/searchBox.jsx');

var _searchBox2 = _interopRequireDefault(_searchBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchRender(params) {
    if (!params) {
        params = {};
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('quicksearch')) {
            (0, _reactDom.render)(React.createElement(
                'div',
                { className: 'acs-searchbox-container' },
                React.createElement(
                    'div',
                    { className: 'acs-searchbox-title' },
                    React.createElement('div', { className: 'acs-searchbox-title-icon' }),
                    React.createElement(
                        'div',
                        { className: 'acs-searchbox-title-name' },
                        'QUICK SEARCH'
                    )
                )
            ), document.getElementById('quicksearch'));
        }
    }
}

global.searchRender = searchRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/searchBox.jsx":4}],28:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrame = require('../../components/slider/sliderFrame.jsx');

var _sliderFrame2 = _interopRequireDefault(_sliderFrame);

var _sliderPics = require('../../components/slider/sliderPics.jsx');

var _sliderPics2 = _interopRequireDefault(_sliderPics);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sliderRender(config) {

    var data = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' }, { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' }, { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

    var param = { url: '', speed: 1, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '' };

    function renderUI(data, param) {
        if (document.getElementById('slider')) {
            (0, _reactDom.render)(React.createElement(
                _sliderFrame2.default,
                {
                    itemCount: data.length,
                    speed: param.speed,
                    delay: param.delay,
                    pause: param.pause,
                    autoplay: param.autoplay,
                    dots: param.dots,
                    arrows: param.arrows
                },
                React.createElement(_sliderPics2.default, { items: data })
            ), document.getElementById('slider'));
            AIC.wordLimit('.acs-titledescriptionpanel-description');
        }
    }

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        'src': dataInput.d.results[i].ACSImageUrl,
                        'alt': dataInput.d.results[i].Title,
                        'itemhref': this.config.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'title': dataInput.d.results[i].Title,
                        'description': dataInput.d.results[i].ACSDescription
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {
                debugger;
            }
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.sliderRender = sliderRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/slider/sliderFrame.jsx":13,"../../components/slider/sliderPics.jsx":17}]},{},[21,28,25,24,20,26,23,22,19,27])(28)
});