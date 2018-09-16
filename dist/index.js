module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var UAParser = __webpack_require__(6);

var UA = exports.UA = new UAParser();

var browser = exports.browser = UA.getBrowser();
var cpu = exports.cpu = UA.getCPU();
var device = exports.device = UA.getDevice();
var engine = exports.engine = UA.getEngine();
var os = exports.os = UA.getOS();
var ua = exports.ua = UA.getUA();
var setUA = exports.setUA = function setUA(uaStr) {
  return UA.setUA(uaStr);
};

var mockUserAgent = exports.mockUserAgent = function mockUserAgent(userAgent) {
  window.navigator.__defineGetter__("userAgent", function () {
    return userAgent;
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isYandex = exports.isEdge = exports.getUA = exports.engineVersion = exports.engineName = exports.mobileModel = exports.mobileVendor = exports.browserName = exports.browserVersion = exports.fullBrowserVersion = exports.osName = exports.osVersion = exports.isIE = exports.isOpera = exports.isSafari = exports.isFirefox = exports.isChrome = exports.isIOS = exports.isWinPhone = exports.isAndroid = exports.isBrowser = exports.isTablet = exports.isMobileOnly = exports.isMobile = exports.isChromium = exports.isMobileSafari = exports.isWearable = exports.isConsole = exports.isSmartTV = undefined;

var _getUaData = __webpack_require__(0);

var _types = __webpack_require__(2);

var CHROME = _types.BROWSER_TYPES.CHROME,
    CHROMIUM = _types.BROWSER_TYPES.CHROMIUM,
    IE = _types.BROWSER_TYPES.IE,
    INTERNET_EXPLORER = _types.BROWSER_TYPES.INTERNET_EXPLORER,
    OPERA = _types.BROWSER_TYPES.OPERA,
    FIREFOX = _types.BROWSER_TYPES.FIREFOX,
    SAFARI = _types.BROWSER_TYPES.SAFARI,
    MOBILE_SAFARI = _types.BROWSER_TYPES.MOBILE_SAFARI,
    EDGE = _types.BROWSER_TYPES.EDGE,
    YANDEX = _types.BROWSER_TYPES.YANDEX;
var MOBILE = _types.DEVICE_TYPES.MOBILE,
    TABLET = _types.DEVICE_TYPES.TABLET,
    SMART_TV = _types.DEVICE_TYPES.SMART_TV,
    BROWSER = _types.DEVICE_TYPES.BROWSER,
    WEARABLE = _types.DEVICE_TYPES.WEARABLE,
    CONSOLE = _types.DEVICE_TYPES.CONSOLE;
var ANDROID = _types.OS_TYPES.ANDROID,
    WINDOWS_PHONE = _types.OS_TYPES.WINDOWS_PHONE,
    IOS = _types.OS_TYPES.IOS;


var isMobileType = function isMobileType() {
  return _getUaData.device.type === MOBILE;
};
var isTabletType = function isTabletType() {
  return _getUaData.device.type === TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (_getUaData.device.type) {
    case MOBILE:
    case TABLET:
      return true;
    default:
      return false;
  }
};

var isSmartTVType = function isSmartTVType() {
  return _getUaData.device.type === SMART_TV;
};
var isBrowserType = function isBrowserType() {
  return _getUaData.device.type === BROWSER;
};
var isWearableType = function isWearableType() {
  return _getUaData.device.type === WEARABLE;
};
var isConsoleType = function isConsoleType() {
  return _getUaData.device.type === CONSOLE;
};
var isAndroidType = function isAndroidType() {
  return _getUaData.os.name === ANDROID;
};
var isWinPhoneType = function isWinPhoneType() {
  return _getUaData.os.name === WINDOWS_PHONE;
};
var isIOSType = function isIOSType() {
  return _getUaData.os.name === IOS;
};
var isChromeType = function isChromeType() {
  return _getUaData.browser.name === CHROME;
};
var isFirefoxType = function isFirefoxType() {
  return _getUaData.browser.name === FIREFOX;
};
var isChromiumType = function isChromiumType() {
  return _getUaData.browser.name === CHROMIUM;
};
var isEdgeType = function isEdgeType() {
  return _getUaData.browser.name === EDGE;
};
var isYandexType = function isYandexType() {
  return _getUaData.browser.name === YANDEX;
};
var isSafariType = function isSafariType() {
  return _getUaData.browser.name === SAFARI || _getUaData.browser.name === MOBILE_SAFARI;
};
var isMobileSafariType = function isMobileSafariType() {
  return _getUaData.browser.name === MOBILE_SAFARI;
};
var isOperaType = function isOperaType() {
  return _getUaData.browser.name === OPERA;
};
var isIEType = function isIEType() {
  return _getUaData.browser.name === INTERNET_EXPLORER || _getUaData.browser.name === IE;
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return _getUaData.browser.major;
};
var getBrowserVersion = function getBrowserVersion() {
  return _getUaData.browser.version;
};
var getOsVersion = function getOsVersion() {
  return _getUaData.os.version ? _getUaData.os.version : "none";
};
var getOsName = function getOsName() {
  return _getUaData.os.name ? _getUaData.os.name : "none";
};
var getBrowserName = function getBrowserName() {
  return _getUaData.browser.name;
};
var getMobileVendor = function getMobileVendor() {
  return _getUaData.device.vendor ? _getUaData.device.vendor : "none";
};
var getMobileModel = function getMobileModel() {
  return _getUaData.device.model ? _getUaData.device.model : "none";
};
var getEngineName = function getEngineName() {
  return _getUaData.engine.name;
};
var getEngineVersion = function getEngineVersion() {
  return _getUaData.engine.version;
};
var getUseragent = function getUseragent() {
  return _getUaData.ua;
};

var isSmartTV = exports.isSmartTV = isSmartTVType();
var isConsole = exports.isConsole = isConsoleType();
var isWearable = exports.isWearable = isWearableType();
var isMobileSafari = exports.isMobileSafari = isMobileSafariType();
var isChromium = exports.isChromium = isChromiumType();
var isMobile = exports.isMobile = isMobileAndTabletType();
var isMobileOnly = exports.isMobileOnly = isMobileType();
var isTablet = exports.isTablet = isTabletType();
var isBrowser = exports.isBrowser = isBrowserType();
var isAndroid = exports.isAndroid = isAndroidType();
var isWinPhone = exports.isWinPhone = isWinPhoneType();
var isIOS = exports.isIOS = isIOSType();
var isChrome = exports.isChrome = isChromeType();
var isFirefox = exports.isFirefox = isFirefoxType();
var isSafari = exports.isSafari = isSafariType();
var isOpera = exports.isOpera = isOperaType();
var isIE = exports.isIE = isIEType();
var osVersion = exports.osVersion = getOsVersion();
var osName = exports.osName = getOsName();
var fullBrowserVersion = exports.fullBrowserVersion = getBrowserFullVersion();
var browserVersion = exports.browserVersion = getBrowserVersion();
var browserName = exports.browserName = getBrowserName();
var mobileVendor = exports.mobileVendor = getMobileVendor();
var mobileModel = exports.mobileModel = getMobileModel();
var engineName = exports.engineName = getEngineName();
var engineVersion = exports.engineVersion = getEngineVersion();
var getUA = exports.getUA = getUseragent();
var isEdge = exports.isEdge = isEdgeType();
var isYandex = exports.isYandex = isYandexType();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wearPayload = exports.consolePayload = exports.stvPayload = exports.mobilePayload = exports.broPayload = exports.getCurrentBrowser = exports.checkType = exports.OS_TYPES = exports.BROWSER_TYPES = exports.DEVICE_TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getUaData = __webpack_require__(0);

var DEVICE_TYPES = exports.DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  BROWSER: undefined
};

var BROWSER_TYPES = exports.BROWSER_TYPES = {
  CHROME: 'Chrome',
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: 'IE',
  MOBILE_SAFARI: "Mobile Safari"
};

var OS_TYPES = exports.OS_TYPES = {
  IOS: 'iOS',
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone"
};

var initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

var checkType = exports.checkType = function checkType(type) {
  switch (type) {
    case DEVICE_TYPES.MOBILE:
      return { isMobile: true };
    case DEVICE_TYPES.TABLET:
      return { isTablet: true };
    case DEVICE_TYPES.SMART_TV:
      return { isSmartTV: true };
    case DEVICE_TYPES.CONSOLE:
      return { isConsole: true };
    case DEVICE_TYPES.WEARABLE:
      return { isWearable: true };
    case DEVICE_TYPES.BROWSER:
      return { isBrowser: true };
    default:
      return initialData;
  }
};

var getCurrentBrowser = exports.getCurrentBrowser = function getCurrentBrowser(name) {
  switch (name) {
    case BROWSER_TYPES.CHROME:
    case BROWSER_TYPES.FIREFOX:
    case BROWSER_TYPES.OPERA:
    case BROWSER_TYPES.YANDEX:
    case BROWSER_TYPES.SAFARI:
    case BROWSER_TYPES.IE:
    case BROWSER_TYPES.EDGE:
    case BROWSER_TYPES.CHROMIUM:
      return true;
    default:
      return false;
  }
};

var broPayload = exports.broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: browser.major,
    browserFullVersion: browser.version,
    browserName: browser.name,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

var mobilePayload = exports.mobilePayload = function mobilePayload(type, device, os, ua) {
  return _extends({}, type, {
    vendor: device.vendor || "none",
    model: device.model || "none",
    os: os.name || "none",
    osVersion: os.version || "none",
    ua: ua || "none"
  });
};

var stvPayload = exports.stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

var consolePayload = exports.consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

var wearPayload = exports.wearPayload = function wearPayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deviceDetect = undefined;

var _views = __webpack_require__(4);

Object.keys(_views).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _views[key];
    }
  });
});

var _selectors = __webpack_require__(1);

Object.keys(_selectors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectors[key];
    }
  });
});

var _detect = __webpack_require__(8);

var _detect2 = _interopRequireDefault(_detect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.deviceDetect = _detect2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomView = exports.WearableView = exports.ConsoleView = exports.SmartTVView = exports.MobileOnlyView = exports.WinPhoneView = exports.TabletView = exports.MobileView = exports.IOSView = exports.IEView = exports.BrowserView = exports.AndroidView = undefined;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _selectors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AndroidView = exports.AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      viewClassName = _ref.viewClassName,
      style = _ref.style;

  return _selectors.isAndroid ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var BrowserView = exports.BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      viewClassName = _ref2.viewClassName,
      style = _ref2.style;

  return _selectors.isBrowser ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var IEView = exports.IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      viewClassName = _ref3.viewClassName,
      style = _ref3.style;

  return _selectors.isIE ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var IOSView = exports.IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      viewClassName = _ref4.viewClassName,
      style = _ref4.style;

  return _selectors.isIOS ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var MobileView = exports.MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      viewClassName = _ref5.viewClassName,
      style = _ref5.style;

  return _selectors.isMobile ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var TabletView = exports.TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      viewClassName = _ref6.viewClassName,
      style = _ref6.style;

  return _selectors.isTablet ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var WinPhoneView = exports.WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      viewClassName = _ref7.viewClassName,
      style = _ref7.style;

  return _selectors.isWinPhone ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var MobileOnlyView = exports.MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style;

  return _selectors.isMobileOnly ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var SmartTVView = exports.SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      viewClassName = _ref9.viewClassName,
      style = _ref9.style;

  return _selectors.isSmartTV ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var ConsoleView = exports.ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      viewClassName = _ref10.viewClassName,
      style = _ref10.style;

  return _selectors.isConsole ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var WearableView = exports.WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      viewClassName = _ref11.viewClassName,
      style = _ref11.style;

  return _selectors.isWearable ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

var CustomView = exports.CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition;

  return condition ? renderWithFragment ? _react2.default.createElement(
    _react.Fragment,
    null,
    children
  ) : _react2.default.createElement(
    'div',
    { className: viewClassName, style: style },
    children
  ) : null;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.18",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var margedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){margedRegexes[i]=extensions[i].concat(regexes[i])}else{margedRegexes[i]=regexes[i]}}return margedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[NAME,"Edge"],VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(qqbrowserlite)\/([\w\.]+)/i],[NAME,VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i],[NAME],[/(LBBROWSER)/i],[NAME],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel xl|pixel)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,TABLET]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9}).+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__(7)){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getUaData = __webpack_require__(0);

var _types = __webpack_require__(2);

var create = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var type = create.checkType(_getUaData.device.type);

exports.default = function () {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return create.broPayload(isBrowser, _getUaData.browser, _getUaData.engine, _getUaData.os, _getUaData.ua);
  }

  if (isSmartTV) {
    return create.stvPayload(isSmartTV, _getUaData.engine, _getUaData.os, _getUaData.ua);
  }

  if (isConsole) {
    return create.consolePayload(isConsole, _getUaData.engine, _getUaData.os, _getUaData.ua);
  }

  if (isMobile) {
    return create.mobilePayload(type, _getUaData.device, _getUaData.os, _getUaData.ua);
  }

  if (isTablet) {
    return create.mobilePayload(type, _getUaData.device, _getUaData.os, _getUaData.ua);
  }

  if (isWearable) {
    return create.wearPayload(isWearable, _getUaData.engine, _getUaData.os, _getUaData.ua);
  }
};

/***/ })
/******/ ]);