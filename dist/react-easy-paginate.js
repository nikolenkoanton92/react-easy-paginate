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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactEasyPaginate = _react2.default.createClass({
	  displayName: 'ReactEasyPaginate',

	  propTypes: {
	    pageTotal: _react2.default.PropTypes.number.isRequired,
	    rangeDisplayed: _react2.default.PropTypes.number.isRequired,
	    nextLabel: _react2.default.PropTypes.node,
	    previousLabel: _react2.default.PropTypes.node,
	    middleLabel: _react2.default.PropTypes.node,
	    startPage: _react2.default.PropTypes.number,
	    onClick: _react2.default.PropTypes.func
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activePage: this.props.startPage || 1
	    };
	  },
	  updateActivePage: function updateActivePage(activePage) {
	    this.setState({
	      activePage: activePage
	    });
	  },
	  handlePreviousPage: function handlePreviousPage(e) {
	    var activePage = this.state.activePage - 1;
	    this.updateActivePage(activePage);
	    this.props.onClick(activePage);
	  },
	  handleNextPage: function handleNextPage(e) {
	    var activePage = this.state.activePage + 1;
	    this.updateActivePage(activePage);
	    this.props.onClick(activePage);
	  },
	  handlePageNumClick: function handlePageNumClick(pageNum) {
	    this.updateActivePage(pageNum);
	    this.props.onClick(pageNum);
	  },
	  renderNumerationList: function renderNumerationList() {
	    var pages = [];
	    var pageTotal = this.props.pageTotal;
	    var activePage = this.state.activePage;
	    var middlePage = Math.ceil(this.props.rangeDisplayed / 2) + 1;

	    var i = 1;
	    var length = this.props.rangeDisplayed + 1;

	    if (activePage > middlePage && pageTotal >= activePage + middlePage) {
	      i = activePage - middlePage + 1;
	      length += i - 1;
	    } else if (activePage > middlePage && pageTotal <= activePage + middlePage) {
	      i = pageTotal - this.props.rangeDisplayed + 1;
	      length = pageTotal + 1;
	    }

	    for (; i < length; i++) {
	      var activeClassname = activePage === i ? 'active' : '';
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
	  },
	  render: function render() {

	    var numerationList = this.renderNumerationList();

	    return _react2.default.createElement(
	      'ul',
	      null,
	      _react2.default.createElement(
	        'li',
	        { onClick: this.handlePreviousPage },
	        _react2.default.createElement(
	          'a',
	          null,
	          'Previous'
	        )
	      ),
	      numerationList,
	      _react2.default.createElement(
	        'li',
	        { onClick: this.handleNextPage },
	        _react2.default.createElement(
	          'a',
	          null,
	          'Next'
	        )
	      )
	    );
	  }
	}); /**
	     * Module dependencies
	     */


	exports.default = ReactEasyPaginate;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;