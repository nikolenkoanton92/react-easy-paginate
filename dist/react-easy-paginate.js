(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-easy-paginate"] = factory(require("react"));
	else
		root["react-easy-paginate"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Module dependencies
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ReactEasyPaginate = function (_Component) {
	  _inherits(ReactEasyPaginate, _Component);

	  function ReactEasyPaginate(props) {
	    _classCallCheck(this, ReactEasyPaginate);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactEasyPaginate).call(this, props));

	    _this.state = {
	      activePage: _this.props.startPage || 1,
	      isPreviousLabelDisabled: false,
	      isNextLabelDisabled: false
	    };

	    _this.updateActivePage = _this.updateActivePage.bind(_this);
	    _this.handlePreviousPage = _this.handlePreviousPage.bind(_this);
	    _this.handleNextPage = _this.handleNextPage.bind(_this);
	    _this.disableLabel = _this.disableLabel.bind(_this);
	    _this.enableLabel = _this.enableLabel.bind(_this);
	    _this.handlePageNumClick = _this.handlePageNumClick.bind(_this);
	    _this.renderNumerationList = _this.renderNumerationList.bind(_this);
	    return _this;
	  }

	  _createClass(ReactEasyPaginate, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.activePage === 1) {
	        this.setState({
	          isPreviousLabelDisabled: true
	        });
	      } else if (this.state.activePage === this.props.pageTotal) {
	        this.setState({
	          isNextLabelDisabled: true
	        });
	      }
	    }
	  }, {
	    key: 'updateActivePage',
	    value: function updateActivePage(activePage) {
	      if (activePage === 1) {
	        this.disableLabel('previous');
	      }

	      if (activePage === this.props.pageTotal) {
	        this.disableLabel('next');
	      }

	      if (activePage > 1 && this.state.isPreviousLabelDisabled) {
	        this.enableLabel('previous');
	      }

	      if (activePage < this.props.pageTotal && this.state.isNextLabelDisabled) {
	        this.enableLabel('next');
	      }

	      this.setState({
	        activePage: activePage
	      });

	      this.props.onClick(activePage);
	    }
	  }, {
	    key: 'handlePreviousPage',
	    value: function handlePreviousPage(e) {
	      if (this.state.isPreviousLabelDisabled) {
	        return false;
	      }

	      var activePage = this.state.activePage - 1;

	      this.updateActivePage(activePage);
	    }
	  }, {
	    key: 'handleNextPage',
	    value: function handleNextPage(e) {
	      if (this.state.isNextLabelDisabled) {
	        return false;
	      }

	      var activePage = this.state.activePage + 1;

	      this.updateActivePage(activePage);
	    }
	  }, {
	    key: 'disableLabel',
	    value: function disableLabel(name) {
	      if (name === 'next') {
	        this.setState({
	          isNextLabelDisabled: true
	        });
	      } else if (name === 'previous') {
	        this.setState({
	          isPreviousLabelDisabled: true
	        });
	      }
	    }
	  }, {
	    key: 'enableLabel',
	    value: function enableLabel(name) {
	      if (name === 'next') {
	        this.setState({
	          isNextLabelDisabled: false
	        });
	      } else if (name === 'previous') {
	        this.setState({
	          isPreviousLabelDisabled: false
	        });
	      }
	    }
	  }, {
	    key: 'handlePageNumClick',
	    value: function handlePageNumClick(pageNum) {
	      this.updateActivePage(pageNum);
	    }
	  }, {
	    key: 'renderNumerationList',
	    value: function renderNumerationList() {
	      var pages = [];
	      var pageTotal = this.props.pageTotal;
	      var activePage = this.state.activePage;
	      var middlePage = Math.ceil(this.props.rangeDisplayed / 2) + 1;
	      var activeClass = this.props.activeClass;

	      var i = 1;
	      var length = this.props.rangeDisplayed + 1;

	      if (pageTotal < this.props.rangeDisplayed) {
	        length = pageTotal + 1;
	      } else if (activePage > middlePage && pageTotal >= activePage + middlePage) {
	        i = activePage - middlePage + 1;
	        length += i - 1;
	      } else if (activePage > middlePage && pageTotal <= activePage + middlePage) {
	        i = pageTotal - this.props.rangeDisplayed + 1;
	        length = pageTotal + 1;
	      }

	      for (; i < length; i += 1) {
	        var activeClassname = activePage === i ? activeClass : '';
	        pages[i] = _react2.default.createElement(
	          'li',
	          { key: i, onClick: this.handlePageNumClick.bind(this, i) },
	          _react2.default.createElement(
	            'a',
	            { className: activeClassname },
	            i
	          )
	        );
	      }

	      return pages;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var numerationList = this.renderNumerationList();

	      var nextLabelClass = this.state.isNextLabelDisabled ? this.props.labelDisabledClass : '';
	      var previousLabelClass = this.state.isPreviousLabelDisabled ? this.props.labelDisabledClass : '';

	      return _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          {
	            className: previousLabelClass,
	            onClick: this.handlePreviousPage
	          },
	          this.props.previousLabel
	        ),
	        numerationList,
	        _react2.default.createElement(
	          'li',
	          {
	            className: nextLabelClass,
	            onClick: this.handleNextPage
	          },
	          this.props.nextLabel
	        )
	      );
	    }
	  }]);

	  return ReactEasyPaginate;
	}(_react.Component);

	ReactEasyPaginate.propTypes = {
	  pageTotal: _react2.default.PropTypes.number.isRequired,
	  rangeDisplayed: _react2.default.PropTypes.number.isRequired,
	  nextLabel: _react2.default.PropTypes.node,
	  previousLabel: _react2.default.PropTypes.node,
	  startPage: _react2.default.PropTypes.number,
	  onClick: _react2.default.PropTypes.func,
	  activeClass: _react2.default.PropTypes.string,
	  labelDisabledClass: _react2.default.PropTypes.string
	};

	ReactEasyPaginate.defaultProps = {
	  activeClass: 'active',
	  nextLabel: _react2.default.createElement(
	    'a',
	    null,
	    'Next'
	  ),
	  previousLabel: _react2.default.createElement(
	    'a',
	    null,
	    'Previous'
	  ),
	  labelDisabledClass: 'disabled'
	};

	exports.default = ReactEasyPaginate;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;