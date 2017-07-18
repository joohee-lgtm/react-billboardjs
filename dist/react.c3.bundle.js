(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "d3"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("d3")) : factory(root["React"], root["d3"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BB = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _billboard = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactWatcher = __webpack_require__(6);

var _reactWatcher2 = _interopRequireDefault(_reactWatcher);

var _util = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BB = function (_React$Component) {
	_inherits(BB, _React$Component);

	function BB() {
		_classCallCheck(this, BB);

		return _possibleConstructorReturn(this, (BB.__proto__ || Object.getPrototypeOf(BB)).apply(this, arguments));
	}

	_createClass(BB, [{
		key: "componentWillMount",


		// 마운트 직전 한번
		value: function componentWillMount() {
			this.instance = null;
			this.watchConfig();
		}
	}, {
		key: "watchConfig",
		value: function watchConfig() {
			var _this2 = this;

			var watch = this.props.watch;


			watch('axis.x.labels', function (data) {
				return _this2.instance.axis.label({ x: data });
			});
			watch('axis.y.labels', function (data) {
				return _this2.instance.axis.label({ y: data });
			});
			watch('axis.x.categories', function (data) {
				return _this2.instance.axis.x.categories(data);
			});
			watch('legend.show', function (data) {
				return _this2.instance.legend.show(data);
			});
			watch('legend.hide', function (data) {
				return _this2.instance.legend.hide(data);
			});
			watch('regions', function (data) {
				return _this2.instance.regions(data);
			});
			watch('size.width', function (data) {
				return _this2.instance.resize({ width: data });
			});
			watch('size.height', function (data) {
				return _this2.instance.resize({ height: data });
			});
			watch('grid.x.lines', function (data) {
				return _this2.instance.xgrids(data);
			});
			watch('grid.y.lines', function (data) {
				return _this2.instance.ygrids(data);
			});
			watch('zoom.enable', function (data) {
				return _this2.instance.zoom.enable(data);
			});

			// using custom
			watch('zoom.domain', function (data) {
				if (data === null) {
					_this2.instance.unzoom();
				} else {
					_this2.instance.zoom();
				}
			});

			// TODO
			// watch('data', (data) => this.instance.load(data));
			// watch('data', (data) => this.instance.unload(data));
			// watch('data.hide', (data) => this.instance.hide(data));
			// watch('data.hide', (data) => this.instance.show(data));
			// watch('data.groups', (data) => this.instance.groups(data));
			// watch('data.type', (data) => this.instance.transform(data));
		}

		// 마운트 직후 한번

	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var node = this.wrapper;

			this.generateChart(node, this.props);
		}

		// 업데이트 직전

	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(newProps) {}

		// state, props 업데이트 직전의 직전

	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (this.instance) {
				return false;
			} else {
				return true;
			}
		}

		// 업데이트 직전

	}, {
		key: "componentWillUpdate",
		value: function componentWillUpdate() {}

		// 업데이트 직후

	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {}

		// 언마운트 직전 한번

	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			this.destroy();
		}
	}, {
		key: "destroy",
		value: function destroy() {
			try {
				return !(this.instance && this.instance.destroy());
			} catch (err) {
				throw new Error("Internal BB error", err);
			}
		}
	}, {
		key: "generateChart",
		value: function generateChart(mountNode, config) {
			// using react node
			var newConfig = (0, _util.deepCopy)({}, config);
			newConfig.bindto = mountNode;

			if (this.instance) {
				this.instance.destroy();
			}
			this.instance = _billboard.bb.generate(newConfig);
			window.chart = this.instance;
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement("div", {
				key: this.props.id,
				ref: function ref(d) {
					_this3.wrapper = d;
				}
			});
		}
	}], [{
		key: "displayName",
		get: function get() {
			return "BB";
		}
	}]);

	return BB;
}(_react2.default.Component);

BB.propTypes = {
	size: _react.PropTypes.object,
	padding: _react.PropTypes.object,
	color: _react.PropTypes.object,
	interaction: _react.PropTypes.object,
	transition: _react.PropTypes.object,
	oninit: _react.PropTypes.func,
	onrendered: _react.PropTypes.func,
	onmouseover: _react.PropTypes.func,
	onmouseout: _react.PropTypes.func,
	onresize: _react.PropTypes.func,
	onresized: _react.PropTypes.func,
	axis: _react.PropTypes.object,
	grid: _react.PropTypes.object,
	regions: _react.PropTypes.array,
	legend: _react.PropTypes.object,
	tooltip: _react.PropTypes.object,
	subchart: _react.PropTypes.object,
	zoom: _react.PropTypes.object,
	point: _react.PropTypes.object,
	line: _react.PropTypes.object,
	area: _react.PropTypes.object,
	bar: _react.PropTypes.object,
	pie: _react.PropTypes.object,
	donut: _react.PropTypes.object,
	gauge: _react.PropTypes.object,
	data: _react.PropTypes.object,
	title: _react.PropTypes.object,
	className: _react.PropTypes.string,
	style: _react.PropTypes.object,
	unloadBeforeLoad: _react.PropTypes.bool
};

exports.default = (0, _reactWatcher2.default)(BB);
exports.BB = BB;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BB = undefined;

var _BB = __webpack_require__(1);

var _BB2 = _interopRequireDefault(_BB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BB2.default;
exports.BB = _BB2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// http://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
var deepCopy = function deepCopy(target) {
	for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		sources[_key - 1] = arguments[_key];
	}

	var isObject = function isObject(item) {
		return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);
	};

	if (!sources.length) return target;
	var source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (var key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
				deepCopy(target[key], source[key]);
			} else {
				Object.assign(target, _defineProperty({}, key, source[key]));
			}
		}
	}

	return deepCopy.apply(undefined, [target].concat(sources));
};

var UTIL = {
	deepCopy: deepCopy
};

exports.deepCopy = deepCopy;
exports.default = UTIL;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * 
 * billboard.js, JavaScript chart library
 * http://naver.github.io/billboard.js/
 * 
 * @version 1.0.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(9));
	else if(typeof define === 'function' && define.amd)
		define(["d3"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("d3")) : factory(root["d3"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;
exports.isObject = exports.isArray = exports.merge = exports.getRectSegList = exports.removeEvent = exports.addEvent = exports.extend = exports.brushEmpty = exports.getBrushSelection = exports.isEmpty = exports.diffDomain = exports.getPathBox = exports.sanitise = exports.hasValue = exports.isString = exports.getOption = exports.asHalfPixel = exports.isFunction = exports.ceil10 = exports.notEmpty = exports.isUndefined = exports.isDefined = exports.isValue = undefined;

var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2),
    _d = __webpack_require__(2),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var isValue = function (v) {
	return v || v === 0;
},
    isFunction = function (o) {
	return typeof o === "function";
},
    isString = function (o) {
	return typeof o === "string";
},
    isUndefined = function (v) {
	return typeof v === "undefined";
},
    isDefined = function (v) {
	return typeof v !== "undefined";
},
    ceil10 = function (v) {
	return Math.ceil(v / 10) * 10;
},
    asHalfPixel = function (n) {
	return Math.ceil(n) + 0.5;
},
    diffDomain = function (d) {
	return d[1] - d[0];
},
    isEmpty = function (o) {
	return typeof o === "undefined" || o === null || isString(o) && o.length === 0 || (typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o)) === "object" && Object.keys(o).length === 0;
},
    notEmpty = function (o) {
	return !isEmpty(o);
},
    getOption = function (options, key, defaultValue) {
	return isDefined(options[key]) ? options[key] : defaultValue;
},
    hasValue = function (dict, value) {
	var found = !1;

	return Object.keys(dict).forEach(function (key) {
		return dict[key] === value && (found = !0);
	}), found;
},
    sanitise = function (str) {
	return typeof str === "string" ? str.replace(/</g, "&lt;").replace(/>/g, "&gt;") : str;
},
    getRectSegList = function (path) {
	/*
  * seg1 ---------- seg2
  *   |               |
  *   |               |
  *   |               |
  * seg0 ---------- seg3
  * */
	var bbox = path.getBBox(),
	    list = [];

	// seg0


	return list.push({
		x: bbox.x,
		y: bbox.y + bbox.height
	}), list.push({
		x: bbox.x,
		y: bbox.y
	}), list.push({
		x: bbox.x + bbox.width,
		y: bbox.y
	}), list.push({
		x: bbox.x + bbox.width,
		y: bbox.y + bbox.height
	}), list;
},
    getPathBox = function (path) {
	var box = path.getBoundingClientRect(),
	    items = getRectSegList(path),
	    minX = items[0].x,
	    minY = Math.min(items[0].y, items[1].y);


	return {
		x: minX,
		y: minY,
		width: box.width,
		height: box.height
	};
},
    getBrushSelection = function () {
	var selection = null,
	    event = _d.event;

	// check from event


	return event && event.constructor.name === "BrushEvent" ? selection = event.selection : this.context && (selection = this.context.select("." + _classes2.default.brush).node()) && (selection = (0, _d.brushSelection)(selection)), selection;
},
    brushEmpty = function () {
	var selection = this.getBrushSelection();

	return !selection || selection[0] === selection[1];
};

// substitution of SVGPathSeg API polyfill


// return brush selection array


function extend() {
	var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    source = arguments[1],
	    p = void 0;


	for (p in source) target[p] = source[p];
	return target;
}

var SUPPORT_ADDEVENTLISTENER = !!("addEventListener" in document),
    SUPPORT_PASSIVE = function () {
	var supportsPassiveOption = !1;

	try {
		SUPPORT_ADDEVENTLISTENER && Object.defineProperty && document.addEventListener("test", null, Object.defineProperty({}, "passive", {
			get: function get() {
				supportsPassiveOption = !0;
			}
		}));
	} catch (e) {}
	return supportsPassiveOption;
}();


function addEvent(element, type, handler, eventListenerOptions) {
	if (SUPPORT_ADDEVENTLISTENER) {
		var options = eventListenerOptions || !1;

		(typeof eventListenerOptions === "undefined" ? "undefined" : (0, _typeof3.default)(eventListenerOptions)) === "object" && (options = !!SUPPORT_PASSIVE && eventListenerOptions), element.addEventListener(type, handler, options);
	} else element.attachEvent ? element.attachEvent("on" + type, handler) : element["on" + type] = handler;
}

function removeEvent(element, type, handler) {
	element.removeEventListener ? element.removeEventListener(type, handler, !1) : element.detachEvent ? element.detachEvent("on" + type, handler) : element["on" + type] = null;
}

/**
 * Check if is array
 * @param arr *
 * @returns {Boolean}
 * @private
 */
var isArray = function (arr) {
	return arr && arr.constructor === Array;
},
    isObject = function (obj) {
	return obj && !obj.nodeType && (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object" && !isArray(obj);
},
    merge = function (target) {
	for (var _len = arguments.length, objectN = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) objectN[_key - 1] = arguments[_key];

	if (!objectN.length || objectN.length === 1 && !objectN[0]) return target;

	var source = objectN.shift();

	return isObject(target) && isObject(source) && Object.keys(source).forEach(function (key) {
		var value = source[key];

		isObject(value) ? (!target[key] && (target[key] = {}), target[key] = merge(target[key], value)) : target[key] = isArray(value) ? value.concat() : value;
	}), extend.apply(undefined, [target].concat(objectN));
};

/**
 * Check if is object
 * @param {Object} obj
 * @returns {Boolean}
 * @private
 */


/**
 * Merge object returning new object
 * @param {Object} target
 * @param {Object} objectN
 * @returns {Object} merged target object
 * @private
 * @example
 *  var target = { a: 1 };
 *  utils.extend(target, { b: 2, c: 3 });
 *  target;  // { a: 1, b: 2, c: 3 };
 */
exports.isValue = isValue;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.notEmpty = notEmpty;
exports.ceil10 = ceil10;
exports.isFunction = isFunction;
exports.asHalfPixel = asHalfPixel;
exports.getOption = getOption;
exports.isString = isString;
exports.hasValue = hasValue;
exports.sanitise = sanitise;
exports.getPathBox = getPathBox;
exports.diffDomain = diffDomain;
exports.isEmpty = isEmpty;
exports.getBrushSelection = getBrushSelection;
exports.brushEmpty = brushEmpty;
exports.extend = extend;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.getRectSegList = getRectSegList;
exports.merge = merge;
exports.isArray = isArray;
exports.isObject = isObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;

var _classCallCheck2 = __webpack_require__(6),
    _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
    _d = __webpack_require__(2),
    _Axis = __webpack_require__(7),
    _Axis2 = _interopRequireDefault(_Axis),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal chart class.
 * - Note: Instantiated internally, not exposed for public.
 * @class ChartInternal
 * @ignore
 * @private
*/
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var ChartInternal = function () {
	function ChartInternal(api) {
		(0, _classCallCheck3.default)(this, ChartInternal);

		var $$ = this;

		$$.api = api, $$.config = $$.getOptions(), $$.data = {}, $$.cache = {}, $$.axes = {};
	}

	return ChartInternal.prototype.beforeInit = function beforeInit() {
		// can do something
	}, ChartInternal.prototype.afterInit = function afterInit() {
		// can do something
	}, ChartInternal.prototype.init = function init() {
		var $$ = this,
		    config = $$.config;


		if ($$.initParams(), config.data_url) $$.convertUrlToData(config.data_url, config.data_mimeType, config.data_headers, config.data_keys, $$.initWithData);else if (config.data_json) $$.initWithData($$.convertJsonToData(config.data_json, config.data_keys));else if (config.data_rows) $$.initWithData($$.convertRowsToData(config.data_rows));else if (config.data_columns) $$.initWithData($$.convertColumnsToData(config.data_columns));else throw Error("url or json or rows or columns is required.");
	}, ChartInternal.prototype.initParams = function initParams() {
		var $$ = this,
		    config = $$.config;
		$$.clipId = "bb-" + +new Date() + "-clip", $$.clipIdForXAxis = $$.clipId + "-xaxis", $$.clipIdForYAxis = $$.clipId + "-yaxis", $$.clipIdForGrid = $$.clipId + "-grid", $$.clipIdForSubchart = $$.clipId + "-subchart", $$.clipPath = $$.getClipPath($$.clipId), $$.clipPathForXAxis = $$.getClipPath($$.clipIdForXAxis), $$.clipPathForYAxis = $$.getClipPath($$.clipIdForYAxis), $$.clipPathForGrid = $$.getClipPath($$.clipIdForGrid), $$.clipPathForSubchart = $$.getClipPath($$.clipIdForSubchart), $$.dragStart = null, $$.dragging = !1, $$.flowing = !1, $$.cancelClick = !1, $$.mouseover = !1, $$.transiting = !1, $$.color = $$.generateColor(), $$.levelColor = $$.generateLevelColor(), $$.dataTimeFormat = config.data_xLocaltime ? _d.timeParse : _d.utcParse, $$.axisTimeFormat = config.axis_x_localtime ? _d.timeFormat : _d.utcFormat, $$.defaultAxisTimeFormat = function (d) {
			var specifier = d.getMilliseconds() && ".%L" || d.getSeconds() && ".:%S" || d.getMinutes() && "%I:%M" || d.getHours() && "%I %p" || d.getDay() && d.getDate() !== 1 && "%-m/%-d" || d.getDate() !== 1 && "%b %d" || d.getMonth() && "%-m/%-d" || "%Y/%-m/%-d";

			return $$.axisTimeFormat(specifier)(d);
		}, $$.hiddenTargetIds = [], $$.hiddenLegendIds = [], $$.focusedTargetIds = [], $$.defocusedTargetIds = [], $$.xOrient = config.axis_rotated ? "left" : "bottom", $$.yOrient = config.axis_rotated ? config.axis_y_inner ? "top" : "bottom" : config.axis_y_inner ? "right" : "left", $$.y2Orient = config.axis_rotated ? config.axis_y2_inner ? "bottom" : "top" : config.axis_y2_inner ? "left" : "right", $$.subXOrient = config.axis_rotated ? "left" : "bottom", $$.isLegendRight = config.legend_position === "right", $$.isLegendInset = config.legend_position === "inset", $$.isLegendTop = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "top-right", $$.isLegendLeft = config.legend_inset_anchor === "top-left" || config.legend_inset_anchor === "bottom-left", $$.legendStep = 0, $$.legendItemWidth = 0, $$.legendItemHeight = 0, $$.currentMaxTickWidths = {
			x: 0,
			y: 0,
			y2: 0
		}, $$.rotated_padding_left = 30, $$.rotated_padding_right = config.axis_rotated && !config.axis_x_show ? 0 : 30, $$.rotated_padding_top = 5, $$.withoutFadeIn = {}, $$.intervalForObserveInserted = undefined, $$.inputType = $$.convertInputType(), $$.axes.subx = (0, _d.selectAll)([]);
	}, ChartInternal.prototype.initWithData = function initWithData(data) {
		var $$ = this,
		    config = $$.config,
		    binding = !0;
		$$.axis = new _Axis2.default($$), $$.initPie && $$.initPie(), $$.initBrush && $$.initBrush(), $$.initZoom && $$.initZoom(), $$.selectChart = config.bindto ? typeof config.bindto.node === "function" ? config.bindto : (0, _d.select)(config.bindto) : (0, _d.selectAll)([]), $$.selectChart.empty() && ($$.selectChart = (0, _d.select)(document.createElement("div")).style("opacity", "0"), $$.observeInserted($$.selectChart), binding = !1), $$.selectChart.html("").classed("bb", !0), $$.data.xs = {}, $$.data.targets = $$.convertDataToTargets(data), config.data_filter && ($$.data.targets = $$.data.targets.filter(config.data_filter)), config.data_hide && $$.addHiddenTargetIds(config.data_hide === !0 ? $$.mapToIds($$.data.targets) : config.data_hide), config.legend_hide && $$.addHiddenLegendIds(config.legend_hide === !0 ? $$.mapToIds($$.data.targets) : config.legend_hide), $$.hasType("gauge") && (config.legend_show = !1), $$.updateSizes(), $$.updateScales(), $$.x.domain((0, _d.extent)($$.getXDomain($$.data.targets))), $$.y.domain($$.getYDomain($$.data.targets, "y")), $$.y2.domain($$.getYDomain($$.data.targets, "y2")), $$.subX.domain($$.x.domain()), $$.subY.domain($$.y.domain()), $$.subY2.domain($$.y2.domain()), $$.orgXDomain = $$.x.domain();


		// -- Basic Elements --

		var isTouch = $$.inputType === "touch";

		// Define svg
		$$.svg = $$.selectChart.append("svg").style("overflow", "hidden").on(isTouch ? "touchstart" : "mouseenter", function () {
			return config.onover.call($$);
		}).on(isTouch ? "touchend" : "mouseleave", function () {
			return config.onout.call($$);
		}), $$.config.svg_classname && $$.svg.attr("class", $$.config.svg_classname);


		// Define defs
		var defs = $$.svg.append("defs");

		$$.clipChart = $$.appendClip(defs, $$.clipId), $$.clipXAxis = $$.appendClip(defs, $$.clipIdForXAxis), $$.clipYAxis = $$.appendClip(defs, $$.clipIdForYAxis), $$.clipGrid = $$.appendClip(defs, $$.clipIdForGrid), $$.clipSubchart = $$.appendClip(defs, $$.clipIdForSubchart), $$.updateSvgSize();


		// Set initialized scales to brush and zoom
		// if ($$.brush) { $$.brush.scale($$.subX); }
		// if (config.zoom_enabled) { $$.zoom.scale($$.x); }

		// Define regions
		var main = $$.svg.append("g").attr("transform", $$.getTranslate("main"));

		$$.main = main, config.subchart_show && $$.initSubchart && $$.initSubchart(), $$.initTooltip && $$.initTooltip(), $$.initLegend && $$.initLegend(), $$.initTitle && $$.initTitle(), main.append("text").attr("class", _classes2.default.text + " " + _classes2.default.empty).attr("text-anchor", "middle" // horizontal centering of text at x position in all browsers.
		).attr("dominant-baseline", "middle"), $$.initRegion(), $$.initGrid(), main.append("g").attr("clip-path", $$.clipPath).attr("class", _classes2.default.chart), config.grid_lines_front && $$.initGridLines(), $$.initEventRect(), $$.initChartElements(), main.insert("rect", config.zoom_privileged ? null : "g." + _classes2.default.regions).attr("class", _classes2.default.zoomRect).attr("width", $$.width).attr("height", $$.height).style("opacity", "0").on("dblclick.zoom", null), config.axis_x_extent && $$.brush.scale($$.getDefaultExtent()), $$.axis.init(), $$.updateTargets($$.data.targets), binding && ($$.updateDimension(), $$.config.oninit.call($$), $$.redraw({
			withTransition: !1,
			withTransform: !0,
			withUpdateXDomain: !0,
			withUpdateOrgXDomain: !0,
			withTransitionForAxis: !1
		})), $$.bindResize(), $$.api.element = $$.selectChart.node();
	}, ChartInternal.prototype.initChartElements = function initChartElements() {
		this.initBar && this.initBar(), this.initLine && this.initLine(), this.initArc && this.initArc(), this.initGauge && this.initGauge(), this.initText && this.initText();
	}, ChartInternal.prototype.smoothLines = function smoothLines(el, type) {
		type === "grid" && el.each(function () {
			var g = (0, _d.select)(this),
			    x1 = g.attr("x1"),
			    x2 = g.attr("x2"),
			    y1 = g.attr("y1"),
			    y2 = g.attr("y2");
			g.attr({
				"x1": Math.ceil(x1),
				"x2": Math.ceil(x2),
				"y1": Math.ceil(y1),
				"y2": Math.ceil(y2)
			});
		});
	}, ChartInternal.prototype.updateSizes = function updateSizes() {
		var $$ = this,
		    config = $$.config,
		    legendHeight = $$.legend ? $$.getLegendHeight() : 0,
		    legendWidth = $$.legend ? $$.getLegendWidth() : 0,
		    legendHeightForBottom = $$.isLegendRight || $$.isLegendInset ? 0 : legendHeight,
		    hasArc = $$.hasArcType(),
		    xAxisHeight = config.axis_rotated || hasArc ? 0 : $$.getHorizontalAxisHeight("x"),
		    subchartHeight = config.subchart_show && !hasArc ? config.subchart_size_height + xAxisHeight : 0;
		$$.currentWidth = $$.getCurrentWidth(), $$.currentHeight = $$.getCurrentHeight(), $$.margin = config.axis_rotated ? {
			top: $$.getHorizontalAxisHeight("y2") + $$.getCurrentPaddingTop(),
			right: hasArc ? 0 : $$.getCurrentPaddingRight(),
			bottom: $$.getHorizontalAxisHeight("y") + legendHeightForBottom + $$.getCurrentPaddingBottom(),
			left: subchartHeight + (hasArc ? 0 : $$.getCurrentPaddingLeft())
		} : {
			top: 4 + $$.getCurrentPaddingTop(), // for top tick text
			right: hasArc ? 0 : $$.getCurrentPaddingRight(),
			bottom: xAxisHeight + subchartHeight + legendHeightForBottom + $$.getCurrentPaddingBottom(),
			left: hasArc ? 0 : $$.getCurrentPaddingLeft()
		}, $$.margin2 = config.axis_rotated ? {
			top: $$.margin.top,
			right: NaN,
			bottom: 20 + legendHeightForBottom,
			left: $$.rotated_padding_left
		} : {
			top: $$.currentHeight - subchartHeight - legendHeightForBottom,
			right: NaN,
			bottom: xAxisHeight + legendHeightForBottom,
			left: $$.margin.left
		}, $$.margin3 = {
			top: 0,
			right: NaN,
			bottom: 0,
			left: 0
		}, $$.updateSizeForLegend && $$.updateSizeForLegend(legendHeight, legendWidth), $$.width = $$.currentWidth - $$.margin.left - $$.margin.right, $$.height = $$.currentHeight - $$.margin.top - $$.margin.bottom, $$.width < 0 && ($$.width = 0), $$.height < 0 && ($$.height = 0), $$.width2 = config.axis_rotated ? $$.margin.left - $$.rotated_padding_left - $$.rotated_padding_right : $$.width, $$.height2 = config.axis_rotated ? $$.height : $$.currentHeight - $$.margin2.top - $$.margin2.bottom, $$.width2 < 0 && ($$.width2 = 0), $$.height2 < 0 && ($$.height2 = 0), $$.arcWidth = $$.width - ($$.isLegendRight ? legendWidth + 10 : 0), $$.arcHeight = $$.height - ($$.isLegendRight ? 0 : 10), $$.hasType("gauge") && !config.gauge_fullCircle && ($$.arcHeight += $$.height - $$.getGaugeLabelHeight()), $$.updateRadius && $$.updateRadius(), $$.isLegendRight && hasArc && ($$.margin3.left = $$.arcWidth / 2 + $$.radiusExpanded * 1.1);
	}, ChartInternal.prototype.updateTargets = function updateTargets(targets) {
		var $$ = this;

		// -- Main --

		// -- Text -- //
		$$.updateTargetsForText(targets), $$.updateTargetsForBar(targets), $$.updateTargetsForLine(targets), $$.hasArcType() && $$.updateTargetsForArc && $$.updateTargetsForArc(targets), $$.updateTargetsForSubchart && $$.updateTargetsForSubchart(targets), $$.showTargets();
	}, ChartInternal.prototype.showTargets = function showTargets() {
		var $$ = this;

		$$.svg.selectAll("." + _classes2.default.target).filter(function (d) {
			return $$.isTargetToShow(d.id);
		}).transition().duration($$.config.transition_duration).style("opacity", "1");
	}, ChartInternal.prototype.redraw = function redraw() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    transitionsValue = arguments[1],
		    $$ = this,
		    main = $$.main,
		    config = $$.config,
		    areaIndices = $$.getShapeIndices($$.isAreaType),
		    barIndices = $$.getShapeIndices($$.isBarType),
		    lineIndices = $$.getShapeIndices($$.isLineType),
		    waitForDraw = void 0,
		    flow = void 0,
		    hideAxis = $$.hasArcType(),
		    targetsToShow = $$.filterTargetsToShow($$.data.targets),
		    xv = $$.xv.bind($$),
		    tickValues = void 0,
		    intervalForCulling = void 0,
		    xDomainForZoom = void 0,
		    withY = (0, _util.getOption)(options, "withY", !0),
		    withSubchart = (0, _util.getOption)(options, "withSubchart", !0),
		    withTransition = (0, _util.getOption)(options, "withTransition", !0),
		    withTransform = (0, _util.getOption)(options, "withTransform", !1),
		    withUpdateXDomain = (0, _util.getOption)(options, "withUpdateXDomain", !1),
		    withUpdateOrgXDomain = (0, _util.getOption)(options, "withUpdateOrgXDomain", !1),
		    withTrimXDomain = (0, _util.getOption)(options, "withTrimXDomain", !0),
		    withUpdateXAxis = (0, _util.getOption)(options, "withUpdateXAxis", withUpdateXDomain),
		    withLegend = (0, _util.getOption)(options, "withLegend", !1),
		    withEventRect = (0, _util.getOption)(options, "withEventRect", !0),
		    withDimension = (0, _util.getOption)(options, "withDimension", !0),
		    withTransitionForExit = (0, _util.getOption)(options, "withTransitionForExit", withTransition),
		    withTransitionForAxis = (0, _util.getOption)(options, "withTransitionForAxis", withTransition),
		    duration = withTransition ? config.transition_duration : 0,
		    durationForExit = withTransitionForExit ? duration : 0,
		    durationForAxis = withTransitionForAxis ? duration : 0,
		    transitions = transitionsValue || $$.axis.generateTransitions(durationForAxis);


		// show/hide if manual culling needed
		if ($$.inputType === "touch" && $$.hideTooltip(), withLegend && config.legend_show ? $$.updateLegend($$.mapToIds($$.data.targets), options, transitions) : withDimension && $$.updateDimension(!0), $$.isCategorized() && targetsToShow.length === 0 && $$.x.domain([0, $$.axes.x.selectAll(".tick").size()]), targetsToShow.length ? ($$.updateXDomain(targetsToShow, withUpdateXDomain, withUpdateOrgXDomain, withTrimXDomain), !config.axis_x_tick_values && (tickValues = $$.axis.updateXAxisTickValues(targetsToShow))) : ($$.xAxis.tickValues([]), $$.subXAxis.tickValues([])), config.zoom_rescale && !options.flow && (xDomainForZoom = $$.x.orgDomain()), $$.y.domain($$.getYDomain(targetsToShow, "y", xDomainForZoom)), $$.y2.domain($$.getYDomain(targetsToShow, "y2", xDomainForZoom)), !config.axis_y_tick_values && config.axis_y_tick_count && $$.yAxis.tickValues($$.axis.generateTickValues($$.y.domain(), config.axis_y_tick_count, $$.isTimeSeriesY())), !config.axis_y2_tick_values && config.axis_y2_tick_count && $$.y2Axis.tickValues($$.axis.generateTickValues($$.y2.domain(), config.axis_y2_tick_count)), $$.axis.redraw(transitions, hideAxis), $$.axis.updateLabels(withTransition), (withUpdateXDomain || withUpdateXAxis) && targetsToShow.length) if (config.axis_x_tick_culling && tickValues) {
				for (var _i = 1; _i < tickValues.length; _i++) if (tickValues.length / _i < config.axis_x_tick_culling_max) {
					intervalForCulling = _i;

					break;
				}

				$$.svg.selectAll("." + _classes2.default.axisX + " .tick text").each(function (e) {
					var index = tickValues.indexOf(e);

					index >= 0 && (0, _d.select)(this).style("display", index % intervalForCulling ? "none" : "block");
				});
			} else $$.svg.selectAll("." + _classes2.default.axisX + " .tick text").style("display", "block");

		// setup drawer - MEMO: these must be called after axis updated
		var drawArea = $$.generateDrawArea ? $$.generateDrawArea(areaIndices, !1) : undefined,
		    drawBar = $$.generateDrawBar ? $$.generateDrawBar(barIndices) : undefined,
		    drawLine = $$.generateDrawLine ? $$.generateDrawLine(lineIndices, !1) : undefined,
		    xForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, !0),
		    yForText = $$.generateXYForText(areaIndices, barIndices, lineIndices, !1);

		withY && ($$.subY.domain($$.getYDomain(targetsToShow, "y")), $$.subY2.domain($$.getYDomain(targetsToShow, "y2"))), $$.updateXgridFocus(), main.select("text." + _classes2.default.text + "." + _classes2.default.empty).attr("x", $$.width / 2).attr("y", $$.height / 2).text(config.data_empty_label_text).transition().style("opacity", targetsToShow.length ? 0 : 1), $$.updateGrid(duration), $$.updateRegion(duration), $$.updateBar(durationForExit), $$.updateLine(durationForExit), $$.updateArea(durationForExit), $$.updateCircle(), $$.hasDataLabel() && $$.updateText(durationForExit), $$.redrawTitle && $$.redrawTitle(), $$.redrawArc && $$.redrawArc(duration, durationForExit, withTransform), config.subchart_show && $$.redrawSubchart && $$.redrawSubchart(withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices), main.selectAll("." + _classes2.default.selectedCircles).filter($$.isBarType.bind($$)).selectAll("circle").remove(), config.interaction_enabled && !options.flow && withEventRect && ($$.redrawEventRect(), $$.updateZoom && $$.updateZoom()), $$.updateCircleY();


		// generate circle x/y functions depending on updated params
		var cx = ($$.config.axis_rotated ? $$.circleY : $$.circleX).bind($$),
		    cy = ($$.config.axis_rotated ? $$.circleX : $$.circleY).bind($$);
		options.flow && (flow = $$.generateFlow({
			targets: targetsToShow,
			flow: options.flow,
			duration: options.flow.duration,
			drawBar: drawBar,
			drawLine: drawLine,
			drawArea: drawArea,
			cx: cx,
			cy: cy,
			xv: xv,
			xForText: xForText,
			yForText: yForText
		})), (duration || flow) && $$.isTabVisible() ? (0, _d.transition)().duration(duration).each(function () {
			waitForDraw = $$.generateWait(), [$$.redrawBar(drawBar, !0), $$.redrawLine(drawLine, !0), $$.redrawArea(drawArea, !0), $$.redrawCircle(cx, cy, !0, flow), $$.redrawText(xForText, yForText, options.flow, !0), $$.redrawRegion(!0), $$.redrawGrid(!0)].reduce(function (acc, t1) {
				return t1.forEach(function (t2) {
					acc.push(t2);
				}), acc;
			}, []).forEach(function (t) {
				waitForDraw.add(t);
			});
		}).call(waitForDraw, function () {
			flow && flow(), config.onrendered && config.onrendered.call($$);
		}) : ($$.redrawBar(drawBar), $$.redrawLine(drawLine), $$.redrawArea(drawArea), $$.redrawCircle(cx, cy), $$.redrawText(xForText, yForText, options.flow), $$.redrawRegion(), $$.redrawGrid(), config.onrendered && config.onrendered.call($$)), $$.mapToIds($$.data.targets).forEach(function (id) {
			$$.withoutFadeIn[id] = !0;
		});
	}, ChartInternal.prototype.updateAndRedraw = function updateAndRedraw() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    $$ = this,
		    config = $$.config,
		    transitions = void 0;
		options.withTransition = (0, _util.getOption)(options, "withTransition", !0), options.withTransform = (0, _util.getOption)(options, "withTransform", !1), options.withLegend = (0, _util.getOption)(options, "withLegend", !1), options.withUpdateXDomain = !0, options.withUpdateOrgXDomain = !0, options.withTransitionForExit = !1, options.withTransitionForTransform = (0, _util.getOption)(options, "withTransitionForTransform", options.withTransition), $$.updateSizes(), options.withLegend && config.legend_show || (transitions = $$.axis.generateTransitions(options.withTransitionForAxis ? config.transition_duration : 0), $$.updateScales(), $$.updateSvgSize(), $$.transformAll(options.withTransitionForTransform, transitions)), $$.redraw(options, transitions);
	}, ChartInternal.prototype.redrawWithoutRescale = function redrawWithoutRescale() {
		this.redraw({
			withY: !1,
			withSubchart: !1,
			withEventRect: !1,
			withTransitionForAxis: !1
		});
	}, ChartInternal.prototype.isTimeSeries = function isTimeSeries() {
		return this.config.axis_x_type === "timeseries";
	}, ChartInternal.prototype.isCategorized = function isCategorized() {
		return this.config.axis_x_type.indexOf("categor") >= 0;
	}, ChartInternal.prototype.isCustomX = function isCustomX() {
		var $$ = this,
		    config = $$.config;


		return !$$.isTimeSeries() && (config.data_x || (0, _util.notEmpty)(config.data_xs));
	}, ChartInternal.prototype.isTimeSeriesY = function isTimeSeriesY() {
		return this.config.axis_y_type === "timeseries";
	}, ChartInternal.prototype.getTranslate = function getTranslate(target) {
		var $$ = this,
		    config = $$.config,
		    x = void 0,
		    y = void 0;


		return target === "main" ? (x = (0, _util.asHalfPixel)($$.margin.left), y = (0, _util.asHalfPixel)($$.margin.top)) : target === "context" ? (x = (0, _util.asHalfPixel)($$.margin2.left), y = (0, _util.asHalfPixel)($$.margin2.top)) : target === "legend" ? (x = $$.margin3.left, y = $$.margin3.top) : target === "x" ? (x = 0, y = config.axis_rotated ? 0 : $$.height) : target === "y" ? (x = 0, y = config.axis_rotated ? $$.height : 0) : target === "y2" ? (x = config.axis_rotated ? 0 : $$.width, y = config.axis_rotated ? 1 : 0) : target === "subx" ? (x = 0, y = config.axis_rotated ? 0 : $$.height2) : target === "arc" && (x = $$.arcWidth / 2, y = $$.arcHeight / 2), "translate(" + x + ", " + y + ")";
	}, ChartInternal.prototype.initialOpacity = function initialOpacity(d) {
		return d.value !== null && this.withoutFadeIn[d.id] ? "1" : "0";
	}, ChartInternal.prototype.initialOpacityForCircle = function initialOpacityForCircle(d) {
		return d.value !== null && this.withoutFadeIn[d.id] ? this.opacityForCircle(d) : "0";
	}, ChartInternal.prototype.opacityForCircle = function opacityForCircle(d) {
		var opacity = this.config.point_show ? "1" : "0";

		return (0, _util.isValue)(d.value) ? this.isScatterType(d) ? "0.5" : opacity : "0";
	}, ChartInternal.prototype.opacityForText = function opacityForText() {
		return this.hasDataLabel() ? "1" : "0";
	}, ChartInternal.prototype.xx = function xx(d) {
		return this.config.zoom_enabled && this.zoomScale ? d ? this.zoomScale(d.x) : null : d ? this.x(d.x) : null;
	}, ChartInternal.prototype.xv = function xv(d) {
		var $$ = this,
		    value = d.value;


		return $$.isTimeSeries() ? value = $$.parseDate(d.value) : $$.isCategorized() && typeof d.value === "string" && (value = $$.config.axis_x_categories.indexOf(d.value)), Math.ceil($$.x(value));
	}, ChartInternal.prototype.yv = function yv(d) {
		var $$ = this,
		    yScale = d.axis && d.axis === "y2" ? $$.y2 : $$.y;


		return Math.ceil(yScale(d.value));
	}, ChartInternal.prototype.subxx = function subxx(d) {
		return d ? this.subX(d.x) : null;
	}, ChartInternal.prototype.transformMain = function transformMain(withTransition, transitions) {
		var $$ = this,
		    xAxis = void 0,
		    yAxis = void 0,
		    y2Axis = void 0;
		transitions && transitions.axisX ? xAxis = transitions.axisX : (xAxis = $$.main.select("." + _classes2.default.axisX), withTransition && (xAxis = xAxis.transition())), transitions && transitions.axisY ? yAxis = transitions.axisY : (yAxis = $$.main.select("." + _classes2.default.axisY), withTransition && (yAxis = yAxis.transition())), transitions && transitions.axisY2 ? y2Axis = transitions.axisY2 : (y2Axis = $$.main.select("." + _classes2.default.axisY2), withTransition && (y2Axis = y2Axis.transition())), (withTransition ? $$.main.transition() : $$.main).attr("transform", $$.getTranslate("main")), xAxis.attr("transform", $$.getTranslate("x")), yAxis.attr("transform", $$.getTranslate("y")), y2Axis.attr("transform", $$.getTranslate("y2")), $$.main.select("." + _classes2.default.chartArcs).attr("transform", $$.getTranslate("arc"));
	}, ChartInternal.prototype.transformAll = function transformAll(withTransition, transitions) {
		var $$ = this;

		$$.transformMain(withTransition, transitions), $$.config.subchart_show && $$.transformContext(withTransition, transitions), $$.legend && $$.transformLegend(withTransition);
	}, ChartInternal.prototype.updateSvgSize = function updateSvgSize() {
		var $$ = this,
		    brush = $$.svg.select("." + _classes2.default.brush + " .overlay"),
		    brushHeight = brush.size() ? brush.attr("height") : 0;
		$$.svg.attr("width", $$.currentWidth).attr("height", $$.currentHeight), $$.svg.selectAll(["#" + $$.clipId, "#" + $$.clipIdForGrid]).select("rect").attr("width", $$.width).attr("height", $$.height), $$.svg.select("#" + $$.clipIdForXAxis).select("rect").attr("x", $$.getXAxisClipX.bind($$)).attr("y", $$.getXAxisClipY.bind($$)).attr("width", $$.getXAxisClipWidth.bind($$)).attr("height", $$.getXAxisClipHeight.bind($$)), $$.svg.select("#" + $$.clipIdForYAxis).select("rect").attr("x", $$.getYAxisClipX.bind($$)).attr("y", $$.getYAxisClipY.bind($$)).attr("width", $$.getYAxisClipWidth.bind($$)).attr("height", $$.getYAxisClipHeight.bind($$)), $$.svg.select("#" + $$.clipIdForSubchart).select("rect").attr("width", $$.width).attr("height", brushHeight), $$.svg.select("." + _classes2.default.zoomRect).attr("width", $$.width).attr("height", $$.height), $$.selectChart.style("max-height", $$.currentHeight + "px"), $$.brush && $$.brush.scale($$.subX, brushHeight);
	}, ChartInternal.prototype.updateDimension = function updateDimension(withoutAxis) {
		var $$ = this;

		withoutAxis || ($$.config.axis_rotated ? ($$.axes.x.call($$.xAxis), $$.axes.subx.call($$.subXAxis)) : ($$.axes.y.call($$.yAxis), $$.axes.y2.call($$.y2Axis))), $$.updateSizes(), $$.updateScales(withoutAxis), $$.updateSvgSize(), $$.transformAll(!1);
	}, ChartInternal.prototype.observeInserted = function observeInserted(selection) {
		var $$ = this;

		if (typeof MutationObserver === "undefined") return void (console && console.error && console.error("MutationObserver not defined."));

		var observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				mutation.type === "childList" && mutation.previousSibling && (observer.disconnect(), $$.intervalForObserveInserted = window.setInterval(function () {
					selection.node().parentNode && (window.clearInterval($$.intervalForObserveInserted), $$.updateDimension(), $$.brush && $$.brush.update(), $$.config.oninit.call($$), $$.redraw({
						withTransform: !0,
						withUpdateXDomain: !0,
						withUpdateOrgXDomain: !0,
						withTransition: !1,
						withTransitionForTransform: !1,
						withLegend: !0
					}), selection.transition().style("opacity", "1"));
				}, 10));
			});
		});

		observer.observe(selection.node(), {
			attributes: !0,
			childList: !0,
			characterData: !0
		});
	}, ChartInternal.prototype.bindResize = function bindResize() {
		var $$ = this,
		    config = $$.config;
		$$.resizeFunction = $$.generateResize(), $$.resizeFunction.add(function () {
			config.onresize.call($$);
		}), config.resize_auto && $$.resizeFunction.add(function () {
			$$.resizeTimeout !== undefined && window.clearTimeout($$.resizeTimeout), $$.resizeTimeout = window.setTimeout(function () {
				delete $$.resizeTimeout, $$.api.flush();
			}, 100);
		}), $$.resizeFunction.add(function () {
			config.onresized.call($$);
		}), (0, _util.addEvent)(window, "resize", $$.resizeFunction);
	}, ChartInternal.prototype.generateResize = function generateResize() {

		function callResizeFunctions() {
			resizeFunctions.forEach(function (f) {
				return f();
			});
		}

		var resizeFunctions = [];

		return callResizeFunctions.add = function (f) {
			resizeFunctions.push(f);
		}, callResizeFunctions.remove = function (f) {
			for (var i = 0; i < resizeFunctions.length; i++) if (resizeFunctions[i] === f) {
				resizeFunctions.splice(i, 1);

				break;
			}
		}, callResizeFunctions;
	}, ChartInternal.prototype.endall = function endall(transition, callback) {
		var n = 0;

		transition.each(function () {
			return ++n;
		}).on("end", function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];

			--n || callback.apply.apply(callback, [this].concat(args));
		});
	}, ChartInternal.prototype.generateWait = function generateWait() {
		var transitionsToWait = [],
		    f = function (transition, callback) {

			function loop() {
				var done = 0;

				transitionsToWait.forEach(function (t) {
					if (t.empty()) return void (done += 1);

					try {
						t.transition();
					} catch (e) {
						done += 1;
					}
				}), done === transitionsToWait.length ? (clearTimeout(timer), callback && callback()) : timer = setTimeout(loop, 20);
			}

			var timer = void 0;loop();
		};


		return f.add = function (transition) {
			Array.isArray(transition) ? transitionsToWait = [].concat(transitionsToWait, transition) : transitionsToWait.push(transition);
		}, f;
	}, ChartInternal.prototype.parseDate = function parseDate(date) {
		var $$ = this,
		    parsedDate = void 0;


		return date instanceof Date ? parsedDate = date : typeof date === "string" ? parsedDate = $$.dataTimeFormat($$.config.data_xFormat)(date) : typeof date === "number" && !isNaN(date) && (parsedDate = new Date(+date)), (!parsedDate || isNaN(+parsedDate)) && console && console.error && console.error("Failed to parse x '" + date + "' to Date object"), parsedDate;
	}, ChartInternal.prototype.isTabVisible = function isTabVisible() {
		var hidden = void 0;

		return typeof document.hidden === "undefined" ? typeof document.mozHidden === "undefined" ? typeof document.msHidden === "undefined" ? typeof document.webkitHidden !== "undefined" && (hidden = "webkitHidden") : hidden = "msHidden" : hidden = "mozHidden" : hidden = "hidden", !document[hidden];
	}, ChartInternal.prototype.convertInputType = function convertInputType() {
		var $$ = this,
		    config = $$.config,
		    hasMouse = !!config.interaction_inputType_mouse && !!("onmouseover" in window),
		    hasTouch = void 0;


		return config.interaction_inputType_touch ? (hasTouch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, /PhantomJS/.test(window.navigator.userAgent) && (hasTouch = !1)) : hasTouch = !1, hasTouch && "touch" || hasMouse && "mouse" || null;
	}, ChartInternal;
}();

exports.default = ChartInternal;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var CLASS = {
	target: "bb-target",
	chart: "bb-chart",
	chartLine: "bb-chart-line",
	chartLines: "bb-chart-lines",
	chartBar: "bb-chart-bar",
	chartBars: "bb-chart-bars",
	chartText: "bb-chart-text",
	chartTexts: "bb-chart-texts",
	chartArc: "bb-chart-arc",
	chartArcs: "bb-chart-arcs",
	chartArcsTitle: "bb-chart-arcs-title",
	chartArcsBackground: "bb-chart-arcs-background",
	chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
	chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
	chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
	selectedCircle: "bb-selected-circle",
	selectedCircles: "bb-selected-circles",
	eventRect: "bb-event-rect",
	eventRects: "bb-event-rects",
	eventRectsSingle: "bb-event-rects-single",
	eventRectsMultiple: "bb-event-rects-multiple",
	zoomRect: "bb-zoom-rect",
	brush: "bb-brush",
	focused: "bb-focused",
	defocused: "bb-defocused",
	region: "bb-region",
	regions: "bb-regions",
	title: "bb-title",
	tooltipContainer: "bb-tooltip-container",
	tooltip: "bb-tooltip",
	tooltipName: "bb-tooltip-name",
	shape: "bb-shape",
	shapes: "bb-shapes",
	line: "bb-line",
	lines: "bb-lines",
	bar: "bb-bar",
	bars: "bb-bars",
	circle: "bb-circle",
	circles: "bb-circles",
	arc: "bb-arc",
	arcs: "bb-arcs",
	area: "bb-area",
	areas: "bb-areas",
	empty: "bb-empty",
	text: "bb-text",
	texts: "bb-texts",
	gaugeValue: "bb-gauge-value",
	grid: "bb-grid",
	gridLines: "bb-grid-lines",
	xgrid: "bb-xgrid",
	xgrids: "bb-xgrids",
	xgridLine: "bb-xgrid-line",
	xgridLines: "bb-xgrid-lines",
	xgridFocus: "bb-xgrid-focus",
	ygrid: "bb-ygrid",
	ygrids: "bb-ygrids",
	ygridLine: "bb-ygrid-line",
	ygridLines: "bb-ygrid-lines",
	axis: "bb-axis",
	axisX: "bb-axis-x",
	axisXLabel: "bb-axis-x-label",
	axisY: "bb-axis-y",
	axisYLabel: "bb-axis-y-label",
	axisY2: "bb-axis-y2",
	axisY2Label: "bb-axis-y2-label",
	legendBackground: "bb-legend-background",
	legendItem: "bb-legend-item",
	legendItemEvent: "bb-legend-item-event",
	legendItemTile: "bb-legend-item-tile",
	legendItemHidden: "bb-legend-item-hidden",
	legendItemFocused: "bb-legend-item-focused",
	dragarea: "bb-dragarea",
	EXPANDED: "_expanded_",
	SELECTED: "_selected_",
	INCLUDED: "_included_"
};

exports.default = CLASS;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;

var _classCallCheck2 = __webpack_require__(6),
    _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main chart class.
 * - Note: Instantiated via `bb.generate()`.
 * @class Chart
 * @example
 * var chart = bb.generate({
 *  data: {
 *    columns: [
 *	    ["x", "2015-11-02", "2015-12-01", "2016-01-01", "2016-02-01", "2016-03-01"],
 * 	    ["count1", 11, 8, 7, 6, 5 ],
 *	    ["count2", 9, 3, 6, 2, 8 ]
 *   ]}
 * }
 * @see {@link bb.generate} for the initialization.
*/
var Chart = function Chart(config) {
  (0, _classCallCheck3.default)(this, Chart);

  var $$ = new _ChartInternal2.default(this);

  this.internal = $$, $$.loadConfig(config), $$.beforeInit(config), $$.init(), $$.afterInit(config), function bindThis(fn, target, argThis) {
    Object.keys(fn).forEach(function (key) {
      target[key] = fn[key].bind(argThis), Object.keys(fn[key]).length && bindThis(fn[key], target[key], argThis);
    });
  }(Chart.prototype, this, this);
}; /**
    * Copyright (c) 2017 NAVER Corp.
    * billboard.js project is licensed under the MIT license
    * @license MIT
    * @ignore
    */


exports.default = Chart;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

exports.default = function (obj) {
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;

var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2),
    _classCallCheck2 = __webpack_require__(6),
    _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
    _d = __webpack_require__(2),
    _util = __webpack_require__(0),
    _bb = __webpack_require__(8),
    _bb2 = _interopRequireDefault(_bb),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var Axis = function () {
	function Axis(owner) {
		(0, _classCallCheck3.default)(this, Axis), this.owner = owner;
	}

	return Axis.prototype.init = function init() {
		var $$ = this.owner,
		    config = $$.config,
		    main = $$.main;
		$$.axes.x = main.append("g").attr("class", _classes2.default.axis + " " + _classes2.default.axisX).attr("clip-path", $$.clipPathForXAxis).attr("transform", $$.getTranslate("x")).style("visibility", config.axis_x_show ? "visible" : "hidden"), $$.axes.x.append("text").attr("class", _classes2.default.axisXLabel).attr("transform", config.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this)), $$.axes.y = main.append("g").attr("class", _classes2.default.axis + " " + _classes2.default.axisY).attr("clip-path", config.axis_y_inner ? "" : $$.clipPathForYAxis).attr("transform", $$.getTranslate("y")).style("visibility", config.axis_y_show ? "visible" : "hidden"), $$.axes.y.append("text").attr("class", _classes2.default.axisYLabel).attr("transform", config.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this)), $$.axes.y2 = main.append("g").attr("class", _classes2.default.axis + " " + _classes2.default.axisY2
		// clip-path?
		).attr("transform", $$.getTranslate("y2")).style("visibility", config.axis_y2_show ? "visible" : "hidden"), $$.axes.y2.append("text").attr("class", _classes2.default.axisY2Label).attr("transform", config.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this));
	}, Axis.prototype.getXAxis = function getXAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition, withoutRotateTickText) {
		var $$ = this.owner,
		    config = $$.config,
		    axisParams = {
			isCategory: $$.isCategorized(),
			withOuterTick: withOuterTick,
			tickMultiline: config.axis_x_tick_multiline,
			tickWidth: config.axis_x_tick_width,
			tickTextRotate: withoutRotateTickText ? 0 : config.axis_x_tick_rotate,
			withoutTransition: withoutTransition
		},
		    axis = (0, _bb2.default)(axisParams).scale(scale).orient(orient),
		    newTickValues = tickValues;


		return $$.isTimeSeries() && tickValues && typeof tickValues !== "function" && (newTickValues = tickValues.map(function (v) {
			return $$.parseDate(v);
		})), axis.tickFormat(tickFormat).tickValues(newTickValues), $$.isCategorized() && (axis.tickCentered(config.axis_x_tick_centered), (0, _util.isEmpty)(config.axis_x_tick_culling) && (config.axis_x_tick_culling = !1)), axis;
	}, Axis.prototype.updateXAxisTickValues = function updateXAxisTickValues(targets, axis) {
		var $$ = this.owner,
		    config = $$.config,
		    tickValues = void 0;

		return (config.axis_x_tick_fit || config.axis_x_tick_count) && (tickValues = this.generateTickValues($$.mapTargetsToUniqueXs(targets), config.axis_x_tick_count, $$.isTimeSeries())), axis ? axis.tickValues(tickValues) : ($$.xAxis.tickValues(tickValues), $$.subXAxis.tickValues(tickValues)), tickValues;
	}, Axis.prototype.getYAxis = function getYAxis(scale, orient, tickFormat, tickValues, withOuterTick, withoutTransition, withoutRotateTickText) {
		var $$ = this.owner,
		    config = $$.config,
		    axisParams = {
			withOuterTick: withOuterTick,
			withoutTransition: withoutTransition,
			tickTextRotate: withoutRotateTickText ? 0 : config.axis_y_tick_rotate
		},
		    axis = (0, _bb2.default)(axisParams).scale(scale).orient(orient).tickFormat(tickFormat);

		return $$.isTimeSeriesY() ? axis.ticks(config.axis_y_tick_time_value) : axis.tickValues(tickValues), axis;
	}, Axis.prototype.getId = function getId(id) {
		var config = this.owner.config;

		return id in config.data_axes ? config.data_axes[id] : "y";
	}, Axis.prototype.getXAxisTickFormat = function getXAxisTickFormat() {
		var $$ = this.owner,
		    config = $$.config,
		    format = void 0;


		return format = $$.isTimeSeries() ? $$.defaultAxisTimeFormat : $$.isCategorized() ? $$.categoryName : function (v) {
			return v < 0 ? v.toFixed(0) : v;
		}, config.axis_x_tick_format && ((0, _util.isFunction)(config.axis_x_tick_format) ? format = config.axis_x_tick_format : $$.isTimeSeries() && (format = function (date) {
			return date ? $$.axisTimeFormat(config.axis_x_tick_format)(date) : "";
		})), (0, _util.isFunction)(format) ? function (v) {
			return format.call($$, v);
		} : format;
	}, Axis.prototype.getTickValues = function getTickValues(tickValues, axis) {
		var values = void 0;

		return values = tickValues ? tickValues : axis ? axis.tickValues() : undefined, values;
	}, Axis.prototype.getXAxisTickValues = function getXAxisTickValues() {
		return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis);
	}, Axis.prototype.getYAxisTickValues = function getYAxisTickValues() {
		return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis);
	}, Axis.prototype.getY2AxisTickValues = function getY2AxisTickValues() {
		return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis);
	}, Axis.prototype.getLabelOptionByAxisId = function getLabelOptionByAxisId(axisId) {
		var $$ = this.owner,
		    config = $$.config,
		    option = void 0;

		return axisId === "y" ? option = config.axis_y_label : axisId === "y2" ? option = config.axis_y2_label : axisId === "x" && (option = config.axis_x_label), option;
	}, Axis.prototype.getLabelText = function getLabelText(axisId) {
		var option = this.getLabelOptionByAxisId(axisId),
		    text = void 0;

		return text = (0, _util.isString)(option) ? option : option ? option.text : null, text;
	}, Axis.prototype.setLabelText = function setLabelText(axisId, text) {
		var $$ = this.owner,
		    config = $$.config,
		    option = this.getLabelOptionByAxisId(axisId);
		(0, _util.isString)(option) ? axisId === "y" ? config.axis_y_label = text : axisId === "y2" ? config.axis_y2_label = text : axisId === "x" && (config.axis_x_label = text) : option && (option.text = text);
	}, Axis.prototype.getLabelPosition = function getLabelPosition(axisId, defaultPosition) {
		var option = this.getLabelOptionByAxisId(axisId),
		    position = (typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) === "object" && option.position ? option.position : defaultPosition;


		return {
			isInner: !!~position.indexOf("inner"),
			isOuter: !!~position.indexOf("outer"),
			isLeft: !!~position.indexOf("left"),
			isCenter: !!~position.indexOf("center"),
			isRight: !!~position.indexOf("right"),
			isTop: !!~position.indexOf("top"),
			isMiddle: !!~position.indexOf("middle"),
			isBottom: !!~position.indexOf("bottom")
		};
	}, Axis.prototype.getXAxisLabelPosition = function getXAxisLabelPosition() {
		return this.getLabelPosition("x", this.owner.config.axis_rotated ? "inner-top" : "inner-right");
	}, Axis.prototype.getYAxisLabelPosition = function getYAxisLabelPosition() {
		return this.getLabelPosition("y", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
	}, Axis.prototype.getY2AxisLabelPosition = function getY2AxisLabelPosition() {
		return this.getLabelPosition("y2", this.owner.config.axis_rotated ? "inner-right" : "inner-top");
	}, Axis.prototype.getLabelPositionById = function getLabelPositionById(id) {
		var label = void 0;

		return label = id === "y2" ? this.getY2AxisLabelPosition() : id === "y" ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition(), label;
	}, Axis.prototype.textForXAxisLabel = function textForXAxisLabel() {
		return this.getLabelText("x");
	}, Axis.prototype.textForYAxisLabel = function textForYAxisLabel() {
		return this.getLabelText("y");
	}, Axis.prototype.textForY2AxisLabel = function textForY2AxisLabel() {
		return this.getLabelText("y2");
	}, Axis.prototype.xForAxisLabel = function xForAxisLabel(forHorizontal, position) {
		var $$ = this.owner,
		    x = void 0;

		return x = forHorizontal ? position.isLeft ? 0 : position.isCenter ? $$.width / 2 : $$.width : position.isBottom ? -$$.height : position.isMiddle ? -$$.height / 2 : 0, x;
	}, Axis.prototype.dxForAxisLabel = function dxForAxisLabel(forHorizontal, position) {
		var dx = void 0;

		return dx = forHorizontal ? position.isLeft ? "0.5em" : position.isRight ? "-0.5em" : "0" : position.isTop ? "-0.5em" : position.isBottom ? "0.5em" : "0", dx;
	}, Axis.prototype.textAnchorForAxisLabel = function textAnchorForAxisLabel(forHorizontal, position) {
		var anchor = void 0;

		return anchor = forHorizontal ? position.isLeft ? "start" : position.isCenter ? "middle" : "end" : position.isBottom ? "start" : position.isMiddle ? "middle" : "end", anchor;
	}, Axis.prototype.xForXAxisLabel = function xForXAxisLabel() {
		return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
	}, Axis.prototype.xForYAxisLabel = function xForYAxisLabel() {
		return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
	}, Axis.prototype.xForY2AxisLabel = function xForY2AxisLabel() {
		return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
	}, Axis.prototype.dxForXAxisLabel = function dxForXAxisLabel() {
		return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition());
	}, Axis.prototype.dxForYAxisLabel = function dxForYAxisLabel() {
		return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition());
	}, Axis.prototype.dxForY2AxisLabel = function dxForY2AxisLabel() {
		return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition());
	}, Axis.prototype.dyForXAxisLabel = function dyForXAxisLabel() {
		var $$ = this.owner,
		    config = $$.config,
		    position = this.getXAxisLabelPosition();
		return config.axis_rotated ? position.isInner ? "1.2em" : -25 - this.getMaxTickWidth("x") : position.isInner ? "-0.5em" : config.axis_x_height ? config.axis_x_height - 10 : "3em";
	}, Axis.prototype.dyForYAxisLabel = function dyForYAxisLabel() {
		var $$ = this.owner,
		    position = this.getYAxisLabelPosition();
		return $$.config.axis_rotated ? position.isInner ? "-0.5em" : "3em" : position.isInner ? "1.2em" : -10 - ($$.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10);
	}, Axis.prototype.dyForY2AxisLabel = function dyForY2AxisLabel() {
		var $$ = this.owner,
		    position = this.getY2AxisLabelPosition();
		return $$.config.axis_rotated ? position.isInner ? "1.2em" : "-2.2em" : position.isInner ? "-0.5em" : 15 + ($$.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15);
	}, Axis.prototype.textAnchorForXAxisLabel = function textAnchorForXAxisLabel() {
		var $$ = this.owner;

		return this.textAnchorForAxisLabel(!$$.config.axis_rotated, this.getXAxisLabelPosition());
	}, Axis.prototype.textAnchorForYAxisLabel = function textAnchorForYAxisLabel() {
		var $$ = this.owner;

		return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getYAxisLabelPosition());
	}, Axis.prototype.textAnchorForY2AxisLabel = function textAnchorForY2AxisLabel() {
		var $$ = this.owner;

		return this.textAnchorForAxisLabel($$.config.axis_rotated, this.getY2AxisLabelPosition());
	}, Axis.prototype.getMaxTickWidth = function getMaxTickWidth(id, withoutRecompute) {
		var $$ = this.owner,
		    config = $$.config,
		    maxWidth = 0,
		    dummy = void 0,
		    svg = void 0;


		if (withoutRecompute && $$.currentMaxTickWidths[id]) return $$.currentMaxTickWidths[id];

		if ($$.svg) {
			var targetsToShow = $$.filterTargetsToShow($$.data.targets),
			    scale = void 0,
			    axis = void 0;
			id === "y" ? (scale = $$.y.copy().domain($$.getYDomain(targetsToShow, "y")), axis = this.getYAxis(scale, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, !1, !0, !0)) : id === "y2" ? (scale = $$.y2.copy().domain($$.getYDomain(targetsToShow, "y2")), axis = this.getYAxis(scale, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, !1, !0, !0)) : (scale = $$.x.copy().domain($$.getXDomain(targetsToShow)), axis = this.getXAxis(scale, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, !1, !0, !0), this.updateXAxisTickValues(targetsToShow, axis)), dummy = (0, _d.select)("body").append("div").classed("bb", !0), svg = dummy.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0px").style("left", "0px"), svg.append("g").call(axis).each(function () {
				(0, _d.select)(this).selectAll("text").each(function () {
					var box = this.getBoundingClientRect();

					maxWidth < box.width && (maxWidth = box.width);
				}), dummy.remove();
			});
		}

		return $$.currentMaxTickWidths[id] = maxWidth <= 0 ? $$.currentMaxTickWidths[id] : maxWidth, $$.currentMaxTickWidths[id];
	}, Axis.prototype.updateLabels = function updateLabels(withTransition) {
		var $$ = this.owner,
		    axisXLabel = $$.main.select("." + _classes2.default.axisX + " ." + _classes2.default.axisXLabel),
		    axisYLabel = $$.main.select("." + _classes2.default.axisY + " ." + _classes2.default.axisYLabel),
		    axisY2Label = $$.main.select("." + _classes2.default.axisY2 + "  ." + _classes2.default.axisY2Label);
		(withTransition ? axisXLabel.transition() : axisXLabel).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)), (withTransition ? axisYLabel.transition() : axisYLabel).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)), (withTransition ? axisY2Label.transition() : axisY2Label).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this));
	}, Axis.prototype.getPadding = function getPadding(padding, key, defaultValue, domainLength) {
		var p = typeof padding === "number" ? padding : padding[key];

		// assume padding is pixels if unit is not specified
		return (0, _util.isValue)(p) ? padding.unit === "ratio" ? padding[key] * domainLength : this.convertPixelsToAxisPadding(p, domainLength) : defaultValue;
	}, Axis.prototype.convertPixelsToAxisPadding = function convertPixelsToAxisPadding(pixels, domainLength) {
		var $$ = this.owner,
		    length = $$.config.axis_rotated ? $$.width : $$.height;


		return domainLength * (pixels / length);
	}, Axis.prototype.generateTickValues = function generateTickValues(values, tickCount, forTimeSeries) {
		var tickValues = values,
		    start = void 0,
		    end = void 0,
		    count = void 0,
		    interval = void 0,
		    i = void 0,
		    tickValue = void 0;


		if (tickCount) {
			var targetCount = (0, _util.isFunction)(tickCount) ? tickCount() : tickCount;

			// compute ticks according to tickCount
			if (targetCount === 1) tickValues = [values[0]];else if (targetCount === 2) tickValues = [values[0], values[values.length - 1]];else if (targetCount > 2) {

				for (count = targetCount - 2, start = values[0], end = values[values.length - 1], interval = (end - start) / (count + 1), tickValues = [start], i = 0; i < count; i++) tickValue = +start + interval * (i + 1), tickValues.push(forTimeSeries ? new Date(tickValue) : tickValue);
				tickValues.push(end);
			}
		}

		return forTimeSeries || (tickValues = tickValues.sort(function (a, b) {
			return a - b;
		})), tickValues;
	}, Axis.prototype.generateTransitions = function generateTransitions(duration) {
		var $$ = this.owner,
		    axes = $$.axes;


		return {
			axisX: duration ? axes.x.transition().duration(duration) : axes.x,
			axisY: duration ? axes.y.transition().duration(duration) : axes.y,
			axisY2: duration ? axes.y2.transition().duration(duration) : axes.y2,
			axisSubX: duration ? axes.subx.transition().duration(duration) : axes.subx
		};
	}, Axis.prototype.redraw = function redraw(transitions, isHidden) {
		var $$ = this.owner;

		$$.axes.x.style("opacity", isHidden ? "0" : "1"), $$.axes.y.style("opacity", isHidden ? "0" : "1"), $$.axes.y2.style("opacity", isHidden ? "0" : "1"), $$.axes.subx.style("opacity", isHidden ? "0" : "1"), transitions.axisX.call($$.xAxis), transitions.axisY.call($$.yAxis), transitions.axisY2.call($$.y2Axis), transitions.axisSubX.call($$.subXAxis);
	}, Axis;
}();

exports.default = Axis;
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;

var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function () {

	function axisX(selection, x) {
		selection.attr("transform", function (d) {
			return "translate(" + Math.ceil(x(d) + tickOffset) + ", 0)";
		});
	}

	function axisY(selection, y) {
		selection.attr("transform", function (d) {
			return "translate(0," + Math.ceil(y(d)) + ")";
		});
	}

	function scaleExtent(domain) {
		var start = domain[0],
		    stop = domain[domain.length - 1];


		return start < stop ? [start, stop] : [stop, start];
	}

	function generateTicks(scale) {
		var ticks = [];

		if (scale.ticks) return scale.ticks.apply(scale, tickArguments ? Array.prototype.slice.call(tickArguments) : []).map(function (v) {
				return (
					// round the tick value if is number
					/(string|number)/.test(typeof v === "undefined" ? "undefined" : (0, _typeof3.default)(v)) && !isNaN(v) ? Math.round(v * 10) / 10 : v
				);
			});

		for (var domain = scale.domain(), i = Math.ceil(domain[0]); i < domain[1]; i++) ticks.push(i);

		return ticks.length > 0 && ticks[0] > 0 && ticks.unshift(ticks[0] - (ticks[1] - ticks[0])), ticks;
	}

	function copyScale() {
		var newScale = scale.copy();

		if (params.isCategory || !newScale.domain().length) {
			var domain = scale.domain();

			newScale.domain([domain[0], domain[1] - 1]);
		}

		return newScale;
	}

	function textFormatted(v) {
		var formatted = tickFormat ? tickFormat(v) : v;

		return typeof formatted === "undefined" ? "" : formatted;
	}

	function getSizeFor1Char(tick) {
		if (tickTextCharSize) return tickTextCharSize;
		var size = {
			h: 11.5,
			w: 5.5
		};

		return tick.select("text").text(textFormatted).each(function (d) {
			var box = this.getBoundingClientRect(),
			    text = textFormatted(d),
			    h = box.height,
			    w = text ? box.width / text.length : undefined;
			h && w && (size.h = h, size.w = w);
		}).text(""), tickTextCharSize = size, size;
	}

	function transitionise(selection) {
		return params.withoutTransition ? selection : selection.transition(transition);
	}

	function axis(g) {
		g.each(function () {

			// this should be called only when category axis
			function splitTickText(d, maxWidthValue) {

				function split(splitted, text) {
					spaceIndex = undefined;

					for (var i = 1; i < text.length; i++)

					// if text width gets over tick width, split by space index or crrent index
					if (text.charAt(i) === " " && (spaceIndex = i), subtext = text.substr(0, i + 1), textWidth = sizeFor1Char.w * subtext.length, maxWidth < textWidth) return split(splitted.concat(text.substr(0, spaceIndex || i)), text.slice(spaceIndex ? spaceIndex + 1 : i));

					return splitted.concat(text);
				}

				var tickText = textFormatted(d),
				    maxWidth = maxWidthValue,
				    subtext = void 0,
				    spaceIndex = void 0,
				    textWidth = void 0;
				return Object.prototype.toString.call(tickText) === "[object Array]" ? tickText : ((!maxWidth || maxWidth <= 0) && (maxWidth = isVertical ? 95 : params.isCategory ? Math.ceil(scale1(ticks[1]) - scale1(ticks[0])) - 12 : 110), split([], tickText + ""));
			}

			function tspanDy(d, i) {
				var dy = sizeFor1Char.h;

				return i === 0 && (dy = orient === "left" || orient === "right" ? -((counts[d.index] - 1) * (sizeFor1Char.h / 2) - 3) : ".71em"), dy;
			}

			var g = (0, _d.select)(this);

			axis.g = g;


			var scale0 = this.__chart__ || scale,
			    scale1 = copyScale();
			this.__chart__ = scale1;


			// count of tick data in array
			var ticks = tickValues || generateTicks(scale1),
			    tick = g.selectAll(".tick").data(ticks, scale1),
			    tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", "1"),
			    tickExit = tick.exit().remove();

			// update selection


			// enter selection


			// MEMO: No exit transition. The reason is this transition affects max tick width calculation because old tick will be included in the ticks.
			tick = tickEnter.merge(tick);


			var tickUpdate = transitionise(tick).style("opacity", "1"),
			    tickTransform = void 0,
			    tickX = void 0,
			    tickY = void 0,
			    range = scale.rangeExtent ? scale.rangeExtent() : scaleExtent(scale.range()),
			    path = g.selectAll(".domain").data([0]),
			    pathUpdate = path.enter().append("path").attr("class", "domain").merge(transitionise(path));

			// update selection - data join


			// enter + update selection
			tickEnter.append("line"), tickEnter.append("text");


			var lineEnter = tickEnter.select("line"),
			    lineUpdate = tickUpdate.select("line"),
			    textEnter = tickEnter.select("text"),
			    textUpdate = tickUpdate.select("text");
			params.isCategory ? (tickOffset = Math.ceil((scale1(1) - scale1(0)) / 2), tickX = tickCentered ? 0 : tickOffset, tickY = tickCentered ? tickOffset : 0) : (tickX = 0, tickOffset = tickX);


			var tspan = void 0,
			    sizeFor1Char = getSizeFor1Char(g.select(".tick")),
			    counts = [],
			    tickLength = Math.max(innerTickSize, 0) + tickPadding,
			    isVertical = orient === "left" || orient === "right",
			    text = tick.select("text");tspan = text.selectAll("tspan").data(function (d, i) {
				var splitted = params.tickMultiline ? splitTickText(d, params.tickWidth) : [].concat(textFormatted(d));

				return counts[i] = splitted.length, splitted.map(function (s) {
					return {
						index: i,
						splitted: s
					};
				});
			}), tspan.exit().remove(), tspan = tspan.enter().append("tspan").merge(tspan).text(function (d) {
				return d.splitted;
			});


			var rotate = params.tickTextRotate;

			if (orient === "bottom" ? (tickTransform = axisX, lineEnter.attr("y2", innerTickSize), textEnter.attr("y", tickLength), lineUpdate.attr("x1", tickX).attr("x2", tickX).attr("y2", function (d) {
				var tickPosition = scale(d) + (tickCentered ? 0 : tickOffset);

				return range[0] < tickPosition && tickPosition < range[1] ? innerTickSize : 0;
			}), textUpdate.attr("x", 0).attr("y", function (r) {
				return r ? 11.5 - 2.5 * (r / 15) * (r > 0 ? 1 : -1) : tickLength;
			}(rotate)).style("text-anchor", function (r) {
				return r ? r > 0 ? "start" : "end" : "middle";
			}(rotate)).attr("transform", function (r) {
				return r ? "rotate(" + r + ")" : "";
			}(rotate)), tspan.attr("x", 0).attr("dy", tspanDy).attr("dx", function (r) {
				return r ? 8 * Math.sin(Math.PI * (r / 180)) : 0;
			}(rotate)), pathUpdate.attr("d", "M" + range[0] + "," + outerTickSize + "V0H" + range[1] + "V" + outerTickSize)) : orient === "top" ? (tickTransform = axisX, lineEnter.attr("y2", -innerTickSize), textEnter.attr("y", -tickLength), lineUpdate.attr("x2", 0).attr("y2", -innerTickSize), textUpdate.attr("x", 0).attr("y", -tickLength), text.style("text-anchor", "middle"), tspan.attr("x", 0).attr("dy", "0em"), pathUpdate.attr("d", "M" + range[0] + "," + -outerTickSize + "V0H" + range[1] + "V" + -outerTickSize)) : orient === "left" ? (tickTransform = axisY, lineEnter.attr("x2", -innerTickSize), textEnter.attr("x", -tickLength), lineUpdate.attr("x2", -innerTickSize).attr("y1", tickY).attr("y2", tickY), textUpdate.attr("x", -tickLength).attr("y", tickOffset), text.style("text-anchor", "end"), tspan.attr("x", -tickLength).attr("dy", tspanDy), pathUpdate.attr("d", "M" + -outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + -outerTickSize)) : orient === "right" ? (tickTransform = axisY, lineEnter.attr("x2", innerTickSize), textEnter.attr("x", tickLength), lineUpdate.attr("x2", innerTickSize).attr("y2", 0), textUpdate.attr("x", tickLength).attr("y", 0), text.style("text-anchor", "start"), tspan.attr("x", tickLength).attr("dy", tspanDy), pathUpdate.attr("d", "M" + outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + outerTickSize)) : void 0, scale1.bandwidth) {
				var x = scale1,
				    dx = x.bandwidth() / 2;
				scale0 = function scale0(d) {
					return x(d) + dx;
				}, scale1 = scale0;
			} else scale0.bandwidth ? scale0 = scale1 : tickExit.call(tickTransform, scale1);

			tickEnter.call(tickTransform, scale0), tickUpdate.call(tickTransform, scale1);
		});
	}

	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    scale = (0, _d.scaleLinear)(),
	    orient = "bottom",
	    innerTickSize = 6,
	    outerTickSize = params.withOuterTick ? 6 : 0,
	    tickPadding = 3,
	    tickValues = null,
	    tickFormat = void 0,
	    tickArguments = void 0,
	    tickOffset = 0,
	    tickCulling = !0,
	    tickCentered = void 0,
	    transition = void 0;


	return axis.scale = function (x) {
		return arguments.length ? (scale = x, axis) : scale;
	}, axis.orient = function (x) {
		return arguments.length ? (orient = x in {
			top: 1,
			right: 1,
			bottom: 1,
			left: 1
		} ? x + "" : "bottom", axis) : orient;
	}, axis.tickFormat = function (format) {
		return arguments.length ? (tickFormat = format, axis) : tickFormat;
	}, axis.tickCentered = function (isCentered) {
		return arguments.length ? (tickCentered = isCentered, axis) : tickCentered;
	}, axis.tickOffset = function () {
		return tickOffset;
	}, axis.tickInterval = function () {
		var interval = void 0;

		if (params.isCategory) interval = tickOffset * 2;else {
			var length = axis.g.select("path.domain").node().getTotalLength() - outerTickSize * 2;

			interval = length / axis.g.selectAll("line").size();
		}

		return interval === Infinity ? 0 : interval;
	}, axis.ticks = function () {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];

		return args.length ? (tickArguments = Array.prototype.slice.call(args), axis) : tickArguments;
	}, axis.tickCulling = function (culling) {
		return arguments.length ? (tickCulling = culling, axis) : tickCulling;
	}, axis.tickValues = function (x) {
		if (typeof x === "function") tickValues = function tickValues() {
				return x(scale.domain());
			};else {
			if (!arguments.length) return tickValues;

			tickValues = x;
		}

		return this;
	}, axis.setTransition = function (t) {
		return transition = t, this;
	}, axis;
};

var _d = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Features:
// 1. category axis
// 2. ceil values of translate/x/y to int for half pixel antialiasing
// 3. multiline tick text
var tickTextCharSize = void 0; /**
                                * Copyright (c) 2017 NAVER Corp.
                                * billboard.js project is licensed under the MIT license
                                */
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2),
    _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set the min/max value
 * @param $$
 * @param type
 * @param value
 * @return {undefined}
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var setMinMax = function ($$, type, value) {
  var config = $$.config,
      axisY = "axis_y_" + type,
      axisY2 = "axis_y2_" + type;


  return typeof value !== "undefined" && ((typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object" ? ((0, _util.isValue)(value.x) && (config["axis_x_" + type] = value.x), (0, _util.isValue)(value.y) && (config[axisY] = value.y), (0, _util.isValue)(value.y2) && (config[axisY2] = value.y2)) : (config[axisY] = value, config[axisY2] = value), $$.redraw({
    withUpdateOrgXDomain: !0,
    withUpdateXDomain: !0
  })), undefined;
},
    getMinMax = function ($$, type) {
  var config = $$.config;


  return {
    x: config["axis_x_" + type],
    y: config["axis_y_" + type],
    y2: config["axis_y2_" + type]
  };
},
    axis = function () {};

/**
 * Get the min/max value
 * @param $$
 * @param type
 * @return {{x, y, y2}}
 */


/**
 * Define axis
 */


/**
 * Get and set axis labels.
 * @method axis:labels
 * @instance
 * @memberof Chart
 * @param {Object} labels specified axis' label to be updated.
 * @example
 * // Update axis' label
 * chart.axis.labels({
 *   x: "New X Axis Label",
 *   y: "New Y Axis Label"
 * });
 */
axis.labels = function (labels) {
  var $$ = this.internal;

  arguments.length && (Object.keys(labels).forEach(function (axisId) {
    $$.axis.setLabelText(axisId, labels[axisId]);
  }), $$.axis.updateLabels());
}, axis.min = function (min) {
  return arguments.length ? setMinMax(this.internal, "min", min) : getMinMax(this.internal, "min");
}, axis.max = function (max) {
  return arguments.length ? setMinMax(this.internal, "max", max) : getMinMax(this.internal, "max");
}, axis.range = function (range) {
  if (arguments.length) (0, _util.isDefined)(range.max) && this.axis.max(range.max), (0, _util.isDefined)(range.min) && this.axis.min(range.min);else return {
      max: this.axis.max(),
      min: this.axis.min()
    };

  return undefined;
}, (0, _util.extend)(_Chart2.default.prototype, { axis: axis });

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Set specified category name on category axis.
  * @method category
  * @instance
  * @memberof Chart
  * @param {Number} i index of category to be changed
  * @param {String} category category value to be changed
  * @example
  * chart.category(2, "Category 3");
  */
	category: function category(i, _category) {
		var $$ = this.internal,
		    config = $$.config;


		return arguments.length > 1 && (config.axis_x_categories[i] = _category, $$.redraw()), config.axis_x_categories[i];
	},


	/**
  * Set category names on category axis.
  * @method categories
  * @instance
  * @memberof Chart
  * @param {Array} categories This must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.
  * @example
  * chart.categories([
  *      "Category 1", "Category 2", ...
  * ]);
  */
	categories: function categories(_categories) {
		var $$ = this.internal,
		    config = $$.config;
		return arguments.length ? (config.axis_x_categories = _categories, $$.redraw(), config.axis_x_categories) : config.axis_x_categories;
	}
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _browser = __webpack_require__(60),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Resize the chart.
  * @method resize
  * @instance
  * @memberof Chart
  * @param {Object} size This argument should include width and height in pixels.
  * @example
  * // Resize to 640x480
  * chart.resize({
  *    width: 640,
  *    height: 480
  * });
  */
	resize: function resize(size) {
		var config = this.internal.config;

		config.size_width = size ? size.width : null, config.size_height = size ? size.height : null, this.flush();
	},


	/**
  * Force to redraw.
  * @method flush
  * @instance
  * @memberof Chart
  * @example
  * chart.flush();
  */
	flush: function flush() {
		this.internal.updateAndRedraw({
			withLegend: !0,
			withTransition: !1,
			withTransitionForTransform: !1
		});
	},


	/**
  * Reset the chart object and remove element and events completely.
  * @method destroy
  * @instance
  * @memberof Chart
  * @example
  * chart.destroy();
  */
	destroy: function destroy() {
		var $$ = this.internal;

		return _browser.window.clearInterval($$.intervalForObserveInserted), $$.resizeTimeout !== undefined && _browser.window.clearTimeout($$.resizeTimeout), (0, _util.removeEvent)(_browser.window, "resize", $$.resizeFunction), $$.selectChart.classed("bb", !1).html(""), Object.keys($$).forEach(function (key) {
			$$[key] = null;
		}), null;
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Get the color
  * @method color
  * @instance
  * @memberof Chart
  * @param {String} id id to get the color
  * @example
  * chart.color("data1");
  */
	color: function color(id) {
		var $$ = this.internal;

		return $$.color(id); // more patterns
	}
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get data loaded in the chart.
 * @method data
 * @instance
 * @memberof Chart
 * @param {String|Array} targetIds If this argument is given, this API returns the specified target data. If this argument is not given, all of data will be returned.
 * @example
 * // Get only data1 data
 * chart.data("data1");
 *
 * // Get data1 and data2 data
 * chart.data(["data1", "data2"]);
 *
 * // Get all data
 * chart.data();
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var data = function (targetIds) {
  var targets = this.internal.data.targets;

  return typeof targetIds === "undefined" ? targets : targets.filter(function (t) {
    return [].concat(targetIds).indexOf(t.id) >= 0;
  });
};

/**
 * Get data shown in the chart.
 * @method data:shown
 * @instance
 * @memberof Chart
 * @param {String|Array} targetIds If this argument is given, this API filters the data with specified target ids. If this argument is not given, all shown data will be returned.
 * @example
 * // Get shown data by filtering to include only data1 data
 * chart.data.shown("data1");
 *
 * // Get shown data by filtering to include data1 and data2 data
 * chart.data.shown(["data1", "data2"]);
 *
 * // Get all shown data
 * chart.data.shown();
 */
data.shown = function (targetIds) {
  return this.internal.filterTargetsToShow(this.data(targetIds));
}, data.values = function (targetId) {
  var values = null;

  if (targetId) {
    var targets = this.data(targetId);

    targets && targets[0] && (values = targets[0].values.map(function (d) {
      return d.value;
    }));
  }

  return values;
}, data.names = function (names) {

  return this.internal.clearLegendItemTextBoxCache(), this.internal.updateDataAttributes("names", names);
}, data.colors = function (colors) {
  return this.internal.updateDataAttributes("colors", colors);
}, data.axes = function (axes) {
  return this.internal.updateDataAttributes("axes", axes);
}, (0, _util.extend)(_Chart2.default.prototype, { data: data });

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Flow data to the chart.<br><br>
  * By this API, you can append new data points to the chart.
  * @method flow
  * @instance
  * @memberof Chart
  * @param {Object} args
  * - If json, rows and columns given, the data will be loaded. If data that has the same target id is given, the chart will be appended. Otherwise, new target will be added. One of these is required when calling. If json specified, keys is required as well as data.json
  * - If to is given, the lower x edge will move to that point. If not given, the lower x edge will move by the number of given data points.
  * - If length is given, the lower x edge will move by the number of this argument.
  * - If duration is given, the duration of the transition will be specified value. If not given, transition.duration will be used as default.
  * - If done is given, the specified function will be called when flow ends.
  * @example
  * // 2 data points will be apprended to the tail and popped from the head.
  * // After that, 4 data points will be appended and no data points will be poppoed.
  * chart.flow({
  *  columns: [
  *    ["x", "2013-01-11", "2013-01-21"],
  *    ["data1", 500, 200],
  *    ["data2", 100, 300],
  *    ["data3", 200, 120]
  *  ],
  *  done: function () {
  *    chart.flow({
  *      columns: [
  *        ["x", "2013-02-11", "2013-02-12", "2013-02-13", "2013-02-14"],
  *        ["data1", 200, 300, 100, 250],
  *        ["data2", 100, 90, 40, 120],
  *        ["data3", 100, 100, 300, 500]
  *      ],
  *      length: 0
  *    });
  *  }
  * });
  */
	flow: function flow(args) {
		var $$ = this.internal,
		    notfoundIds = [],
		    orgDataCount = $$.getMaxDataCount(),
		    data = void 0,
		    domain = void 0,
		    length = 0,
		    tail = 0,
		    diff = void 0,
		    to = void 0;


		if (args.json) data = $$.convertJsonToData(args.json, args.keys);else if (args.rows) data = $$.convertRowsToData(args.rows);else if (args.columns) data = $$.convertColumnsToData(args.columns);else return;

		var targets = $$.convertDataToTargets(data, !0);

		// Update/Add data
		$$.data.targets.forEach(function (t) {
			var found = !1,
			    i = void 0,
			    j = void 0;


			for (i = 0; i < targets.length; i++) if (t.id === targets[i].id) {

				for (found = !0, t.values[t.values.length - 1] && (tail = t.values[t.values.length - 1].index + 1), length = targets[i].values.length, j = 0; j < length; j++) targets[i].values[j].index = tail + j, $$.isTimeSeries() || (targets[i].values[j].x = tail + j);
				t.values = t.values.concat(targets[i].values), targets.splice(i, 1);

				break;
			}

			found || notfoundIds.push(t.id);
		}), $$.data.targets.forEach(function (t) {
			var i = void 0,
			    j = void 0;


			for (i = 0; i < notfoundIds.length; i++) if (t.id === notfoundIds[i]) for (tail = t.values[t.values.length - 1].index + 1, j = 0; j < length; j++) t.values.push({
					id: t.id,
					index: tail + j,
					x: $$.isTimeSeries() ? $$.getOtherTargetX(tail + j) : tail + j,
					value: null
				});
		}), $$.data.targets.length && targets.forEach(function (t) {
			var i = void 0,
			    missing = [];


			for (i = $$.data.targets[0].values[0].index; i < tail; i++) missing.push({
				id: t.id,
				index: i,
				x: $$.isTimeSeries() ? $$.getOtherTargetX(i) : i,
				value: null
			});

			t.values.forEach(function (v) {
				v.index += tail, $$.isTimeSeries() || (v.x += tail);
			}), t.values = missing.concat(t.values);
		}), $$.data.targets = $$.data.targets.concat(targets);
		// add remained

		// check data count because behavior needs to change when it"s only one
		// const dataCount = $$.getMaxDataCount();
		var baseTarget = $$.data.targets[0],
		    baseValue = baseTarget.values[0];


		// Update length to flow if needed
		(0, _util.isDefined)(args.to) ? (length = 0, to = $$.isTimeSeries() ? $$.parseDate(args.to) : args.to, baseTarget.values.forEach(function (v) {
			v.x < to && length++;
		})) : (0, _util.isDefined)(args.length) && (length = args.length), orgDataCount ? orgDataCount === 1 && $$.isTimeSeries() && (diff = (baseTarget.values[baseTarget.values.length - 1].x - baseValue.x) / 2, domain = [new Date(+baseValue.x - diff), new Date(+baseValue.x + diff)], $$.updateXDomain(null, !0, !0, !1, domain)) : (diff = $$.isTimeSeries() ? baseTarget.values.length > 1 ? baseTarget.values[baseTarget.values.length - 1].x - baseValue.x : baseValue.x - $$.getXDomain($$.data.targets)[0] : 1, domain = [baseValue.x - diff, baseValue.x], $$.updateXDomain(null, !0, !0, !1, domain)), $$.updateTargets($$.data.targets), $$.redraw({
			flow: {
				index: baseValue.index,
				length: length,
				duration: (0, _util.isValue)(args.duration) ? args.duration : $$.config.transition_duration,
				done: args.done,
				orgDataCount: orgDataCount
			},
			withLegend: !0,
			withTransition: orgDataCount > 1,
			withTrimXDomain: !1,
			withUpdateXAxis: !0
		});
	}
}), (0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Generate flow
  * @memberof ChartInternal
  * @private
  * @param {Object} args
  * @return {Function}
  */
	generateFlow: function generateFlow(args) {
		var $$ = this,
		    config = $$.config;


		return function () {
			var targets = args.targets,
			    flow = args.flow,
			    drawBar = args.drawBar,
			    drawLine = args.drawLine,
			    drawArea = args.drawArea,
			    cx = args.cx,
			    cy = args.cy,
			    xv = args.xv,
			    xForText = args.xForText,
			    yForText = args.yForText,
			    duration = args.duration,
			    translateX = void 0,
			    scaleX = 1,
			    flowIndex = flow.index,
			    flowLength = flow.length,
			    flowStart = $$.getValueOnIndex($$.data.targets[0].values, flowIndex),
			    flowEnd = $$.getValueOnIndex($$.data.targets[0].values, flowIndex + flowLength),
			    orgDomain = $$.x.domain(),
			    durationForFlow = flow.duration || duration,
			    done = flow.done || function () {},
			    wait = $$.generateWait(),
			    xgrid = $$.xgrid || (0, _d.selectAll)([]),
			    xgridLines = $$.xgridLines || (0, _d.selectAll)([]),
			    mainRegion = $$.mainRegion || (0, _d.selectAll)([]),
			    mainText = $$.mainText || (0, _d.selectAll)([]),
			    mainBar = $$.mainBar || (0, _d.selectAll)([]),
			    mainLine = $$.mainLine || (0, _d.selectAll)([]),
			    mainArea = $$.mainArea || (0, _d.selectAll)([]),
			    mainCircle = $$.mainCircle || (0, _d.selectAll)([]);


			// set flag
			$$.flowing = !0, $$.data.targets.forEach(function (d) {
				d.values.splice(0, flowLength);
			});


			// update x domain to generate axis elements for flow
			var domain = $$.updateXDomain(targets, !0, !0);

			// update elements related to x scale
			$$.updateXGrid && $$.updateXGrid(!0), flow.orgDataCount ? flow.orgDataCount === 1 || (flowStart && flowStart.x) === (flowEnd && flowEnd.x) ? translateX = $$.x(orgDomain[0]) - $$.x(domain[0]) : $$.isTimeSeries() ? translateX = $$.x(orgDomain[0]) - $$.x(domain[0]) : translateX = $$.x(flowStart.x) - $$.x(flowEnd.x) : $$.data.targets[0].values.length === 1 ? $$.isTimeSeries() ? (flowStart = $$.getValueOnIndex($$.data.targets[0].values, 0), flowEnd = $$.getValueOnIndex($$.data.targets[0].values, $$.data.targets[0].values.length - 1), translateX = $$.x(flowStart.x) - $$.x(flowEnd.x)) : translateX = (0, _util.diffDomain)(domain) / 2 : translateX = $$.x(orgDomain[0]) - $$.x(domain[0]), scaleX = (0, _util.diffDomain)(orgDomain) / (0, _util.diffDomain)(domain);

			var transform = "translate(" + translateX + ",0) scale(" + scaleX + ",1)";

			$$.hideXGridFocus();


			var gt = (0, _d.transition)().ease(_d.easeLinear).duration(durationForFlow);

			wait.add([$$.axes.x.transition(gt).call($$.xAxis.setTransition(gt)), mainBar.transition(gt).attr("transform", transform), mainLine.transition(gt).attr("transform", transform), mainArea.transition(gt).attr("transform", transform), mainCircle.transition(gt).attr("transform", transform), mainText.transition(gt).attr("transform", transform), mainRegion.filter($$.isRegionOnX).transition(gt).attr("transform", transform), xgrid.transition(gt).attr("transform", transform), xgridLines.transition(gt).attr("transform", transform)]), gt.call(wait, function () {
				var i = void 0,
				    shapes = [],
				    texts = [],
				    eventRects = [];


				// remove flowed elements
				if (flowLength) {
					for (i = 0; i < flowLength; i++) shapes.push("." + _classes2.default.shape + "-" + (flowIndex + i)), texts.push("." + _classes2.default.text + "-" + (flowIndex + i)), eventRects.push("." + _classes2.default.eventRect + "-" + (flowIndex + i));

					$$.svg.selectAll("." + _classes2.default.shapes).selectAll(shapes).remove(), $$.svg.selectAll("." + _classes2.default.texts).selectAll(texts).remove(), $$.svg.selectAll("." + _classes2.default.eventRects).selectAll(eventRects).remove(), $$.svg.select("." + _classes2.default.xgrid).remove();
				}

				// draw again for removing flowed elements and reverting attr
				xgrid.size() && xgrid.attr("transform", null).attr($$.xgridAttr), xgridLines.attr("transform", null), xgridLines.select("line").attr("x1", config.axis_rotated ? 0 : xv).attr("x2", config.axis_rotated ? $$.width : xv), xgridLines.select("text").attr("x", config.axis_rotated ? $$.width : 0).attr("y", xv), mainBar.attr("transform", null).attr("d", drawBar), mainLine.attr("transform", null).attr("d", drawLine), mainArea.attr("transform", null).attr("d", drawArea), mainCircle.attr("transform", null).attr("cx", cx).attr("cy", cy), mainText.attr("transform", null).attr("x", xForText).attr("y", yForText).style("fill-opacity", $$.opacityForText.bind($$)), mainRegion.attr("transform", null), mainRegion.select("rect").filter($$.isRegionOnX).attr("x", $$.regionX.bind($$)).attr("width", $$.regionWidth.bind($$)), config.interaction_enabled && $$.redrawEventRect(), done(), $$.flowing = !1;
			});
		};
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
		/**
   * This API highlights specified targets and fade out the others.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be highlighted.
   * @method focus
   * @instance
   * @memberof Chart
   * @param {String|Array} targetIdsValue Target ids to be highlighted.
   * @example
   *  // data1 will be highlighted and the others will be faded out
   *  chart.focus("data1");
   *
   * // data1 and data2 will be highlighted and the others will be faded out
   * chart.focus(["data1", "data2"]);
   *
   * // all targets will be highlighted
   * chart.focus();
   */
		focus: function focus(targetIdsValue) {
				var $$ = this.internal,
				    targetIds = $$.mapToTargetIds(targetIdsValue),
				    candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
				this.revert(), this.defocus(), candidates.classed(_classes2.default.focused, !0).classed(_classes2.default.defocused, !1), $$.hasArcType() && $$.expandArc(targetIds), $$.toggleFocusLegend(targetIds, !0), $$.focusedTargetIds = targetIds, $$.defocusedTargetIds = $$.defocusedTargetIds.filter(function (id) {
						return targetIds.indexOf(id) < 0;
				});
		},


		/**
   * This API fades out specified targets and reverts the others.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be faded out.
   * @method defocus
   * @instance
   * @memberof Chart
   * @param {String|Array} Target ids to be faded out.
   * @example
   * // data1 will be faded out and the others will be reverted.
   * chart.defocus("data1");
   *
   * // data1 and data2 will be faded out and the others will be reverted.
   * chart.defocus(["data1", "data2"]);
   *
   * // all targets will be faded out.
   * chart.defocus();
   */
		defocus: function defocus(targetIdsValue) {
				var $$ = this.internal,
				    targetIds = $$.mapToTargetIds(targetIdsValue),
				    candidates = $$.svg.selectAll($$.selectorTargets(targetIds.filter($$.isTargetToShow, $$)));
				candidates.classed(_classes2.default.focused, !1).classed(_classes2.default.defocused, !0), $$.hasArcType() && $$.unexpandArc(targetIds), $$.toggleFocusLegend(targetIds, !1), $$.focusedTargetIds = $$.focusedTargetIds.filter(function (id) {
						return targetIds.indexOf(id) < 0;
				}), $$.defocusedTargetIds = targetIds;
		},


		/**
   * This API reverts specified targets.<br><br>
   * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be reverted.
   * @method revert
   * @instance
   * @memberof Chart
   * @param {String|Array} Target ids to be reverted
   * @example
   * // data1 will be reverted.
   * chart.revert("data1");
   *
   * // data1 and data2 will be reverted.
   * chart.revert(["data1", "data2"]);
   *
   * // all targets will be reverted.
   * chart.revert();
   */
		revert: function revert(targetIdsValue) {
				var $$ = this.internal,
				    targetIds = $$.mapToTargetIds(targetIdsValue),
				    candidates = $$.svg.selectAll($$.selectorTargets(targetIds));
				// should be for all targets

				candidates.classed(_classes2.default.focused, !1).classed(_classes2.default.defocused, !1), $$.hasArcType() && $$.unexpandArc(targetIds), $$.config.legend_show && ($$.showLegend(targetIds.filter($$.isLegendToShow.bind($$))), $$.legend.selectAll($$.selectorLegends(targetIds)).filter(function () {
						return (0, _d.select)(this).classed(_classes2.default.legendItemFocused);
				}).classed(_classes2.default.legendItemFocused, !1)), $$.focusedTargetIds = [], $$.defocusedTargetIds = [];
		}
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Update x grid lines.
 * @method xgrids
 * @instance
 * @memberof Chart
 * @param {Array} grids X grid lines will be replaced with this argument. The format of this argument is the same as grid.x.lines.
 * @example
 *  // Show 2 x grid lines
 * chart.xgrids([
 *    {value: 1, text: "Label 1"},
 *    {value: 4, text: "Label 4"}
 * ]);
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var xgrids = function (grids) {
  var $$ = this.internal,
      config = $$.config;
  return grids ? (config.grid_x_lines = grids, $$.redrawWithoutRescale(), config.grid_x_lines) : config.grid_x_lines;
};

/**
 * Add x grid lines.<br>
 * This API adds new x grid lines instead of replacing like xgrids.
 * @method xgrids:add
 * @instance
 * @memberof Chart
 * @param {Array|Object} grids New x grid lines will be added. The format of this argument is the same as grid.x.lines and it's possible to give an Object if only one line will be added.
 * @example
 *  // Add a new x grid line
 * chart.xgrids.add(
 *   {value: 4, text: "Label 4"}
 * );
 *
 * // Add new x grid lines
 * chart.xgrids.add([
 *   {value: 2, text: "Label 2"},
 *   {value: 4, text: "Label 4"}
 * ]);
 */
xgrids.add = function (grids) {
  return this.xgrids(this.internal.config.grid_x_lines.concat(grids || []));
}, xgrids.remove = function (params) {
  this.internal.removeGridLines(params, !0);
};


/**
 * Update y grid lines.
 * @method ygrids
 * @instance
 * @memberof Chart
 * @param {Array} grids Y grid lines will be replaced with this argument. The format of this argument is the same as grid.y.lines.
 * @example
 *  // Show 2 y grid lines
 * chart.ygrids([
 *    {value: 100, text: "Label 1"},
 *    {value: 400, text: "Label 4"}
 * ]);
 */
var ygrids = function (grids) {
  var $$ = this.internal,
      config = $$.config;
  return grids ? (config.grid_y_lines = grids, $$.redrawWithoutRescale(), config.grid_y_lines) : config.grid_y_lines;
};

/**
 * Add y grid lines.<br>
 * This API adds new y grid lines instead of replacing like ygrids.
 * @method ygrids:add
 * @instance
 * @memberof Chart
 * @param {Array|Object} grids New y grid lines will be added. The format of this argument is the same as grid.y.lines and it's possible to give an Object if only one line will be added.
 * @example
 *  // Add a new x grid line
 * chart.ygrids.add(
 *   {value: 400, text: "Label 4"}
 * );
 *
 * // Add new x grid lines
 * chart.ygrids.add([
 *   {value: 200, text: "Label 2"},
 *   {value: 400, text: "Label 4"}
 * ]);
 */
ygrids.add = function (grids) {
  return this.ygrids(this.internal.config.grid_y_lines.concat(grids || []));
}, ygrids.remove = function (params) {
  this.internal.removeGridLines(params, !1);
}, (0, _util.extend)(_Chart2.default.prototype, {
  xgrids: xgrids,
  ygrids: ygrids
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Update groups for the targets.
  * @method groups
  * @instance
  * @memberof Chart
  * @param {Array} groups This argument needs to be an Array that includes one or more Array that includes target ids to be grouped.
  * @example
  *  // data1 and data2 will be a new group.
  *  chart.groups([
  *     ["data1", "data2"]
  *  ]);
  */
	groups: function groups(_groups) {
		var $$ = this.internal,
		    config = $$.config;
		return (0, _util.isUndefined)(_groups) ? config.data_groups : (config.data_groups = _groups, $$.redraw(), config.data_groups);
	}
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Define legend
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var legend = function () {};

/**
 * Show legend for each target.
 * @method legend:show
 * @instance
 * @memberof Chart
 * @param {String|Array} targetIds
 * - If targetIds is given, specified target's legend will be shown.
 * - If only one target is the candidate, String can be passed.
 * - If no argument is given, all of target's legend will be shown.
 * @example
 * // Show legend for data1.
 * chart.legend.show("data1");
 *
 * // Show legend for data1 and data2.
 * chart.legend.show(["data1", "data2"]);
 *
 * // Show all legend.
 * chart.legend.show();
 */
legend.show = function (targetIds) {
  var $$ = this.internal;

  $$.showLegend($$.mapToTargetIds(targetIds)), $$.updateAndRedraw({ withLegend: !0 });
}, legend.hide = function (targetIds) {
  var $$ = this.internal;

  $$.hideLegend($$.mapToTargetIds(targetIds)), $$.updateAndRedraw({ withLegend: !0 });
}, (0, _util.extend)(_Chart2.default.prototype, { legend: legend });

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Load data to the chart.<br><br>
  * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
  * - <b>Note:</b>
  * unload should be used if some data needs to be unloaded simultaneously. If you call unload API soon after/before load instead of unload param, chart will not be rendered properly because of cancel of animation.<br>
  * done will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering
  * @method load
  * @instance
  * @memberof Chart
  * @param {Object} args
  * - If url, json, rows and columns given, the data will be loaded. If data that has the same target id is given, the chart will be updated. Otherwise, new target will be added.
  * - If classes given, the classes specifed by data.classes will be updated. classes must be Object that has target id as keys.
  * - If categories given, the categories specifed by axis.x.categories or data.x will be updated. categories must be Array.
  * - If axes given, the axes specifed by data.axes will be updated. axes must be Object that has target id as keys.
  * - If colors given, the colors specifed by data.colors will be updated. colors must be Object that has target id as keys.
  * - If type or types given, the type of targets will be updated. type must be String and types must be Object.
  * - If unload given, data will be unloaded before loading new data. If true given, all of data will be unloaded. If target ids given as String or Array, specified targets will be unloaded.
  * - If done given, the specified function will be called after data loded.
  * @example
  *  // Load data1 and unload data2 and data3
  *  chart.load({
  *     columns: [
  *        ["data1", 100, 200, 150, ...],
  *        ...
  *    ],
  *    unload: ["data2", "data3"]
  *  });
  */
	load: function load(args) {
		var $$ = this.internal,
		    config = $$.config;

		// update xs if specified


		// use cache if exists
		return args.xs && $$.addXs(args.xs), "names" in args && this.data.names(args.names), "classes" in args && Object.keys(args.classes).forEach(function (id) {
			config.data_classes[id] = args.classes[id];
		}), "categories" in args && $$.isCategorized() && (config.axis_x_categories = args.categories), "axes" in args && Object.keys(args.axes).forEach(function (id) {
			config.data_axes[id] = args.axes[id];
		}), "colors" in args && Object.keys(args.colors).forEach(function (id) {
			config.data_colors[id] = args.colors[id];
		}), "cacheIds" in args && $$.hasCaches(args.cacheIds) ? void $$.load($$.getCaches(args.cacheIds), args.done) : void ("unload" in args ? $$.unload($$.mapToTargetIds(typeof args.unload === "boolean" && args.unload ? null : args.unload), function () {
			return $$.loadFromArgs(args);
		}) : $$.loadFromArgs(args));

		// unload if needed
	},


	/**
  * Unload data to the chart.<br><br>
  * You can specify multiple targets by giving an array that includes id as String. If no argument is given, all of targets will be toggles.
  * - <b>Note:</b>
  * If you call load API soon after/before unload, unload param of load should be used. Otherwise chart will not be rendered properly because of cancel of animation.<br>
  * `done` will be called after data loaded, but it's not after rendering. It's because rendering will finish after some transition and there is some time lag between loading and rendering.
  * @method unload
  * @instance
  * @memberof Chart
  * @param {Object} args
  * - If ids given, the data that has specified target id will be unloaded. ids should be String or Array. If ids is not specified, all data will be unloaded.
  * - If done given, the specified function will be called after data loded.
  * @example
  *  // Unload data2 and data3
  *  chart.unload({
  *    ids: ["data2", "data3"]
  *  });
  */
	unload: function unload(argsValue) {
		var $$ = this.internal,
		    args = argsValue || {};
		args instanceof Array ? args = { ids: args } : typeof args === "string" && (args = { ids: [args] }), $$.unload($$.mapToTargetIds(args.ids), function () {
			$$.redraw({
				withUpdateOrgXDomain: !0,
				withUpdateXDomain: !0,
				withLegend: !0
			}), args.done && args.done();
		});
	}
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Update regions.
 * @method regions
 * @instance
 * @memberof Chart
 * @param {Array} regions Regions will be replaced with this argument. The format of this argument is the same as regions.
 * @return {Array} regions
 * @example
 * // Show 2 regions
 * chart.regions([
 *    {axis: "x", start: 5, class: "regionX"},
 *    {axis: "y", end: 50, class: "regionY"}
 * ]);
 */
var regions = function (_regions) {
  var $$ = this.internal,
      config = $$.config;
  return _regions ? (config.regions = _regions, $$.redrawWithoutRescale(), config.regions) : config.regions;
};

/**
 * Add new region.<br><br>
 * This API adds new region instead of replacing like regions.
 * @method regions:add
 * @instance
 * @memberof Chart
 * @param {Array|Object} regions New region will be added. The format of this argument is the same as regions and it's possible to give an Object if only one region will be added.
 * @return {Array} regions
 * @example
 * // Add a new region
 * chart.regions.add(
 *    {axis: "x", start: 5, class: "regionX"}
 * );
 *
 * // Add new regions
 * chart.regions.add([
 *    {axis: "x", start: 5, class: "regionX"},
 *    {axis: "y", end: 50, class: "regionY"}
 *]);
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
regions.add = function (regions) {
  var $$ = this.internal,
      config = $$.config;
  return regions ? (config.regions = config.regions.concat(regions), $$.redrawWithoutRescale(), config.regions) : config.regions;
}, regions.remove = function (optionsValue) {
  var $$ = this.internal,
      config = $$.config,
      options = optionsValue || {},
      duration = $$.getOption(options, "duration", config.transition_duration),
      classes = $$.getOption(options, "classes", [_classes2.default.region]),
      regions = $$.main.select("." + _classes2.default.regions).selectAll(classes.map(function (c) {
    return "." + c;
  }));


  return (duration ? regions.transition().duration(duration) : regions).style("opacity", "0").remove(), config.regions = config.regions.filter(function (region) {
    var found = !1;

    return !region.class || (region.class.split(" ").forEach(function (c) {
      classes.indexOf(c) >= 0 && (found = !0);
    }), !found);
  }), config.regions;
}, (0, _util.extend)(_Chart2.default.prototype, { regions: regions });

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Get selected data points.<br><br>
  * By this API, you can get selected data points information. To use this API, data.selection.enabled needs to be set true.
  * @method selected
  * @instance
  * @memberof Chart
  * @param {String} targetId You can filter the result by giving target id that you want to get. If not given, all of data points will be returned.
  * @return {Array} dataPoint
  * @example
  *  // all selected data points will be returned.
  *  chart.selected();
  *
  *  // all selected data points of data1 will be returned.
  *  chart.selected("data1");
  */
	selected: function selected(targetId) {
		var $$ = this.internal,
		    dataPoint = [];


		return $$.main.selectAll("." + (_classes2.default.shapes + $$.getTargetSelectorSuffix(targetId))).selectAll("." + _classes2.default.shape).filter(function () {
			return (0, _d.select)(this).classed(_classes2.default.SELECTED);
		}).each(function (d) {
			return dataPoint.push(d);
		}), dataPoint;
	},


	/**
  * Set data points to be selected.
  * @method select
  * @instance
  * @memberof Chart
  * @param {String} ids
  * @param {Number} indices
  * @param {Boolean} resetOther
  * @example
  *  // select from 'data1', indices 2 and unselect others selected
  *  chart.select("data1", 2, true);
  */
	select: function select(ids, indices, resetOther) {
		var $$ = this.internal,
		    config = $$.config;
		config.data_selection_enabled && $$.main.selectAll("." + _classes2.default.shapes).selectAll("." + _classes2.default.shape).each(function (d, i) {
			var shape = (0, _d.select)(this),
			    id = d.data ? d.data.id : d.id,
			    toggle = $$.getToggle(this, d).bind($$),
			    isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
			    isTargetIndex = !indices || indices.indexOf(i) >= 0,
			    isSelected = shape.classed(_classes2.default.SELECTED);


			// line/area selection not supported yet
			shape.classed(_classes2.default.line) || shape.classed(_classes2.default.area) || (isTargetId && isTargetIndex ? config.data_selection_isselectable(d) && !isSelected && toggle(!0, shape.classed(_classes2.default.SELECTED, !0), d, i) : (0, _util.isDefined)(resetOther) && resetOther && isSelected && toggle(!1, shape.classed(_classes2.default.SELECTED, !1), d, i));
		});
	},


	/**
  * Set data points to be un-selected.
  * @method unselect
  * @instance
  * @memberof Chart
  * @param {String} ids
  * @param {Number} indices
  * @example
  *  // unselect from 'data1', indices 2
  *  chart.unselect("data1", 2);
  */
	unselect: function unselect(ids, indices) {
		var $$ = this.internal,
		    config = $$.config;
		config.data_selection_enabled && $$.main.selectAll("." + _classes2.default.shapes).selectAll("." + _classes2.default.shape).each(function (d, i) {
			var shape = (0, _d.select)(this),
			    id = d.data ? d.data.id : d.id,
			    toggle = $$.getToggle(this, d).bind($$),
			    isTargetId = config.data_selection_grouped || !ids || ids.indexOf(id) >= 0,
			    isTargetIndex = !indices || indices.indexOf(i) >= 0,
			    isSelected = shape.classed(_classes2.default.SELECTED);


			// line/area selection not supported yet
			shape.classed(_classes2.default.line) || shape.classed(_classes2.default.area) || isTargetId && isTargetIndex && config.data_selection_isselectable(d) && isSelected && toggle(!1, shape.classed(_classes2.default.SELECTED, !1), d, i);
		});
	}
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Show data points
  * @method show
  * @instance
  * @memberof Chart
  * @param {String|Array} targetIdsValue
  * @param {Object} options
  */
	show: function show(targetIdsValue) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    $$ = this.internal,
		    targetIds = $$.mapToTargetIds(targetIdsValue);
		$$.removeHiddenTargetIds(targetIds);

		var targets = $$.svg.selectAll($$.selectorTargets(targetIds));

		targets.transition().style("opacity", "1", "important").call($$.endall, function () {
			targets.style("opacity", null).style("opacity", "1");
		}), options.withLegend && $$.showLegend(targetIds), $$.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		});
	},


	/**
  * Hide data points
  * @method hide
  * @instance
  * @memberof Chart
  * @param {String|Array} targetIdsValue
  * @param {Object} options
  */
	hide: function hide(targetIdsValue) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    $$ = this.internal,
		    targetIds = $$.mapToTargetIds(targetIdsValue);
		$$.addHiddenTargetIds(targetIds);

		var targets = $$.svg.selectAll($$.selectorTargets(targetIds));

		targets.transition().style("opacity", "0", "important").call($$.endall, function () {
			targets.style("opacity", null).style("opacity", "0");
		}), options.withLegend && $$.hideLegend(targetIds), $$.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		});
	},


	/**
  * Toggle data points
  * @method toggle
  * @instance
  * @memberof Chart
  * @param {Array} targetIds
  * @param {Object} options
  */
	toggle: function toggle(targetIds) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		    that = this,
		    $$ = this.internal;
		$$.mapToTargetIds(targetIds).forEach(function (targetId) {
			$$.isTargetToShow(targetId) ? that.hide(targetId, options) : that.show(targetId, options);
		});
	}
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Define tooltip
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var tooltip = function () {};

/**
 * Show tooltip
 * @method tooltip:show
 * @instance
 * @memberof Chart
 * @param {Array} args
 */
tooltip.show = function (args) {
	var $$ = this.internal,
	    index = void 0,
	    mouse = void 0;


	// determine mouse position on the chart
	args.mouse && (mouse = args.mouse), args.data ? $$.isMultipleX() ? (mouse = [$$.x(args.data.x), $$.getYScale(args.data.id)(args.data.value)], index = null) : index = (0, _util.isValue)(args.data.index) ? args.data.index : $$.getIndexByX(args.data.x) : typeof args.x === "undefined" ? typeof args.index !== "undefined" && (index = args.index) : index = $$.getIndexByX(args.x), $$.dispatchEvent("mouseover", index, mouse), $$.dispatchEvent("mousemove", index, mouse), $$.config.tooltip_onshow.call($$, args.data);
}, tooltip.hide = function () {
	this.internal.dispatchEvent("mouseout", 0), this.internal.config.tooltip_onhide.call(this);
}, (0, _util.extend)(_Chart2.default.prototype, { tooltip: tooltip });

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Change the type of the chart.
  * @method transform
  * @instance
  * @memberof Chart
  * @param {String} type Specify the type to be transformed. The types listed in data.type can be used.
  * @param {String|Array} targetIds Specify targets to be transformed. If not given, all targets will be the candidate.
  * @example
  *  // all targets will be bar chart.
  *  chart.transform("bar");
  *
  *  // only data1 will be bar chart.
  *  chart.transform("bar", "data1");
  *
  *  // only data1 and data2 will be bar chart.
  *  chart.transform("bar", ["data1", "data2"]);
  */
	transform: function transform(type, targetIds) {
		var $$ = this.internal,
		    options = ["pie", "donut"].indexOf(type) >= 0 ? { withTransform: !0 } : null;
		$$.transformTo(targetIds, type, options);
	}
}), (0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Change the type of the chart.
  * @private
  * @param {String|Array} targetIds
  * @param {String} type
  * @param {Object} optionsForRedraw
  */
	transformTo: function transformTo(targetIds, type, optionsForRedraw) {
		var $$ = this,
		    withTransitionForAxis = !$$.hasArcType(),
		    options = optionsForRedraw || { withTransitionForAxis: withTransitionForAxis };
		options.withTransitionForTransform = !1, $$.transiting = !1, $$.setTargetType(targetIds, type), $$.updateTargets($$.data.targets), $$.updateAndRedraw(options);
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_Chart2.default.prototype, {
	/**
  * Get and set x values for the chart.
  * @method x
  * @instance
  * @memberof Chart
  * @param {Array} x If x is given, x values of every target will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
  * @return {Object} xs
  * @example
  *  // Get current x values
  *  chart.x();
  *
  *  // Update x values for all targets
  *  chart.x([100, 200, 300, 400, ...]);
  */
	x: function x(_x) {
		var $$ = this.internal;

		return arguments.length && ($$.updateTargetX($$.data.targets, _x), $$.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		})), $$.data.xs;
	},


	/**
  * Get and set x values for the chart.
  * @method xs
  * @instance
  * @memberof Chart
  * @param {Array} xs If xs is given, specified target's x values will be updated. If no argument is given, current x values will be returned as an Object whose keys are the target ids.
  * @return {Object} xs
  * @example
  *  // Get current x values
  *  chart.xs();
  *
  *  // Update x values for all targets
  *  chart.xs({
  *    data1: [10, 20, 30, 40, ...],
  *    data2: [100, 200, 300, 400, ...]
  *  });
  */
	xs: function xs(_xs) {
		var $$ = this.internal;

		return arguments.length && ($$.updateTargetXs($$.data.targets, _xs), $$.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		})), $$.data.xs;
	}
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Zoom by giving x domain.
 * @method zoom
 * @instance
 * @memberof Chart
 * @param {Array} domainValue If domain is given, the chart will be zoomed to the given domain. If no argument is given, the current zoomed domain will be returned.
 * @example
 *  // Zoom to specified domain
 *  chart.zoom([10, 20]);
 *
 *  // Get the current zoomed domain
 *  chart.zoom();
 */
var zoom = function (domainValue) {
	var $$ = this.internal,
	    domain = domainValue,
	    resultDomain = void 0;


	if (domain) {

		if ($$.isTimeSeries() && (domain = domain.map(function (x) {
			return $$.parseDate(x);
		})), $$.config.subchart_show) {
			var xScale = $$.zoomScale || $$.x;

			$$.brush.getSelection().call($$.brush.move, [xScale(domain[0]), xScale(domain[1])]), resultDomain = domain;
		} else {
			var orgDomain = $$.x.orgDomain(),
			    k = (orgDomain[1] - orgDomain[0]) / (domain[1] - domain[0]),
			    tx = $$.isTimeSeries() ? 0 - k * $$.x(domain[0].getTime()) : domain[0] - k * $$.x(domain[0]);
			$$.zoom.updateTransformScale(_d.zoomIdentity.translate(tx, 0).scale(k)), resultDomain = $$.zoomScale.domain();
		}

		$$.redraw({
			withTransition: !0,
			withY: $$.config.zoom_rescale
		}), $$.config.zoom_onzoom.call(this, $$.x.orgDomain());
	} else resultDomain = ($$.zoomScale || $$.x).domain();
	return resultDomain;
};

/**
 * Enable and disable zooming.
 * @method zoom:enable
 * @instance
 * @memberof Chart
 * @param {Boolean} enabled If enabled is true, the feature of zooming will be enabled. If false is given, it will be disabled.
 * @example
 *  // Enable zooming
 *  chart.zoom.enable(true);
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
zoom.enable = function (enabled) {
	var $$ = this.internal;

	$$.config.zoom_enabled = enabled, $$.updateAndRedraw();
}, zoom.max = function (max) {
	var $$ = this.internal,
	    config = $$.config;


	if (max === 0 || max) config.zoom_x_max = (0, _d.max)([$$.orgXDomain[1], max]);else return config.zoom_x_max;

	return undefined;
}, zoom.min = function (min) {
	var $$ = this.internal,
	    config = $$.config;


	if (min === 0 || min) config.zoom_x_min = (0, _d.min)([$$.orgXDomain[0], min]);else return config.zoom_x_min;

	return undefined;
}, zoom.range = function (range) {
	if (arguments.length) (0, _util.isDefined)(range.max) && this.domain.max(range.max), (0, _util.isDefined)(range.min) && this.domain.min(range.min);else return {
			max: this.domain.max(),
			min: this.domain.min()
		};

	return undefined;
}, (0, _util.extend)(_Chart2.default.prototype, {
	zoom: zoom,
	/**
  * Unzoom zoomed area
  * @method unzoom
  * @instance
  * @memberof Chart
  * @example
  *  chart.unzoom();
  */
	unzoom: function unzoom() {
		var $$ = this.internal;

		$$.config.subchart_show ? $$.brush.getSelection().call($$.brush.move, null) : $$.zoom.updateTransformScale(_d.zoomIdentity), $$.redraw({
			withTransition: !0,
			withY: $$.config.zoom_rescale
		});
	}
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2),
    _Options = __webpack_require__(58),
    _Options2 = _interopRequireDefault(_Options),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_ChartInternal2.default.prototype, {
	getOptions: function getOptions() {
		var config = new _Options2.default();

		return (0, _util.merge)(config.value, this.additionalConfig);
	},


	additionalConfig: {},

	loadConfig: function loadConfig(config) {

		function find() {
			var key = keys.shift();

			return key && target && (typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) === "object" && key in target ? (target = target[key], find()) : key ? undefined : target;
		}

		var thisConfig = this.config,
		    target = void 0,
		    keys = void 0,
		    read = void 0;
		Object.keys(thisConfig).forEach(function (key) {
			target = config, keys = key.split("_"), read = find(), (0, _util.isDefined)(read) && (thisConfig[key] = read);
		});
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_ChartInternal2.default.prototype, {
	convertUrlToData: function convertUrlToData(url) {
		var _this = this,
		    mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "csv",
		    headers = arguments[2],
		    keys = arguments[3],
		    done = arguments[4],
		    type = mimeType,
		    req = (0, _d.request)(url);

		if (headers) for (var _iterator = Object.keys(headers), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					if (_i = _iterator.next(), _i.done) break;
					_ref = _i.value;
				}

				var header = _ref;
				req.header(header, headers[header]);
			}

		req.get(function (error, data) {
			var d = void 0;

			if (!data) throw new Error(error.responseURL + " " + error.status + " (" + error.statusText + ")");

			var response = data.response || data.responseText;

			d = type === "json" ? _this.convertJsonToData(JSON.parse(response), keys) : type === "tsv" ? _this.convertTsvToData(response) : _this.convertCsvToData(response), done.call(_this, d);
		});
	},
	convertCsvToData: function convertCsvToData(xsv) {
		var rows = (0, _d.csvParseRows)(xsv),
		    d = void 0;


		return rows.length === 1 ? (d = [{}], rows[0].forEach(function (id) {
			d[0][id] = null;
		})) : d = (0, _d.csvParse)(xsv), d;
	},
	convertTsvToData: function convertTsvToData(xsv) {
		var rows = (0, _d.tsvParseRows)(xsv),
		    d = void 0;


		return rows.length === 1 ? (d = [{}], rows[0].forEach(function (id) {
			d[0][id] = null;
		})) : d = (0, _d.tsvParse)(xsv), d;
	},
	convertJsonToData: function convertJsonToData(json, keys) {
		var _this2 = this,
		    newRows = [],
		    targetKeys = void 0,
		    data = void 0;

		return keys ? (keys.x ? (targetKeys = keys.value.concat(keys.x), this.config.data_x = keys.x) : targetKeys = keys.value, newRows.push(targetKeys), json.forEach(function (o) {

			for (var newRow = [], v = void 0, _iterator2 = targetKeys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					if (_i2 = _iterator2.next(), _i2.done) break;
					_ref2 = _i2.value;
				}

				var key = _ref2;
				v = _this2.findValueInJson(o, key), (0, _util.isUndefined)(v) && (v = null), newRow.push(v);
			}
			newRows.push(newRow);
		}), data = this.convertRowsToData(newRows)) : (Object.keys(json).forEach(function (key) {
			return newRows.push([key].concat(json[key]));
		}), data = this.convertColumnsToData(newRows)), data;
	},
	findValueInJson: function findValueInJson(object, path) {
		var convertedPath = path.replace(/\[(\w+)\]/g, ".$1"),
		    pathArray = convertedPath.replace(/^\./, "").split("."),
		    target = object; // convert indexes to properties (replace [] with .)
		// strip a leading dot


		for (var _iterator3 = pathArray, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
			var _ref3;

			if (_isArray3) {
				if (_i3 >= _iterator3.length) break;
				_ref3 = _iterator3[_i3++];
			} else {
				if (_i3 = _iterator3.next(), _i3.done) break;
				_ref3 = _i3.value;
			}

			var k = _ref3;

			if (k in target) target = target[k];else {
				target = undefined;

				break;
			}
		}
		return target;
	},
	convertRowsToData: function convertRowsToData(rows) {
		var keys = rows[0],
		    newRows = [],
		    newRow = {},
		    i = void 0,
		    j = void 0;


		for (i = 1; i < rows.length; i++) {
			for (newRow = {}, j = 0; j < rows[i].length; j++) {
				if ((0, _util.isUndefined)(rows[i][j])) throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
				newRow[keys[j]] = rows[i][j];
			}
			newRows.push(newRow);
		}

		return newRows;
	},
	convertColumnsToData: function convertColumnsToData(columns) {
		var newRows = [],
		    i = void 0,
		    j = void 0,
		    key = void 0;


		for (i = 0; i < columns.length; i++) for (key = columns[i][0], j = 1; j < columns[i].length; j++) {
			if ((0, _util.isUndefined)(newRows[j - 1]) && (newRows[j - 1] = {}), (0, _util.isUndefined)(columns[i][j])) throw new Error("Source data is missing a component at (" + i + ", " + j + ")!");
			newRows[j - 1][key] = columns[i][j];
		}
		return newRows;
	},
	convertDataToTargets: function convertDataToTargets(data, appendXs) {
		var _this3 = this,
		    $$ = this,
		    config = $$.config,
		    ids = (0, _d.keys)(data[0]).filter($$.isNotX, $$),
		    xs = (0, _d.keys)(data[0]).filter($$.isX, $$);

		ids.forEach(function (id) {
			var xKey = _this3.getXKey(id);

			_this3.isCustomX() || _this3.isTimeSeries() ? xs.indexOf(xKey) >= 0 ? _this3.data.xs[id] = (appendXs && $$.data.xs[id] ? $$.data.xs[id] : []).concat(data.map(function (d) {
				return d[xKey];
			}).filter(_util.isValue).map(function (rawX, i) {
				return $$.generateTargetX(rawX, id, i);
			})) : config.data_x ? _this3.data.xs[id] = _this3.getOtherTargetXs() : (0, _util.notEmpty)(config.data_xs) && ($$.data.xs[id] = $$.getXValuesOfXKey(xKey, $$.data.targets)) : $$.data.xs[id] = data.map(function (d, i) {
				return i;
			});
		}), ids.forEach(function (id) {
			if (!$$.data.xs[id]) throw new Error("x is not defined for id = \"" + id + "\".");
		});


		// convert to target
		var targets = ids.map(function (id, index) {
			var convertedId = config.data_idConverter(id);

			return {
				id: convertedId,
				id_org: id,
				values: data.map(function (d, i) {
					var xKey = $$.getXKey(id),
					    rawX = d[xKey],
					    value = d[id] === null || isNaN(d[id]) ? null : +d[id],
					    x = void 0;

					// use x as categories if custom x and categorized

					return $$.isCustomX() && $$.isCategorized() && index === 0 && !(0, _util.isUndefined)(rawX) ? (index === 0 && i === 0 && (config.axis_x_categories = []), x = config.axis_x_categories.indexOf(rawX), x === -1 && (x = config.axis_x_categories.length, config.axis_x_categories.push(rawX))) : x = $$.generateTargetX(rawX, id, i), ((0, _util.isUndefined)(d[id]) || $$.data.xs[id].length <= i) && (x = undefined), { x: x, value: value, id: convertedId };
				}).filter(function (v) {
					return (0, _util.isDefined)(v.x);
				})
			};
		});

		// finish targets


		return targets.forEach(function (t) {
			var i = void 0;

			// sort values by its x
			config.data_xSort && (t.values = t.values.sort(function (v1, v2) {
				var x1 = v1.x || v1.x === 0 ? v1.x : Infinity,
				    x2 = v2.x || v2.x === 0 ? v2.x : Infinity;


				return x1 - x2;
			})), i = 0, t.values.forEach(function (v) {
				v.index = i++;
			}), $$.data.xs[t.id].sort(function (v1, v2) {
				return v1 - v2;
			});
		}), $$.hasNegativeValue = $$.hasNegativeValueInTargets(targets), $$.hasPositiveValue = $$.hasPositiveValueInTargets(targets), config.data_type && $$.setTargetType($$.mapToIds(targets).filter(function (id) {
			return !(id in config.data_types);
		}), config.data_type), targets.forEach(function (d) {
			$$.addCache(d.id_org, d);
		}), targets;
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2),
    _d = __webpack_require__(2),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	isX: function isX(key) {
		var $$ = this,
		    config = $$.config,
		    dataKey = config.data_x && key === config.data_x,
		    existValue = (0, _util.notEmpty)(config.data_xs) && (0, _util.hasValue)(config.data_xs, key);


		return dataKey || existValue;
	},
	isNotX: function isNotX(key) {
		return !this.isX(key);
	},
	getXKey: function getXKey(id) {
		var $$ = this,
		    config = $$.config;


		return config.data_x ? config.data_x : (0, _util.notEmpty)(config.data_xs) ? config.data_xs[id] : null;
	},
	getXValuesOfXKey: function getXValuesOfXKey(key, targets) {
		var $$ = this,
		    ids = targets && (0, _util.notEmpty)(targets) ? $$.mapToIds(targets) : [],
		    xValues = void 0;

		return ids.forEach(function (id) {
			$$.getXKey(id) === key && (xValues = $$.data.xs[id]);
		}), xValues;
	},
	getIndexByX: function getIndexByX(x) {
		var $$ = this,
		    data = $$.filterByX($$.data.targets, x);


		return data.length ? data[0].index : null;
	},
	getXValue: function getXValue(id, i) {
		var $$ = this;

		return id in $$.data.xs && $$.data.xs[id] && (0, _util.isValue)($$.data.xs[id][i]) ? $$.data.xs[id][i] : i;
	},
	getOtherTargetXs: function getOtherTargetXs() {
		var $$ = this,
		    idsForX = Object.keys($$.data.xs);


		return idsForX.length ? $$.data.xs[idsForX[0]] : null;
	},
	getOtherTargetX: function getOtherTargetX(index) {
		var xs = this.getOtherTargetXs();

		return xs && index < xs.length ? xs[index] : null;
	},
	addXs: function addXs(xs) {
		var $$ = this;

		Object.keys(xs).forEach(function (id) {
			$$.config.data_xs[id] = xs[id];
		});
	},
	hasMultipleX: function hasMultipleX(xs) {
		// https://github.com/d3/d3-collection
		return (0, _d.set)(Object.keys(xs).map(function (id) {
			return xs[id];
		})).size() > 1;
	},
	isMultipleX: function isMultipleX() {
		return (0, _util.notEmpty)(this.config.data_xs) || !this.config.data_xSort || this.hasType("scatter");
	},
	addName: function addName(data) {
		var $$ = this,
		    name = void 0;

		return data && (name = $$.config.data_names[data.id], data.name = name === undefined ? data.id : name), data;
	},
	getValueOnIndex: function getValueOnIndex(values, index) {
		var valueOnIndex = values.filter(function (v) {
			return v.index === index;
		});

		return valueOnIndex.length ? valueOnIndex[0] : null;
	},
	updateTargetX: function updateTargetX(targets, x) {
		var $$ = this;

		targets.forEach(function (t) {
			t.values.forEach(function (v, i) {
				v.x = $$.generateTargetX(x[i], t.id, i);
			}), $$.data.xs[t.id] = x;
		});
	},
	updateTargetXs: function updateTargetXs(targets, xs) {
		var $$ = this;

		targets.forEach(function (t) {
			xs[t.id] && $$.updateTargetX([t], xs[t.id]);
		});
	},
	generateTargetX: function generateTargetX(rawX, id, index) {
		var $$ = this,
		    x = void 0;

		return x = $$.isTimeSeries() ? rawX ? $$.parseDate(rawX) : $$.parseDate($$.getXValue(id, index)) : $$.isCustomX() && !$$.isCategorized() ? (0, _util.isValue)(rawX) ? +rawX : $$.getXValue(id, index) : index, x;
	},
	cloneTarget: function cloneTarget(target) {
		return {
			id: target.id,
			id_org: target.id_org,
			values: target.values.map(function (d) {
				return { x: d.x, value: d.value, id: d.id };
			})
		};
	},
	updateXs: function updateXs() {
		var $$ = this;

		$$.data.targets.length && ($$.xs = [], $$.data.targets[0].values.forEach(function (v) {
			$$.xs[v.index] = v.x;
		}));
	},
	getPrevX: function getPrevX(i) {
		var x = this.xs[i - 1];

		return typeof x === "undefined" ? null : x;
	},
	getNextX: function getNextX(i) {
		var x = this.xs[i + 1];

		return typeof x === "undefined" ? null : x;
	},
	getMaxDataCount: function getMaxDataCount() {
		var $$ = this;

		return (0, _d.max)($$.data.targets, function (t) {
			return t.values.length;
		});
	},
	getMaxDataCountTarget: function getMaxDataCountTarget(targets) {
		var length = targets.length,
		    max = 0,
		    maxTarget = void 0;

		return length > 1 ? targets.forEach(function (t) {
			t.values.length > max && (maxTarget = t, max = t.values.length);
		}) : maxTarget = length ? targets[0] : null, maxTarget;
	},
	getEdgeX: function getEdgeX(targets) {
		return targets.length ? [(0, _d.min)(targets, function (t) {
			return t.values[0].x;
		}), (0, _d.max)(targets, function (t) {
			return t.values[t.values.length - 1].x;
		})] : [0, 0];
	},
	mapToIds: function mapToIds(targets) {
		return targets.map(function (d) {
			return d.id;
		});
	},
	mapToTargetIds: function mapToTargetIds(ids) {
		var $$ = this;

		return ids ? [].concat(ids) : $$.mapToIds($$.data.targets);
	},
	hasTarget: function hasTarget(targets, id) {
		var ids = this.mapToIds(targets),
		    i = void 0;


		for (i = 0; i < ids.length; i++) if (ids[i] === id) return !0;
		return !1;
	},
	isTargetToShow: function isTargetToShow(targetId) {
		return this.hiddenTargetIds.indexOf(targetId) < 0;
	},
	isLegendToShow: function isLegendToShow(targetId) {
		return this.hiddenLegendIds.indexOf(targetId) < 0;
	},
	filterTargetsToShow: function filterTargetsToShow(targets) {
		var $$ = this;

		return targets.filter(function (t) {
			return $$.isTargetToShow(t.id);
		});
	},
	mapTargetsToUniqueXs: function mapTargetsToUniqueXs(targets) {
		var $$ = this,
		    xs = (0, _d.set)((0, _d.merge)(targets.map(function (t) {
			return t.values.map(function (v) {
				return +v.x;
			});
		}))).values();

		return xs = $$.isTimeSeries() ? xs.map(function (x) {
			return new Date(+x);
		}) : xs.map(function (x) {
			return +x;
		}), xs.sort(function (a, b) {
			return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
		});
	},
	addHiddenTargetIds: function addHiddenTargetIds(targetIds) {
		this.hiddenTargetIds = this.hiddenTargetIds.concat(targetIds);
	},
	removeHiddenTargetIds: function removeHiddenTargetIds(targetIds) {
		this.hiddenTargetIds = this.hiddenTargetIds.filter(function (id) {
			return targetIds.indexOf(id) < 0;
		});
	},
	addHiddenLegendIds: function addHiddenLegendIds(targetIds) {
		this.hiddenLegendIds = this.hiddenLegendIds.concat(targetIds);
	},
	removeHiddenLegendIds: function removeHiddenLegendIds(targetIds) {
		this.hiddenLegendIds = this.hiddenLegendIds.filter(function (id) {
			return targetIds.indexOf(id) < 0;
		});
	},
	getValuesAsIdKeyed: function getValuesAsIdKeyed(targets) {
		var ys = {};

		return targets.forEach(function (t) {
			ys[t.id] = [], t.values.forEach(function (v) {
				ys[t.id].push(v.value);
			});
		}), ys;
	},
	checkValueInTargets: function checkValueInTargets(targets, checker) {
		var ids = Object.keys(targets),
		    i = void 0,
		    j = void 0,
		    values = void 0;


		for (i = 0; i < ids.length; i++) for (values = targets[ids[i]].values, j = 0; j < values.length; j++) if (checker(values[j].value)) return !0;
		return !1;
	},
	hasNegativeValueInTargets: function hasNegativeValueInTargets(targets) {
		return this.checkValueInTargets(targets, function (v) {
			return v < 0;
		});
	},
	hasPositiveValueInTargets: function hasPositiveValueInTargets(targets) {
		return this.checkValueInTargets(targets, function (v) {
			return v > 0;
		});
	},
	isOrderDesc: function isOrderDesc() {
		var config = this.config;

		return typeof config.data_order === "string" && config.data_order.toLowerCase() === "desc";
	},
	isOrderAsc: function isOrderAsc() {
		var config = this.config;

		return typeof config.data_order === "string" && config.data_order.toLowerCase() === "asc";
	},
	orderTargets: function orderTargets(targets) {
		var $$ = this,
		    config = $$.config,
		    orderAsc = $$.isOrderAsc(),
		    orderDesc = $$.isOrderDesc();
		// TODO: accept name array for order
		return orderAsc || orderDesc ? targets.sort(function (t1, t2) {
			var reducer = function (p, c) {
				return p + Math.abs(c.value);
			},
			    t1Sum = t1.values.reduce(reducer, 0),
			    t2Sum = t2.values.reduce(reducer, 0);


			return orderAsc ? t2Sum - t1Sum : t1Sum - t2Sum;
		}) : (0, _util.isFunction)(config.data_order) && targets.sort(config.data_order), targets;
	},
	filterByX: function filterByX(targets, x) {
		return (0, _d.merge)(targets.map(function (t) {
			return t.values;
		})).filter(function (v) {
			return v.x - x === 0;
		});
	},
	filterRemoveNull: function filterRemoveNull(data) {
		return data.filter(function (d) {
			return (0, _util.isValue)(d.value);
		});
	},
	filterByXDomain: function filterByXDomain(targets, xDomain) {
		return targets.map(function (t) {
			return {
				id: t.id,
				id_org: t.id_org,
				values: t.values.filter(function (v) {
					return xDomain[0] <= v.x && v.x <= xDomain[1];
				})
			};
		});
	},
	hasDataLabel: function hasDataLabel() {
		var config = this.config;

		if (typeof config.data_labels === "boolean" && config.data_labels) return !0;
		return (0, _typeof3.default)(config.data_labels) === "object" && (0, _util.notEmpty)(config.data_labels);
	},
	getDataLabelLength: function getDataLabelLength(min, max, key) {
		var $$ = this,
		    lengths = [0, 0];

		return $$.selectChart.select("svg").selectAll(".dummy").data([min, max]).enter().append("text").text(function (d) {
			return $$.dataLabelFormat(d.id)(d);
		}).each(function (d, i) {
			lengths[i] = this.getBoundingClientRect()[key] * 1.3;
		}).remove(), lengths;
	},
	isNoneArc: function isNoneArc(d) {
		return this.hasTarget(this.data.targets, d.id);
	},
	isArc: function isArc(d) {
		return "data" in d && this.hasTarget(this.data.targets, d.data.id);
	},
	findSameXOfValues: function findSameXOfValues(values, index) {
		var targetX = values[index].x,
		    sames = [],
		    i = void 0;


		for (i = index - 1; i >= 0 && !(targetX !== values[i].x); i--) sames.push(values[i]);
		for (i = index; i < values.length && !(targetX !== values[i].x); i++) sames.push(values[i]);
		return sames;
	},
	findClosestFromTargets: function findClosestFromTargets(targets, pos) {
		var $$ = this,
		    candidates = targets.map(function (target) {
			return $$.findClosest(target.values, pos);
		});
		// map to array of closest points of each target

		// decide closest point and return
		return $$.findClosest(candidates, pos);
	},
	findClosest: function findClosest(values, pos) {
		var $$ = this,
		    minDist = $$.config.point_sensitivity,
		    closest = void 0;

		// find mouseovering bar


		return values.filter(function (v) {
			return v && $$.isBarType(v.id);
		}).forEach(function (v) {
			var shape = $$.main.select().node("." + _classes2.default.bars + $$.getTargetSelectorSuffix(v.id) + "." + _classes2.default.bar + "-" + v.index);

			!closest && $$.isWithinBar(shape) && (closest = v);
		}), values.filter(function (v) {
			return v && !$$.isBarType(v.id);
		}).forEach(function (v) {
			var d = $$.dist(v, pos);

			d < minDist && (minDist = d, closest = v);
		}), closest;
	},
	dist: function dist(data, pos) {
		var $$ = this,
		    config = $$.config,
		    xIndex = config.axis_rotated ? 1 : 0,
		    yIndex = config.axis_rotated ? 0 : 1,
		    y = $$.circleY(data, data.index),
		    x = $$.x(data.x);


		return Math.sqrt(Math.pow(x - pos[xIndex], 2) + Math.pow(y - pos[yIndex], 2));
	},
	convertValuesToStep: function convertValuesToStep(values) {
		var converted = [].concat(values),
		    i = void 0;


		if (!this.isCategorized()) return values;

		for (i = values.length + 1; i > 0; i--) converted[i] = converted[i - 1];

		return converted[0] = {
			x: converted[0].x - 1,
			value: converted[0].value,
			id: converted[0].id
		}, converted[values.length + 1] = {
			x: converted[values.length].x + 1,
			value: converted[values.length].value,
			id: converted[values.length].id
		}, converted;
	},
	updateDataAttributes: function updateDataAttributes(name, attrs) {
		var $$ = this,
		    config = $$.config,
		    current = config["data_" + name];
		return typeof attrs === "undefined" ? current : (Object.keys(attrs).forEach(function (id) {
			current[id] = attrs[id];
		}), $$.redraw({ withLegend: !0 }), current);
	}
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_ChartInternal2.default.prototype, {
	load: function load(rawTargets, args) {
		var $$ = this,
		    targets = rawTargets;
		targets && (args.filter && (targets = targets.filter(args.filter)), (args.type || args.types) && targets.forEach(function (t) {
			var type = args.types && args.types[t.id] ? args.types[t.id] : args.type;

			$$.setTargetType(t.id, type);
		}), $$.data.targets.forEach(function (d) {
			for (var i = 0; i < targets.length; i++) if (d.id === targets[i].id) {
				d.values = targets[i].values, targets.splice(i, 1);

				break;
			}
		}), $$.data.targets = $$.data.targets.concat(targets)), $$.updateTargets($$.data.targets), $$.redraw({ withUpdateOrgXDomain: !0, withUpdateXDomain: !0, withLegend: !0 }), args.done && args.done();
	},
	loadFromArgs: function loadFromArgs(args) {
		var $$ = this;

		args.data ? $$.load($$.convertDataToTargets(args.data), args) : args.url ? $$.convertUrlToData(args.url, args.mimeType, args.headers, args.keys, function (data) {
			$$.load($$.convertDataToTargets(data), args);
		}) : args.json ? $$.load($$.convertDataToTargets($$.convertJsonToData(args.json, args.keys)), args) : args.rows ? $$.load($$.convertDataToTargets($$.convertRowsToData(args.rows)), args) : args.columns ? $$.load($$.convertDataToTargets($$.convertColumnsToData(args.columns)), args) : $$.load(null, args);
	},
	unload: function unload(rawTargetIds, customDoneCb) {
		var $$ = this,
		    done = customDoneCb,
		    targetIds = rawTargetIds;


		// If no target, call done and return
		return done || (done = function () {}), targetIds = targetIds.filter(function (id) {
			return $$.hasTarget($$.data.targets, id);
		}), targetIds && targetIds.length !== 0 ? void ($$.svg.selectAll(targetIds.map(function (id) {
			return $$.selectorTarget(id);
		})).transition().style("opacity", "0").remove().call($$.endall, done), targetIds.forEach(function (id) {
			$$.withoutFadeIn[id] = !1, $$.legend && $$.legend.selectAll("." + _classes2.default.legendItem + $$.getTargetSelectorSuffix(id)).remove(), $$.data.targets = $$.data.targets.filter(function (t) {
				return t.id !== id;
			});
		})) : void done();
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Called when dragging.
  * Data points can be selected.
  * @private
  * @param {Object} mouse Object
  */
	drag: function drag(mouse) {
		var $$ = this,
		    config = $$.config,
		    main = $$.main;
		// do nothing if not selectable
		// skip when single selection because drag is used for multiple selection

		if (!$$.hasArcType() && config.data_selection_enabled && (!config.zoom_enabled || $$.zoom.altDomain) && config.data_selection_multiple) {
				var sx = $$.dragStart[0],
				    sy = $$.dragStart[1],
				    mx = mouse[0],
				    my = mouse[1],
				    minX = Math.min(sx, mx),
				    maxX = Math.max(sx, mx),
				    minY = config.data_selection_grouped ? $$.margin.top : Math.min(sy, my),
				    maxY = config.data_selection_grouped ? $$.height : Math.max(sy, my);
				main.select("." + _classes2.default.dragarea).attr("x", minX).attr("y", minY).attr("width", maxX - minX).attr("height", maxY - minY), main.selectAll("." + _classes2.default.shapes).selectAll("." + _classes2.default.shape).filter(function (d) {
					return config.data_selection_isselectable(d);
				}).each(function (d, i) {
					var shape = (0, _d.select)(this),
					    isSelected = shape.classed(_classes2.default.SELECTED),
					    isIncluded = shape.classed(_classes2.default.INCLUDED),
					    _x = void 0,
					    _y = void 0,
					    _w = void 0,
					    _h = void 0,
					    toggle = void 0,
					    isWithin = !1,
					    box = void 0;


					if (shape.classed(_classes2.default.circle)) _x = shape.attr("cx") * 1, _y = shape.attr("cy") * 1, toggle = $$.togglePoint, isWithin = minX < _x && _x < maxX && minY < _y && _y < maxY;else if (shape.classed(_classes2.default.bar)) box = (0, _util.getPathBox)(this), _x = box.x, _y = box.y, _w = box.width, _h = box.height, toggle = $$.togglePath, isWithin = !(maxX < _x || _x + _w < minX) && !(maxY < _y || _y + _h < minY);else
						// line/area selection not supported yet
						return;
					isWithin ^ isIncluded && (shape.classed(_classes2.default.INCLUDED, !isIncluded), shape.classed(_classes2.default.SELECTED, !isSelected), toggle.call($$, !isSelected, shape, d, i));
				});
			} // skip if zoomable because of conflict drag dehavior
	},


	/**
  * Called when the drag starts.
  * Adds and Shows the drag area.
  * @private
  * @param {Object} mouse Object
  */
	dragstart: function dragstart(mouse) {
		var $$ = this,
		    config = $$.config;
		// do nothing if not selectable
		$$.hasArcType() || !config.data_selection_enabled || ($$.dragStart = mouse, $$.main.select("." + _classes2.default.chart).append("rect").attr("class", _classes2.default.dragarea).style("opacity", "0.1"), $$.dragging = !0);
	},


	/**
  * Called when the drag finishes.
  * Removes the drag area.
  * @private
  */
	dragend: function dragend() {
		var $$ = this,
		    config = $$.config;
		// do nothing if not selectable
		$$.hasArcType() || !config.data_selection_enabled || ($$.main.select("." + _classes2.default.dragarea).transition().duration(100).style("opacity", "0").remove(), $$.main.selectAll("." + _classes2.default.shape).classed(_classes2.default.INCLUDED, !1), $$.dragging = !1);
	}
}); // interpolate

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Initialize the area that detects the event.
  * Add a container for the zone that detects the event.
  * @private
  */
	initEventRect: function initEventRect() {
		var $$ = this;

		$$.main.select("." + _classes2.default.chart).append("g").attr("class", _classes2.default.eventRects).style("fill-opacity", "0");
	},


	/**
  * Redraws the area that detects the event.
  * @private
  */
	redrawEventRect: function redrawEventRect() {
		var $$ = this,
		    config = $$.config,
		    isMultipleX = $$.isMultipleX(),
		    eventRects = $$.main.select("." + _classes2.default.eventRects).style("cursor", config.zoom_enabled ? config.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(_classes2.default.eventRectsMultiple, isMultipleX).classed(_classes2.default.eventRectsSingle, !isMultipleX),
		    eventRectUpdate = void 0,
		    maxDataCountTarget = void 0;

		// rects for mouseover


		// clear old rects


		if (eventRects.selectAll("." + _classes2.default.eventRect).remove(), $$.eventRect = eventRects.selectAll("." + _classes2.default.eventRect), isMultipleX ? (eventRectUpdate = $$.eventRect.data([0]), eventRectUpdate = $$.generateEventRectsForMultipleXs(eventRectUpdate.enter() // enter : only one rect will be added
		).merge(eventRectUpdate), $$.updateEventRect(eventRectUpdate)) : (maxDataCountTarget = $$.getMaxDataCountTarget($$.data.targets), eventRects.datum(maxDataCountTarget ? maxDataCountTarget.values : []), $$.eventRect = eventRects.selectAll("." + _classes2.default.eventRect), eventRectUpdate = $$.eventRect.data(function (d) {
			return d;
		}), eventRectUpdate.exit().remove(), eventRectUpdate = $$.generateEventRectsForSingleX(eventRectUpdate.enter()).merge(eventRectUpdate), $$.updateEventRect(eventRectUpdate)), $$.inputType === "touch" && !$$.hasArcType()) {
			var getEventRect = function () {
				var touch = _d.event.changedTouches[0];

				return (0, _d.select)(document.elementFromPoint(touch.clientX, touch.clientY));
			},
			    getIndex = function (eventRect) {
				var index = eventRect && eventRect.attr("class") && eventRect.attr("class").replace(new RegExp("(" + _classes2.default.eventRect + "-?|s)", "g"), "") * 1;

				return (isNaN(index) || index === null) && (index = -1), index;
			},
			    startClientY = void 0,
			    selectRect = function (context) {
				var eventType = _d.event.type,
				    touch = _d.event.changedTouches[0],
				    axisRotated = $$.config.axis_rotated,
				    currentClientY = touch.clientY;

				// If movement is less than 5px, scrolling outside the chart is prevented from working.


				if (eventType === "touchstart") startClientY = currentClientY, axisRotated && _d.event.preventDefault();else if (eventType === "touchmove" && startClientY) {
					var moveY = Math.abs(startClientY - currentClientY);

					!axisRotated && moveY < 5 && _d.event.preventDefault();
				}

				if (isMultipleX) $$.selectRectForMultipleXs(context);else {
					var eventRect = getEventRect(),
					    index = getIndex(eventRect);
					index === -1 ? $$.unselectRect() : $$.selectRectForSingle(context, eventRect, index);
				}
			},
			    touchHandler = function () {
				var eventRect = getEventRect();

				if (eventRect.classed(_classes2.default.eventRect)) {
					if ($$.dragging || $$.flowing || $$.hasArcType()) return;

					selectRect(this);
				} else $$.unselectRect();
			};

			$$.svg.on("touchstart", touchHandler).on("touchmove", touchHandler).on("touchend", function () {
				var eventRect = getEventRect();

				if (eventRect.classed(_classes2.default.eventRect)) {
					if ($$.hasArcType() || !$$.toggleShape || $$.cancelClick) return void ($$.cancelClick && ($$.cancelClick = !1));

					// Call event handler
					var index = getIndex(eventRect);

					isMultipleX || index === -1 || $$.main.selectAll("." + _classes2.default.shape + "-" + index).each(function (d2) {
						return config.data_onout.call($$.api, d2);
					});
				}
			});
		}
	},


	/**
  * Updates the location and size of the eventRect.
  * @private
  * @param {Object} D3.select(CLASS.eventRects) object.
  */
	updateEventRect: function updateEventRect(eventRectUpdate) {
		var $$ = this,
		    config = $$.config,
		    eventRectData = eventRectUpdate || $$.eventRect.data(),
		    x = void 0,
		    y = void 0,
		    w = void 0,
		    h = void 0; // set update selection if null


		if ($$.isMultipleX()) x = 0, y = 0, w = $$.width, h = $$.height;else {
			var rectW = void 0,
			    rectX = void 0;


			if (($$.isCustomX() || $$.isTimeSeries()) && !$$.isCategorized()) $$.updateXs(), rectW = function (d) {
					var prevX = $$.getPrevX(d.index),
					    nextX = $$.getNextX(d.index);


					// if there this is a single data point make the eventRect full width (or height)
					return prevX === null && nextX === null ? config.axis_rotated ? $$.height : $$.width : (prevX === null && (prevX = $$.x.domain()[0]), nextX === null && (nextX = $$.x.domain()[1]), Math.max(0, ($$.x(nextX) - $$.x(prevX)) / 2));
				}, rectX = function (d) {
					var nextX = $$.getNextX(d.index),
					    thisX = $$.data.xs[d.id][d.index],
					    prevX = $$.getPrevX(d.index);


					// if there this is a single data point position the eventRect at 0
					return prevX === null && nextX === null ? 0 : (prevX === null && (prevX = $$.x.domain()[0]), ($$.x(thisX) + $$.x(prevX)) / 2);
				};else {
				var edgs = $$.getEdgeX($$.data.targets);

				rectW = ($$.x(edgs[1]) - $$.x(edgs[0])) / $$.getMaxDataCount(), rectX = function (d) {
					return $$.x(d.x) - rectW / 2;
				};
			}

			x = config.axis_rotated ? 0 : rectX, y = config.axis_rotated ? rectX : 0, w = config.axis_rotated ? $$.width : rectW, h = config.axis_rotated ? rectW : $$.height;
		}

		eventRectData.attr("class", $$.classEvent.bind($$)).attr("x", x).attr("y", y).attr("width", w).attr("height", h);
	},
	selectRectForSingle: function selectRectForSingle(context, eventRect, index) {
		var $$ = this,
		    config = $$.config,
		    selectedData = $$.filterTargetsToShow($$.data.targets).map(function (t) {
			return $$.addName($$.getValueOnIndex(t.values, index));
		});
		// Show tooltip
		config.tooltip_grouped && ($$.showTooltip(selectedData, context), $$.showXGridFocus(selectedData), !config.data_selection_enabled || config.data_selection_grouped) || $$.main.selectAll("." + _classes2.default.shape + "-" + index).each(function () {
			(0, _d.select)(this).classed(_classes2.default.EXPANDED, !0), config.data_selection_enabled && eventRect.style("cursor", config.data_selection_grouped ? "pointer" : null), config.tooltip_grouped || ($$.hideXGridFocus(), $$.hideTooltip(), !config.data_selection_grouped && ($$.unexpandCircles(index), $$.unexpandBars(index)));
		}).filter(function (d) {
			return $$.isWithinShape(this, d);
		}).each(function (d) {
			config.data_selection_enabled && (config.data_selection_grouped || config.data_selection_isselectable(d)) && eventRect.style("cursor", "pointer"), config.tooltip_grouped || ($$.showTooltip([d], this), $$.showXGridFocus([d]), config.point_focus_expand_enabled && $$.expandCircles(index, d.id, !0), $$.expandBars(index, d.id, !0));
		});
	},
	selectRectForMultipleXs: function selectRectForMultipleXs(context) {
		var $$ = this,
		    config = $$.config,
		    targetsToShow = $$.filterTargetsToShow($$.data.targets);

		// show tooltip when cursor is close to some point
		if (!$$.dragging && !$$.hasArcType(targetsToShow)) {

				var mouse = (0, _d.mouse)($$.main.select("." + _classes2.default.eventRects + " ." + _classes2.default.eventRect).node()),
				    closest = $$.findClosestFromTargets(targetsToShow, mouse),
				    sameXData = void 0;


				if ($$.mouseover && (!closest || closest.id !== $$.mouseover.id) && (config.data_onout.call($$.api, $$.mouseover), $$.mouseover = undefined), !closest) return void $$.unselectRect();

				sameXData = $$.isScatterType(closest) || !config.tooltip_grouped ? [closest] : $$.filterByX(targetsToShow, closest.x);
				var selectedData = sameXData.map(function (d) {
					return $$.addName(d);
				});

				$$.showTooltip(selectedData, context), config.point_focus_expand_enabled && $$.expandCircles(closest.index, closest.id, !0), $$.expandBars(closest.index, closest.id, !0), $$.showXGridFocus(selectedData), ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) && ($$.svg.select("" + _classes2.default.eventRect).style("cursor", "pointer"), !$$.mouseover && (config.data_onover.call($$.api, closest), $$.mouseover = closest));
			} // do nothing when dragging
	},


	/**
  * Unselect EventRect.
  * @private
  */
	unselectRect: function unselectRect() {
		var $$ = this;

		$$.svg.select("." + _classes2.default.eventRect).style("cursor", null), $$.hideXGridFocus(), $$.hideTooltip(), $$.unexpandCircles(), $$.unexpandBars();
	},


	/**
  * Create eventRect for each data on the x-axis.
  * Register touch and drag events.
  * @private
  * @param {Object} D3.select(CLASS.eventRects) object.
  * @returns {Object} D3.select(CLASS.eventRects) object.
  */
	generateEventRectsForSingleX: function generateEventRectsForSingleX(eventRectEnter) {
		var $$ = this,
		    config = $$.config,
		    isMouse = $$.inputType === "mouse";


		return eventRectEnter.append("rect").attr("class", $$.classEvent.bind($$)).style("cursor", config.data_selection_enabled && config.data_selection_grouped ? "pointer" : null).on(isMouse ? "mouseover" : undefined, function (d) {
			if (!($$.dragging || $$.flowing || $$.hasArcType())) {
					// do nothing while dragging/flowing

					var index = d.index;

					// Expand shapes for selection
					config.point_focus_expand_enabled && $$.expandCircles(index, null, !0), $$.expandBars(index, null, !0), index !== -1 && $$.main.selectAll("." + _classes2.default.shape + "-" + index).each(function (d2) {
						return config.data_onover.call($$.api, d2);
					});
				}
		}).on(isMouse ? "mousemove" : undefined, function (d) {
			if (!($$.dragging || $$.flowing || $$.hasArcType())) {
					// do nothing while dragging/flowing

					var index = d.index,
					    eventRect = $$.svg.select("." + _classes2.default.eventRect + "-" + index);
					$$.isStepType(d) && $$.config.line_step_type === "step-after" && (0, _d.mouse)(this)[0] < $$.x($$.getXValue(d.id, index)) && (index -= 1), index === -1 ? $$.unselectRect() : $$.selectRectForSingle(this, eventRect, index);
				}
		}).on(isMouse ? "mouseout" : undefined, function (d) {
			if ($$.config && !$$.hasArcType()) {
					// chart is destroyed

					var index = d.index;

					$$.unselectRect(), $$.main.selectAll("." + _classes2.default.shape + "-" + index).each(function (d2) {
						return config.data_onout.call($$.api, d2);
					});
				}
		}).on(isMouse ? "click" : undefined, function (d) {
			if ($$.hasArcType() || !$$.toggleShape || $$.cancelClick) return void ($$.cancelClick && ($$.cancelClick = !1));

			var index = d.index;

			$$.main.selectAll("." + _classes2.default.shape + "-" + index).each(function (d2) {
				(config.data_selection_grouped || $$.isWithinShape(this, d2)) && ($$.toggleShape(this, d2, index), $$.config.data_onclick.call($$.api, d2, this));
			});
		}).call(config.data_selection_draggable && $$.drag ? (0, _d.drag)().origin(Object).on("drag", function () {
			$$.drag((0, _d.mouse)(this));
		}).on("dragstart", function () {
			$$.dragstart((0, _d.mouse)(this));
		}).on("dragend", function () {
			$$.dragend();
		}) : function () {});
	},


	/**
  * Create an eventRect,
  * Register touch and drag events.
  * @private
  * @param {Object} D3.select(CLASS.eventRects) object.
  * @returns {Object} D3.select(CLASS.eventRects) object.
  */
	generateEventRectsForMultipleXs: function generateEventRectsForMultipleXs(eventRectEnter) {
		var $$ = this,
		    config = $$.config,
		    isMouse = $$.inputType === "mouse";


		return eventRectEnter.append("rect").attr("x", 0).attr("y", 0).attr("width", $$.width).attr("height", $$.height).attr("class", _classes2.default.eventRect).on(isMouse ? "mouseover" : undefined, function () {
			$$.selectRectForMultipleXs(this);
		}).on(isMouse ? "mouseout" : undefined, function () {
			!$$.config || $$.hasArcType() || $$.unselectRect(); // chart is destroyed
		}).on(isMouse ? "mousemove" : undefined, function () {
			$$.selectRectForMultipleXs(this);
		}).on(isMouse ? "click" : undefined, function () {
			var _this = this,
			    targetsToShow = $$.filterTargetsToShow($$.data.targets);

			// select if selection enabled
			if (!$$.hasArcType(targetsToShow)) {

					var mouse = (0, _d.mouse)(this),
					    closest = $$.findClosestFromTargets(targetsToShow, mouse);
					!closest || ($$.isBarType(closest.id) || $$.dist(closest, mouse) < config.point_sensitivity) && $$.main.selectAll("." + _classes2.default.shapes + $$.getTargetSelectorSuffix(closest.id)).selectAll("." + _classes2.default.shape + "-" + closest.index).each(function () {
						(config.data_selection_grouped || $$.isWithinShape(_this, closest)) && ($$.toggleShape(_this, closest, closest.index), $$.config.data_onclick.call($$.api, closest, _this));
					});
				}
		}).call(config.data_selection_draggable && $$.drag ? (0, _d.drag)().origin(Object).on("drag", function () {
			$$.drag((0, _d.mouse)(this));
		}).on("dragstart", function () {
			$$.dragstart((0, _d.mouse)(this));
		}).on("dragend", function () {
			$$.dragend();
		}) : function () {});
	},


	/**
  * Dispatch an event.
  * @private
  * @param {String} type event type
  * @param {Number} index Index of eventRect
  * @param {Object} mouse Object
  */
	dispatchEvent: function dispatchEvent(type, index, mouse) {
		var $$ = this,
		    selector = $$.isMultipleX() ? "." + _classes2.default.eventRect : _classes2.default.eventRect + "-" + index,
		    eventRect = $$.main.select(selector).node(),
		    box = eventRect.getBoundingClientRect(),
		    x = box.left + (mouse ? mouse[0] : 0),
		    y = box.top + (mouse ? mouse[1] : 0),
		    event = document.createEvent("MouseEvents").initMouseEvent(type, !0, !0, window, 0, x, y, x, y, !1, !1, !1, !1, 0, null);
		eventRect.dispatchEvent(event);
	}
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Initialize the brush.
  * @private
  */
	initBrush: function initBrush() {
		var $$ = this;

		// set the brush
		$$.brush = $$.config.axis_rotated ? (0, _d.brushY)() : (0, _d.brushX)();


		// set "brush" event
		var brushHandler = function () {
			$$.redrawForBrush();
		};

		$$.brush.on("start", function () {
			$$.inputType === "touch" && $$.hideTooltip(), brushHandler();
		}).on("brush", brushHandler), $$.brush.update = function () {
			var extent = this.extent()();

			return extent[1].filter(function (v) {
				return isNaN(v);
			}).length === 0 && $$.context && $$.context.select("." + _classes2.default.brush).call(this), this;
		}, $$.brush.scale = function (scale, height) {
			var overlay = $$.svg.select(".bb-brush .overlay"),
			    extent = [[0, 0]];
			scale.range ? extent.push([scale.range()[1], (height || !overlay.empty()) && ~~overlay.attr("height") || 60]) : scale.constructor === Array && extent.push(scale), $$.config.axis_rotated && extent.reverse(), this.extent($$.config.axis_x_extent || extent), this.update();
		}, $$.brush.getSelection = function () {
			return $$.context ? $$.context.select("." + _classes2.default.brush) : (0, _d.select)([]);
		};
	},


	/**
  * Initialize the subchart.
  * @private
  */
	initSubchart: function initSubchart() {
		var $$ = this,
		    config = $$.config,
		    visibility = config.subchart_show ? "visible" : "hidden";
		$$.context = $$.svg.append("g").attr("transform", $$.getTranslate("context"));


		var context = $$.context;

		context.style("visibility", visibility), context.append("g").attr("clip-path", $$.clipPathForSubchart).attr("class", _classes2.default.chart), context.select("." + _classes2.default.chart).append("g").attr("class", _classes2.default.chartBars), context.select("." + _classes2.default.chart).append("g").attr("class", _classes2.default.chartLines), context.append("g").attr("clip-path", $$.clipPath).attr("class", _classes2.default.brush).call($$.brush), $$.axes.subx = context.append("g").attr("class", _classes2.default.axisX).attr("transform", $$.getTranslate("subx")).attr("clip-path", config.axis_rotated ? "" : $$.clipPathForXAxis).style("visibility", config.subchart_axis_x_show ? visibility : "hidden");
	},


	/**
  * Update sub chart
  * @private
  * @param {Object} $$.data.targets
  */
	updateTargetsForSubchart: function updateTargetsForSubchart(targets) {
		var $$ = this,
		    context = $$.context,
		    config = $$.config,
		    classChartBar = $$.classChartBar.bind($$),
		    classBars = $$.classBars.bind($$),
		    classChartLine = $$.classChartLine.bind($$),
		    classLines = $$.classLines.bind($$),
		    classAreas = $$.classAreas.bind($$);


		if (config.subchart_show) {
			// -- Bar --//
			var contextBarUpdate = context.select("." + _classes2.default.chartBars).selectAll("." + _classes2.default.chartBar).data(targets).attr("class", classChartBar),
			    contextBarEnter = contextBarUpdate.enter().append("g").style("opacity", "0").attr("class", classChartBar).merge(contextBarUpdate);


			// Bars for each data
			contextBarEnter.append("g").attr("class", classBars);


			// -- Line --//
			var contextLineUpdate = context.select("." + _classes2.default.chartLines).selectAll("." + _classes2.default.chartLine).data(targets).attr("class", classChartLine),
			    contextLineEnter = contextLineUpdate.enter().append("g").style("opacity", "0").attr("class", classChartLine).merge(contextLineUpdate);


			// Lines for each data
			contextLineEnter.append("g").attr("class", classLines), contextLineEnter.append("g").attr("class", classAreas), context.selectAll("." + _classes2.default.brush + " rect").attr(config.axis_rotated ? "width" : "height", config.axis_rotated ? $$.width2 : $$.height2);
		}
	},


	/**
  * Update the bar of the sub chart
  * @private
  * @param {Object} durationForExit
  */
	updateBarForSubchart: function updateBarForSubchart(durationForExit) {
		var $$ = this;

		$$.contextBar = $$.context.selectAll("." + _classes2.default.bars).selectAll("." + _classes2.default.bar).data($$.barData.bind($$)), $$.contextBar.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $$.contextBar = $$.contextBar.enter().append("path").attr("class", $$.classBar.bind($$)).style("stroke", "none").style("fill", $$.color).merge($$.contextBar).style("opacity", $$.initialOpacity.bind($$));
	},


	/**
  * Redraw the bar of the subchart
  * @private
  * @param {String} path in subchart bar
  * @param {Boolean} whether or not to transition.
  * @param {Number} transition duration
  */
	redrawBarForSubchart: function redrawBarForSubchart(drawBarOnSub, withTransition, duration) {
		var contextBar = void 0;

		contextBar = withTransition ? this.contextBar.transition(Math.random().toString()).duration(duration) : this.contextBar, contextBar.attr("d", drawBarOnSub).style("opacity", "1");
	},


	/**
  * Update the line of the sub chart
  * @private
  * @param {Number} Fade-out transition duration
  */
	updateLineForSubchart: function updateLineForSubchart(durationForExit) {
		var $$ = this;

		$$.contextLine = $$.context.selectAll("." + _classes2.default.lines).selectAll("." + _classes2.default.line).data($$.lineData.bind($$)), $$.contextLine.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $$.contextLine = $$.contextLine.enter().append("path").attr("class", $$.classLine.bind($$)).style("stroke", $$.color).merge($$.contextLine).style("opacity", $$.initialOpacity.bind($$));
	},


	/**
  * Redraw the line of the subchart
  * @private
  * @param {String} path in subchart line
  * @param {Boolean} whether or not to transition
  * @param {Number} transition duration
  */
	redrawLineForSubchart: function redrawLineForSubchart(drawLineOnSub, withTransition, duration) {
		var contextLine = void 0;

		contextLine = withTransition ? this.contextLine.transition(Math.random().toString()).duration(duration) : this.contextLine, contextLine.attr("d", drawLineOnSub).style("opacity", "1");
	},


	/**
  * Update the area of the sub chart
  * @private
  * @param {Number} Fade-out transition duration
  */
	updateAreaForSubchart: function updateAreaForSubchart(durationForExit) {
		var $$ = this;

		$$.contextArea = $$.context.selectAll("." + _classes2.default.areas).selectAll("." + _classes2.default.area).data($$.lineData.bind($$)), $$.contextArea.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $$.contextArea = $$.contextArea.enter().append("path").attr("class", $$.classArea.bind($$)).style("fill", $$.color).style("opacity", function () {
			return $$.orgAreaOpacity = (0, _d.select)(this).style("opacity"), "0";
		}).merge($$.contextArea).style("opacity", "0");
	},

	/**
  * Redraw the area of the subchart
  * @private
  * @param {String} path in subchart line
  * @param {Boolean} whether or not to transition
  * @param {Number} transition duration
  */
	redrawAreaForSubchart: function redrawAreaForSubchart(drawAreaOnSub, withTransition, duration) {
		var contextArea = void 0;

		contextArea = withTransition ? this.contextArea.transition(Math.random().toString()).duration(duration) : this.contextArea, contextArea.attr("d", drawAreaOnSub).style("fill", this.color).style("opacity", this.orgAreaOpacity);
	},


	/**
  * Redraw subchart.
  * @private
  * @param {Boolean} whether or not to show subchart
  * @param Do not use.
  * @param {Number} transition duration
  * @param Do not use.
  * @param {Object} area Indices
  * @param {Object} bar Indices
  * @param {Object} line Indices
  */
	redrawSubchart: function redrawSubchart(withSubchart, transitions, duration, durationForExit, areaIndices, barIndices, lineIndices) {
		var $$ = this,
		    config = $$.config;


		// subchart
		if ($$.context.style("visibility", config.subchart_show ? "visible" : "hidden"), config.subchart_show && (_d.event && _d.event.type === "zoom" && $$.brush.update(), withSubchart)) {
			$$.brushEmpty() || $$.brush.update();


			// setup drawer - MEMO: this must be called after axis updated
			var drawAreaOnSub = $$.generateDrawArea(areaIndices, !0),
			    drawBarOnSub = $$.generateDrawBar(barIndices, !0),
			    drawLineOnSub = $$.generateDrawLine(lineIndices, !0);
			$$.updateBarForSubchart(duration), $$.updateLineForSubchart(duration), $$.updateAreaForSubchart(duration), $$.redrawBarForSubchart(drawBarOnSub, duration, duration), $$.redrawLineForSubchart(drawLineOnSub, duration, duration), $$.redrawAreaForSubchart(drawAreaOnSub, duration, duration);
		}
	},

	/**
  * Redraw the brush.
  * @private
  */
	redrawForBrush: function redrawForBrush() {
		var $$ = this,
		    x = $$.x;
		$$.redraw({
			withTransition: !1,
			withY: $$.config.zoom_rescale,
			withSubchart: !1,
			withUpdateXDomain: !0,
			withDimension: !1
		}), $$.config.subchart_onbrush.call($$.api, x.orgDomain());
	},


	/**
  * Transform context
  * @private
  * @param {Boolean} indicates transition is enabled
  * @param {Object} The return value of the generateTransitions method of Axis.
  */
	transformContext: function transformContext(withTransition, transitions) {
		var $$ = this,
		    subXAxis = void 0;
		transitions && transitions.axisSubX ? subXAxis = transitions.axisSubX : (subXAxis = $$.context.select("." + _classes2.default.axisX), withTransition && (subXAxis = subXAxis.transition())), $$.context.attr("transform", $$.getTranslate("context")), subXAxis.attr("transform", $$.getTranslate("subx"));
	},


	/**
  * Get default extent
  * @private
  * @returns {Array} default extent
  */
	getDefaultExtent: function getDefaultExtent() {
		var $$ = this,
		    config = $$.config,
		    extent = (0, _util.isFunction)(config.axis_x_extent) ? config.axis_x_extent($$.getXDomain($$.data.targets)) : config.axis_x_extent;


		return $$.isTimeSeries() && (extent = [$$.parseDate(extent[0]), $$.parseDate(extent[1])]), extent;
	}
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Initialize zoom.
  * @private
  */
	initZoom: function initZoom() {
		var $$ = this,
		    config = $$.config,
		    startEvent = void 0;
		$$.zoomScale = null, $$.zoom = (0, _d.zoom)().duration(0).on("start", function () {
			startEvent = _d.event.sourceEvent, $$.zoom.altDomain = _d.event.sourceEvent.altKey ? $$.x.orgDomain() : null, config.zoom_onzoomstart.call($$.api, _d.event.sourceEvent);
		}).on("zoom", function () {
			$$.redrawForZoom.call($$);
		}).on("end", function () {
			var event = _d.event.sourceEvent;

			// if click, do nothing. otherwise, click interaction will be canceled.
			event && startEvent.clientX === event.clientX && startEvent.clientY === event.clientY || ($$.redrawEventRect(), $$.updateZoom(), config.zoom_onzoomend.call($$.api, $$.x.orgDomain()));
		}), $$.zoom.orgScaleExtent = function () {
			var extent = config.zoom_extent ? config.zoom_extent : [1, 10];

			return [extent[0], Math.max($$.getMaxDataCount() / extent[1], extent[1])];
		}, $$.zoom.updateScaleExtent = function () {
			var ratio = (0, _util.diffDomain)($$.x.orgDomain()) / (0, _util.diffDomain)($$.getZoomDomain()),
			    extent = this.orgScaleExtent();

			return this.scaleExtent([extent[0] * ratio, extent[1] * ratio]), this;
		}, $$.zoom.updateTransformScale = function (transform) {
			var newScale = transform.rescaleX($$.x);

			newScale.domain($$.trimXDomain(newScale.domain())), $$.zoomScale = newScale, $$.xAxis.scale($$.zoomScale), $$.main.select("." + _classes2.default.eventRects).node().__zoom = transform;
		};
	},


	/**
  * Get zoom domain
  * @private
  * @returns {Array} zoom domain
  */
	getZoomDomain: function getZoomDomain() {
		var $$ = this,
		    config = $$.config,
		    min = (0, _d.min)([$$.orgXDomain[0], config.zoom_x_min]),
		    max = (0, _d.max)([$$.orgXDomain[1], config.zoom_x_max]);


		return [min, max];
	},


	/**
  * Update zoom
  * @private
  */
	updateZoom: function updateZoom() {
		var $$ = this,
		    z = $$.config.zoom_enabled ? $$.zoom : function () {};


		// bind zoom module
		// $$.main.select(`.${CLASS.zoomRect}`)
		// 	.call(z)
		// 	.on("dblclick.zoom", null);

		$$.main.select("." + _classes2.default.eventRects).call(z).on("dblclick.zoom", null);
	},


	/**
  * Redraw the zoom.
  * @private
  */
	redrawForZoom: function redrawForZoom() {
		var $$ = this,
		    config = $$.config;


		if (config.zoom_enabled) {
				var zoom = $$.zoom,
				    x = $$.x,
				    event = _d.event,
				    transform = event.transform;
				return $$.zoom.updateTransformScale(transform), $$.filterTargetsToShow($$.data.targets).length === 0 ? void 0 : event.sourceEvent.type === "mousemove" && zoom.altDomain ? (x.domain(zoom.altDomain), void transform.scale($$.zoomScale).updateScaleExtent()) : void ($$.isCategorized() && x.orgDomain()[0] === $$.orgXDomain[0] && x.domain([$$.orgXDomain[0] - 1e-10, x.orgDomain()[1]]), $$.redraw({
					withTransition: !1,
					withY: config.zoom_rescale,
					withSubchart: !1,
					withEventRect: !1,
					withDimension: !1
				}), event.sourceEvent.type === "mousemove" && ($$.cancelClick = !0), config.zoom_onzoom.call($$.api, x.orgDomain()));
			}
	}
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	initPie: function initPie() {
		var $$ = this,
		    config = $$.config;
		$$.pie = (0, _d.pie)().padAngle(config[config.data_type + "_padAngle"] || 0).value(function (d) {
			return d.values.reduce(function (a, b) {
				return a + b.value;
			}, 0);
		}), config.data_order || $$.pie.sort(null);
	},
	updateRadius: function updateRadius() {
		var $$ = this,
		    config = $$.config,
		    w = config.gauge_width || config.donut_width;
		$$.radiusExpanded = Math.min($$.arcWidth, $$.arcHeight) / 2, $$.radius = $$.radiusExpanded * 0.95, $$.innerRadiusRatio = w ? ($$.radius - w) / $$.radius : 0.6, $$.innerRadius = $$.hasType("donut") || $$.hasType("gauge") ? $$.radius * $$.innerRadiusRatio : 0;
	},
	updateArc: function updateArc() {
		var $$ = this;

		$$.svgArc = $$.getSvgArc(), $$.svgArcExpanded = $$.getSvgArcExpanded(), $$.svgArcExpandedSub = $$.getSvgArcExpanded(0.98);
	},
	updateAngle: function updateAngle(dValue) {
		var $$ = this,
		    config = $$.config,
		    d = dValue,
		    found = !1,
		    index = 0,
		    gMin = void 0,
		    gMax = void 0,
		    gTic = void 0,
		    gValue = void 0;
		return config ? ($$.pie($$.filterTargetsToShow($$.data.targets)).forEach(function (t) {
			found || t.data.id !== d.data.id || (found = !0, d = t, d.index = index), index++;
		}), isNaN(d.startAngle) && (d.startAngle = 0), isNaN(d.endAngle) && (d.endAngle = d.startAngle), $$.isGaugeType(d.data) && (gMin = config.gauge_min, gMax = config.gauge_max, gTic = Math.PI * (config.gauge_fullCircle ? 2 : 1) / (gMax - gMin), gValue = d.value < gMin ? 0 : d.value < gMax ? d.value - gMin : gMax - gMin, d.startAngle = config.gauge_startingAngle, d.endAngle = d.startAngle + gTic * gValue), found ? d : null) : null;
	},
	getSvgArc: function getSvgArc() {
		var $$ = this,
		    arc = (0, _d.arc)().outerRadius($$.radius).innerRadius($$.innerRadius),
		    newArc = function (d, withoutUpdate) {
			if (withoutUpdate) return arc(d); // for interpolate

			var updated = $$.updateAngle(d);

			return updated ? arc(updated) : "M 0 0";
		};

		// TODO: extends all function


		return newArc.centroid = arc.centroid, newArc;
	},
	getSvgArcExpanded: function getSvgArcExpanded(rate) {
		var $$ = this,
		    arc = (0, _d.arc)().outerRadius($$.radiusExpanded * (rate || 1)).innerRadius($$.innerRadius);


		return function (d) {
			var updated = $$.updateAngle(d);

			return updated ? arc(updated) : "M 0 0";
		};
	},
	getArc: function getArc(d, withoutUpdate, force) {
		return force || this.isArcType(d.data) ? this.svgArc(d, withoutUpdate) : "M 0 0";
	},
	transformForArcLabel: function transformForArcLabel(d) {
		var $$ = this,
		    config = $$.config,
		    updated = $$.updateAngle(d),
		    c = void 0,
		    x = void 0,
		    y = void 0,
		    h = void 0,
		    ratio = void 0,
		    translate = "";

		return updated && !$$.hasType("gauge") && (c = this.svgArc.centroid(updated), x = isNaN(c[0]) ? 0 : c[0], y = isNaN(c[1]) ? 0 : c[1], h = Math.sqrt(x * x + y * y), ratio = $$.hasType("donut") && config.donut_label_ratio ? (0, _util.isFunction)(config.donut_label_ratio) ? config.donut_label_ratio(d, $$.radius, h) : config.donut_label_ratio : $$.hasType("pie") && config.pie_label_ratio ? (0, _util.isFunction)(config.pie_label_ratio) ? config.pie_label_ratio(d, $$.radius, h) : config.pie_label_ratio : $$.radius && (h ? (36 / $$.radius > 0.375 ? 1.175 - 36 / $$.radius : 0.8) * $$.radius / h : 0), translate = "translate(" + x * ratio + "," + y * ratio + ")"), translate;
	},
	getArcRatio: function getArcRatio(d) {
		var $$ = this,
		    config = $$.config,
		    whole = Math.PI * ($$.hasType("gauge") && !config.gauge_fullCircle ? 1 : 2);


		return d ? (d.endAngle - d.startAngle) / whole : null;
	},
	convertToArcData: function convertToArcData(d) {
		return this.addName({
			id: d.data.id,
			value: d.value,
			ratio: this.getArcRatio(d),
			index: d.index
		});
	},
	textForArcLabel: function textForArcLabel(d) {
		var $$ = this;

		if (!$$.shouldShowArcLabel()) return "";
		var updated = $$.updateAngle(d),
		    value = updated ? updated.value : null,
		    ratio = $$.getArcRatio(updated),
		    id = d.data.id;


		if (!$$.hasType("gauge") && !$$.meetsArcLabelThreshold(ratio)) return "";
		var format = $$.getArcLabelFormat();

		return format ? format(value, ratio, id) : $$.defaultArcValueFormat(value, ratio);
	},
	textForGaugeMinMax: function textForGaugeMinMax(value, isMax) {
		var format = this.getGaugeLabelExtents();

		return format ? format(value, isMax) : value;
	},
	expandArc: function expandArc(targetIds) {
		var $$ = this,
		    interval = void 0;


		// MEMO: avoid to cancel transition
		if ($$.transiting) return void (interval = window.setInterval(function () {
				$$.transiting || (window.clearInterval(interval), $$.legend.selectAll(".bb-legend-item-focused").size() > 0 && $$.expandArc(targetIds));
			}, 10));

		var newTargetIds = $$.mapToTargetIds(targetIds);

		$$.svg.selectAll($$.selectorTargets(newTargetIds, "." + _classes2.default.chartArc)).each(function (d) {
			$$.shouldExpand(d.data.id) && (0, _d.select)(this).selectAll("path").transition().duration($$.expandDuration(d.data.id)).attr("d", $$.svgArcExpanded).transition().duration($$.expandDuration(d.data.id) * 2).attr("d", $$.svgArcExpandedSub).each(function (v) {
				$$.isDonutType(v.data);
			});
		});
	},
	unexpandArc: function unexpandArc(targetIds) {
		var $$ = this;

		if (!$$.transiting) {

				var newTargetIds = $$.mapToTargetIds(targetIds);

				$$.svg.selectAll($$.selectorTargets(newTargetIds, "." + _classes2.default.chartArc)).selectAll("path").transition().duration(function (d) {
					return $$.expandDuration(d.data.id);
				}).attr("d", $$.svgArc), $$.svg.selectAll("" + _classes2.default.arc).style("opacity", "1");
			}
	},
	expandDuration: function expandDuration(id) {
		var $$ = this,
		    config = $$.config;
		return $$.isDonutType(id) ? config.donut_expand_duration : $$.isGaugeType(id) ? config.gauge_expand_duration : $$.isPieType(id) ? config.pie_expand_duration : 50;
	},
	shouldExpand: function shouldExpand(id) {
		var $$ = this,
		    config = $$.config;


		return $$.isDonutType(id) && config.donut_expand || $$.isGaugeType(id) && config.gauge_expand || $$.isPieType(id) && config.pie_expand;
	},
	shouldShowArcLabel: function shouldShowArcLabel() {
		var $$ = this,
		    config = $$.config,
		    shouldShow = !0;

		// when gauge, always true
		return $$.hasType("donut") ? shouldShow = config.donut_label_show : $$.hasType("pie") && (shouldShow = config.pie_label_show), shouldShow;
	},
	meetsArcLabelThreshold: function meetsArcLabelThreshold(ratio) {
		var $$ = this,
		    config = $$.config,
		    threshold = $$.hasType("donut") ? config.donut_label_threshold : config.pie_label_threshold;


		return ratio >= threshold;
	},
	getArcLabelFormat: function getArcLabelFormat() {
		var $$ = this,
		    config = $$.config,
		    format = config.pie_label_format;

		return $$.hasType("gauge") ? format = config.gauge_label_format : $$.hasType("donut") && (format = config.donut_label_format), format;
	},
	getGaugeLabelExtents: function getGaugeLabelExtents() {
		var config = this.config;

		return config.gauge_label_extents;
	},
	getArcTitle: function getArcTitle() {
		var $$ = this;

		return $$.hasType("donut") ? $$.config.donut_title : "";
	},
	updateTargetsForArc: function updateTargetsForArc(targets) {
		var $$ = this,
		    main = $$.main,
		    classChartArc = $$.classChartArc.bind($$),
		    classArcs = $$.classArcs.bind($$),
		    classFocus = $$.classFocus.bind($$),
		    mainPieUpdate = main.select("." + _classes2.default.chartArcs).selectAll("." + _classes2.default.chartArc).data($$.pie(targets)).attr("class", function (d) {
			return classChartArc(d) + classFocus(d.data);
		}),
		    mainPieEnter = mainPieUpdate.enter().append("g").attr("class", classChartArc);
		mainPieEnter.append("g").attr("class", classArcs).merge(mainPieUpdate), mainPieEnter.append("text").attr("dy", $$.hasType("gauge") ? "-.1em" : ".35em").style("opacity", "0").style("text-anchor", "middle").style("pointer-events", "none");
	},
	initArc: function initArc() {
		var $$ = this;

		$$.arcs = $$.main.select("." + _classes2.default.chart).append("g").attr("class", _classes2.default.chartArcs).attr("transform", $$.getTranslate("arc")), $$.arcs.append("text").attr("class", _classes2.default.chartArcsTitle).style("text-anchor", "middle").text($$.getArcTitle());
	},
	redrawArc: function redrawArc(duration, durationForExit, withTransform) {

		function selectArc(_this, arcData, id) {
			$$.expandArc(id), $$.api.focus(id), $$.toggleFocusLegend(id, !0), $$.showTooltip([arcData], _this);
		}

		function unselectArc(arcData) {
			var id = arcData && arcData.id || undefined;

			$$.unexpandArc(id), $$.api.revert(), $$.revertLegend(), $$.hideTooltip();
		}

		var $$ = this,
		    config = $$.config,
		    main = $$.main,
		    isTouch = $$.inputType === "touch",
		    isMouse = $$.inputType === "mouse",
		    mainArc = main.selectAll("." + _classes2.default.arcs).selectAll("." + _classes2.default.arc).data($$.arcData.bind($$));


		if (mainArc.exit().transition().duration(durationForExit).style("opacity", "0").remove(), mainArc = mainArc.enter().append("path").attr("class", $$.classArc.bind($$)).style("fill", function (d) {
			return $$.color(d.data);
		}).style("cursor", function (d) {
			return config.interaction_enabled && (config.data_selection_isselectable(d) ? "pointer" : null);
		}).style("opacity", "0").each(function (d) {
			$$.isGaugeType(d.data) && (d.startAngle = config.gauge_startingAngle, d.endAngle = config.gauge_startingAngle), this._current = d;
		}).merge(mainArc), mainArc.attr("transform", function (d) {
			return !$$.isGaugeType(d.data) && withTransform ? "scale(0)" : "";
		}).style("opacity", function (d) {
			return d === this._current ? "0" : "1";
		}).on(isMouse ? "mouseover" : undefined, config.interaction_enabled ? function (d) {
			if (!$$.transiting) // skip while transiting
				{

					var updated = $$.updateAngle(d),
					    arcData = updated ? $$.convertToArcData(updated) : null,
					    id = arcData && arcData.id || undefined;
					selectArc(this, arcData, id), $$.config.data_onover(arcData, this);
				}
		} : null).on(isMouse ? "mouseout" : undefined, config.interaction_enabled ? function (d) {
			if (!$$.transiting) // skip while transiting
				{
					var updated = $$.updateAngle(d),
					    arcData = updated ? $$.convertToArcData(updated) : null;
					unselectArc(), $$.config.data_onout(arcData, this);
				}
		} : null).on(isMouse ? "mousemove" : undefined, config.interaction_enabled ? function (d) {
			var updated = $$.updateAngle(d),
			    arcData = updated ? $$.convertToArcData(updated) : null;
			$$.showTooltip([arcData], this);
		} : null).on(isMouse ? "click" : undefined, config.interaction_enabled ? function (d, i) {
			var updated = $$.updateAngle(d),
			    arcData = void 0;
			updated && (arcData = $$.convertToArcData(updated), $$.toggleShape && $$.toggleShape(this, arcData, i), $$.config.data_onclick.call($$.api, arcData, this));
		} : null).each(function () {
			$$.transiting = !0;
		}).transition().duration(duration).attrTween("d", function (d) {
			var updated = $$.updateAngle(d);

			if (!updated) return function () {
					return "M 0 0";
				};

			isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle);


			var interpolate = (0, _d.interpolate)(this._current, updated);

			return this._current = interpolate(0), function (t) {
				var interpolated = interpolate(t);

				// data.id will be updated by interporator
				return interpolated.data = d.data, $$.getArc(interpolated, !0);
			};
		}).attr("transform", withTransform ? "scale(1)" : "").style("fill", function (d) {
			return $$.levelColor ? $$.levelColor(d.data.values[0].value) : $$.color(d.data.id);
		}
		// Where gauge reading color would receive customization.
		).style("opacity", "1").call($$.endall, function () {
			$$.transiting = !1;
		}), isTouch && config.interaction_enabled && $$.hasArcType()) {
			var getEventArc = function () {
				var touch = _d.event.changedTouches[0],
				    eventArc = (0, _d.select)(document.elementFromPoint(touch.clientX, touch.clientY));


				return eventArc;
			};

			$$.svg.on("touchstart", function () {
				if (!$$.transiting) // skip while transiting
					{

						var eventArc = getEventArc(),
						    datum = eventArc.datum(),
						    updated = datum && datum.data && datum.data.id ? $$.updateAngle(datum) : null,
						    arcData = updated ? $$.convertToArcData(updated) : null,
						    id = arcData && arcData.id || undefined;
						id === undefined ? unselectArc() : selectArc(this, arcData, id), $$.config.data_onover(arcData, this);
					}
			}).on("touchend", function () {
				if (!$$.transiting) // skip while transiting
					{
						var eventArc = getEventArc(),
						    datum = eventArc.datum(),
						    updated = datum && datum.data && datum.data.id ? $$.updateAngle(datum) : null,
						    arcData = updated ? $$.convertToArcData(updated) : null,
						    id = arcData && arcData.id || undefined;
						id === undefined ? unselectArc() : selectArc(this, arcData, id), $$.config.data_onout(arcData, this);
					}
			}).on("touchmove", function () {
				var eventArc = getEventArc(),
				    datum = eventArc.datum(),
				    updated = datum && datum.data && datum.data.id ? $$.updateAngle(datum) : null,
				    arcData = updated ? $$.convertToArcData(updated) : null,
				    id = arcData && arcData.id || undefined;
				id === undefined ? unselectArc() : selectArc(this, arcData, id);
			});
		}

		main.selectAll("." + _classes2.default.chartArc).select("text").style("opacity", "0").attr("class", function (d) {
			return $$.isGaugeType(d.data) ? _classes2.default.gaugeValue : "";
		}).text($$.textForArcLabel.bind($$)).attr("transform", $$.transformForArcLabel.bind($$)).style("font-size", function (d) {
			return $$.isGaugeType(d.data) ? Math.round($$.radius / 5) + "px" : "";
		}).transition().duration(duration).style("opacity", function (d) {
			return $$.isTargetToShow(d.data.id) && $$.isArcType(d.data) ? "1" : "0";
		}), main.select("." + _classes2.default.chartArcsTitle).style("opacity", $$.hasType("donut") || $$.hasType("gauge") ? "1" : "0"), $$.hasType("gauge") && ($$.arcs.select("." + _classes2.default.chartArcsBackground).attr("d", function () {
			var d = {
				data: [{ value: config.gauge_max }],
				startAngle: config.gauge_startingAngle,
				endAngle: -1 * config.gauge_startingAngle
			};

			return $$.getArc(d, !0, !0);
		}), $$.arcs.select("." + _classes2.default.chartArcsGaugeUnit).attr("dy", ".75em").text(config.gauge_label_show ? config.gauge_units : ""), $$.arcs.select("." + _classes2.default.chartArcsGaugeMin).attr("dx", -1 * ($$.innerRadius + ($$.radius - $$.innerRadius) / (config.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(config.gauge_label_show ? $$.textForGaugeMinMax(config.gauge_min, !1) : ""), $$.arcs.select("." + _classes2.default.chartArcsGaugeMax).attr("dx", $$.innerRadius + ($$.radius - $$.innerRadius) / (config.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(config.gauge_label_show ? $$.textForGaugeMinMax(config.gauge_max, !0) : ""));
	},
	initGauge: function initGauge() {
		var arcs = this.arcs;

		this.hasType("gauge") && (arcs.append("path").attr("class", _classes2.default.chartArcsBackground), arcs.append("text").attr("class", _classes2.default.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none"), arcs.append("text").attr("class", _classes2.default.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none"), arcs.append("text").attr("class", _classes2.default.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none"));
	},
	getGaugeLabelHeight: function getGaugeLabelHeight() {
		return this.config.gauge_label_show ? 20 : 0;
	}
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	hasCaches: function hasCaches(ids) {
		for (var i = 0; i < ids.length; i++) if (!(ids[i] in this.cache)) return !1;

		return !0;
	},
	addCache: function addCache(id, target) {
		this.cache[id] = this.cloneTarget(target);
	},
	getCaches: function getCaches(ids) {
		var targets = [];

		for (var i = 0; i < ids.length; i++) ids[i] in this.cache && targets.push(this.cloneTarget(this.cache[ids[i]]));
		return targets;
	}
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Category Name
  * @private
  * @param {Number} index
  * @returns {String} gategory Name
  */
	categoryName: function categoryName(i) {
		var config = this.config;

		return i < config.axis_x_categories.length ? config.axis_x_categories[i] : i;
	}
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_ChartInternal2.default.prototype, {
	CLASS: _classes2.default,

	generateClass: function generateClass(prefix, targetId) {
		return " " + prefix + " " + (prefix + this.getTargetSelectorSuffix(targetId));
	},
	classText: function classText(d) {
		return this.generateClass(_classes2.default.text, d.index);
	},
	classTexts: function classTexts(d) {
		return this.generateClass(_classes2.default.texts, d.id);
	},
	classShape: function classShape(d) {
		return this.generateClass(_classes2.default.shape, d.index);
	},
	classShapes: function classShapes(d) {
		return this.generateClass(_classes2.default.shapes, d.id);
	},
	classLine: function classLine(d) {
		return this.classShape(d) + this.generateClass(_classes2.default.line, d.id);
	},
	classLines: function classLines(d) {
		return this.classShapes(d) + this.generateClass(_classes2.default.lines, d.id);
	},
	classCircle: function classCircle(d) {
		return this.classShape(d) + this.generateClass(_classes2.default.circle, d.index);
	},
	classCircles: function classCircles(d) {
		return this.classShapes(d) + this.generateClass(_classes2.default.circles, d.id);
	},
	classBar: function classBar(d) {
		return this.classShape(d) + this.generateClass(_classes2.default.bar, d.index);
	},
	classBars: function classBars(d) {
		return this.classShapes(d) + this.generateClass(_classes2.default.bars, d.id);
	},
	classArc: function classArc(d) {
		return this.classShape(d.data) + this.generateClass(_classes2.default.arc, d.data.id);
	},
	classArcs: function classArcs(d) {
		return this.classShapes(d.data) + this.generateClass(_classes2.default.arcs, d.data.id);
	},
	classArea: function classArea(d) {
		return this.classShape(d) + this.generateClass(_classes2.default.area, d.id);
	},
	classAreas: function classAreas(d) {
		return this.classShapes(d) + this.generateClass(_classes2.default.areas, d.id);
	},
	classRegion: function classRegion(d, i) {
		return this.generateClass(_classes2.default.region, i) + " " + ("class" in d ? d.class : "");
	},
	classEvent: function classEvent(d) {
		return this.generateClass(_classes2.default.eventRect, d.index);
	},
	classTarget: function classTarget(id) {
		var additionalClassSuffix = this.config.data_classes[id],
		    additionalClass = "";


		return additionalClassSuffix && (additionalClass = " " + _classes2.default.target + "-" + additionalClassSuffix), this.generateClass(_classes2.default.target, id) + additionalClass;
	},
	classFocus: function classFocus(d) {
		return this.classFocused(d) + this.classDefocused(d);
	},
	classFocused: function classFocused(d) {
		return " " + (this.focusedTargetIds.indexOf(d.id) >= 0 ? _classes2.default.focused : "");
	},
	classDefocused: function classDefocused(d) {
		return " " + (this.defocusedTargetIds.indexOf(d.id) >= 0 ? _classes2.default.defocused : "");
	},
	classChartText: function classChartText(d) {
		return _classes2.default.chartText + this.classTarget(d.id);
	},
	classChartLine: function classChartLine(d) {
		return _classes2.default.chartLine + this.classTarget(d.id);
	},
	classChartBar: function classChartBar(d) {
		return _classes2.default.chartBar + this.classTarget(d.id);
	},
	classChartArc: function classChartArc(d) {
		return _classes2.default.chartArc + this.classTarget(d.data.id);
	},
	getTargetSelectorSuffix: function getTargetSelectorSuffix(targetId) {
		return targetId || targetId === 0 ? ("-" + targetId).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, "-") : "";
	},
	selectorTarget: function selectorTarget(id, prefix) {
		return (prefix || "") + "." + (_classes2.default.target + this.getTargetSelectorSuffix(id));
	},
	selectorTargets: function selectorTargets(idsValue, prefix) {
		var $$ = this,
		    ids = idsValue || [];


		return ids.length ? ids.map(function (id) {
			return $$.selectorTarget(id, prefix);
		}) : null;
	},
	selectorLegend: function selectorLegend(id) {
		return "." + (_classes2.default.legendItem + this.getTargetSelectorSuffix(id));
	},
	selectorLegends: function selectorLegends(ids) {
		var $$ = this;

		return ids && ids.length ? ids.map(function (id) {
			return $$.selectorLegend(id);
		}) : null;
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	getClipPath: function getClipPath(id) {
		var isIE9 = window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;

		return "url(" + (isIE9 ? "" : document.URL.split("#")[0]) + "#" + id + ")";
	},
	appendClip: function appendClip(parent, id) {
		return parent.append("clipPath").attr("id", id).append("rect");
	},
	getAxisClipX: function getAxisClipX(forHorizontal) {
		// axis line width + padding for left
		var left = Math.max(30, this.margin.left);

		return forHorizontal ? -(1 + left) : -(left - 1);
	},
	getAxisClipY: function getAxisClipY(forHorizontal) {
		return forHorizontal ? -20 : -this.margin.top;
	},
	getXAxisClipX: function getXAxisClipX() {
		var $$ = this;

		return $$.getAxisClipX(!$$.config.axis_rotated);
	},
	getXAxisClipY: function getXAxisClipY() {
		var $$ = this;

		return $$.getAxisClipY(!$$.config.axis_rotated);
	},
	getYAxisClipX: function getYAxisClipX() {
		var $$ = this;

		return $$.config.axis_y_inner ? -1 : $$.getAxisClipX($$.config.axis_rotated);
	},
	getYAxisClipY: function getYAxisClipY() {
		var $$ = this;

		return $$.getAxisClipY($$.config.axis_rotated);
	},
	getAxisClipWidth: function getAxisClipWidth(forHorizontal) {
		var $$ = this,
		    left = Math.max(30, $$.margin.left),
		    right = Math.max(30, $$.margin.right);


		// width + axis line width + padding for left/right
		return forHorizontal ? $$.width + 2 + left + right : $$.margin.left + 20;
	},
	getAxisClipHeight: function getAxisClipHeight(forHorizontal) {
		// less than 20 is not enough to show the axis label 'outer' without legend
		return (forHorizontal ? this.margin.bottom : this.margin.top + this.height) + 20;
	},
	getXAxisClipWidth: function getXAxisClipWidth() {
		var $$ = this;

		return $$.getAxisClipWidth(!$$.config.axis_rotated);
	},
	getXAxisClipHeight: function getXAxisClipHeight() {
		var $$ = this;

		return $$.getAxisClipHeight(!$$.config.axis_rotated);
	},
	getYAxisClipWidth: function getYAxisClipWidth() {
		var $$ = this;

		return $$.getAxisClipWidth($$.config.axis_rotated) + ($$.config.axis_y_inner ? 20 : 0);
	},
	getYAxisClipHeight: function getYAxisClipHeight() {
		var $$ = this;

		return $$.getAxisClipHeight($$.config.axis_rotated);
	}
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_ChartInternal2.default.prototype, {
	generateColor: function generateColor() {
		var $$ = this,
		    config = $$.config,
		    colors = config.data_colors,
		    callback = config.data_color,
		    ids = [],
		    pattern = (0, _util.notEmpty)(config.color_pattern) ? config.color_pattern : (0, _d.scaleOrdinal)(_d.schemeCategory10).range();


		return function (d) {
			var id = d.id || d.data && d.data.id || d,
			    color = void 0;

			// if callback function is provided


			return colors[id] instanceof Function ? color = colors[id](d) : colors[id] ? color = colors[id] : (ids.indexOf(id) < 0 && ids.push(id), color = pattern[ids.indexOf(id) % pattern.length], colors[id] = color), callback instanceof Function ? callback(color, d) : color;
		};
	},
	generateLevelColor: function generateLevelColor() {
		var $$ = this,
		    config = $$.config,
		    colors = config.color_pattern,
		    threshold = config.color_threshold,
		    asValue = threshold.unit === "value",
		    max = threshold.max || 100,
		    values = threshold.values && threshold.values.length ? threshold.values : [];


		return (0, _util.notEmpty)(threshold) ? function (value) {
			var color = colors[colors.length - 1];

			for (var v, i = 0; i < values.length; i++) if (v = asValue ? value : value * 100 / max, v < values[i]) {
				color = colors[i];

				break;
			}

			return color;
		} : null;
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2),
    _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// selection
(0, _util.extend)(_ChartInternal2.default.prototype, {
	getYDomainMin: function getYDomainMin(targets) {
		var $$ = this,
		    config = $$.config,
		    ids = $$.mapToIds(targets),
		    ys = $$.getValuesAsIdKeyed(targets),
		    j = void 0,
		    k = void 0,
		    baseId = void 0,
		    idsInGroup = void 0,
		    id = void 0,
		    hasNegativeValue = void 0;


		if (config.data_groups.length > 0) for (hasNegativeValue = $$.hasNegativeValueInTargets(targets), j = 0; j < config.data_groups.length; j++) if (idsInGroup = config.data_groups[j].filter(function (v) {
				return ids.indexOf(v) >= 0;
			}), idsInGroup.length !== 0)

				// Compute min
				for (baseId = idsInGroup[0], hasNegativeValue && ys[baseId] && ys[baseId].forEach(function (v, i) {
					ys[baseId][i] = v < 0 ? v : 0;
				}), k = 1; k < idsInGroup.length; k++) (id = idsInGroup[k], !!ys[id]) && ys[id].forEach(function (v, i) {
					$$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasNegativeValue && +v > 0) && (ys[baseId][i] += +v);
				});
		return (0, _d.min)(Object.keys(ys).map(function (key) {
			return (0, _d.min)(ys[key]);
		}));
	},
	getYDomainMax: function getYDomainMax(targets) {
		var $$ = this,
		    config = $$.config,
		    ids = $$.mapToIds(targets),
		    ys = $$.getValuesAsIdKeyed(targets),
		    j = void 0,
		    k = void 0,
		    baseId = void 0,
		    idsInGroup = void 0,
		    id = void 0,
		    hasPositiveValue = void 0;


		if (config.data_groups.length > 0) for (hasPositiveValue = $$.hasPositiveValueInTargets(targets), j = 0; j < config.data_groups.length; j++) if (idsInGroup = config.data_groups[j].filter(function (v) {
				return ids.indexOf(v) >= 0;
			}), idsInGroup.length !== 0)
				// Compute max
				for (baseId = idsInGroup[0], hasPositiveValue && ys[baseId] && ys[baseId].forEach(function (v, i) {
					ys[baseId][i] = v > 0 ? v : 0;
				}), k = 1; k < idsInGroup.length; k++) (id = idsInGroup[k], !!ys[id]) && ys[id].forEach(function (v, i) {
					$$.axis.getId(id) === $$.axis.getId(baseId) && ys[baseId] && !(hasPositiveValue && +v < 0) && (ys[baseId][i] += +v);
				});
		return (0, _d.max)(Object.keys(ys).map(function (key) {
			return (0, _d.max)(ys[key]);
		}));
	},
	getYDomain: function getYDomain(targets, axisId, xDomain) {
		var $$ = this,
		    config = $$.config,
		    targetsByAxisId = targets.filter(function (t) {
			return $$.axis.getId(t.id) === axisId;
		}),
		    yTargets = xDomain ? $$.filterByXDomain(targetsByAxisId, xDomain) : targetsByAxisId,
		    yMin = axisId === "y2" ? config.axis_y2_min : config.axis_y_min,
		    yMax = axisId === "y2" ? config.axis_y2_max : config.axis_y_max,
		    yDomainMin = $$.getYDomainMin(yTargets),
		    yDomainMax = $$.getYDomainMax(yTargets),
		    center = axisId === "y2" ? config.axis_y2_center : config.axis_y_center,
		    isZeroBased = $$.hasType("bar", yTargets) && config.bar_zerobased || $$.hasType("area", yTargets) && config.area_zerobased,
		    isInverted = axisId === "y2" ? config.axis_y2_inverted : config.axis_y_inverted,
		    showHorizontalDataLabel = $$.hasDataLabel() && config.axis_rotated,
		    showVerticalDataLabel = $$.hasDataLabel() && !config.axis_rotated,
		    lengths = void 0;

		// MEMO: avoid inverting domain unexpectedly


		if (yDomainMin = (0, _util.isValue)(yMin) ? yMin : (0, _util.isValue)(yMax) ? yDomainMin < yMax ? yDomainMin : yMax - 10 : yDomainMin, yDomainMax = (0, _util.isValue)(yMax) ? yMax : (0, _util.isValue)(yMin) ? yMin < yDomainMax ? yDomainMax : yMin + 10 : yDomainMax, yTargets.length === 0) // use current domain if target of axisId is none
			return axisId === "y2" ? $$.y2.domain() : $$.y.domain();

		isNaN(yDomainMin) && (yDomainMin = 0), isNaN(yDomainMax) && (yDomainMax = yDomainMin), yDomainMin === yDomainMax && (yDomainMin < 0 ? yDomainMax = 0 : yDomainMin = 0);


		var isAllPositive = yDomainMin >= 0 && yDomainMax >= 0,
		    isAllNegative = yDomainMin <= 0 && yDomainMax <= 0;
		((0, _util.isValue)(yMin) && isAllPositive || (0, _util.isValue)(yMax) && isAllNegative) && (isZeroBased = !1), isZeroBased && (isAllPositive && (yDomainMin = 0), isAllNegative && (yDomainMax = 0));


		var domainLength = Math.abs(yDomainMax - yDomainMin),
		    paddingTop = domainLength * 0.1,
		    paddingBottom = domainLength * 0.1;


		if (typeof center !== "undefined") {
			var yDomainAbs = Math.max(Math.abs(yDomainMin), Math.abs(yDomainMax));

			yDomainMax = center + yDomainAbs, yDomainMin = center - yDomainAbs;
		}

		// add padding for data label
		if (showHorizontalDataLabel) {
			lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, "width");

			var diff = (0, _util.diffDomain)($$.y.range()),
			    ratio = [lengths[0] / diff, lengths[1] / diff];
			paddingTop += domainLength * (ratio[1] / (1 - ratio[0] - ratio[1])), paddingBottom += domainLength * (ratio[0] / (1 - ratio[0] - ratio[1]));
		} else showVerticalDataLabel && (lengths = $$.getDataLabelLength(yDomainMin, yDomainMax, "height"), paddingTop += $$.axis.convertPixelsToAxisPadding(lengths[1], domainLength), paddingBottom += $$.axis.convertPixelsToAxisPadding(lengths[0], domainLength));

		axisId === "y" && (0, _util.notEmpty)(config.axis_y_padding) && (paddingTop = $$.axis.getPadding(config.axis_y_padding, "top", paddingTop, domainLength), paddingBottom = $$.axis.getPadding(config.axis_y_padding, "bottom", paddingBottom, domainLength)), axisId === "y2" && (0, _util.notEmpty)(config.axis_y2_padding) && (paddingTop = $$.axis.getPadding(config.axis_y2_padding, "top", paddingTop, domainLength), paddingBottom = $$.axis.getPadding(config.axis_y2_padding, "bottom", paddingBottom, domainLength)), isZeroBased && (isAllPositive && (paddingBottom = yDomainMin), isAllNegative && (paddingTop = -yDomainMax));


		var domain = [yDomainMin - paddingBottom, yDomainMax + paddingTop];

		return isInverted ? domain.reverse() : domain;
	},
	getXDomainMin: function getXDomainMin(targets) {
		var $$ = this,
		    config = $$.config;


		return (0, _util.isDefined)(config.axis_x_min) ? $$.isTimeSeries() ? this.parseDate(config.axis_x_min) : config.axis_x_min : (0, _d.min)(targets, function (t) {
			return (0, _d.min)(t.values, function (v) {
				return v.x;
			});
		});
	},
	getXDomainMax: function getXDomainMax(targets) {
		var $$ = this,
		    config = $$.config;


		return (0, _util.isDefined)(config.axis_x_max) ? $$.isTimeSeries() ? this.parseDate(config.axis_x_max) : config.axis_x_max : (0, _d.max)(targets, function (t) {
			return (0, _d.max)(t.values, function (v) {
				return v.x;
			});
		});
	},
	getXDomainPadding: function getXDomainPadding(domain) {
		var $$ = this,
		    config = $$.config,
		    diff = domain[1] - domain[0],
		    maxDataCount = void 0,
		    padding = void 0,
		    paddingLeft = void 0,
		    paddingRight = void 0;

		return $$.isCategorized() ? padding = 0 : $$.hasType("bar") ? (maxDataCount = $$.getMaxDataCount(), padding = maxDataCount > 1 ? diff / (maxDataCount - 1) / 2 : 0.5) : padding = diff * 0.01, (0, _typeof3.default)(config.axis_x_padding) === "object" && (0, _util.notEmpty)(config.axis_x_padding) ? (paddingLeft = (0, _util.isValue)(config.axis_x_padding.left) ? config.axis_x_padding.left : padding, paddingRight = (0, _util.isValue)(config.axis_x_padding.right) ? config.axis_x_padding.right : padding) : typeof config.axis_x_padding === "number" ? (paddingLeft = config.axis_x_padding, paddingRight = config.axis_x_padding) : (paddingLeft = padding, paddingRight = padding), { left: paddingLeft, right: paddingRight };
	},
	getXDomain: function getXDomain(targets) {
		var $$ = this,
		    xDomain = [$$.getXDomainMin(targets), $$.getXDomainMax(targets)],
		    firstX = xDomain[0],
		    lastX = xDomain[1],
		    padding = $$.getXDomainPadding(xDomain),
		    min = 0,
		    max = 0;
		// show center of x domain if min and max are the same

		return firstX - lastX !== 0 || $$.isCategorized() || ($$.isTimeSeries() ? (firstX = new Date(firstX.getTime() * 0.5), lastX = new Date(lastX.getTime() * 1.5)) : (firstX = firstX === 0 ? 1 : firstX * 0.5, lastX = lastX === 0 ? -1 : lastX * 1.5)), (firstX || firstX === 0) && (min = $$.isTimeSeries() ? new Date(firstX.getTime() - padding.left) : firstX - padding.left), (lastX || lastX === 0) && (max = $$.isTimeSeries() ? new Date(lastX.getTime() + padding.right) : lastX + padding.right), [min, max];
	},
	updateXDomain: function updateXDomain(targets, withUpdateXDomain, withUpdateOrgXDomain, withTrim, domain) {
		var $$ = this,
		    config = $$.config;


		if (withUpdateOrgXDomain && ($$.x.domain(domain || (0, _d.extent)($$.getXDomain(targets))), $$.orgXDomain = $$.x.domain(), config.zoom_enabled && $$.zoom.updateScaleExtent(), $$.subX.domain($$.x.domain()), $$.brush && $$.brush.scale($$.subX)), withUpdateXDomain) {
			var domainValue = domain || !$$.brush || $$.brushEmpty() ? $$.orgXDomain : $$.getBrushSelection().map(function (v) {
				return $$.subX.invert(v);
			});

			$$.x.domain(domainValue), config.zoom_enabled && $$.zoom.updateScaleExtent();
		}

		// Trim domain when too big by zoom mousemove event


		return withTrim && $$.x.domain($$.trimXDomain($$.x.orgDomain())), $$.x.domain();
	},
	trimXDomain: function trimXDomain(domain) {
		var zoomDomain = this.getZoomDomain(),
		    min = zoomDomain[0],
		    max = zoomDomain[1];


		return domain[0] <= min && (domain[1] = +domain[1] + (min - domain[0]), domain[0] = min), max <= domain[1] && (domain[0] = +domain[0] - (domain[1] - max), domain[1] = max), domain;
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5),
    _typeof3 = _interopRequireDefault(_typeof2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var getFormat = function ($$, typeValue, v) {
	var config = $$.config,
	    type = "axis_" + typeValue + "_tick_format",
	    format = config[type] ? config[type] : $$.defaultValueFormat;


	return format(v);
};

(0, _util.extend)(_ChartInternal2.default.prototype, {
	getYFormat: function getYFormat(forArc) {
		var $$ = this,
		    formatForY = $$.yFormat,
		    formatForY2 = $$.y2Format;


		return forArc && !$$.hasType("gauge") && (formatForY = $$.defaultArcValueFormat, formatForY2 = $$.defaultArcValueFormat), function (v, ratio, id) {
			var format = $$.axis.getId(id) === "y2" ? formatForY2 : formatForY;

			return format.call($$, v, ratio);
		};
	},
	yFormat: function yFormat(v) {
		return getFormat(this, "y", v);
	},
	y2Format: function y2Format(v) {
		return getFormat(this, "y2", v);
	},
	defaultValueFormat: function defaultValueFormat(v) {
		return (0, _util.isValue)(v) ? +v : "";
	},
	defaultArcValueFormat: function defaultArcValueFormat(v, ratio) {
		return (ratio * 100).toFixed(1) + "%";
	},
	dataLabelFormat: function dataLabelFormat(targetId) {
		var $$ = this,
		    dataLabels = $$.config.data_labels,
		    defaultFormat = function (v) {
			return (0, _util.isValue)(v) ? +v : "";
		},
		    format = void 0;

		// find format according to axis id


		return format = typeof dataLabels.format === "function" ? dataLabels.format : (0, _typeof3.default)(dataLabels.format) === "object" ? dataLabels.format[targetId] ? dataLabels.format[targetId] === !0 ? defaultFormat : dataLabels.format[targetId] : function () {
			return "";
		} : defaultFormat, format;
	}
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	initGrid: function initGrid() {
		var $$ = this,
		    config = $$.config;
		$$.grid = $$.main.append("g").attr("clip-path", $$.clipPathForGrid).attr("class", _classes2.default.grid), config.grid_x_show && $$.grid.append("g").attr("class", _classes2.default.xgrids), config.grid_y_show && $$.grid.append("g").attr("class", _classes2.default.ygrids), config.grid_focus_show && $$.grid.append("g").attr("class", _classes2.default.xgridFocus).append("line").attr("class", _classes2.default.xgridFocus), $$.xgrid = (0, _d.selectAll)([]), config.grid_lines_front || $$.initGridLines();
	},
	initGridLines: function initGridLines() {
		var $$ = this;

		$$.gridLines = $$.main.append("g").attr("clip-path", $$.clipPathForGrid).attr("class", _classes2.default.grid + " " + _classes2.default.gridLines), $$.gridLines.append("g").attr("class", _classes2.default.xgridLines), $$.gridLines.append("g").attr("class", _classes2.default.ygridLines), $$.xgridLines = (0, _d.selectAll)([]);
	},
	updateXGrid: function updateXGrid(withoutUpdate) {
		var $$ = this,
		    config = $$.config,
		    xgridData = $$.generateGridData(config.grid_x_type, $$.x),
		    tickOffset = $$.isCategorized() ? $$.xAxis.tickOffset() : 0;
		$$.xgridAttr = config.axis_rotated ? {
			"x1": 0,
			"x2": $$.width,
			"y1": function y1(d) {
				return $$.x(d) - tickOffset;
			},
			"y2": function y2(d) {
				return $$.x(d) - tickOffset;
			}
		} : {
			"x1": function x1(d) {
				return $$.x(d) + tickOffset;
			},
			"x2": function x2(d) {
				return $$.x(d) + tickOffset;
			},
			"y1": 0,
			"y2": $$.height
		}, $$.xgrid = $$.main.select("." + _classes2.default.xgrids).selectAll("." + _classes2.default.xgrid).data(xgridData), $$.xgrid.exit().remove(), $$.xgrid = $$.xgrid.enter().append("line").attr("class", _classes2.default.xgrid).merge($$.xgrid), withoutUpdate || $$.xgrid.each(function () {
			var grid = (0, _d.select)(this);

			Object.keys($$.xgridAttr).forEach(function (id) {
				grid.attr(id, $$.xgridAttr[id]).style("opacity", function () {
					return grid.attr(config.axis_rotated ? "y1" : "x1") === (config.axis_rotated ? $$.height : 0) ? "0" : "1";
				});
			});
		});
	},
	updateYGrid: function updateYGrid() {
		var $$ = this,
		    config = $$.config,
		    gridValues = $$.yAxis.tickValues() || $$.y.ticks(config.grid_y_ticks);
		$$.ygrid = $$.main.select("." + _classes2.default.ygrids).selectAll("." + _classes2.default.ygrid).data(gridValues), $$.ygrid.exit().remove(), $$.ygrid = $$.ygrid.enter().append("line").attr("class", _classes2.default.ygrid).merge($$.ygrid), $$.ygrid.attr("x1", config.axis_rotated ? $$.y : 0).attr("x2", config.axis_rotated ? $$.y : $$.width).attr("y1", config.axis_rotated ? 0 : $$.y).attr("y2", config.axis_rotated ? $$.height : $$.y), $$.smoothLines($$.ygrid, "grid");
	},
	gridTextAnchor: function gridTextAnchor(d) {
		return d.position ? d.position : "end";
	},
	gridTextDx: function gridTextDx(d) {
		return d.position === "start" ? 4 : d.position === "middle" ? 0 : -4;
	},
	xGridTextX: function xGridTextX(d) {
		return d.position === "start" ? -this.height : d.position === "middle" ? -this.height / 2 : 0;
	},
	yGridTextX: function yGridTextX(d) {
		return d.position === "start" ? 0 : d.position === "middle" ? this.width / 2 : this.width;
	},
	updateGrid: function updateGrid(duration) {
		var $$ = this,
		    main = $$.main,
		    config = $$.config;


		// hide if arc type
		$$.grid.style("visibility", $$.hasArcType() ? "hidden" : "visible"), main.select("line." + _classes2.default.xgridFocus).style("visibility", "hidden"), config.grid_x_show && $$.updateXGrid(), $$.xgridLines = main.select("." + _classes2.default.xgridLines).selectAll("." + _classes2.default.xgridLine).data(config.grid_x_lines), $$.xgridLines.exit().transition().duration(duration).style("opacity", "0").remove();


		// enter
		var xgridLine = $$.xgridLines.enter().append("g").attr("class", function (d) {
			return _classes2.default.xgridLine + (d.class ? " " + d.class : "");
		});

		xgridLine.append("line").style("opacity", "0"), xgridLine.append("text").attr("text-anchor", $$.gridTextAnchor).attr("transform", config.axis_rotated ? "" : "rotate(-90)").attr("dx", $$.gridTextDx).attr("dy", -5).style("opacity", "0"), $$.xgridLines = xgridLine.merge($$.xgridLines), config.grid_y_show && $$.updateYGrid(), $$.ygridLines = main.select("." + _classes2.default.ygridLines).selectAll("." + _classes2.default.ygridLine).data(config.grid_y_lines), $$.ygridLines.exit().transition().duration(duration).style("opacity", "0").remove();


		// enter
		var ygridLine = $$.ygridLines.enter().append("g").attr("class", function (d) {
			return _classes2.default.ygridLine + (d.class ? " " + d.class : "");
		});

		ygridLine.append("line").style("opacity", "0"), ygridLine.append("text").attr("text-anchor", $$.gridTextAnchor).attr("transform", config.axis_rotated ? "rotate(-90)" : "").attr("dx", $$.gridTextDx).attr("dy", -5).style("opacity", "0"), $$.ygridLines = ygridLine.merge($$.ygridLines);


		// update
		var yv = $$.yv.bind($$);

		$$.ygridLines.select("line").transition().duration(duration).attr("x1", config.axis_rotated ? yv : 0).attr("x2", config.axis_rotated ? yv : $$.width).attr("y1", config.axis_rotated ? 0 : yv).attr("y2", config.axis_rotated ? $$.height : yv).transition().style("opacity", "1"), $$.ygridLines.select("text").transition().duration(duration).attr("x", config.axis_rotated ? $$.xGridTextX.bind($$) : $$.yGridTextX.bind($$)).attr("y", yv).text(function (d) {
			return d.text;
		}).transition().style("opacity", "1");
	},
	redrawGrid: function redrawGrid(withTransition) {
		var $$ = this,
		    rotated = $$.config.axis_rotated,
		    xv = $$.xv.bind($$),
		    lines = $$.xgridLines.select("line"),
		    texts = $$.xgridLines.select("text");


		return lines = (withTransition ? lines.transition() : lines).attr("x1", rotated ? 0 : xv).attr("x2", rotated ? $$.width : xv).attr("y1", rotated ? xv : 0).attr("y2", rotated ? xv : $$.height), texts = (withTransition ? texts.transition() : texts).attr("x", rotated ? $$.yGridTextX.bind($$) : $$.xGridTextX.bind($$)).attr("y", xv).text(function (d) {
			return d.text;
		}), [(withTransition ? lines.transition() : lines).style("opacity", "1"), (withTransition ? texts.transition() : texts).style("opacity", "1")];
	},
	showXGridFocus: function showXGridFocus(selectedData) {
		var $$ = this,
		    config = $$.config,
		    dataToShow = selectedData.filter(function (d) {
			return d && (0, _util.isValue)(d.value);
		}),
		    focusEl = $$.main.selectAll("line." + _classes2.default.xgridFocus),
		    xx = $$.xx.bind($$);
		!config.tooltip_show || $$.hasType("scatter") || $$.hasArcType() || (focusEl.style("visibility", "visible").data([dataToShow[0]]).attr(config.axis_rotated ? "y1" : "x1", xx).attr(config.axis_rotated ? "y2" : "x2", xx), $$.smoothLines(focusEl, "grid"));

		// Hide when scatter plot exists
	},
	hideXGridFocus: function hideXGridFocus() {
		this.main.select("line." + _classes2.default.xgridFocus).style("visibility", "hidden");
	},
	updateXgridFocus: function updateXgridFocus() {
		var $$ = this,
		    config = $$.config;
		$$.main.select("line." + _classes2.default.xgridFocus).attr("x1", config.axis_rotated ? 0 : -10).attr("x2", config.axis_rotated ? $$.width : -10).attr("y1", config.axis_rotated ? -10 : 0).attr("y2", config.axis_rotated ? -10 : $$.height);
	},
	generateGridData: function generateGridData(type, scale) {
		var $$ = this,
		    tickNum = $$.main.select("." + _classes2.default.axisX).selectAll(".tick").size(),
		    gridData = [];


		if (type === "year") {
			var xDomain = $$.getXDomain(),
			    firstYear = xDomain[0].getFullYear(),
			    lastYear = xDomain[1].getFullYear();


			for (var i = firstYear; i <= lastYear; i++) gridData.push(new Date(i + "-01-01 00:00:00"));
		} else gridData = scale.ticks(10), gridData.length > tickNum && (gridData = gridData.filter(function (d) {
				return (d + "").indexOf(".") < 0;
			}));
		return gridData;
	},
	getGridFilterToRemove: function getGridFilterToRemove(params) {
		return params ? function (line) {
			var found = !1;

			return [].concat(params).forEach(function (param) {
				("value" in param && line.value === param.value || "class" in param && line.class === param.class) && (found = !0);
			}), found;
		} : function () {
			return !0;
		};
	},
	removeGridLines: function removeGridLines(params, forX) {
		var $$ = this,
		    config = $$.config,
		    toRemove = $$.getGridFilterToRemove(params),
		    toShow = function (line) {
			return !toRemove(line);
		},
		    classLines = forX ? _classes2.default.xgridLines : _classes2.default.ygridLines,
		    classLine = forX ? _classes2.default.xgridLine : _classes2.default.ygridLine;
		$$.main.select("." + classLines).selectAll("." + classLine).filter(toRemove).transition().duration(config.transition_duration).style("opacity", "0").remove(), forX ? config.grid_x_lines = config.grid_x_lines.filter(toShow) : config.grid_y_lines = config.grid_y_lines.filter(toShow);
	}
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Initialize the legend.
  * @private
  */
	initLegend: function initLegend() {
		var $$ = this;

		return $$.legendItemTextBox = {}, $$.legendHasRendered = !1, $$.legend = $$.svg.append("g").attr("transform", $$.getTranslate("legend")), $$.config.legend_show ? void $$.updateLegendWithDefaults() : ($$.legend.style("visibility", "hidden"), void ($$.hiddenLegendIds = $$.mapToIds($$.data.targets)));
		// MEMO: call here to update legend box and tranlate for all
		// MEMO: translate will be upated by this, so transform not needed in updateLegend()
	},


	/**
  * Update the legend to its default value.
  * @private
  */
	updateLegendWithDefaults: function updateLegendWithDefaults() {
		var $$ = this;

		$$.updateLegend($$.mapToIds($$.data.targets), {
			withTransform: !1,
			withTransitionForTransform: !1,
			withTransition: !1
		});
	},


	/**
  * Update the size of the legend.
  * @private
  * @param {Number} height
  * @param {Number} width
  */
	updateSizeForLegend: function updateSizeForLegend(legendHeight, legendWidth) {
		var $$ = this,
		    config = $$.config,
		    insetLegendPosition = {
			top: $$.isLegendTop ? $$.getCurrentPaddingTop() + config.legend_inset_y + 5.5 : $$.currentHeight - legendHeight - $$.getCurrentPaddingBottom() - config.legend_inset_y,
			left: $$.isLegendLeft ? $$.getCurrentPaddingLeft() + config.legend_inset_x + 0.5 : $$.currentWidth - legendWidth - $$.getCurrentPaddingRight() - config.legend_inset_x + 0.5
		};
		$$.margin3 = {
			top: $$.isLegendRight ? 0 : $$.isLegendInset ? insetLegendPosition.top : $$.currentHeight - legendHeight,
			right: NaN,
			bottom: 0,
			left: $$.isLegendRight ? $$.currentWidth - legendWidth : $$.isLegendInset ? insetLegendPosition.left : 0
		};
	},

	/**
  * Transform Legend
  * @private
  * @param {Boolean} whether or not to transition.
  */
	transformLegend: function transformLegend(withTransition) {
		var $$ = this;

		(withTransition ? $$.legend.transition() : $$.legend).attr("transform", $$.getTranslate("legend"));
	},


	/**
  * Update the legend step
  * @private
  * @param {Number} step
  */
	updateLegendStep: function updateLegendStep(step) {
		this.legendStep = step;
	},


	/**
  * Update legend item width
  * @private
  * @param {Number} width
  */
	updateLegendItemWidth: function updateLegendItemWidth(w) {
		this.legendItemWidth = w;
	},


	/**
  * Update legend item height
  * @private
  * @param {Number} height
  */
	updateLegendItemHeight: function updateLegendItemHeight(h) {
		this.legendItemHeight = h;
	},


	/**
  * Get the width of the legend
  * @private
  * @param {Number} width
  */
	getLegendWidth: function getLegendWidth() {
		var $$ = this;

		return $$.config.legend_show ? $$.isLegendRight || $$.isLegendInset ? $$.legendItemWidth * ($$.legendStep + 1) : $$.currentWidth : 0;
	},

	/**
  * Get the height of the legend
  * @private
  * @param {Number} height
  */
	getLegendHeight: function getLegendHeight() {
		var $$ = this,
		    h = 0;

		return $$.config.legend_show && ($$.isLegendRight ? h = $$.currentHeight : h = Math.max(20, $$.legendItemHeight) * ($$.legendStep + 1)), h;
	},

	/**
  * Get the opacity of the legend
  * @private
  * @param {Object} d3.Select
  * @returns {Number} opacity
  */
	opacityForLegend: function opacityForLegend(legendItem) {
		return legendItem.classed(_classes2.default.legendItemHidden) ? null : "1";
	},


	/**
  * Get the opacity of the legend that is unfocused
  * @private
  * @param {Object} legendItem, d3.Select
  * @returns {Number} opacity
  */
	opacityForUnfocusedLegend: function opacityForUnfocusedLegend(legendItem) {
		return legendItem.classed(_classes2.default.legendItemHidden) ? null : "0.3";
	},

	/**
  * Toggles the focus of the legend
  * @private
  * @param {Array} ID's of target
  * @param {Boolean} whether or not to focus.
  */
	toggleFocusLegend: function toggleFocusLegend(targetIds, focus) {
		var $$ = this,
		    targetIdz = $$.mapToTargetIds(targetIds);
		$$.legend.selectAll("." + _classes2.default.legendItem).filter(function (id) {
			return targetIdz.indexOf(id) >= 0;
		}).classed(_classes2.default.legendItemFocused, focus).transition().duration(100).style("opacity", function () {
			var opacity = focus ? $$.opacityForLegend : $$.opacityForUnfocusedLegend;

			return opacity.call($$, (0, _d.select)(this));
		});
	},

	/**
  * Revert the legend to its default state
  * @private
  */
	revertLegend: function revertLegend() {
		var $$ = this;

		$$.legend.selectAll("." + _classes2.default.legendItem).classed(_classes2.default.legendItemFocused, !1).transition().duration(100).style("opacity", function () {
			return $$.opacityForLegend((0, _d.select)(this));
		});
	},

	/**
  * Shows the legend
  * @private
  * @param {Array} ID's of target
  */
	showLegend: function showLegend(targetIds) {
		var $$ = this,
		    config = $$.config;
		config.legend_show || (config.legend_show = !0, $$.legend.style("visibility", "visible"), !$$.legendHasRendered && $$.updateLegendWithDefaults()), $$.removeHiddenLegendIds(targetIds), $$.legend.selectAll($$.selectorLegends(targetIds)).style("visibility", "visible").transition().style("opacity", function () {
			return $$.opacityForLegend((0, _d.select)(this));
		});
	},

	/**
  * Hide the legend
  * @private
  * @param {Array} ID's of target
  */
	hideLegend: function hideLegend(targetIds) {
		var $$ = this,
		    config = $$.config;
		config.legend_show && (0, _util.isEmpty)(targetIds) && (config.legend_show = !1, $$.legend.style("visibility", "hidden")), $$.addHiddenLegendIds(targetIds), $$.legend.selectAll($$.selectorLegends(targetIds)).style("opacity", "0").style("visibility", "hidden");
	},

	/**
  * Clear the LegendItemTextBox cache.
  * @private
  */
	clearLegendItemTextBoxCache: function clearLegendItemTextBoxCache() {
		this.legendItemTextBox = {};
	},

	/**
  * Update the legend
  * @private
  * @param {Array} ID's of target
  * @param {Object} withTransform : Whether to use the transform property / withTransitionForTransform: Whether transition is used when using the transform property / withTransition : whether or not to transition.
  * @param {Object} the return value of the generateTransitions
  */
	updateLegend: function updateLegend(targetIds, options, transitions) {
		var $$ = this,
		    config = $$.config,
		    posMin = 10,
		    tileWidth = config.legend_item_tile_width + 5,
		    isTouch = $$.inputType === "touch",
		    maxWidth = 0,
		    maxHeight = 0,
		    xForLegend = void 0,
		    yForLegend = void 0,
		    totalLength = 0,
		    offsets = {},
		    widths = {},
		    heights = {},
		    margins = [0],
		    steps = {},
		    step = 0,
		    background = void 0,
		    targetIdz = targetIds.filter(function (id) {
			return !(0, _util.isDefined)(config.data_names[id]) || config.data_names[id] !== null;
		}),
		    optionz = options || {},
		    withTransition = (0, _util.getOption)(optionz, "withTransition", !0),
		    withTransitionForTransform = (0, _util.getOption)(optionz, "withTransitionForTransform", !0),
		    getTextBox = function (textElement, id) {
			return $$.legendItemTextBox[id] || ($$.legendItemTextBox[id] = $$.getTextRect(textElement.textContent, _classes2.default.legendItem, textElement)), $$.legendItemTextBox[id];
		},
		    updatePositions = function (textElement, id, index) {
			var isLast = index === targetIdz.length - 1,
			    box = getTextBox(textElement, id),
			    itemWidth = box.width + tileWidth + (isLast && !($$.isLegendRight || $$.isLegendInset) ? 0 : 10) + config.legend_padding,
			    itemHeight = box.height + 4,
			    itemLength = $$.isLegendRight || $$.isLegendInset ? itemHeight : itemWidth,
			    areaLength = $$.isLegendRight || $$.isLegendInset ? $$.getLegendHeight() : $$.getLegendWidth(),
			    margin = void 0,
			    updateValues = function (id2, withoutStep) {
				withoutStep || (margin = (areaLength - totalLength - itemLength) / 2, margin < posMin && (margin = (areaLength - itemLength) / 2, totalLength = 0, step++)), steps[id2] = step, margins[step] = $$.isLegendInset ? 10 : margin, offsets[id2] = totalLength, totalLength += itemLength;
			};

			// MEMO: care about condifion of step, totalLength


			if (index === 0 && (totalLength = 0, step = 0, maxWidth = 0, maxHeight = 0), config.legend_show && !$$.isLegendToShow(id)) return widths[id] = 0, heights[id] = 0, steps[id] = 0, void (offsets[id] = 0);

			widths[id] = itemWidth, heights[id] = itemHeight, (!maxWidth || itemWidth >= maxWidth) && (maxWidth = itemWidth), (!maxHeight || itemHeight >= maxHeight) && (maxHeight = itemHeight);


			var maxLength = $$.isLegendRight || $$.isLegendInset ? maxHeight : maxWidth;

			config.legend_equally ? (Object.keys(widths).forEach(function (id2) {
				return widths[id2] = maxWidth;
			}), Object.keys(heights).forEach(function (id2) {
				return heights[id2] = maxHeight;
			}), margin = (areaLength - maxLength * targetIdz.length) / 2, margin < posMin ? (totalLength = 0, step = 0, targetIdz.forEach(function (id2) {
				return updateValues(id2);
			})) : updateValues(id, !0)) : updateValues(id);
		};
		// Skip elements when their name is set to null
		$$.isLegendInset && (step = config.legend_inset_step ? config.legend_inset_step : targetIdz.length, $$.updateLegendStep(step)), $$.isLegendRight ? (xForLegend = function (id) {
			return maxWidth * steps[id];
		}, yForLegend = function (id) {
			return margins[steps[id]] + offsets[id];
		}) : $$.isLegendInset ? (xForLegend = function (id) {
			return maxWidth * steps[id] + 10;
		}, yForLegend = function (id) {
			return margins[steps[id]] + offsets[id];
		}) : (xForLegend = function (id) {
			return margins[steps[id]] + offsets[id];
		}, yForLegend = function (id) {
			return maxHeight * steps[id];
		});


		var xForLegendText = function (id, i) {
			return xForLegend(id, i) + 4 + config.legend_item_tile_width;
		},
		    yForLegendText = function (id, i) {
			return yForLegend(id, i) + 9;
		},
		    xForLegendRect = function (id, i) {
			return xForLegend(id, i);
		},
		    yForLegendRect = function (id, i) {
			return yForLegend(id, i) - 5;
		},
		    x1ForLegendTile = function (id, i) {
			return xForLegend(id, i) - 2;
		},
		    x2ForLegendTile = function (id, i) {
			return xForLegend(id, i) - 2 + config.legend_item_tile_width;
		},
		    yForLegendTile = function (id, i) {
			return yForLegend(id, i) + 4;
		},
		    l = $$.legend.selectAll("." + _classes2.default.legendItem).data(targetIdz).enter().append("g").attr("class", function (id) {
			return $$.generateClass(_classes2.default.legendItem, id);
		}).style("visibility", function (id) {
			return $$.isLegendToShow(id) ? "visible" : "hidden";
		}).style("cursor", "pointer").on(isTouch ? "touchstart" : "click", function (id) {
			config.legend_item_onclick ? config.legend_item_onclick.call($$, id) : _d.event.altKey ? ($$.api.hide(), $$.api.show(id)) : ($$.api.toggle(id), $$.isTargetToShow(id) ? $$.api.focus(id) : $$.api.revert()), isTouch && $$.hideTooltip();
		}).on(isTouch ? undefined : "mouseover", function (id) {
			config.legend_item_onover ? config.legend_item_onover.call($$, id) : ((0, _d.select)(this).classed(_classes2.default.legendItemFocused, !0), !$$.transiting && $$.isTargetToShow(id) && $$.api.focus(id));
		}).on(isTouch ? "touchend" : "mouseout", function (id) {
			config.legend_item_onout ? config.legend_item_onout.call($$, id) : ((0, _d.select)(this).classed(_classes2.default.legendItemFocused, !1), $$.api.revert());
		});

		// Define g for legend area
		l.append("text").text(function (id) {
			return (0, _util.isDefined)(config.data_names[id]) ? config.data_names[id] : id;
		}).each(function (id, i) {
			updatePositions(this, id, i);
		}).style("pointer-events", "none").attr("x", $$.isLegendRight || $$.isLegendInset ? xForLegendText : -200).attr("y", $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendText), l.append("rect").attr("class", _classes2.default.legendItemEvent).style("fill-opacity", "0").attr("x", $$.isLegendRight || $$.isLegendInset ? xForLegendRect : -200).attr("y", $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendRect), l.append("line").attr("class", _classes2.default.legendItemTile).style("stroke", $$.color).style("pointer-events", "none").attr("x1", $$.isLegendRight || $$.isLegendInset ? x1ForLegendTile : -200).attr("y1", $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendTile).attr("x2", $$.isLegendRight || $$.isLegendInset ? x2ForLegendTile : -200).attr("y2", $$.isLegendRight || $$.isLegendInset ? -200 : yForLegendTile).attr("stroke-width", config.legend_item_tile_height), background = $$.legend.select("." + _classes2.default.legendBackground + " rect"), $$.isLegendInset && maxWidth > 0 && background.size() === 0 && (background = $$.legend.insert("g", "." + _classes2.default.legendItem).attr("class", _classes2.default.legendBackground).append("rect"));


		var texts = $$.legend.selectAll("text").data(targetIdz).text(function (id) {
			return (0, _util.isDefined)(config.data_names[id]) ? config.data_names[id] : id;
		} // MEMO: needed for update
		).each(function (id, i) {
			updatePositions(this, id, i);
		});

		(withTransition ? texts.transition() : texts).attr("x", xForLegendText).attr("y", yForLegendText);


		var rects = $$.legend.selectAll("rect." + _classes2.default.legendItemEvent).data(targetIdz);

		(withTransition ? rects.transition() : rects).attr("width", function (id) {
			return widths[id];
		}).attr("height", function (id) {
			return heights[id];
		}).attr("x", xForLegendRect).attr("y", yForLegendRect);


		var tiles = $$.legend.selectAll("line." + _classes2.default.legendItemTile).data(targetIdz);

		(withTransition ? tiles.transition() : tiles).style("stroke", $$.color).attr("x1", x1ForLegendTile).attr("y1", yForLegendTile).attr("x2", x2ForLegendTile).attr("y2", yForLegendTile), background && (withTransition ? background.transition() : background).attr("height", $$.getLegendHeight() - 12).attr("width", maxWidth * (step + 1) + 10), $$.legend.selectAll("." + _classes2.default.legendItem).classed(_classes2.default.legendItemHidden, function (id) {
			return !$$.isTargetToShow(id);
		}), $$.updateLegendItemWidth(maxWidth), $$.updateLegendItemHeight(maxHeight), $$.updateLegendStep(step), $$.updateSizes(), $$.updateScales(), $$.updateSvgSize(), $$.transformAll(withTransitionForTransform, transitions), $$.legendHasRendered = !0;
	}
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	initRegion: function initRegion() {
		var $$ = this;

		$$.region = $$.main.append("g").attr("clip-path", $$.clipPath).attr("class", _classes2.default.regions);
	},
	updateRegion: function updateRegion(duration) {
		var $$ = this,
		    config = $$.config;


		// hide if arc type
		$$.region.style("visibility", $$.hasArcType() ? "hidden" : "visible"), $$.mainRegion = $$.main.select("." + _classes2.default.regions).selectAll("." + _classes2.default.region).data(config.regions), $$.mainRegion.exit().transition().duration(duration).style("opacity", "0").remove(), $$.mainRegion = $$.mainRegion.enter().append("g").merge($$.mainRegion).attr("class", $$.classRegion.bind($$)), $$.mainRegion.append("rect").style("fill-opacity", "0");
	},
	redrawRegion: function redrawRegion(withTransition) {
		var $$ = this,
		    x = $$.regionX.bind($$),
		    y = $$.regionY.bind($$),
		    w = $$.regionWidth.bind($$),
		    h = $$.regionHeight.bind($$),
		    regions = $$.mainRegion.select("rect");


		return regions = (withTransition ? regions.transition() : regions).attr("x", x).attr("y", y).attr("width", w).attr("height", h), [(withTransition ? regions.transition() : regions).style("fill-opacity", function (d) {
			return (0, _util.isValue)(d.opacity) ? d.opacity : "0.1";
		}).on("end", function () {
			(0, _d.select)(this.parentNode).selectAll("rect:not([x])").remove();
		})];
	},
	regionX: function regionX(d) {
		var $$ = this,
		    config = $$.config,
		    yScale = d.axis === "y" ? $$.y : $$.y2,
		    xPos = void 0;


		return xPos = d.axis === "y" || d.axis === "y2" ? config.axis_rotated ? "start" in d ? yScale(d.start) : 0 : 0 : config.axis_rotated ? 0 : "start" in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0, xPos;
	},
	regionY: function regionY(d) {
		var $$ = this,
		    config = $$.config,
		    yScale = d.axis === "y" ? $$.y : $$.y2,
		    yPos = void 0;


		return yPos = d.axis === "y" || d.axis === "y2" ? config.axis_rotated ? 0 : "end" in d ? yScale(d.end) : 0 : config.axis_rotated ? "start" in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.start) : d.start) : 0 : 0, yPos;
	},
	regionWidth: function regionWidth(d) {
		var $$ = this,
		    config = $$.config,
		    yScale = d.axis === "y" ? $$.y : $$.y2,
		    start = $$.regionX(d),
		    end = void 0;


		return end = d.axis === "y" || d.axis === "y2" ? config.axis_rotated ? "end" in d ? yScale(d.end) : $$.width : $$.width : config.axis_rotated ? $$.width : "end" in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.width, end < start ? 0 : end - start;
	},
	regionHeight: function regionHeight(d) {
		var $$ = this,
		    config = $$.config,
		    start = this.regionY(d),
		    end = void 0,
		    yScale = d.axis === "y" ? $$.y : $$.y2;


		return end = d.axis === "y" || d.axis === "y2" ? config.axis_rotated ? $$.height : "start" in d ? yScale(d.start) : $$.height : config.axis_rotated ? "end" in d ? $$.x($$.isTimeSeries() ? $$.parseDate(d.end) : d.end) : $$.height : $$.height, end < start ? 0 : end - start;
	},
	isRegionOnX: function isRegionOnX(d) {
		return !d.axis || d.axis === "x";
	}
}); // selection

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_ChartInternal2.default.prototype, {
	getScale: function getScale(min, max, forTimeseries) {
		return (forTimeseries ? (0, _d.scaleTime)() : (0, _d.scaleLinear)()).range([min, max]);
	},
	getX: function getX(min, max, domain, offsetValue) {
		var $$ = this,
		    scale = $$.getScale(min, max, $$.isTimeSeries()),
		    _scale = domain ? scale.domain(domain) : scale,
		    key = void 0,
		    offset = void 0;

		// Define customized scale if categorized axis


		// define functions
		for (key in $$.isCategorized() ? (offset = offsetValue || function () {
			return 0;
		}, scale = function (d, raw) {
			var v = _scale(d) + offset(d);

			return raw ? v : Math.ceil(v);
		}) : scale = function (d, raw) {
			var v = _scale(d);

			return raw ? v : Math.ceil(v);
		}, _scale) scale[key] = _scale[key];

		return scale.orgDomain = function () {
			return _scale.domain();
		}, $$.isCategorized() && (scale.domain = function (domainValue) {
			var domain = domainValue;

			return arguments.length ? (_scale.domain(domain), scale) : (domain = this.orgDomain(), [domain[0], domain[1] + 1]);
		}), scale;
	},
	getY: function getY(min, max, domain) {
		var scale = this.getScale(min, max, this.isTimeSeriesY());

		return domain && scale.domain(domain), scale;
	},
	getYScale: function getYScale(id) {
		return this.axis.getId(id) === "y2" ? this.y2 : this.y;
	},
	getSubYScale: function getSubYScale(id) {
		return this.axis.getId(id) === "y2" ? this.subY2 : this.subY;
	},


	/**
  * Update scale
  * @private
  * @param {Boolean} withoutTransitionAtInit - param is given at the init rendering
  */
	updateScales: function updateScales(withoutTransitionAtInit) {
		var $$ = this,
		    config = $$.config,
		    forInit = !$$.x;


		// update edges
		$$.xMin = config.axis_rotated ? 1 : 0, $$.xMax = config.axis_rotated ? $$.height : $$.width, $$.yMin = config.axis_rotated ? 0 : $$.height, $$.yMax = config.axis_rotated ? $$.width : 1, $$.subXMin = $$.xMin, $$.subXMax = $$.xMax, $$.subYMin = config.axis_rotated ? 0 : $$.height2, $$.subYMax = config.axis_rotated ? $$.width2 : 1, $$.x = $$.getX($$.xMin, $$.xMax, forInit ? undefined : $$.x.orgDomain(), function () {
			return $$.xAxis.tickOffset();
		}), $$.y = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y_default : $$.y.domain()), $$.y2 = $$.getY($$.yMin, $$.yMax, forInit ? config.axis_y2_default : $$.y2.domain()), $$.subX = $$.getX($$.xMin, $$.xMax, $$.orgXDomain, function (d) {
			return d % 1 ? 0 : $$.subXAxis.tickOffset();
		}), $$.subY = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y_default : $$.subY.domain()), $$.subY2 = $$.getY($$.subYMin, $$.subYMax, forInit ? config.axis_y2_default : $$.subY2.domain()), $$.xAxisTickFormat = $$.axis.getXAxisTickFormat(), $$.xAxisTickValues = $$.axis.getXAxisTickValues(), $$.yAxisTickValues = $$.axis.getYAxisTickValues(), $$.y2AxisTickValues = $$.axis.getY2AxisTickValues(), $$.xAxis = $$.axis.getXAxis($$.x, $$.xOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer, withoutTransitionAtInit), $$.subXAxis = $$.axis.getXAxis($$.subX, $$.subXOrient, $$.xAxisTickFormat, $$.xAxisTickValues, config.axis_x_tick_outer), $$.yAxis = $$.axis.getYAxis($$.y, $$.yOrient, config.axis_y_tick_format, $$.yAxisTickValues, config.axis_y_tick_outer), $$.y2Axis = $$.axis.getYAxis($$.y2, $$.y2Orient, config.axis_y2_tick_format, $$.y2AxisTickValues, config.axis_y2_tick_outer), $$.updateArc && $$.updateArc();
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Select a point
  * @private
  * @param {Object} target point
  * @param {Object} data
  * @param {Number} index
  */
	selectPoint: function selectPoint(target, d, i) {
		var $$ = this,
		    config = $$.config,
		    cx = (config.axis_rotated ? $$.circleY : $$.circleX).bind($$),
		    cy = (config.axis_rotated ? $$.circleX : $$.circleY).bind($$),
		    r = $$.pointSelectR.bind($$);
		config.data_onselected.call($$.api, d, target.node()), $$.main.select("." + _classes2.default.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + _classes2.default.selectedCircle + "-" + i).data([d]).enter().append("circle").attr("class", function () {
			return $$.generateClass(_classes2.default.selectedCircle, i);
		}).attr("cx", cx).attr("cy", cy).attr("stroke", function () {
			return $$.color(d);
		}).attr("r", function (d2) {
			return $$.pointSelectR(d2) * 1.4;
		}).transition().duration(100).attr("r", r);
	},


	/**
  * Unelect a point
  * @private
  * @param {Object} target point
  * @param {Object} data
  * @param {Number} index
  */
	unselectPoint: function unselectPoint(target, d, i) {
		var $$ = this;

		$$.config.data_onunselected.call($$.api, d, target.node()), $$.main.select("." + _classes2.default.selectedCircles + $$.getTargetSelectorSuffix(d.id)).selectAll("." + _classes2.default.selectedCircle + "-" + i).transition().duration(100).attr("r", 0).remove();
	},


	/**
  * Toggles the selection of points
  * @private
  * @param {Boolean} whether or not to select.
  * @param {Object} target point
  * @param {Object} data
  * @param {Number} index
  */
	togglePoint: function togglePoint(selected, target, d, i) {
		selected ? this.selectPoint(target, d, i) : this.unselectPoint(target, d, i);
	},


	/**
  * Select a path
  * @private
  * @param {Object} target path
  * @param {Object} data
  */
	selectPath: function selectPath(target, d) {
		var $$ = this;

		$$.config.data_onselected.call($$, d, target.node()), $$.config.interaction_brighten && target.transition().duration(100).style("fill", function () {
			return (0, _d.rgb)($$.color(d)).brighter(0.75);
		});
	},


	/**
  * Unelect a path
  * @private
  * @param {Object} target path
  * @param {Object} data
  */
	unselectPath: function unselectPath(target, d) {
		var $$ = this;

		$$.config.data_onunselected.call($$, d, target.node()), $$.config.interaction_brighten && target.transition().duration(100).style("fill", function () {
			return $$.color(d);
		});
	},


	/**
  * Toggles the selection of lines
  * @private
  * @param {Boolean} whether or not to select.
  * @param {Object} target shape
  * @param {Object} data
  * @param {Number} index
  */
	togglePath: function togglePath(selected, target, d, i) {
		selected ? this.selectPath(target, d, i) : this.unselectPath(target, d, i);
	},


	/**
  * Returns the toggle method of the target
  * @private
  * @param {Object} target shape
  * @param {Object} data
  * @returns {Function} toggle method
  */
	getToggle: function getToggle(that, d) {
		var $$ = this,
		    toggle = void 0;

		return that.nodeName === "circle" ? $$.isStepType(d) ? toggle = function () {} : toggle = $$.togglePoint : that.nodeName === "path" && (toggle = $$.togglePath), toggle;
	},


	/**
  * Toggles the selection of shapes
  * @private
  * @param {Object} target shape
  * @param {Object} data
  * @param {Number} index
  */
	toggleShape: function toggleShape(that, d, i) {
		var _this = this,
		    $$ = this,
		    config = $$.config,
		    shape = (0, _d.select)(that),
		    isSelected = shape.classed(_classes2.default.SELECTED),
		    toggle = $$.getToggle(that, d).bind($$);

		if (config.data_selection_enabled && config.data_selection_isselectable(d)) {
			if (!config.data_selection_multiple) {
				var selecter = "." + _classes2.default.shapes;

				config.data_selection_grouped && (selecter = "." + selecter + $$.getTargetSelectorSuffix(d.id)), $$.main.selectAll(selecter).selectAll("." + _classes2.default.shape).each(function (d, i) {
					var shape = (0, _d.select)(_this);

					shape.classed(_classes2.default.SELECTED) && toggle(!1, shape.classed(_classes2.default.SELECTED, !1), d, i);
				});
			}
			shape.classed(_classes2.default.SELECTED, !isSelected), toggle(!isSelected, shape, d, i);
		}
	}
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	initBar: function initBar() {
		var $$ = this;

		$$.main.select("." + _classes2.default.chart).append("g").attr("class", _classes2.default.chartBars);
	},
	updateTargetsForBar: function updateTargetsForBar(targets) {
		var $$ = this,
		    config = $$.config,
		    classChartBar = $$.classChartBar.bind($$),
		    classBars = $$.classBars.bind($$),
		    classFocus = $$.classFocus.bind($$),
		    mainBarUpdate = $$.main.select("." + _classes2.default.chartBars).selectAll("." + _classes2.default.chartBar).data(targets).attr("class", function (d) {
			return classChartBar(d) + classFocus(d);
		}),
		    mainBarEnter = mainBarUpdate.enter().append("g").attr("class", classChartBar).style("opacity", "0").style("pointer-events", "none");


		// Bars for each data
		mainBarEnter.append("g").attr("class", classBars).style("cursor", function (d) {
			return config.data_selection_isselectable(d) ? "pointer" : null;
		});
	},
	updateBar: function updateBar(durationForExit) {
		var $$ = this,
		    barData = $$.barData.bind($$),
		    classBar = $$.classBar.bind($$),
		    initialOpacity = $$.initialOpacity.bind($$),
		    color = function (d) {
			return $$.color(d.id);
		};
		$$.mainBar = $$.main.selectAll("." + _classes2.default.bars).selectAll("." + _classes2.default.bar).data(barData), $$.mainBar.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $$.mainBar = $$.mainBar.enter().append("path").attr("class", classBar).style("stroke", color).style("fill", color).merge($$.mainBar).style("opacity", initialOpacity);
	},
	redrawBar: function redrawBar(drawBar, withTransition) {
		return [(withTransition ? this.mainBar.transition(Math.random().toString()) : this.mainBar).attr("d", drawBar).style("fill", this.color).style("opacity", "1")];
	},
	getBarW: function getBarW(axis, barTargetsNum) {
		var $$ = this,
		    config = $$.config,
		    w = typeof config.bar_width === "number" ? config.bar_width : barTargetsNum ? axis.tickInterval() * config.bar_width_ratio / barTargetsNum : 0;


		return config.bar_width_max && w > config.bar_width_max ? config.bar_width_max : w;
	},
	getBars: function getBars(i, id) {
		var $$ = this,
		    suffix = (0, _util.isValue)(i) ? "-" + i : "";


		return (id ? $$.main.selectAll("." + _classes2.default.bars + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll("." + _classes2.default.bar + suffix);
	},
	expandBars: function expandBars(i, id, reset) {
		var $$ = this;

		reset && $$.unexpandBars(), $$.getBars(i, id).classed(_classes2.default.EXPANDED, !0);
	},
	unexpandBars: function unexpandBars(i) {
		var $$ = this;

		$$.getBars(i).classed(_classes2.default.EXPANDED, !1);
	},
	generateDrawBar: function generateDrawBar(barIndices, isSub) {
		var $$ = this,
		    config = $$.config,
		    getPoints = $$.generateGetBarPoints(barIndices, isSub);


		return function (d, i) {
			// 4 points that make a bar
			var points = getPoints(d, i),
			    indexX = config.axis_rotated ? 1 : 0,
			    indexY = config.axis_rotated ? 0 : 1,
			    path = "M " + points[0][indexX] + "," + points[0][indexY] + "\n\t\t\tL " + points[1][indexX] + "," + points[1][indexY] + "\n\t\t\tL " + points[2][indexX] + "," + points[2][indexY] + "\n\t\t\tL " + points[3][indexX] + "," + points[3][indexY] + " z";

			// switch points if axis is rotated, not applicable for sub chart


			return path;
		};
	},
	generateGetBarPoints: function generateGetBarPoints(barIndices, isSub) {
		var $$ = this,
		    axis = isSub ? $$.subXAxis : $$.xAxis,
		    barTargetsNum = barIndices.__max__ + 1,
		    barW = $$.getBarW(axis, barTargetsNum),
		    barX = $$.getShapeX(barW, barTargetsNum, barIndices, !!isSub),
		    barY = $$.getShapeY(!!isSub),
		    barOffset = $$.getShapeOffset($$.isBarType, barIndices, !!isSub),
		    yScale = isSub ? $$.getSubYScale : $$.getYScale;


		return function (d, i) {
			var y0 = yScale.call($$, d.id)(0),
			    offset = barOffset(d, i) || y0,
			    posX = barX(d),
			    posY = barY(d); // offset is for stacked bar chart


			// fix posY not to overflow opposite quadrant

			// 4 points that make a bar
			return $$.config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY) && (posY = y0), [[posX, offset], [posX, posY - (y0 - offset)], [posX + barW, posY - (y0 - offset)], [posX + barW, offset]];
		};
	},
	isWithinBar: function isWithinBar(that) {
		var mouse = (0, _d.mouse)(that),
		    list = (0, _util.getRectSegList)(that),
		    box = that.getBBox(),
		    seg0 = list[0],
		    seg1 = list[1],
		    x = Math.min(seg0.x, seg1.x),
		    y = Math.min(seg0.y, seg1.y),
		    w = box.width,
		    h = box.height,
		    offset = 2,
		    isIn = x - offset < mouse[0] && mouse[0] < x + w + offset && y - offset < mouse[1] && mouse[1] < y + h + offset;


		return isIn;
	}
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	getShapeIndices: function getShapeIndices(typeFilter) {
		var $$ = this,
		    config = $$.config,
		    indices = {},
		    i = 0,
		    j = void 0,
		    k = void 0;

		return $$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$)).forEach(function (d) {
			for (j = 0; j < config.data_groups.length; j++) if (!(config.data_groups[j].indexOf(d.id) < 0)) for (k = 0; k < config.data_groups[j].length; k++) if (config.data_groups[j][k] in indices) {
					indices[d.id] = indices[config.data_groups[j][k]];

					break;
				}
			(0, _util.isUndefined)(indices[d.id]) && (indices[d.id] = i++);
		}), indices.__max__ = i - 1, indices;
	},
	getShapeX: function getShapeX(offset, targetsNum, indices, isSub) {
		var $$ = this,
		    scale = isSub ? $$.subX : $$.x;


		return function (d) {
			var index = d.id in indices ? indices[d.id] : 0;

			return d.x || d.x === 0 ? scale(d.x) - offset * (targetsNum / 2 - index) : 0;
		};
	},
	getShapeY: function getShapeY(isSub) {
		var $$ = this;

		return function (d) {
			var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id);

			return scale(d.value);
		};
	},
	getShapeOffset: function getShapeOffset(typeFilter, indices, isSub) {
		var $$ = this,
		    targets = $$.orderTargets($$.filterTargetsToShow($$.data.targets.filter(typeFilter, $$))),
		    targetIds = targets.map(function (t) {
			return t.id;
		});


		return function (d, idx) {
			var scale = isSub ? $$.getSubYScale(d.id) : $$.getYScale(d.id),
			    y0 = scale(0),
			    offset = y0,
			    i = idx;

			return targets.forEach(function (t) {
				var values = $$.isStepType(d) ? $$.convertValuesToStep(t.values) : t.values;

				t.id === d.id || indices[t.id] !== indices[d.id] || targetIds.indexOf(t.id) < targetIds.indexOf(d.id) && ((typeof values[i] === "undefined" || +values[i].x !== +d.x) && (i = -1, values.forEach(function (v, j) {
					v.x === d.x && (i = j);
				})), i in values && values[i].value * d.value >= 0 && (offset += scale(values[i].value) - y0));
			}), offset;
		};
	},
	isWithinShape: function isWithinShape(that, d) {
		var $$ = this,
		    shape = (0, _d.select)(that),
		    isWithin = void 0;

		return $$.isTargetToShow(d.id) ? that.nodeName === "circle" ? isWithin = $$.isStepType(d) ? $$.isWithinStep(that, $$.getYScale(d.id)(d.value)) : $$.isWithinCircle(that, $$.pointSelectR(d) * 1.5) : that.nodeName === "path" && (isWithin = !shape.classed(_classes2.default.bar) || $$.isWithinBar(that)) : isWithin = !1, isWithin;
	},
	getInterpolate: function getInterpolate(d) {
		var $$ = this,
		    interpolation = $$.getInterpolateType(d);


		return {
			"basis": _d.curveBasis,
			"basis-closed": _d.curveBasisClosed,
			"basis-open": _d.curveBasisOpen,
			"bundle": _d.curveBundle,
			"cardinal": _d.curveCardinal,
			"cardinal-closed": _d.curveCardinalClosed,
			"cardinal-open": _d.curveCardinalOpen,
			"catmull-rom": _d.curveCatmullRom,
			"catmull-rom-closed": _d.curveCatmullRomClosed,
			"catmull-rom-open": _d.curveCatmullRomOpen,
			"monotone-x": _d.curveMonotoneX,
			"monotone-y": _d.curveMonotoneY,
			"natural": _d.curveNatural,
			"linear-closed": _d.curveLinearClosed,
			"linear": _d.curveLinear,
			"step": _d.curveStep
		}[interpolation];
	},
	getInterpolateType: function getInterpolateType(d) {
		var $$ = this,
		    interpolation = $$.isInterpolationType($$.config.spline_interpolation_type) ? $$.config.spline_interpolation_type : "cardinal";

		return interpolation = $$.isSplineType(d) ? interpolation : $$.isStepType(d) ? $$.config.line_step_type : "linear", interpolation;
	}
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	initLine: function initLine() {
		var $$ = this;

		$$.main.select("." + _classes2.default.chart).append("g").attr("class", _classes2.default.chartLines);
	},
	updateTargetsForLine: function updateTargetsForLine(targets) {
		var $$ = this,
		    config = $$.config,
		    classChartLine = $$.classChartLine.bind($$),
		    classLines = $$.classLines.bind($$),
		    classAreas = $$.classAreas.bind($$),
		    classCircles = $$.classCircles.bind($$),
		    classFocus = $$.classFocus.bind($$),
		    mainLineUpdate = $$.main.select("." + _classes2.default.chartLines).selectAll("." + _classes2.default.chartLine).data(targets).attr("class", function (d) {
			return classChartLine(d) + classFocus(d);
		}),
		    mainLineEnter = mainLineUpdate.enter().append("g").attr("class", classChartLine).style("opacity", "0").style("pointer-events", "none");


		// Lines for each data
		mainLineEnter.append("g").attr("class", classLines), mainLineEnter.append("g").attr("class", classAreas), mainLineEnter.append("g").attr("class", function (d) {
			return $$.generateClass(_classes2.default.selectedCircles, d.id);
		}), mainLineEnter.append("g").attr("class", classCircles).style("cursor", function (d) {
			return config.data_selection_isselectable(d) ? "pointer" : null;
		}), targets.forEach(function (t) {
			$$.main.selectAll("." + _classes2.default.selectedCircles + $$.getTargetSelectorSuffix(t.id)).selectAll("" + _classes2.default.selectedCircle).each(function (d) {
				d.value = t.values[d.index].value;
			});
		});
	},
	updateLine: function updateLine(durationForExit) {
		var $$ = this;

		$$.mainLine = $$.main.selectAll("." + _classes2.default.lines).selectAll("." + _classes2.default.line).data($$.lineData.bind($$)), $$.mainLine.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $$.mainLine = $$.mainLine.enter().append("path").attr("class", $$.classLine.bind($$)).style("stroke", $$.color).merge($$.mainLine).style("opacity", $$.initialOpacity.bind($$)).style("shape-rendering", function (d) {
			return $$.isStepType(d) ? "crispEdges" : "";
		}).attr("transform", null);
	},
	redrawLine: function redrawLine(drawLine, withTransition) {
		return [(withTransition ? this.mainLine.transition(Math.random().toString()) : this.mainLine).attr("d", drawLine).style("stroke", this.color).style("opacity", "1")];
	},
	generateDrawLine: function generateDrawLine(lineIndices, isSub) {
		var $$ = this,
		    config = $$.config,
		    getPoints = $$.generateGetLinePoints(lineIndices, isSub),
		    yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
		    xValue = function (d) {
			return (isSub ? $$.subxx : $$.xx).call($$, d);
		},
		    yValue = function (d, i) {
			return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)(d.value);
		},
		    line = (0, _d.line)();


		return line = config.axis_rotated ? line.x(yValue).y(xValue) : line.x(xValue).y(yValue), config.line_connectNull || (line = line.defined(function (d) {
			return d.value !== null;
		})), function (d) {
			var x = isSub ? $$.x : $$.subX,
			    y = yScaleGetter.call($$, d.id),
			    values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
			    x0 = 0,
			    y0 = 0,
			    path = void 0;

			return $$.isLineType(d) ? config.data_regions[d.id] ? path = $$.lineWithRegions(values, x, y, config.data_regions[d.id]) : ($$.isStepType(d) && (values = $$.convertValuesToStep(values)), path = line.curve($$.getInterpolate(d))(values)) : (values[0] && (x0 = x(values[0].x), y0 = y(values[0].value)), path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0), path || "M 0 0";
		};
	},
	generateGetLinePoints: function generateGetLinePoints(lineIndices, isSub) {
		// partial duplication of generateGetBarPoints
		var $$ = this,
		    config = $$.config,
		    lineTargetsNum = lineIndices.__max__ + 1,
		    x = $$.getShapeX(0, lineTargetsNum, lineIndices, !!isSub),
		    y = $$.getShapeY(!!isSub),
		    lineOffset = $$.getShapeOffset($$.isLineType, lineIndices, !!isSub),
		    yScale = isSub ? $$.getSubYScale : $$.getYScale;


		return function (d, i) {
			var y0 = yScale.call($$, d.id)(0),
			    offset = lineOffset(d, i) || y0,
			    posX = x(d),
			    posY = y(d); // offset is for stacked area chart


			// fix posY not to overflow opposite quadrant

			// 1 point that marks the line position
			return config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY) && (posY = y0), [[posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)], // needed for compatibility
			[posX, posY - (y0 - offset)], // needed for compatibility
			[posX, posY - (y0 - offset)] // needed for compatibility
			];
		};
	},
	lineWithRegions: function lineWithRegions(d, x, y, _regions) {

		function isWithinRegions(withinX, withinRegions) {
			var idx = void 0;

			for (idx = 0; idx < withinRegions.length; idx++) if (withinRegions[idx].start < withinX && withinX <= withinRegions[idx].end) return !0;
			return !1;
		}

		// Check start/end of regions


		// Define svg generator function for region
		function generateM(points) {
			return "M" + points[0][0] + " " + points[0][1] + " " + points[1][0] + " " + points[1][1];
		}

		var $$ = this,
		    config = $$.config,
		    xOffset = $$.isCategorized() ? 0.5 : 0,
		    regions = [],
		    i = void 0,
		    j = void 0,
		    s = "M",
		    sWithRegion = void 0,
		    xp = void 0,
		    yp = void 0,
		    dx = void 0,
		    dy = void 0,
		    dd = void 0,
		    diff = void 0,
		    diffx2 = void 0;
		if ((0, _util.isDefined)(_regions)) for (i = 0; i < _regions.length; i++) regions[i] = {}, regions[i].start = (0, _util.isUndefined)(_regions[i].start) ? d[0].x : $$.isTimeSeries() ? $$.parseDate(_regions[i].start) : _regions[i].start, regions[i].end = (0, _util.isUndefined)(_regions[i].end) ? d[d.length - 1].x : $$.isTimeSeries() ? $$.parseDate(_regions[i].end) : _regions[i].end;

		// Set scales
		var xValue = config.axis_rotated ? function (dt) {
			return y(dt.value);
		} : function (dt) {
			return x(dt.x);
		},
		    yValue = config.axis_rotated ? function (dt) {
			return x(dt.x);
		} : function (dt) {
			return y(dt.value);
		};

		// Generate
		for (sWithRegion = $$.isTimeSeries() ? function (d0, d1, k, timeseriesDiff) {
			var x0 = d0.x.getTime(),
			    xDiff = d1.x - d0.x,
			    xv0 = new Date(x0 + xDiff * k),
			    xv1 = new Date(x0 + xDiff * (k + timeseriesDiff)),
			    points = void 0;

			return points = config.axis_rotated ? [[y(yp(k)), x(xv0)], [y(yp(k + diff)), x(xv1)]] : [[x(xv0), y(yp(k))], [x(xv1), y(yp(k + diff))]], generateM(points);
		} : function (d0, d1, k, otherDiff) {
			var points = void 0;

			return points = config.axis_rotated ? [[y(yp(k), !0), x(xp(k))], [y(yp(k + otherDiff), !0), x(xp(k + otherDiff))]] : [[x(xp(k), !0), y(yp(k))], [x(xp(k + otherDiff), !0), y(yp(k + otherDiff))]], generateM(points);
		}, i = 0; i < d.length; i++)
		// Draw as normal
		if ((0, _util.isUndefined)(regions) || !isWithinRegions(d[i].x, regions)) s += " " + xValue(d[i]) + " " + yValue(d[i]);else for (xp = $$.getScale(d[i - 1].x + xOffset, d[i].x + xOffset, $$.isTimeSeries()), yp = $$.getScale(d[i - 1].value, d[i].value), dx = x(d[i].x) - x(d[i - 1].x), dy = y(d[i].value) - y(d[i - 1].value), dd = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), diff = 2 / dd, diffx2 = diff * 2, j = diff; j <= 1; j += diffx2) s += sWithRegion(d[i - 1], d[i], j, diff);

		return s;
	},
	updateArea: function updateArea(durationForExit) {
		var $$ = this;

		$$.mainArea = $$.main.selectAll("." + _classes2.default.areas).selectAll("." + _classes2.default.area).data($$.lineData.bind($$)), $$.mainArea.exit().transition().duration(durationForExit).style("opacity", "0").remove(), $$.mainArea = $$.mainArea.enter().append("path").attr("class", $$.classArea.bind($$)).style("fill", $$.color).style("opacity", function () {
			return $$.orgAreaOpacity = (0, _d.select)(this).style("opacity"), "0";
		}).merge($$.mainArea), $$.mainArea.style("opacity", $$.orgAreaOpacity);
	},
	redrawArea: function redrawArea(drawArea, withTransition) {
		return [(withTransition ? this.mainArea.transition(Math.random().toString()) : this.mainArea).attr("d", drawArea).style("fill", this.color).style("opacity", this.orgAreaOpacity)];
	},
	generateDrawArea: function generateDrawArea(areaIndices, isSub) {
		var $$ = this,
		    config = $$.config,
		    getPoints = $$.generateGetAreaPoints(areaIndices, isSub),
		    yScaleGetter = isSub ? $$.getSubYScale : $$.getYScale,
		    xValue = function (d) {
			return (isSub ? $$.subxx : $$.xx).call($$, d);
		},
		    value0 = function (d, i) {
			return config.data_groups.length > 0 ? getPoints(d, i)[0][1] : yScaleGetter.call($$, d.id)($$.getAreaBaseValue(d.id));
		},
		    value1 = function (d, i) {
			return config.data_groups.length > 0 ? getPoints(d, i)[1][1] : yScaleGetter.call($$, d.id)(d.value);
		},
		    area = (0, _d.area)();


		return area = config.axis_rotated ? area.x0(value0).x1(value1).y(xValue) : area.x(xValue).y0(config.area_above ? 0 : value0).y1(value1), config.line_connectNull || (area = area.defined(function (d) {
			return d.value !== null;
		})), function (d) {
			var values = config.line_connectNull ? $$.filterRemoveNull(d.values) : d.values,
			    x0 = 0,
			    y0 = 0,
			    path = void 0;

			return $$.isAreaType(d) ? ($$.isStepType(d) && (values = $$.convertValuesToStep(values)), path = area.curve($$.getInterpolate(d))(values)) : (values[0] && (x0 = $$.x(values[0].x), y0 = $$.getYScale(d.id)(values[0].value)), path = config.axis_rotated ? "M " + y0 + " " + x0 : "M " + x0 + " " + y0), path || "M 0 0";
		};
	},
	getAreaBaseValue: function getAreaBaseValue() {
		return 0;
	},
	generateGetAreaPoints: function generateGetAreaPoints(areaIndices, isSub) {
		// partial duplication of generateGetBarPoints
		var $$ = this,
		    config = $$.config,
		    areaTargetsNum = areaIndices.__max__ + 1,
		    x = $$.getShapeX(0, areaTargetsNum, areaIndices, !!isSub),
		    y = $$.getShapeY(!!isSub),
		    areaOffset = $$.getShapeOffset($$.isAreaType, areaIndices, !!isSub),
		    yScale = isSub ? $$.getSubYScale : $$.getYScale;


		return function (d, i) {
			var y0 = yScale.call($$, d.id)(0),
			    offset = areaOffset(d, i) || y0,
			    posX = x(d),
			    posY = y(d); // offset is for stacked area chart


			// fix posY not to overflow opposite quadrant


			// 1 point that marks the area position
			return config.axis_rotated && (d.value > 0 && posY < y0 || d.value < 0 && y0 < posY) && (posY = y0), [[posX, offset], [posX, posY - (y0 - offset)], [posX, posY - (y0 - offset)], // needed for compatibility
			[posX, offset] // needed for compatibility
			];
		};
	},
	updateCircle: function updateCircle() {
		var $$ = this;

		$$.mainCircle = $$.main.selectAll("." + _classes2.default.circles).selectAll("." + _classes2.default.circle).data($$.lineOrScatterData.bind($$)), $$.mainCircle.exit().remove(), $$.mainCircle = $$.mainCircle.enter().append("circle").attr("class", $$.classCircle.bind($$)).attr("r", $$.pointR.bind($$)).style("fill", $$.color).merge($$.mainCircle).style("opacity", $$.initialOpacityForCircle.bind($$));
	},
	redrawCircle: function redrawCircle(cx, cy, withTransition, flow) {
		var selectedCircles = this.main.selectAll("." + _classes2.default.selectedCircle),
		    mainCircles = void 0;


		if (withTransition) {
			var transitionName = Math.random().toString();

			mainCircles = flow ? this.mainCircle.attr("cx", cx).transition(transitionName).attr("cx", cx).attr("cy", cy).transition(transitionName).style("opacity", this.opacityForCircle.bind(this)).style("fill", this.color) : this.mainCircle.transition(transitionName).attr("cx", cx).attr("cy", cy).transition(transitionName).style("opacity", this.opacityForCircle.bind(this)).style("fill", this.color), selectedCircles = selectedCircles.transition(Math.random().toString());
		} else mainCircles = this.mainCircle.attr("cx", cx).attr("cy", cy).style("opacity", this.opacityForCircle.bind(this)).style("fill", this.color);

		return [mainCircles, selectedCircles.attr("cx", cx).attr("cy", cy)];
	},
	circleX: function circleX(d) {
		return this.config.zoom_enabled && this.zoomScale ? d.x || d.x === 0 ? this.zoomScale(d.x) : null : d.x || d.x === 0 ? this.x(d.x) : null;
	},
	updateCircleY: function updateCircleY() {
		var $$ = this,
		    lineIndices = void 0,
		    getPoints = void 0;
		$$.config.data_groups.length > 0 ? (lineIndices = $$.getShapeIndices($$.isLineType), getPoints = $$.generateGetLinePoints(lineIndices), $$.circleY = function (d, i) {
			return getPoints(d, i)[0][1];
		}) : $$.circleY = function (d) {
			return $$.getYScale(d.id)(d.value);
		};
	},
	getCircles: function getCircles(i, id) {
		var $$ = this,
		    suffix = (0, _util.isValue)(i) ? "-" + i : "";


		return (id ? $$.main.selectAll("." + _classes2.default.circles + $$.getTargetSelectorSuffix(id)) : $$.main).selectAll("." + _classes2.default.circle + suffix);
	},
	expandCircles: function expandCircles(i, id, reset) {
		var $$ = this,
		    r = $$.pointExpandedR.bind($$);
		reset && $$.unexpandCircles(), $$.getCircles(i, id).classed(_classes2.default.EXPANDED, !0).attr("r", r);
	},
	unexpandCircles: function unexpandCircles(i) {
		var $$ = this,
		    r = $$.pointR.bind($$);
		$$.getCircles(i).filter(function () {
			return (0, _d.select)(this).classed(_classes2.default.EXPANDED);
		}).classed(_classes2.default.EXPANDED, !1).attr("r", r);
	},
	pointR: function pointR(d) {
		var $$ = this,
		    config = $$.config;


		return $$.isStepType(d) ? 0 : (0, _util.isFunction)(config.point_r) ? config.point_r(d) : config.point_r;
	},
	pointExpandedR: function pointExpandedR(d) {
		var $$ = this,
		    config = $$.config;


		return config.point_focus_expand_enabled ? config.point_focus_expand_r ? config.point_focus_expand_r : $$.pointR(d) * 1.75 : $$.pointR(d);
	},
	pointSelectR: function pointSelectR(d) {
		var $$ = this,
		    config = $$.config;


		return (0, _util.isFunction)(config.point_select_r) ? config.point_select_r(d) : config.point_select_r ? config.point_select_r : $$.pointR(d) * 4;
	},
	isWithinCircle: function isWithinCircle(that, r) {
		var mouse = (0, _d.mouse)(that),
		    d3This = (0, _d.select)(that),
		    cx = +d3This.attr("cx"),
		    cy = +d3This.attr("cy");


		return Math.sqrt(Math.pow(cx - mouse[0], 2) + Math.pow(cy - mouse[1], 2)) < r;
	},
	isWithinStep: function isWithinStep(that, y) {
		return Math.abs(y - (0, _d.mouse)(that)[1]) < 30;
	}
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.extend)(_ChartInternal2.default.prototype, {
	getCurrentWidth: function getCurrentWidth() {
		var $$ = this,
		    config = $$.config;


		return config.size_width ? config.size_width : $$.getParentWidth();
	},
	getCurrentHeight: function getCurrentHeight() {
		var $$ = this,
		    config = $$.config,
		    h = config.size_height ? config.size_height : $$.getParentHeight();


		return h > 0 ? h : 320 / ($$.hasType("gauge") && !config.gauge_fullCircle ? 2 : 1);
	},
	getCurrentPaddingTop: function getCurrentPaddingTop() {
		var $$ = this,
		    config = $$.config,
		    padding = (0, _util.isValue)(config.padding_top) ? config.padding_top : 0;


		return $$.title && $$.title.node() && (padding += $$.getTitlePadding()), padding;
	},
	getCurrentPaddingBottom: function getCurrentPaddingBottom() {
		var config = this.config;

		return (0, _util.isValue)(config.padding_bottom) ? config.padding_bottom : 0;
	},
	getCurrentPaddingLeft: function getCurrentPaddingLeft(withoutRecompute) {
		var $$ = this,
		    config = $$.config,
		    paddingLeft = void 0;


		return paddingLeft = (0, _util.isValue)(config.padding_left) ? config.padding_left : config.axis_rotated ? config.axis_x_show ? Math.max((0, _util.ceil10)($$.getAxisWidthByAxisId("x", withoutRecompute)), 40) : 1 : !config.axis_y_show || config.axis_y_inner ? $$.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : (0, _util.ceil10)($$.getAxisWidthByAxisId("y", withoutRecompute)), paddingLeft;
	},
	getCurrentPaddingRight: function getCurrentPaddingRight() {
		var $$ = this,
		    config = $$.config,
		    legendWidthOnRight = $$.isLegendRight ? $$.getLegendWidth() + 20 : 0,
		    paddingRight = void 0;


		return paddingRight = (0, _util.isValue)(config.padding_right) ? config.padding_right + 1 : config.axis_rotated ? 10 + legendWidthOnRight : !config.axis_y2_show || config.axis_y2_inner ? 2 + legendWidthOnRight + ($$.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : (0, _util.ceil10)($$.getAxisWidthByAxisId("y2")) + legendWidthOnRight, paddingRight;
	},
	getParentRectValue: function getParentRectValue(key) {
		for (var parent = this.selectChart.node(), v = void 0; parent && parent.tagName !== "BODY";) {
			try {
				v = parent.getBoundingClientRect()[key];
			} catch (e) {
				key === "width" && (v = parent.offsetWidth);
			}

			if (v) break;

			parent = parent.parentNode;
		}

		return v;
	},
	getParentWidth: function getParentWidth() {
		return this.getParentRectValue("width");
	},
	getParentHeight: function getParentHeight() {
		var h = this.selectChart.style("height");

		return h.indexOf("px") > 0 ? +h.replace("px", "") : 0;
	},
	getSvgLeft: function getSvgLeft(withoutRecompute) {
		var $$ = this,
		    config = $$.config,
		    hasLeftAxisRect = config.axis_rotated || !config.axis_rotated && !config.axis_y_inner,
		    leftAxisClass = config.axis_rotated ? _classes2.default.axisX : _classes2.default.axisY,
		    leftAxis = $$.main.select("." + leftAxisClass).node(),
		    svgRect = leftAxis && hasLeftAxisRect ? leftAxis.getBoundingClientRect() : { right: 0 },
		    chartRect = $$.selectChart.node().getBoundingClientRect(),
		    hasArc = $$.hasArcType(),
		    svgLeft = svgRect.right - chartRect.left - (hasArc ? 0 : $$.getCurrentPaddingLeft(withoutRecompute));


		return svgLeft > 0 ? svgLeft : 0;
	},
	getAxisWidthByAxisId: function getAxisWidthByAxisId(id, withoutRecompute) {
		var $$ = this,
		    position = $$.axis.getLabelPositionById(id);


		return $$.axis.getMaxTickWidth(id, withoutRecompute) + (position.isInner ? 20 : 40);
	},
	getHorizontalAxisHeight: function getHorizontalAxisHeight(axisId) {
		var $$ = this,
		    config = $$.config,
		    h = 30;


		// Calculate x axis height when tick rotated
		return axisId !== "x" || config.axis_x_show ? axisId === "x" && config.axis_x_height ? config.axis_x_height : axisId !== "y" || config.axis_y_show ? axisId !== "y2" || config.axis_y2_show ? (axisId === "x" && !config.axis_rotated && config.axis_x_tick_rotate && (h = 30 + $$.axis.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_x_tick_rotate) / 180)), axisId === "y" && config.axis_rotated && config.axis_y_tick_rotate && (h = 30 + $$.axis.getMaxTickWidth(axisId) * Math.cos(Math.PI * (90 - config.axis_y_tick_rotate) / 180)), h + ($$.axis.getLabelPositionById(axisId).isInner ? 0 : 10) + (axisId === "y2" ? -10 : 0)) : $$.rotated_padding_top : !config.legend_show || $$.isLegendRight || $$.isLegendInset ? 1 : 10 : 8;
	},
	getEventRectWidth: function getEventRectWidth() {
		return Math.max(0, this.xAxis.tickInterval());
	}
}); /**
     * Copyright (c) 2017 NAVER Corp.
     * billboard.js project is licensed under the MIT license
     */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Initializes the text
  * @private
  */
	initText: function initText() {
		var $$ = this;

		$$.main.select("." + _classes2.default.chart).append("g").attr("class", _classes2.default.chartTexts), $$.mainText = (0, _d.selectAll)([]);
	},


	/**
  * Update chartText
  * @private
  * @param {Object} $$.data.targets
  */
	updateTargetsForText: function updateTargetsForText(targets) {
		var $$ = this,
		    classChartText = $$.classChartText.bind($$),
		    classTexts = $$.classTexts.bind($$),
		    classFocus = $$.classFocus.bind($$),
		    mainTextUpdate = $$.main.select("." + _classes2.default.chartTexts).selectAll("." + _classes2.default.chartText).data(targets).attr("class", function (d) {
			return classChartText(d) + classFocus(d);
		}),
		    mainTextEnter = mainTextUpdate.enter().append("g").attr("class", classChartText).style("opacity", "0").style("pointer-events", "none");
		mainTextEnter.append("g").attr("class", classTexts);
	},


	/**
  * Update text
  * @private
  * @param {Number} Fade-out transition duration
  */
	updateText: function updateText(durationForExit) {
		var $$ = this,
		    config = $$.config,
		    barOrLineData = $$.barOrLineData.bind($$),
		    classText = $$.classText.bind($$);
		$$.mainText = $$.main.selectAll("." + _classes2.default.texts).selectAll("." + _classes2.default.text).data(barOrLineData), $$.mainText.exit().transition().duration(durationForExit).style("fill-opacity", "0").remove(), $$.mainText = $$.mainText.enter().append("text").attr("class", classText).attr("text-anchor", function (d) {
			return config.axis_rotated ? d.value < 0 ? "end" : "start" : "middle";
		}).style("stroke", "none").style("fill", function (d) {
			return $$.color(d);
		}).style("fill-opacity", "0").merge($$.mainText).text(function (d, i, j) {
			return $$.dataLabelFormat(d.id)(d.value, d.id, i, j);
		});
	},


	/**
  * Redraw chartText
  * @private
  * @param {Number} x Attribute
  * @param {Number} y Attribute
  * @param {Object} options.flow
  * @param {Boolean} indicates transition is enabled
  * @returns {Object} $$.mainText
  */
	redrawText: function redrawText(xForText, yForText, forFlow, withTransition) {
		return [(withTransition ? this.mainText.transition() : this.mainText).attr("x", xForText).attr("y", yForText).style("fill", this.color).style("fill-opacity", forFlow ? 0 : this.opacityForText.bind(this))];
	},


	/**
  * Gets the getBoundingClientRect value of the element
  * @private
  * @param {String} text
  * @param {String} class
  * @param {HTMLElement} element
  * @returns {Object} value of element.getBoundingClientRect()
  */
	getTextRect: function getTextRect(text, cls, element) {
		var dummy = (0, _d.select)("body").append("div").classed("bb", !0),
		    svg = dummy.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0px").style("left", "0px"),
		    font = (0, _d.select)(element).style("font"),
		    rect = void 0;

		return svg.selectAll(".dummy").data([text]).enter().append("text").classed(cls ? cls : "", !0).style("font", font).text(text).each(function () {
			rect = this.getBoundingClientRect();
		}), dummy.remove(), rect;
	},


	/**
  * Gets the x or y coordinate of the text
  * @private
  * @param {Object} area Indices
  * @param {Object} bar Indices
  * @param {Object} line Indices
  * @param {Boolean} whether or not to x
  * @returns {Number} coordinates
  */
	generateXYForText: function generateXYForText(areaIndices, barIndices, lineIndices, forX) {
		var $$ = this,
		    getAreaPoints = $$.generateGetAreaPoints(areaIndices, !1),
		    getBarPoints = $$.generateGetBarPoints(barIndices, !1),
		    getLinePoints = $$.generateGetLinePoints(lineIndices, !1),
		    getter = forX ? $$.getXForText : $$.getYForText;


		return function (d, i) {
			var getPoints = $$.isBarType(d) ? getBarPoints : getLinePoints;

			return getPoints = $$.isAreaType(d) ? getAreaPoints : getPoints, getter.call($$, getPoints(d, i), d, this);
		};
	},


	/**
  * Gets the x coordinate of the text
  * @private
  * @param {Object} points
  * @param {Object} data
  * @param {HTMLElement} element
  * @returns {Number} x coordinate
  */
	getXForText: function getXForText(points, d, textElement) {
		var $$ = this,
		    box = textElement.getBoundingClientRect(),
		    xPos = void 0,
		    padding = void 0;

		return $$.config.axis_rotated ? (padding = $$.isBarType(d) ? 4 : 6, xPos = points[2][1] + padding * (d.value < 0 ? -1 : 1)) : xPos = $$.hasType("bar") ? (points[2][0] + points[0][0]) / 2 : points[0][0], d.value === null && (xPos > $$.width ? xPos = $$.width - box.width : xPos < 0 && (xPos = 4)), xPos;
	},


	/**
  * Gets the y coordinate of the text
  * @private
  * @param {Object} points
  * @param {Object} data
  * @param {HTMLElement} element
  * @returns {Number} y coordinate
  */
	getYForText: function getYForText(points, d, textElement) {
		var $$ = this,
		    box = textElement.getBoundingClientRect(),
		    yPos = void 0;

		return $$.config.axis_rotated ? yPos = (points[0][0] + points[2][0] + box.height * 0.6) / 2 : (yPos = points[2][1], d.value < 0 || d.value === 0 && !$$.hasPositiveValue ? (yPos += box.height, $$.isBarType(d) && $$.isSafari() ? yPos -= 3 : !$$.isBarType(d) && $$.isChrome() && (yPos += 3)) : yPos += $$.isBarType(d) ? -3 : -6), d.value !== null || $$.config.axis_rotated || (yPos < box.height ? yPos = box.height : yPos > this.height && (yPos = this.height - 4)), yPos;
	}
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Initializes the title
  * @private
  */
	initTitle: function initTitle() {
		var $$ = this;

		$$.title = $$.svg.append("text").text($$.config.title_text).attr("class", $$.CLASS.title);
	},


	/**
  * Redraw title
  * @private
  */
	redrawTitle: function redrawTitle() {
		var $$ = this;

		$$.title.attr("x", $$.xForTitle.bind($$)).attr("y", $$.yForTitle.bind($$));
	},


	/**
  * Returns the x attribute value of the title
  * @private
  * @returns {Number} x attribute value
  */
	xForTitle: function xForTitle() {
		var $$ = this,
		    config = $$.config,
		    position = config.title_position || "left",
		    x = void 0;


		return x = position.indexOf("right") >= 0 ? $$.currentWidth - $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).width - config.title_padding.right : position.indexOf("center") >= 0 ? ($$.currentWidth - $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).width) / 2 : config.title_padding.left, x;
	},


	/**
  * Returns the y attribute value of the title
  * @private
  * @returns {Number} y attribute value
  */
	yForTitle: function yForTitle() {
		var $$ = this;

		return $$.config.title_padding.top + $$.getTextRect($$.title.node().textContent, $$.CLASS.title, $$.title.node()).height;
	},


	/**
  * Get title padding
  * @private
  * @returns {Number} padding value
  */
	getTitlePadding: function getTitlePadding() {
		var $$ = this;

		return $$.yForTitle() + $$.config.title_padding.bottom;
	}
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _d = __webpack_require__(2),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _classes = __webpack_require__(3),
    _classes2 = _interopRequireDefault(_classes),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	/**
  * Initializes the tooltip
  * @private
  */
	initTooltip: function initTooltip() {
		var $$ = this,
		    config = $$.config,
		    i = void 0;


		// Show tooltip if needed
		if ($$.tooltip = $$.selectChart.style("position", "relative").append("div").attr("class", _classes2.default.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none"), config.tooltip_init_show) {
			if ($$.isTimeSeries() && (0, _util.isString)(config.tooltip_init_x)) {

				for (config.tooltip_init_x = $$.parseDate(config.tooltip_init_x), i = 0; i < $$.data.targets[0].values.length && $$.data.targets[0].values[i].x - config.tooltip_init_x !== 0; i++);

				config.tooltip_init_x = i;
			}

			$$.tooltip.html(config.tooltip_contents.call($$, $$.data.targets.map(function (d) {
				return $$.addName(d.values[config.tooltip_init_x]);
			}), $$.axis.getXAxisTickFormat(), $$.getYFormat($$.hasArcType()), $$.color)), $$.tooltip.style("top", config.tooltip_init_position.top).style("left", config.tooltip_init_position.left).style("display", "block");
		}
	},

	/**
  * Returns the tooltip content(HTML string)
  * @private
  * @param {Object} data
  * @param {Function} default title format
  * @param {Function} default format for each data value in the tooltip.
  * @param {Object} $$.color(generateColor())
  * @returns {string} html
  */
	getTooltipContent: function getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) {
		var $$ = this,
		    config = $$.config,
		    titleFormat = config.tooltip_format_title || defaultTitleFormat,
		    nameFormat = config.tooltip_format_name || function (name) {
			return name;
		},
		    valueFormat = config.tooltip_format_value || defaultValueFormat,
		    orderAsc = $$.isOrderAsc(),
		    text = void 0,
		    i = void 0,
		    title = void 0,
		    value = void 0,
		    name = void 0,
		    bgcolor = void 0;


		if (config.data_groups.length === 0) d.sort(function (a, b) {
				var v1 = a ? a.value : null,
				    v2 = b ? b.value : null;


				return orderAsc ? v1 - v2 : v2 - v1;
			});else {
			var ids = $$.orderTargets($$.data.targets).map(function (i2) {
				return i2.id;
			});

			d.sort(function (a, b) {
				var v1 = a ? a.value : null,
				    v2 = b ? b.value : null;

				return v1 > 0 && v2 > 0 && (v1 = a ? ids.indexOf(a.id) : null, v2 = b ? ids.indexOf(b.id) : null), orderAsc ? v1 - v2 : v2 - v1;
			});
		}

		for (i = 0; i < d.length; i++) if (d[i] && (d[i].value || d[i].value === 0) && (text || (title = (0, _util.sanitise)(titleFormat ? titleFormat(d[i].x) : d[i].x), text = title || title === 0 ? "<tr><th colspan=\"2\">" + title + "</th></tr>" : "", text = "<table class=\"" + $$.CLASS.tooltip + "\">" + text), value = (0, _util.sanitise)(valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index, d)), value !== undefined)) {
			// Skip elements when their name is set to null
			if (d[i].name === null) continue;
			name = (0, _util.sanitise)(nameFormat(d[i].name, d[i].ratio, d[i].id, d[i].index)), bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id), text += "<tr class=\"" + $$.CLASS.tooltipName + "-" + $$.getTargetSelectorSuffix(d[i].id) + "\">" + ("<td class=\"name\"><span style=\"background-color:" + bgcolor + "\"></span>" + name + "</td>") + ("<td class=\"value\">" + value + "</td></tr>");
		}

		return text + "</table>";
	},

	/**
  * Returns the position of the tooltip
  * @private
  * @param {Object} data
  * @param {String} width
  * @param {String} hHeight
  * @param {HTMLElement} element
  * @returns {Object} top, left value
  */
	tooltipPosition: function tooltipPosition(dataToShow, tWidth, tHeight, element) {
		var $$ = this,
		    config = $$.config,
		    forArc = $$.hasArcType(),
		    isTouch = $$.inputType === "touch",
		    mouse = (0, _d.mouse)(element),
		    svgLeft = void 0,
		    tooltipLeft = void 0,
		    tooltipRight = void 0,
		    tooltipTop = void 0,
		    chartRight = void 0;

		// Determin tooltip position


		return forArc ? (tooltipLeft = isTouch ? mouse[0] : ($$.width - ($$.isLegendRight ? $$.getLegendWidth() : 0)) / 2 + mouse[0], tooltipTop = isTouch ? mouse[1] + 20 : $$.height / 2 + mouse[1] + 20) : (svgLeft = $$.getSvgLeft(!0), config.axis_rotated ? (tooltipLeft = svgLeft + mouse[0] + 100, tooltipRight = tooltipLeft + tWidth, chartRight = $$.currentWidth - $$.getCurrentPaddingRight(), tooltipTop = $$.x(dataToShow[0].x) + 20) : (tooltipLeft = svgLeft + $$.getCurrentPaddingLeft(!0) + $$.x(dataToShow[0].x) + 20, tooltipRight = tooltipLeft + tWidth, chartRight = svgLeft + $$.currentWidth - $$.getCurrentPaddingRight(), tooltipTop = mouse[1] + 15), tooltipRight > chartRight && (tooltipLeft -= tooltipRight - chartRight + 20), tooltipTop + tHeight > $$.currentHeight && (tooltipTop -= tHeight + 30)), tooltipTop < 0 && (tooltipTop = 0), {
			top: tooltipTop,
			left: tooltipLeft
		};
	},

	/**
  * Show the tooltip
  * @private
  * @param {Object} data
  * @param {HTMLElement} element
  */
	showTooltip: function showTooltip(selectedData, element) {
		var $$ = this,
		    config = $$.config,
		    forArc = $$.hasArcType(),
		    dataToShow = selectedData.filter(function (d) {
			return d && (0, _util.isValue)(d.value);
		}),
		    positionFunction = config.tooltip_position || $$.tooltipPosition;


		if (dataToShow.length !== 0 && config.tooltip_show) {
				$$.tooltip.html(config.tooltip_contents.call($$, selectedData, $$.axis.getXAxisTickFormat(), $$.getYFormat(forArc), $$.color)).style("display", "block");


				// Get tooltip dimensions
				var tWidth = $$.tooltip.property("offsetWidth"),
				    tHeight = $$.tooltip.property("offsetHeight"),
				    position = positionFunction.call(this, dataToShow, tWidth, tHeight, element);
				$$.tooltip.style("top", position.top + "px").style("left", position.left + "px");
			}

		// Set tooltip
	},

	/**
  * Hide the tooltip
  * @private
  */
	hideTooltip: function hideTooltip() {
		this.tooltip.style("display", "none");
	}
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	setTargetType: function setTargetType(targetIds, type) {
		var $$ = this,
		    config = $$.config;
		$$.mapToTargetIds(targetIds).forEach(function (id) {
			$$.withoutFadeIn[id] = type === config.data_types[id], config.data_types[id] = type;
		}), targetIds || (config.data_type = type);
	},
	hasType: function hasType(type, targetsValue) {
		var $$ = this,
		    types = $$.config.data_types,
		    targets = targetsValue || $$.data.targets,
		    has = !1;


		return targets && targets.length ? targets.forEach(function (target) {
			var t = types[target.id];

			(t && t.indexOf(type) >= 0 || !t && type === "line") && (has = !0);
		}) : Object.keys(types).length ? Object.keys(types).forEach(function (id) {
			types[id] === type && (has = !0);
		}) : has = $$.config.data_type === type, has;
	},
	hasArcType: function hasArcType(targets) {
		return this.hasType("pie", targets) || this.hasType("donut", targets) || this.hasType("gauge", targets);
	},
	isLineType: function isLineType(d) {
		var config = this.config,
		    id = (0, _util.isString)(d) ? d : d.id;


		return !config.data_types[id] || ["line", "spline", "area", "area-spline", "step", "area-step"].indexOf(config.data_types[id]) >= 0;
	},
	isStepType: function isStepType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return ["step", "area-step"].indexOf(this.config.data_types[id]) >= 0;
	},
	isSplineType: function isSplineType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return ["spline", "area-spline"].indexOf(this.config.data_types[id]) >= 0;
	},
	isAreaType: function isAreaType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return ["area", "area-spline", "area-step"].indexOf(this.config.data_types[id]) >= 0;
	},
	isBarType: function isBarType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return this.config.data_types[id] === "bar";
	},
	isScatterType: function isScatterType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return this.config.data_types[id] === "scatter";
	},
	isPieType: function isPieType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return this.config.data_types[id] === "pie";
	},
	isGaugeType: function isGaugeType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return this.config.data_types[id] === "gauge";
	},
	isDonutType: function isDonutType(d) {
		var id = (0, _util.isString)(d) ? d : d.id;

		return this.config.data_types[id] === "donut";
	},
	isArcType: function isArcType(d) {
		return this.isPieType(d) || this.isDonutType(d) || this.isGaugeType(d);
	},
	lineData: function lineData(d) {
		return this.isLineType(d) ? [d] : [];
	},
	arcData: function arcData(d) {
		return this.isArcType(d.data) ? [d] : [];
	},
	barData: function barData(d) {
		return this.isBarType(d) ? d.values : [];
	},
	lineOrScatterData: function lineOrScatterData(d) {
		return this.isLineType(d) || this.isScatterType(d) ? d.values : [];
	},
	barOrLineData: function barOrLineData(d) {
		return this.isBarType(d) || this.isLineType(d) ? d.values : [];
	},


	// https://github.com/d3/d3-shape#curves
	isInterpolationType: function isInterpolationType(type) {
		return ["basis", "basis-closed", "basis-open", "bundle", "cardinal", "cardinal-closed", "cardinal-open", "catmull-rom", "catmull-rom-closed", "catmull-rom-open", "linear", "linear-closed", "monotone-x", "monotone-y", "natural"].indexOf(type) >= 0;
	}
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
(0, _util.extend)(_ChartInternal2.default.prototype, {
	isSafari: function isSafari() {
		var ua = window.navigator.userAgent;

		return ua.indexOf("Safari") >= 0 && ua.indexOf("Chrome") < 0;
	},
	isChrome: function isChrome() {
		return window.navigator.userAgent.indexOf("Chrome") >= 0;
	}
});

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;

var _classCallCheck2 = __webpack_require__(6),
    _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * Class to set options on generating chart.
 * - It's instantiated internally, not exposed for public.
 * @class Options
 * @see {@link bb.generate} to use these options on generating the chart
 */
var Options = function Options() {
			(0, _classCallCheck3.default)(this, Options), this.value = {
						/**
       * bindto The CSS selector or the element which the chart will be set to. D3 selection object can be specified. If other chart is set already, it will be replaced with the new one (only one chart can be set in one element).<br><br>
       * If this option is not specified, the chart will be generated but not be set. Instead, we can access the element by chart.element and set it by ourselves.<br>
       * > <b>NOTE:</b> When chart is not binded, bb starts observing if chart.element is binded by MutationObserver. In this case, polyfill is required in IE9 and IE10 becuase they do not support MutationObserver. On the other hand, if chart always will be binded, polyfill will not be required because MutationObserver will never be called.
       * @name bindto
       * @memberof Options
       * @type {String}
       * @default #chart
       * @example
       * bindto: "#myContainer"
       *
       * // or element
       * bindto: document.getElementById("myContainer")
       *
       * // or D3 selection object
       * bindto: d3.select("#myContainer")
       */
						bindto: "#chart",

						/**
       * Set svg element's class name
       * @name svg
       * @memberof Options
       * @type {Object}
       * @property {String} [svg.classname] class name for svg element
       * @example
       * svg: {
                *   classname: "test_class"
       * }
       */
						svg_classname: undefined,

						/**
       * The desired size of the chart element.
       * If value is not specified, the width of the chart will be calculated by the size of the parent element it's appended to.
       * @name size
       * @memberof Options
       * @type {Object}
       * @property {Number} [size.width] width of the chart element
       * @property {Number} [size.height] height of the chart element
       * @example
       * size: {
                *   width: 640,
                *   height: 480
       * }
       */
						size_width: undefined,
						size_height: undefined,

						/**
       * The padding of the chart element.
       * @name padding
       * @memberof Options
       * @type {Object}
       * @property {Number} [padding.top] padding on the top of chart
       * @property {Number} [padding.right] padding on the right of chart
       * @property {Number} [padding.bottom] padding on the bottom of chart
       * @property {Number} [padding.left] padding on the left of chart
       * @example
       * padding: {
                *   top: 20,
                *   right: 20,
                *   bottom: 20,
                *   left: 20
       * }
       */
						padding_left: undefined,
						padding_right: undefined,
						padding_top: undefined,
						padding_bottom: undefined,

						/**
       * Set chart resize options
       * @name resize
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [resize.auto=true] Set chart resize automatically on viewport changes.
       * @example
       *  resize: {
       *      auto: false
       *  }
       */
						resize_auto: !0,

						/**
       * Set zoom options
       * @name zoom
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [zoom.enabled=false] Enable zooming.
       * @property {Boolean} [zoom.rescale=false] Enable to rescale after zooming.<br>
       *  If true set, y domain will be updated according to the zoomed region.
       * @property {Array} [zoom.extent=[1, 10]] Change zoom extent.
       * @property {Function} [zoom.onzoom=function(){}] Set callback that is called when the chart is zooming.<br>
       *  Specified function receives the zoomed domain.
       * @property {Function} [zoom.onzoomstart=function(){}] Set callback that is called when zooming starts.<br>
       *  Specified function receives the zoom event.
       * @property {Function} [zoom.onzoomend=function(){}] Set callback that is called when zooming ends.<br>
       *  Specified function receives the zoomed domain.
       * @example
       *  zoom: {
       *      enabled: true,
       *      rescale: true,
       *      extent: [1, 100]  // enable more zooming
       *      onzoom: function(domain) { ... },
       *      onzoomstart: function(event) { ... },
       *      onzoomend: function(domain) { ... }
       *  }
       */
						zoom_enabled: !1,
						zoom_extent: undefined,
						zoom_privileged: !1,
						zoom_rescale: !1,
						zoom_onzoom: function zoom_onzoom() {},
						zoom_onzoomstart: function zoom_onzoomstart() {},
						zoom_onzoomend: function zoom_onzoomend() {},
						zoom_x_min: undefined,
						zoom_x_max: undefined,

						/**
       * Interaction options
       * @name interaction
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [interaction.enabled=true] Indicate if the chart should have interactions.<br>
       *     If `false` is set, all of interactions (showing/hiding tooltip, selection, mouse events, etc) will be disabled.
       * @property {Boolean} [interaction.brighten=true]
       * @property {Boolean} [interaction.inputType.mouse=true] enable or disable mouse interaction
       * @property {Boolean} [interaction.inputType.touch=true] enable or disable  touch interaction
       * @example
       * interaction: {
                *    enabled: false,
                *    inputType: {
                *        mouse: true,
                *        touch: false
                *    }
       * }
       */
						interaction_brighten: !0,
						interaction_enabled: !0,
						interaction_inputType_mouse: !0,
						interaction_inputType_touch: !0,

						/**
       * Set a callback to execute when mouse/touch enters the chart.
       * @name onover
       * @memberof Options
       * @type {Function}
       * @default function(){}
       * @example
       * onover: function() {
       *   ...
       * }
       */
						onover: function onover() {},

						/**
       * Set a callback to execute when mouse/touch leaves the chart.
       * @name onout
       * @memberof Options
       * @type {Function}
       * @default function(){}
       * @example
       * onout: function() {
       *   ...
       * }
       */
						onout: function onout() {},

						/**
       * Set a callback to execute when user resizes the screen.
       * @name onresize
       * @memberof Options
       * @type {Function}
       * @default function(){}
       * @example
       * onresize: function() {
       *   ...
       * }
       */
						onresize: function onresize() {},

						/**
       * SSet a callback to execute when screen resize finished.
       * @name onresized
       * @memberof Options
       * @type {Function}
       * @default function(){}
       * @example
       * onresized: function() {
       *   ...
       * }
       */
						onresized: function onresized() {},

						/**
       * Set a callback to execute when the chart is initialized.
       * @name oninit
       * @memberof Options
       * @type {Function}
       * @default function(){}
       * @example
       * oninit: function() {
       *   ...
       * }
       */
						oninit: function oninit() {},

						/**
       * Set a callback which is executed when the chart is rendered. Basically, this callback will be called in each time when the chart is redrawed.
       * @name onrendered
       * @memberof Options
       * @type {Function}
       * @default function(){}
       * @example
       * onrendered: function() {
       *   ...
       * }
       */
						onrendered: function onrendered() {},

						/**
       * Set duration of transition (in milliseconds) for chart animation.<br><br>
       * <b>NOTE:</b>If `0 `or `null` set, transition will be skipped. So, this makes initial rendering faster especially in case you have a lot of data.
       * @name transition
       * @memberof Options
       * @type {Object}
       * @property {Number} [transition.duration=350] duration in milliseconds
       * @example
       * transition: {
       *  duration: 500
       * }
       */
						transition_duration: 350,

						/**
       * Specify the key of x values in the data.<br><br>
       * We can show the data with non-index x values by this option. This option is required when the type of x axis is timeseries. If this option is set on category axis, the values of the data on the key will be used for category names.
       * @name data:x
       * @memberof Options
       * @type {String}
       * @default undefined
       * @example
       * data: {
                *   x: "date"
       * }
       */
						data_x: undefined,

						/**
       * Specify the keys of the x values for each data.<br><br>
       * This option can be used if we want to show the data that has different x values.
       * @name data:xs
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
                *   xs: {
                *    data1: "x1",
                *    data2: "x2"
                *   }
       * }
       */
						data_xs: {},

						/**
       * Set a format to parse string specifed as x.
       * @name data:xFormat
       * @memberof Options
       * @type {String}
       * @default %Y-%m-%d
       * @example
       * data: {
                *   xFormat: "%Y-%m-%d %H:%M:%S"
       * }
       * @see [D3's time specifier](https://npm.runkit.com/d3-time-format)
       */
						data_xFormat: "%Y-%m-%d",

						/**
       * Set localtime format to parse x axis.
       * @name data:xLocaltime
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * data: {
                *   xLocaltime: false
       * }
       */
						data_xLocaltime: !0,

						/**
       * Sort on x axis.
       * @name data:xSort
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * data: {
                *   xSort: false
       * }
       */
						data_xSort: !0,
						data_idConverter: function data_idConverter(id) {
									return id;
						},

						/**
       * Set custom data name.
       * @name data:names
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
                *   names: {
                *     data1: "Data Name 1",
                *     data2: "Data Name 2"
                *   }
       * }
       */
						data_names: {},

						/**
       * Set custom data class.<br><br>
       * If this option is specified, the element g for the data has an additional class that has the prefix 'bb-target-' (eg. bb-target-additional-data1-class).
       * @name data:classes
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
                *   classes: {
                *     data1: "additional-data1-class",
                *     data2: "additional-data2-class"
                *   }
       * }
       */
						data_classes: {},

						/**
       * Set groups for the data for stacking.
       * @name data:groups
       * @memberof Options
       * @type {Array}
       * @default []
       * @example
       * data: {
                *   groups: [
                *     ["data1", "data2"],
                *     ["data3"]
                *   ]
       * }
       */
						data_groups: [],

						/**
       * Set y axis the data related to. y and y2 can be used.
       * @name data:axes
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
       * axes: {
       *     data1: "y",
       *     data2: "y2"
       *   }
       * }
       */
						data_axes: {},

						/**
       * Set chart type at once.<br><br>
       * If this option is specified, the type will be applied to every data. This setting can be overwritten by data.types.<br><br>
       * <b>Available Values:</b>
       * - line
       * - spline
       * - step
       * - area
       * - area-spline
       * - area-step
       * - bar
       * - scatter
       * - pie
       * - donut
       * - gauge
       * @name data:type
       * @memberof Options
       * @type {String}
       * @default line
       * @example
       * data: {
       *  type: "bar"
       * }
       */
						data_type: undefined,

						/**
       * Set chart type for each data.<br>
       * This setting overwrites data.type setting.
       * @name data:types
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
       *   types: {
       *     data1: "bar",
       *     data2: "spline"
       *   }
       * }
       */
						data_types: {},

						/**
       * Show labels on each data points.
       * @name data:labels
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * data: {
       *   labels: true
       * }
       */
						/**
       * Set formatter function for data labels.<br>
       * The formatter function receives 4 arguments such as v, id, i, j and it must return a string that will be shown as the label. The arguments are:<br>
       *  - `v` is the value of the data point where the label is shown.
       *  - `id` is the id of the data where the label is shown.
       *  - `i` is the index of the data point where the label is shown.
       *  - `j` is the sub index of the data point where the label is shown.<br><br>
       * Formatter function can be defined for each data by specifying as an object and D3 formatter function can be set (ex. d3.format('$'))
       * @name data:labels:format
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
       *   labels: {
       *     format: function(v, id, i, j) { ... }
       *     // it's possible to set for each data
       *     //format: {
       *     //    data1: function(v, id, i, j) { ... },
       *     //    ...
       *     //}
       *   }
       * }
       */
						data_labels: {},

						/**
       *  This option changes the order of stacking the data and pieces of pie/donut. If `null` specified, it will be the order the data loaded. If function specified, it will be used to sort the data and it will recieve the data as argument.<br><br>
       *  <b>Available Values:</b>
       *  - desc
       *  - asc
       *  - function(data1, data2) { ... }
       *  - null
       * @name data:order
       * @memberof Options
       * @type {String|Function}
       * @default desc
       * @example
       * data: {
       *   lorder: "asc"
       * }
       */
						data_order: "desc",

						/**
       * Define regions for each data.<br><br>
       * The values must be an array for each data and it should include an object that has start, end, style. If start is not set, the start will be the first data point. If end is not set, the end will be the last data point.<br>
       * Currently this option supports only line chart and dashed style. If this option specified, the line will be dashed only in the regions.
       * @name data:regions
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
       *   regions: {
       *     data1: [{
       *         "start": 1,
       *         "end": 2,
       *         "style": "dashed"
       *     }, {
       *         "start":3
       *     }],
       *     ...
       *   }
       * }
       */
						data_regions: {},

						/**
       * Set color converter function.<br><br>
       * This option should a function and the specified function receives color (e.g. '#ff0000') and d that has data parameters like id, value, index, etc. And it must return a string that represents color (e.g. '#00ff00').
       * @name data:color
       * @memberof Options
       * @type {Function}
       * @default undefined
       * @example
       * data: {
       *   color: function(color, d) { ... }
       * }
       */
						data_color: undefined,

						/**
       * Set color for each data.
       * @name data:colors
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * data: {
       *   colors: {
       *     data1: "#ff0000",
       *     ...
       *   }
       * }
       */
						data_colors: {},

						/**
       * Hide each data when the chart appears.<br><br>
       * If true specified, all of data will be hidden. If multiple ids specified as an array, those will be hidden.
       * @name data:hide
       * @memberof Options
       * @type {Boolean|Array}
       * @default false
       * @example
       * data: {
       *   // all of data will be hidden
       *   hide: true
       *   // specified data will be hidden
       *   hide: ["data1", ...]
       * }
       */
						data_hide: !1,
						data_filter: undefined,

						/**
       * Set data selection enabled.<br><br>
       * If this option is set true, we can select the data points and get/set its state of selection by API (e.g. select, unselect, selected).
       * @name data:selection:enabled
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * data: {
       *     selection: {
       *       enabled: true
       *   }
       * }
       */
						data_selection_enabled: !1,

						/**
       * Set grouped selection enabled.<br><br>
       * If this option set true, multiple data points that have same x value will be selected by one selection.
       * @name data:selection:grouped
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * data: {
       *     selection: {
       *       grouped: true
       *   }
       * }
       */
						data_selection_grouped: !1,

						/**
       * Set a callback for each data point to determine if it's selectable or not.<br><br>
       * The callback will receive d as an argument and it has some parameters like id, value, index. This callback should return boolean.
       * @name data:selection:isselectable
       * @memberof Options
       * @type {Function}
       * @default function() { return true; }
       * @example
       * data: {
       *     selection: {
       *       isselectable: function(d) { ... }
       *   }
       * }
       */
						data_selection_isselectable: function data_selection_isselectable() {
									return !0;
						},

						/**
       * Set multiple data points selection enabled.<br><br>
       * If this option set true, multile data points can have the selected state at the same time. If false set, only one data point can have the selected state and the others will be unselected when the new data point is selected.
       * @name data:selection:multiple
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * data: {
       *     selection: {
       *       multiple: false
       *   }
       * }
       */
						data_selection_multiple: !0,

						/**
       * Enable to select data points by dragging.<br><br>
       * If this option set true, data points can be selected by dragging.
       * <b>Note:</b> If this option set true, scrolling on the chart will be disabled because dragging event will handle the event.
       * @name data:selection:draggable
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * data: {
       *     selection: {
       *       draggable: true
       *   }
       * }
       */
						data_selection_draggable: !1,

						/**
       * Set a callback for click event on each data point.<br><br>
       * This callback will be called when each data point clicked and will receive d and element as the arguments. d is the data clicked and element is the element clicked. In this callback, this will be the Chart object.
       * @name data:onclick
       * @memberof Options
       * @type {Function}
       * @default function() {}
       * @example
       * data: {
       *     onclick: function(d, element) { ... }
       * }
       */
						data_onclick: function data_onclick() {},

						/**
       * Set a callback for mouse/touch over event on each data point.<br><br>
       * This callback will be called when mouse cursor or via touch moves onto each data point and will receive d as the argument. d is the data where mouse cursor moves onto. In this callback, this will be the Chart object.
       * @name data:onover
       * @memberof Options
       * @type {Function}
       * @default function() {}
       * @example
       * data: {
       *     onover: function(d) { ... }
       * }
       */
						data_onover: function data_onover() {},

						/**
       * Set a callback for mouse/touch out event on each data point.<br><br>
       * This callback will be called when mouse cursor or via touch moves out each data point and will receive d as the argument. d is the data where mouse cursor moves out. In this callback, this will be the Chart object.
       * @name data:onout
       * @memberof Options
       * @type {Function}
       * @default function() {}
       * @example
       * data: {
       *     onout: function(d) { ... }
       * }
       */
						data_onout: function data_onout() {},

						/**
       * Set a callback for on data selection.
       * @name data:onselected
       * @memberof Options
       * @type {Function}
       * @default function() {}
       * @example
       * data: {
       *     onselected: function(d) { ... }
       * }
       */
						data_onselected: function data_onselected() {},

						/**
       * Set a callback for on data un-selection.
       * @name data:onunselected
       * @memberof Options
       * @type {Function}
       * @default function() {}
       * @example
       * data: {
       *     onunselected: function(d) { ... }
       * }
       */
						data_onunselected: function data_onunselected() {},
						data_url: undefined,
						data_headers: undefined,
						data_json: undefined,
						data_rows: undefined,
						data_columns: undefined,
						data_mimeType: undefined,
						data_keys: undefined,

						/**
       * Set text displayed when empty data.
       * @name data:empty:label:text
       * @memberof Options
       * @type {String}
       * @default ""
       * @example
       * data: {
       *   empty: {
       *     label: {
       *       text: "No Data"
       *     }
       *   }
       * }
       */
						data_empty_label_text: "",

						/**
       * Set subchart options
       * @name subchart
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [subchart.show=false] Show sub chart on the bottom of the chart.
       * @property {Boolean} [subchart.size.height] Change the height of the subchart.
       * @property {Boolean} [subchart.onbrush] Set callback for brush event.<br>
       *  Specified function receives the current zoomed x domain.
       * @example
       *  subchart: {
       *      show: true,
       *      size: {
       *          height: 20
       *      },
       *      onbrush: function(domain) { ... }
       *  }
       */
						subchart_show: !1,
						subchart_size_height: 60,
						subchart_axis_x_show: !0,
						subchart_onbrush: function subchart_onbrush() {},

						/**
       * Set color of the data values
       * @name color
       * @memberof Options
       * @type {Object}
       * @property {Array} [color.pattern] custom color pattern
       * @property {Object} [color.threshold] color threshold
       * @property {String} [color.threshold.unit] unit
       * @property {Array} [color.threshold.value] value
       * @property {Array} [color.threshold.max=100] max value
       * @example
       *  color: {
       *      pattern: ["#1f77b4", "#aec7e8", ...]
       *  }
       */
						color_pattern: [],
						color_threshold: {},

						/**
       * Legend options
       * @name legend
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [legend.show=true] Show or hide legend.
       * @property {Boolean} [legend.hide=false] Hide legend
       *  If true given, all legend will be hidden. If string or array given, only the legend that has the id will be hidden.
       * @property {String} [legend.position=bottom] Change the position of legend.<br>
       *  Available values are: `bottom`, `right` and `inset` are supported.
       *  @property {Object} [legend.inset={anchor: 'top-left',x: 10,y: 0,step: undefined}] Change inset legend attributes.<br>
       *      This option accepts object that has the keys anchor, x, y and step.
       *      anchor decides the position of the legend. These anchors are available:
       *      - top-left
       *      - top-right
       *      - bottom-left
       *      - bottom-right
       *  x and y set the position of the legend based on the anchor.<br>
       *  step defines the max step the lagend has (e.g. If 2 set and legend has 3 legend item, the legend 2 columns).
       * @property {Function} [legend.item.onclick=undefined] Set click event handler to the legend item.
       * @property {Function} [legend.item.onover=undefined] Set mouse/touch over event handler to the legend item.
       * @property {Function} [legend.item.onout=undefined] Set mouse/touch out event handler to the legend item.
       * @example
       *  legend: {
       *      show: true,
       *      hide: true,
       *      //or hide: "data1"
                *      //or hide: ["data1", "data2"]
                *      position: "bottom",  // bottom, right, inset
       *      inset: {
       *          anchor: "top-right"  // top-left, top-right, bottom-left, bottom-right
       *          x: 20,
       *          y: 10,
       *          step: 2
       *      },
       *      onclick: function(id) { ... },
       *      onover: function(id) { ... },
       *      onout: function(id) { ... }
       *  }
       */
						legend_show: !0,
						legend_hide: !1,
						legend_position: "bottom",
						legend_inset_anchor: "top-left",
						legend_inset_x: 10,
						legend_inset_y: 0,
						legend_inset_step: undefined,
						legend_item_onclick: undefined,
						legend_item_onover: undefined,
						legend_item_onout: undefined,
						legend_equally: !1,
						legend_padding: 0,
						legend_item_tile_width: 10,
						legend_item_tile_height: 10,

						/**
       * Switch x and y axis position.
       * @name axis:rotated
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * axis: {
       *   rotated: true
       * }
       */
						axis_rotated: !1,

						/**
       * Show or hide x axis.
       * @name axis:x:show
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   x: {
       *     show: false
       *   }
       * }
       */
						axis_x_show: !0,

						/**
       * Set type of x axis.<br><br>
       * <b>Available Values:</b>
       * -timeseries
       * -category
       * -indexed
       * @name axis:x:type
       * @memberof Options
       * @type {String}
       * @default indexed
       * @example
       * axis: {
       *   x: {
       *     type: "timeseries"
       *   }
       * }
       */
						axis_x_type: "indexed",

						/**
       * Set how to treat the timezone of x values.<br>
       * If true, treat x value as localtime. If false, convert to UTC internally.
       * @name axis:x:localtime
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   x: {
       *     localtime: false
       *   }
       * }
       */
						axis_x_localtime: !0,

						/**
       * Set category names on category axis.
       * This must be an array that includes category names in string. If category names are included in the date by data.x option, this is not required.
       * @name axis:x:categories
       * @memberof Options
       * @type {Array}
       * @default []
       * @example
       * axis: {
       *   x: {
       *     categories: ["Category 1", "Category 2", ...]
       *   }
       * }
       */
						axis_x_categories: [],

						/**
       * Centerise ticks on category axis.
       * @name axis:x:tick:centered
       * @memberof Options
       * @type {Array}
       * @default false
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       centered: true
       *     }
       *   }
       * }
       */
						axis_x_tick_centered: !1,

						/**
       * A function to format tick value. Format string is also available for timeseries data.
       * @name axis:x:tick:format
       * @memberof Options
       * @type {Function}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       format: function(x) {
       *           return x.getFullYear();
       *       }
       *     }
       *   }
       * }
       */
						axis_x_tick_format: undefined,

						/**
       * Setting for culling ticks.<br><br>
       * If true is set, the ticks will be culled, then only limitted tick text will be shown. This option does not hide the tick lines. If false is set, all of ticks will be shown.<br><br>
       * We can change the number of ticks to be shown by axis.x.tick.culling.max.
       * @name axis:x:tick:culling
       * @memberof Options
       * @type {Function}
       * @default
       * - true for indexed axis and timeseries axis
       * - false for category axis
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       culling: false
       *     }
       *   }
       * }
       */
						axis_x_tick_culling: {},

						/**
       * The number of tick texts will be adjusted to less than this value.
       * @name axis:x:tick:culling:max
       * @memberof Options
       * @type {Number}
       * @default 10
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       culling: {
       *           max: 5
       *       }
       *     }
       *   }
       * }
       */
						axis_x_tick_culling_max: 10,

						/**
       * The number of x axis ticks to show.<br><br>
       * This option hides tick lines together with tick text. If this option is used on timeseries axis, the ticks position will be determined precisely and not nicely positioned (e.g. it will have rough second value).
       * @name axis:x:tick:count
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       count: 5
       *     }
       *   }
       * }
       */
						axis_x_tick_count: undefined,

						/**
       * Fit x axis ticks.<br><br>
       * If true set, the ticks will be positioned nicely. If false set, the ticks will be positioned according to x value of the data points.
       * @name axis:x:tick:fit
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       fit: false
       *     }
       *   }
       * }
       */
						axis_x_tick_fit: !0,

						/**
       * Set the x values of ticks manually.<br><br>
       * If this option is provided, the position of the ticks will be determined based on those values. This option works with timeseries data and the x values will be parsed accoding to the type of the value and data.xFormat option.
       * @name axis:x:tick:values
       * @memberof Options
       * @type {Array}
       * @default null
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       values: [1, 2, 4, 8, 16, 32, ...]
       *     }
       *   }
       * }
       */
						axis_x_tick_values: null,

						/**
       * Rotate x axis tick text.<br>
       * If you set negative value, it will rotate to opposite direction.
       * @name axis:x:tick:rotate
       * @memberof Options
       * @type {Number}
       * @default 0
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       rotate: 60
       *     }
       *   }
       * }
       */
						axis_x_tick_rotate: 0,

						/**
       * Show x axis outer tick.
       * @name axis:x:tick:outer
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       outer: false
       *     }
       *   }
       * }
       */
						axis_x_tick_outer: !0,

						/**
       * Set tick text to be multiline
       * @name axis:x:tick:multiline
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       multiline: false
       *     }
       *   }
       * }
       */
						axis_x_tick_multiline: !0,

						/**
       * Set tick width
       * @name axis:x:tick:width
       * @memberof Options
       * @type {Number}
       * @default null
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       width: 50
       *     }
       *   }
       * }
       */
						axis_x_tick_width: null,

						/**
       * Set max value of x axis range.
       * @name axis:x:max
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     max: 100
       *   }
       * }
       */
						axis_x_max: undefined,

						/**
       * Set min value of x axis range.
       * @name axis:x:min
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     min: -100
       *   }
       * }
       */
						axis_x_min: undefined,

						/**
       * Set padding for x axis.<br><br>
       * If this option is set, the range of x axis will increase/decrease according to the values. If no padding is needed in the ragen of x axis, 0 should be set. On category axis, this option will be ignored.
       * @name axis:x:padding
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * axis: {
       *   x: {
       *     padding: {
       *       left: 0,
       *       right: 0
       *     }
       *   }
       * }
       */
						axis_x_padding: {},

						/**
       * Set height of x axis.<br><br>
       * The height of x axis can be set manually by this option. If you need more space for x axis, please use this option for that. The unit is pixel.
       * @name axis:x:height
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     height: 20
       *   }
       * }
       */
						axis_x_height: undefined,

						/**
       * Set default extent for subchart and zoom. This can be an array or function that returns an array.
       * @name axis:x:extent
       * @memberof Options
       * @type {Array}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     // [[x0, y0], [x1, y1]], where [x0, y0] is the top-left corner and [x1, y1] is the bottom-right corner
       *     // https://github.com/d3/d3-brush/blob/master/src/brush.js#L521
       *     extent: [[0, 0], [200, 60]]
       *   }
       * }
       */
						axis_x_extent: undefined,

						/**
       * Set label on x axis.<br><br>
       *  You can set x axis label and change its position by this option. string and object can be passed and we can change the poisiton by passing object that has position key. Available position differs according to the axis direction (vertical or horizontal). If string set, the position will be the default.
       *  - If it's horizontal axis:
       *    - inner-right [default]
       *    - inner-center
       *    - inner-left
       *    - outer-right
       *    - outer-center
       *    - outer-left
       *  - If it's vertical axis:
       *    - inner-top [default]
       *    - inner-middle
       *    - inner-bottom
       *    - outer-top
       *    - outer-middle
       *    - outer-bottom
       * @name axis:x:label
       * @memberof Options
       * @type {String|Object}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     label: "Your X Axis"
       *   }
       * }
       *
       * axis: {
       *   x: {
       *     label: {
       *        text: "Your X Axis",
       *        position: "outer-center"
       *     }
       *   }
       * }
       */
						axis_x_label: {},

						/**
       * Show or hide y axis.
       * @name axis:y:show
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   y: {
       *     show: false
       *   }
       * }
       */
						axis_y_show: !0,

						/**
       * Set type of y axis.
       * <b>Available Values:</b>
       * -timeseries
       * -category
       * -indexed
       * @name axis:y:type
       * @memberof Options
       * @type {String}
       * @default undefined
       * @example
       * axis: {
       *   y: {
       *     type: "timeseries"
       *   }
       * }
       */
						axis_y_type: undefined,

						/**
       * Set max value of y axis.
       * <b>Note:</b> Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).
       * @name axis:y:max
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y: {
       *     max: 1000
       *   }
       * }
       */
						axis_y_max: undefined,

						/**
       * Set min value of y axis.
       * <b>Note:</b> Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).
       * @name axis:y:min
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y: {
       *     min: 1000
       *   }
       * }
       */
						axis_y_min: undefined,

						/**
       * Change the direction of y axis.<br><br>
       * If true set, the direction will be from the top to the bottom.
       * @name axis:y:inverted
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * axis: {
       *   y: {
       *     inverted: true
       *   }
       * }
       */
						axis_y_inverted: !1,

						/**
       * Set center value of y axis.
       * @name axis:y:center
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y: {
       *     center: 0
       *   }
       * }
       */
						axis_y_center: undefined,

						/**
       * Show y axis inside of the chart.
       * @name axis:y:inner
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * axis: {
       *   y: {
       *     inner: true
       *   }
       * }
       */
						axis_y_inner: !1,

						/**
       * Set label on y axis.<br><br>
       * You can set y axis label and change its position by this option. This option works in the same way as axis.x.label.
       * @name axis:y:label
       * @memberof Options
       * @type {String|Object}
       * @default {}
       * @example
       * axis: {
       *   y: {
       *     label: "Your Y Axis"
       *   }
       * }
       *
       * axis: {
       *   y: {
       *     label: {
       *        text: "Your Y Axis",
       *        position: "outer-middle"
       *     }
       *   }
       * }
       */
						axis_y_label: {},

						/**
       * Set formatter for y axis tick text.<br><br>
       * This option accepts d3.format object as well as a function you define.
       * @name axis:y:format
       * @memberof Options
       * @type {Function}
       * @default undefined
       * @example
       * axis: {
       *   x: {
       *     tick: {
       *       format: function(x) {
       *           return x.getFullYear();
       *       }
       *     }
       *   }
       * }
       */
						axis_y_tick_format: undefined,

						/**
       * Show y axis outer tick.
       * @name axis:y:tick:outer
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   y: {
       *     tick: {
       *       outer: false
       *     }
       *   }
       * }
       */
						axis_y_tick_outer: !0,

						/**
       * Set y axis tick values manually.
       * @name axis:y:tick:values
       * @memberof Options
       * @type {Array}
       * @default null
       * @example
       * axis: {
       *   y: {
       *     tick: {
       *       values: [100, 1000, 10000]
       *     }
       *   }
       * }
       */
						axis_y_tick_values: null,
						axis_y_tick_rotate: 0,

						/**
       * Set the number of y axis ticks.<br><br>
       * <b>Note:</b> The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.
       * @name axis:y:tick:count
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y: {
       *     tick: {
       *       count: 5
       *     }
       *   }
       * }
       */
						axis_y_tick_count: undefined,

						/**
       * Set the number of y axis ticks.<br><br>
       * <b>Note:</b> The position of the ticks will be calculated precisely, so the values on the ticks will not be rounded nicely. In the case, axis.y.tick.format or axis.y.tick.values will be helpful.
       * @name axis:y:tick:time
       * @memberof Options
       * @private
       * @type {Object}
       * @property {Function} [time.value] D3's time interval function (https://github.com/d3/d3-time#intervals)
       * @example
       * axis: {
       *   y: {
       *     tick: {
       *       time: {
       *          // ticks at 15-minute intervals
       *          // https://github.com/d3/d3-scale/blob/master/README.md#time_ticks
       *          value: d3.timeMinute.every(15)
       *       }
       *     }
       *   }
       * }
       */
						// @TODO: not fully implemented yet
						axis_y_tick_time_value: undefined,

						/**
       * Set padding for y axis.<br><br>
       * You can set padding for y axis to create more space on the edge of the axis. This option accepts object and it can include top and bottom. top, bottom will be treated as pixels.
       * @name axis:y:padding
       * @memberof Options
       * @type {Object}
       * @default {}
       * @example
       * axis: {
       *   y: {
       *     padding: {
       *       top: 0,
       *       bottom: 0
       *     }
       *   }
       * }
       */
						axis_y_padding: {},

						/**
       * Set default range of y axis.<br><br>
       * This option set the default value for y axis when there is no data on init.
       * @name axis:y:default
       * @memberof Options
       * @type {Array}
       * @default undefined
       * @example
       * axis: {
       *   y: {
       *     default: [0, 1000]
       *   }
       * }
       */
						axis_y_default: undefined,

						/**
       * Show or hide y2 axis.
       * @name axis:y2:show
       * @memberof Options
       * @type {Array}
       * @default false
       * @example
       * axis: {
       *   y2: {
       *     show: true
       *   }
       * }
       */
						axis_y2_show: !1,

						/**
       * Set max value of y2 axis.
       * @name axis:y2:max
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y2: {
       *     max: 1000
       *   }
       * }
       */
						axis_y2_max: undefined,

						/**
       * Set min value of y2 axis.
       * @name axis:y2:min
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y2: {
       *     min: -1000
       *   }
       * }
       */
						axis_y2_min: undefined,

						/**
       * Change the direction of y2 axis.<br><br>
       * If true set, the direction will be from the top to the bottom.
       * @name axis:y2:inverted
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * axis: {
       *   y2: {
       *     inverted: true
       *   }
       * }
       */
						axis_y2_inverted: !1,

						/**
       * Set center value of y2 axis.
       * @name axis:y2:center
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y2: {
       *     center: 0
       *   }
       * }
       */
						axis_y2_center: undefined,

						/**
       * Show y2 axis inside of the chart.
       * @name axis:y2:inner
       * @memberof Options
       * @type {Boolean}
       * @default false
       * @example
       * axis: {
       *   y2: {
       *     inner: true
       *   }
       * }
       */
						axis_y2_inner: !1,

						/**
       * Set label on y2 axis.<br><br>
       * You can set y2 axis label and change its position by this option. This option works in the same way as axis.x.label.
       * @name axis:y2:label
       * @memberof Options
       * @type {String|Object}
       * @default {}
       * @example
       * axis: {
       *   y2: {
       *     label: "Your Y2 Axis"
       *   }
       * }
       *
       * axis: {
       *   y2: {
       *     label: {
       *        text: "Your Y2 Axis",
       *        position: "outer-middle"
       *     }
       *   }
       * }
       */
						axis_y2_label: {},

						/**
       * Set formatter for y2 axis tick text.<br><br>
       * This option works in the same way as axis.y.format.
       * @name axis:y2:tick:format
       * @memberof Options
       * @type {Function}
       * @default undefined
       * @example
       * axis: {
       *   y2: {
       *     tick: {
       *       format: d3.format("$,")
       *       //or format: function(d) { return "$" + d; }
       *     }
       *   }
       * }
       */
						axis_y2_tick_format: undefined,

						/**
       * Show or hide y2 axis outer tick.
       * @name axis:y2:tick:outer
       * @memberof Options
       * @type {Boolean}
       * @default true
       * @example
       * axis: {
       *   y2: {
       *     tick: {
       *       outer: false
       *     }
       *   }
       * }
       */
						axis_y2_tick_outer: !0,

						/**
       * Set y2 axis tick values manually.
       * @name axis:y2:tick:values
       * @memberof Options
       * @type {Array}
       * @default null
       * @example
       * axis: {
       *   y2: {
       *     tick: {
       *       values: [100, 1000, 10000]
       *     }
       *   }
       * }
       */
						axis_y2_tick_values: null,

						/**
       * Set the number of y2 axis ticks.
       * <b>Note:</b> This works in the same way as axis.y.tick.count.
       * @name axis:y2:tick:count
       * @memberof Options
       * @type {Number}
       * @default undefined
       * @example
       * axis: {
       *   y2: {
       *     tick: {
       *       count: 5
       *     }
       *   }
       * }
       */
						axis_y2_tick_count: undefined,

						/**
       * Set the number of y2 axis ticks.
       * <b>Note:</b> This works in the same way as axis.y.tick.count.
       * @name axis:y2:padding
       * @memberof Options
       * @type {Number}
       * @default {}
       * @example
       * axis: {
       *   y2: {
       *     padding: {
       *       top: 100,
       *       bottom: 100
       *     }
       *   }
       * }
       */
						axis_y2_padding: {},

						/**
       * Set default range of y2 axis.<br><br>
       * This option set the default value for y2 axis when there is no data on init.
       * @name axis:y2:default
       * @memberof Options
       * @type {Array}
       * @default undefined
       * @example
       * axis: {
       *   y2: {
       *     default: [0, 1000]
       *   }
       * }
       */
						axis_y2_default: undefined,

						/**
       * Set related options
       * @name grid
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [x.show=false] Show grids along x axis.
       * @property {Boolean} [x.lines=[]] Show additional grid lines along x axis.<br>
       *  This option accepts array including object that has value, text, position and class. text, position and class are optional. For position, start, middle and end (default) are available.
       *  If x axis is category axis, value can be category name. If x axis is timeseries axis, value can be date string, Date object and unixtime integer.
       * @property {Boolean} [y.show=false] Show grids along x axis.
       * @property {Boolean} [y.lines=[]] Show additional grid lines along y axis.<br>
       *  This option accepts array including object that has value, text, position and class.
       * @property {Boolean} [y.ticks=10]
       * @property {Boolean} [focus.show=true] Show grids when focus.
       * @property {Boolean} [lines.front=true]
       * @default undefined
       * @example
       * grid: {
       *   x: {
       *     show: true,
       *     lines: [
       *       {value: 2, text: "Label on 2"},
       *       {value: 5, text: "Label on 5", class: "label-5"}
       *       {value: 6, text: "Label on 6", position: "start"}
       *     ]
       *   },
       * 	 y: {
       *     show: true,
       *     lines: [
       *       {value: 100, text: "Label on 100"},
       *       {value: 200, text: "Label on 200", class: "label-200"}
       *       {value: 300, text: "Label on 300", position: 'middle'}
       *     ],
       *     ticks: 5
       *   },
       *   focus: {
       *      show: false
       *   },
       *   lines: {
       *      front: false
       *   }
       * }
       */
						grid_x_show: !1,
						grid_x_type: "tick",
						grid_x_lines: [],
						grid_y_show: !1,
						grid_y_lines: [],
						grid_y_ticks: 10,
						grid_focus_show: !0,
						grid_lines_front: !0,

						/**
       * Set point options
       * @name point
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [point.show=true] Whether to show each point in line.
       * @property {Number} [point.r=2.5] The radius size of each point.
       * @property {Boolean} [point.focus.expand.enabled=true] Whether to expand each point on focus.
       * @property {Boolean} [point.focus.expand.r=point.r*1.75] The radius size of each point on focus.
       * @property {Number} [point.select.r=point.r*4] The radius size of each point on selected.
       * @example
       *  point: {
       *      show: false,
       *      r: 5,
       *      focus: {
       *          expand: {
       *              enabled: true,
       *              r: 1
       *          }
       *      },
       *      select: {
       *          r: 3
       *      }
       *  }
       */
						point_show: !0,
						point_r: 2.5,
						point_sensitivity: 10,
						point_focus_expand_enabled: !0,
						point_focus_expand_r: undefined,
						point_select_r: undefined,

						/**
       * Set line options
       * @name line
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [line.connectNull=false] Set if null data point will be connected or not.<br>
       *  If true set, the region of null data will be connected without any data point. If false set, the region of null data will not be connected and get empty.
       * @property {Boolean} [line.step_type=step] Change step type for step chart.<br>
       * <b>Available values:</b>
       * - step
       * - step-before
       * - step-after
       * @example
       *  line: {
       *      connectNull: true,
       *      step: {
       *          type: "step-after"
       *      }
       *  }
       */
						line_connectNull: !1,
						line_step_type: "step",

						/**
       * Set bar options
       * @name bar
       * @memberof Options
       * @type {Object}
       * @property {Number} [bar.width] Change the width of bar chart.
       * @property {Number} [bar.width.ratio=0.6] Change the width of bar chart by ratio.
       * @property {Number} [bar.width.max]
       * @property {Boolean} [bar.zerobased=true] Set if min or max value will be 0 on bar chart.
       * @example
       *  bar: {
       *      width: 10,
       *      // or
       *      width: {
       *          ratio: 0.2,
       *          max: 200
       *      },
       *      zerobased: false
       *  }
       */
						bar_width: undefined,
						bar_width_ratio: 0.6,
						bar_width_max: undefined,
						bar_zerobased: !0,

						/**
       * Set area options
       * @name area
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [area.zerobased=true] Set if min or max value will be 0 on area chart.
       * @property {Boolean} [area.above=false]
       * @example
       *  area: {
       *      zerobased: false,
       *      above: true
       *  }
       */
						area_zerobased: !0,
						area_above: !1,

						/**
       * Set pie options
       * @name pie
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [pie.label.show=true] Show or hide label on each pie piece.
       * @property {Function} [pie.label.format] Set formatter for the label on each pie piece.
       * @property {Number} [pie.label.threshold=0.05] Set threshold to show/hide labels.
       * @property {Boolean} [pie.expand=true] Enable or disable expanding pie pieces.
       * @property {Number} [pie.padAngle=0] Set padding between data.
       * @example
       *  pie: {
       *      label: {
       *          show: false,
       *          format: function(value, ratio, id) {
       *              return d3.format("$")(value);
       *          },
       *          threshold: 0.1
       *      },
       *      expand: false,
       *      padAngle: 0.1
       *  }
       */
						pie_label_show: !0,
						pie_label_format: undefined,
						pie_label_threshold: 0.05,
						pie_label_ratio: undefined,
						pie_expand: {},
						pie_expand_duration: 50,
						pie_padAngle: 0,

						/**
       * Set gauge options
       * @name gauge
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [gauge.fullCircle=false]
       * @property {Boolean} [gauge.label.show=true] Show or hide label on gauge.
       * @property {Function} [gauge.label.format] Set formatter for the label on gauge.
       * @property {Boolean} [gauge.expand=true] Enable or disable expanding gauge.
       * @property {Number} [gauge.expand.duration=50]
       * @property {Number} [gauge.min=0] Set min value of the gauge.
       * @property {Number} [gauge.max=100] Set max value of the gauge.
       * @property {Number} [gauge.startingAngle=-1 * Math.PI / 2]
       * @property {String} [gauge.units] Set units of the gauge.
       * @property {Number} [gauge.width] Set width of gauge chart.
       * @example
       *  gauge: {
       *      label: {
       *          show: false,
       *          format: function(value, ratio) {
       *              return value;
       *          }
       *      },
       *      expand: false,
       *      min: -100,
       *      max: 200,
       *      units: "%",
       *      width: 10
       *  }
       */
						gauge_fullCircle: !1,
						gauge_label_show: !0,
						gauge_label_format: undefined,
						gauge_min: 0,
						gauge_max: 100,
						gauge_startingAngle: -1 * Math.PI / 2,
						gauge_label_extents: undefined,
						gauge_units: undefined,
						gauge_width: undefined,
						gauge_expand: {},
						gauge_expand_duration: 50,

						/**
       * Set donut options
       * @name donut
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [donut.label.show=true] Show or hide label on each donut piece.
       * @property {Function} [donut.label.format] Set formatter for the label on each donut piece.
       * @property {Number} [donut.label.threshold=0.05] Set threshold to show/hide labels.
       * @property {Boolean} [donut.expand=true] Enable or disable expanding donut pieces.
       * @property {Number} [donut.width] Set width of donut chart.
       * @property {String} [donut.title=""] Set title of donut chart.
       * @property {Number} [donut.padAngle=0] Set padding between data.
       * @example
       *  donut: {
       *      label: {
       *          show: false,
       *          format: function(value, ratio, id) {
       *              return d3.format("$")(value);
       *          },
       *          threshold: 0.1
       *      },
       *      expand: false,
       *      width: 10,
       *      title: "Donut Title",
       *      padAngle: 0.2
       *  }
       */
						donut_label_show: !0,
						donut_label_format: undefined,
						donut_label_threshold: 0.05,
						donut_label_ratio: undefined,
						donut_width: undefined,
						donut_title: "",
						donut_expand: {},
						donut_expand_duration: 50,
						donut_padAngle: 0,

						/**
       * Set spline options
       * @name spline
       * @memberof Options
       * @type {Object}
       * @property {String} [spline.interpolation.type=cardinal]
       * @example
       *  spline: {
       *      interpolation: {
       *          type: "cardinal"
       *      }
       *  }
       */
						spline_interpolation_type: "cardinal",

						/**
       * Show rectangles inside the chart.<br><br>
       * This option accepts array including object that has axis, start, end and class. The keys start, end and class are optional.
       * axis must be x, y or y2. start and end should be the value where regions start and end. If not specified, the edge values will be used. If timeseries x axis, date string, Date object and unixtime integer can be used. If class is set, the region element will have it as class.
       * @name regions
       * @memberof Options
       * @type {Array}
       * @default []
       * @example
       *  regions: [
       *	 {
       *	     axis: "x",
       *	     start: 1,
       *	     end: 4,
       *	     class: "region-1-4"
       *	 }
       *  ]
       */
						regions: [],

						/**
       * Tooltip options
       * @name tooltip
       * @memberof Options
       * @type {Object}
       * @property {Boolean} [tooltip.show=true] Show or hide tooltip.<br>
       * @property {Boolean} [tooltip.grouped=true] Set if tooltip is grouped or not for the data points.
       * @property {Function} [tooltip.format.title] Set format for the title of tooltip.<br>
       *  Specified function receives x of the data point to show.
       * @property {Function} [tooltip.format.name] Set format for the name of each data in tooltip.<br>
       *  Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.
       * @property {Function} [tooltip.format.value] Set format for the value of each data in tooltip.<br>
       *  Specified function receives name, ratio, id and index of the data point to show. ratio will be undefined if the chart is not donut/pie/gauge.
       *  If undefined returned, the row of that value will be skipped.
       * @property {function} [tooltip.position] Set custom position for the tooltip.<br>
       *  This option can be used to modify the tooltip position by returning object that has top and left.
       * @property {function} [tooltip.contents] Set custom HTML for the tooltip.<br>
       *  Specified function receives data, defaultTitleFormat, defaultValueFormat and color of the data point to show. If tooltip.grouped is true, data includes multiple data points.
       * @example
       *  tooltip: {
       *      show: true,
       *      grouped: false,
       *      format: {
       *          title: function(x) { return "Data " + x; },
       *          name: function(name, ratio, id, index) { return name; },
       *          value: function(value, ratio, id, index) { return ratio; }
       *      },
       *      position: function(data, width, height, element) {
       *          return {top: 0, left: 0}
      		 *      },
      		 *      contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
      		 *          return ... // formatted html as you want
       		 *      }
       *  }
       */
						tooltip_show: !0,
						tooltip_grouped: !0,
						tooltip_format_title: undefined,
						tooltip_format_name: undefined,
						tooltip_format_value: undefined,
						tooltip_position: undefined,
						tooltip_contents: function tooltip_contents(d, defaultTitleFormat, defaultValueFormat, color) {
									return this.getTooltipContent ? this.getTooltipContent(d, defaultTitleFormat, defaultValueFormat, color) : "";
						},
						tooltip_init_show: !1,
						tooltip_init_x: 0,
						tooltip_init_position: {
									top: "0px",
									left: "50px"
						},
						tooltip_onshow: function tooltip_onshow() {},
						tooltip_onhide: function tooltip_onhide() {},

						/**
       * Set title options
       * @name title
       * @memberof Options
       * @type {Object}
       * @property {String} [title.text]
       * @property {Number} [title.padding.top=0]
       * @property {Number} [title.padding.right=0]
       * @property {Number} [title.padding.bottom=0]
       * @property {Number} [title.padding.left=0]
       * @property {String} [title.position=top-center]
       * @example
       *  title: {
       *      text: "Title Text",
       *      padding: {
       *          top: 10,
       *          right: 10,
       *          bottom: 10,
       *          left: 10
       *      },
       *      position: "top-center"
       *  }
       */
						title_text: undefined,
						title_padding: {
									top: 0,
									right: 0,
									bottom: 0,
									left: 0
						},
						title_position: "top-center"
			};
};

exports.default = Options;
module.exports = exports["default"];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;
exports.d3 = exports.bb = undefined;

var _d = __webpack_require__(2),
    d3 = _interopRequireWildcard(_d),
    _Chart = __webpack_require__(4),
    _Chart2 = _interopRequireDefault(_Chart),
    _ChartInternal = __webpack_require__(1),
    _ChartInternal2 = _interopRequireDefault(_ChartInternal),
    _Axis = __webpack_require__(7),
    _Axis2 = _interopRequireDefault(_Axis),
    _util = __webpack_require__(0),
    util = _interopRequireWildcard(_util);

__webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) return obj; var newObj = {}; if (obj != null) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]); return newObj.default = obj, newObj; }

/**
 * @namespace bb
 * @version 1.0.0
 */
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
var bb = {
	/**
  * Version information
  * @property {String} version version
  * @example
  * 	bb.version;  // "1.0.0"
  * @memberof bb
  */
	version: "1.0.0",
	/**
  * generate charts
  * @param {Options} options chart options
  * @memberof bb
  * @return {Chart}
  * @see {@link Options} for different generation options
  * @see {@link Chart} for different methods API
  * @example
  *  <!-- chart holder -->
  * <div id="LineChart"></div>
  * @example
  *   // generate chart with options
  *  var chart = bb.generate({
  *      "bindto": "#LineChart"
  *      "data": {
  *          "columns": [
  *              ["data1", 30, 200, 100, 400, 150, 250],
  *              ["data2", 50, 20, 10, 40, 15, 25]
  *           ]
  *      }
  *  });
  *
  *  // call some API
  *  // ex) get the data of 'data1'
  *  chart.data("data1");
  */
	generate: function generate(config) {
		return new _Chart2.default(config);
	},

	chart: {
		fn: _Chart2.default.prototype,
		internal: {
			fn: _ChartInternal2.default.prototype,
			axis: {
				fn: _Axis2.default.prototype
			}
		}
	}
};

for (var p in util) /^__/.test(p) || (_ChartInternal2.default.prototype[p] = util[p]);

__webpack_require__(27), __webpack_require__(46), __webpack_require__(41), __webpack_require__(29), __webpack_require__(28), __webpack_require__(30), __webpack_require__(37), __webpack_require__(32), __webpack_require__(51), __webpack_require__(49), __webpack_require__(50), __webpack_require__(48), __webpack_require__(52), __webpack_require__(55), __webpack_require__(43), __webpack_require__(54), __webpack_require__(44), __webpack_require__(53), __webpack_require__(39), __webpack_require__(35), __webpack_require__(45), __webpack_require__(31), __webpack_require__(47), __webpack_require__(33), __webpack_require__(34), __webpack_require__(40), __webpack_require__(42), __webpack_require__(36), __webpack_require__(38), __webpack_require__(15), __webpack_require__(22), __webpack_require__(26), __webpack_require__(19), __webpack_require__(14), __webpack_require__(21), __webpack_require__(24), __webpack_require__(17), __webpack_require__(16), __webpack_require__(20), __webpack_require__(13), __webpack_require__(10), __webpack_require__(12), __webpack_require__(25), __webpack_require__(9), __webpack_require__(18), __webpack_require__(11), __webpack_require__(23), __webpack_require__(8), __webpack_require__(56);
exports.bb = bb;
exports.d3 = d3;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = !0;
/**
 * Copyright (c) 2017 NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* eslint-disable no-new-func, no-nested-ternary */
var win = typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
/* eslint-enable no-new-func, no-nested-ternary */

exports.window = win;
var document = exports.document = win.document;

/***/ })
/******/ ]);
});
//# sourceMappingURL=billboard.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(8)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isEqual = function isEqual(objA, objB) {
  return objA === objB;
};

var isEqualShallow = function isEqualShallow(objA, objB) {
  if (isEqual(objA, objB)) {
    return true;
  }

  return _lodash2.default.isObject(objA) && _lodash2.default.isObject(objB) && _lodash2.default.every(objA, function (v, k) {
    return _lodash2.default.includes(objB, k) && isEqual(v, objB[k]);
  }) && _lodash2.default.every(objB, function (v, k) {
    return _lodash2.default.includes(objA, k);
  });
};

exports.default = function (Component) {
  var WatcherComponent = function (_React$Component) {
    _inherits(WatcherComponent, _React$Component);

    function WatcherComponent(props, context) {
      _classCallCheck(this, WatcherComponent);

      var _this = _possibleConstructorReturn(this, (WatcherComponent.__proto__ || Object.getPrototypeOf(WatcherComponent)).call(this, props, context));

      _this.watch = _this.watch.bind(_this);
      _this.unwatch = _this.unwatch.bind(_this);
      _this.watchers = {};
      return _this;
    }

    _createClass(WatcherComponent, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        _lodash2.default.forEach(this.watchers, function (callback, path) {
          var oldProp = _lodash2.default.get(_this2.props, path);
          var newProp = _lodash2.default.get(nextProps, path);

          if (!isEqualShallow(oldProp, newProp)) {
            callback(newProp);
          }
        });
      }
    }, {
      key: 'watch',
      value: function watch(propPath, callback) {
        var path = _lodash2.default.isArray(propPath) ? propPath.join('.') : propPath;

        this.watchers[path] = callback;
      }
    }, {
      key: 'unwatch',
      value: function unwatch(propPath) {
        var path = _lodash2.default.isArray(propPath) ? propPath.join('.') : propPath;

        delete this.watchers[path];
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, {
          watch: this.watch,
          unwatch: this.unwatch
        }));
      }
    }]);

    return WatcherComponent;
  }(_react2.default.Component);

  WatcherComponent.displayName = 'ConnectWatcher(' + (Component.displayName || Component.name || 'Component') + ')';

  return WatcherComponent;
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=react.c3.bundle.js.map