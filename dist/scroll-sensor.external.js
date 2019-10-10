(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("events"));
	else if(typeof define === 'function' && define.amd)
		define(["events"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("events")) : factory(root["events"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_events__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scroll-sensor.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/*! exports provided: Options, ScrollEventObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Options\", function() { return Options; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollEventObject\", function() { return ScrollEventObject; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Options {\n  constructor(options = {}) {\n    _defineProperty(this, \"mouseWheelIsEnable\", void 0);\n\n    _defineProperty(this, \"mouseWheelXSpeed\", void 0);\n\n    _defineProperty(this, \"mouseWheelYSpeed\", void 0);\n\n    _defineProperty(this, \"mouseMoveIsEnable\", void 0);\n\n    _defineProperty(this, \"mouseMoveXSpeed\", void 0);\n\n    _defineProperty(this, \"mouseMoveYSpeed\", void 0);\n\n    _defineProperty(this, \"mouseMoveInertiaXDeceleration\", void 0);\n\n    _defineProperty(this, \"mouseMoveInertiaYDeceleration\", void 0);\n\n    _defineProperty(this, \"mouseMoveInertiaXMaxSpeed\", void 0);\n\n    _defineProperty(this, \"mouseMoveInertiaYMaxSpeed\", void 0);\n\n    _defineProperty(this, \"touchIsEnable\", void 0);\n\n    _defineProperty(this, \"touchXSpeed\", void 0);\n\n    _defineProperty(this, \"touchYSpeed\", void 0);\n\n    _defineProperty(this, \"touchInertiaXDeceleration\", void 0);\n\n    _defineProperty(this, \"touchInertiaYDeceleration\", void 0);\n\n    _defineProperty(this, \"touchInertiaXMaxSpeed\", void 0);\n\n    _defineProperty(this, \"touchInertiaYMaxSpeed\", void 0);\n\n    _defineProperty(this, \"minScrollTop\", void 0);\n\n    _defineProperty(this, \"minScrollLeft\", void 0);\n\n    _defineProperty(this, \"maxScrollTop\", void 0);\n\n    _defineProperty(this, \"maxScrollLeft\", void 0);\n\n    this.mouseWheelIsEnable = this.dealParam(options.mouseWheelIsEnable, true);\n    this.mouseWheelXSpeed = this.dealParam(options.mouseWheelXSpeed, 1);\n    this.mouseWheelYSpeed = this.dealParam(options.mouseWheelYSpeed, 1);\n    this.mouseMoveIsEnable = this.dealParam(options.mouseMoveIsEnable, true);\n    this.mouseMoveXSpeed = this.dealParam(options.mouseMoveXSpeed, 1);\n    this.mouseMoveYSpeed = this.dealParam(options.mouseMoveYSpeed, 1);\n    this.mouseMoveInertiaXDeceleration = this.dealParam(options.mouseMoveInertiaXDeceleration, Infinity);\n    this.mouseMoveInertiaYDeceleration = this.dealParam(options.mouseMoveInertiaYDeceleration, Infinity);\n    this.mouseMoveInertiaXMaxSpeed = this.dealParam(options.mouseMoveInertiaXMaxSpeed, this.mouseMoveInertiaXDeceleration);\n    this.mouseMoveInertiaYMaxSpeed = this.dealParam(options.mouseMoveInertiaYMaxSpeed, this.mouseMoveInertiaYDeceleration);\n    this.touchIsEnable = this.dealParam(options.touchIsEnable, true);\n    this.touchXSpeed = this.dealParam(options.touchXSpeed, 1);\n    this.touchYSpeed = this.dealParam(options.touchYSpeed, 1);\n    this.touchInertiaXDeceleration = this.dealParam(options.touchInertiaXDeceleration, Infinity);\n    this.touchInertiaYDeceleration = this.dealParam(options.touchInertiaYDeceleration, Infinity);\n    this.touchInertiaXMaxSpeed = this.dealParam(options.touchInertiaXMaxSpeed, this.touchInertiaXDeceleration);\n    this.touchInertiaYMaxSpeed = this.dealParam(options.touchInertiaYMaxSpeed, this.touchInertiaYDeceleration);\n    this.minScrollTop = this.dealParam(options.minScrollTop, 0);\n    this.minScrollLeft = this.dealParam(options.minScrollLeft, 0);\n    this.maxScrollTop = this.dealParam(options.maxScrollTop, Infinity);\n    this.maxScrollLeft = this.dealParam(options.maxScrollLeft, 0);\n  }\n\n  dealParam(param, defaultValue) {\n    if (param === undefined || param === null) {\n      return defaultValue;\n    } else {\n      return param;\n    }\n  }\n\n}\nclass ScrollEventObject {\n  constructor(scrollTop, scrollLeft, scrollY, scrollX) {\n    this.scrollTop = scrollTop;\n    this.scrollLeft = scrollLeft;\n    this.scrollY = scrollY;\n    this.scrollX = scrollX;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/model.ts?");

/***/ }),

/***/ "./src/scroll-sensor.ts":
/*!******************************!*\
  !*** ./src/scroll-sensor.ts ***!
  \******************************/
/*! exports provided: ScrollSensor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollSensor\", function() { return ScrollSensor; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/model.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/**\r\n * Scroll sensor main class\r\n * @event scroll Emit when scroll.\r\n */\n\nclass ScrollSensor extends events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n  /**\r\n   * @param {HTMLElement} element The dom element to create the ScrollSensor instance.\r\n   * @param {OptionsInterface} options Options.\r\n   * @param {number} initialScrollTop\r\n   * @param {number} initialScrollLeft\r\n   */\n  constructor({\n    element,\n    options = {},\n    initialScrollTop = 0,\n    initialScrollLeft = 0\n  }) {\n    super();\n\n    _defineProperty(this, \"element\", void 0);\n\n    _defineProperty(this, \"options\", void 0);\n\n    _defineProperty(this, \"_scrollTop\", void 0);\n\n    _defineProperty(this, \"_scrollLeft\", void 0);\n\n    _defineProperty(this, \"mouseIsScrolling\", false);\n\n    _defineProperty(this, \"mouseXLastPosition\", void 0);\n\n    _defineProperty(this, \"mouseYLastPosition\", void 0);\n\n    _defineProperty(this, \"mouseScrollEndInertiaUtil\", new _util__WEBPACK_IMPORTED_MODULE_2__[\"EndInertiaUtil\"]());\n\n    _defineProperty(this, \"touchXLastPosition\", void 0);\n\n    _defineProperty(this, \"touchYLastPosition\", void 0);\n\n    _defineProperty(this, \"touchEndInertiaUtil\", new _util__WEBPACK_IMPORTED_MODULE_2__[\"EndInertiaUtil\"]());\n\n    _defineProperty(this, \"handleMousewheel\", event => {\n      if (!this.options.mouseWheelIsEnable) {\n        return;\n      }\n\n      this.move(event.deltaX * this.options.mouseWheelXSpeed, event.deltaY * this.options.mouseWheelYSpeed);\n    });\n\n    _defineProperty(this, \"handleMouseDown\", event => {\n      if (!this.options.mouseMoveIsEnable) {\n        return;\n      }\n\n      this.mouseXLastPosition = event.clientX;\n      this.mouseYLastPosition = event.clientY;\n      this.mouseIsScrolling = true;\n      this.mouseScrollEndInertiaUtil.stop();\n    });\n\n    _defineProperty(this, \"handleMouseMove\", event => {\n      if (this.mouseIsScrolling) {\n        const xDistance = this.mouseXLastPosition - event.clientX;\n        const yDistance = this.mouseYLastPosition - event.clientY;\n        this.move(xDistance * this.options.mouseMoveXSpeed, yDistance * this.options.mouseMoveYSpeed);\n        this.mouseXLastPosition = event.clientX;\n        this.mouseYLastPosition = event.clientY;\n        this.mouseScrollEndInertiaUtil.push(this.scrollLeft, this.scrollTop);\n      }\n    });\n\n    _defineProperty(this, \"handleMouseUp\", () => {\n      this.mouseIsScrolling = false;\n      this.mouseScrollEndInertiaUtil.end();\n    });\n\n    _defineProperty(this, \"handleTouchStart\", event => {\n      if (!this.options.touchIsEnable) {\n        return;\n      }\n\n      this.touchXLastPosition = Math.round(event.touches[0].clientX);\n      this.touchYLastPosition = Math.round(event.touches[0].clientY);\n      this.touchEndInertiaUtil.stop();\n    });\n\n    _defineProperty(this, \"handleTouchMove\", event => {\n      if (!this.options.touchIsEnable) {\n        return;\n      }\n\n      const clientX = Math.round(event.touches[0].clientX);\n      const clientY = Math.round(event.touches[0].clientY);\n      const xDistance = this.touchXLastPosition - clientX;\n      const yDistance = this.touchYLastPosition - clientY;\n      this.move(xDistance, yDistance);\n      this.touchXLastPosition = clientX;\n      this.touchYLastPosition = clientY;\n      this.touchEndInertiaUtil.push(this.scrollLeft, this.scrollTop);\n    });\n\n    _defineProperty(this, \"handleTouchEnd\", () => {\n      this.touchEndInertiaUtil.end();\n    });\n\n    _defineProperty(this, \"handleInertiaMove\", event => {\n      this.move(event.xDistance, event.yDistance);\n    });\n\n    if (!(element instanceof HTMLElement)) {\n      throw new Error('\"element\" param is must an instance of HTMLElement');\n    }\n\n    this.setOptions(options);\n    this.element = element;\n    this.scrollTop = initialScrollTop;\n    this.scrollLeft = initialScrollLeft;\n    this.element.addEventListener('mousewheel', this.handleMousewheel);\n    this.element.addEventListener('mousedown', this.handleMouseDown);\n    this.element.addEventListener('mousemove', this.handleMouseMove);\n    this.element.addEventListener('mouseup', this.handleMouseUp);\n    this.element.addEventListener('touchstart', this.handleTouchStart);\n    this.element.addEventListener('touchmove', this.handleTouchMove);\n    this.element.addEventListener('touchend', this.handleTouchEnd);\n    this.mouseScrollEndInertiaUtil.on('inertiaMove', this.handleInertiaMove);\n    this.touchEndInertiaUtil.on('inertiaMove', this.handleInertiaMove);\n  }\n\n  setOptions(options = {}) {\n    this.options = new _model__WEBPACK_IMPORTED_MODULE_1__[\"Options\"](options);\n    this.mouseScrollEndInertiaUtil.setXDecelerationPerSecond(this.options.mouseMoveInertiaXDeceleration);\n    this.mouseScrollEndInertiaUtil.setYDecelerationPerSecond(this.options.mouseMoveInertiaYDeceleration);\n    this.mouseScrollEndInertiaUtil.setXMaxSpeed(this.options.mouseMoveInertiaXMaxSpeed);\n    this.mouseScrollEndInertiaUtil.setYMaxSpeed(this.options.mouseMoveInertiaYMaxSpeed);\n    this.touchEndInertiaUtil.setXDecelerationPerSecond(this.options.touchInertiaXDeceleration);\n    this.touchEndInertiaUtil.setYDecelerationPerSecond(this.options.touchInertiaYDeceleration);\n    this.touchEndInertiaUtil.setXMaxSpeed(this.options.touchInertiaXMaxSpeed);\n    this.touchEndInertiaUtil.setYMaxSpeed(this.options.touchInertiaYMaxSpeed);\n  }\n\n  set scrollTop(scrollTop) {\n    if (scrollTop < this.options.minScrollTop) {\n      this._scrollTop = this.options.minScrollTop;\n    } else if (scrollTop > this.options.maxScrollTop) {\n      this._scrollTop = this.options.maxScrollTop;\n    } else {\n      this._scrollTop = scrollTop;\n    }\n  }\n\n  get scrollTop() {\n    return this._scrollTop;\n  }\n\n  set scrollLeft(scrollLeft) {\n    if (scrollLeft < this.options.minScrollLeft) {\n      this._scrollLeft = this.options.minScrollLeft;\n    } else if (scrollLeft > this.options.maxScrollLeft) {\n      this._scrollLeft = this.options.maxScrollLeft;\n    } else {\n      this._scrollLeft = scrollLeft;\n    }\n  }\n\n  get scrollLeft() {\n    return this._scrollLeft;\n  }\n  /**\r\n   * Release the resources.\r\n   */\n\n\n  destroy() {\n    this.mouseScrollEndInertiaUtil.removeAllListeners();\n    this.touchEndInertiaUtil.removeAllListeners();\n    this.element.removeEventListener('mousewheel', this.handleMousewheel);\n    this.element.removeEventListener('mousedown', this.handleMouseDown);\n    this.element.removeEventListener('mousemove', this.handleMouseMove);\n    this.element.removeEventListener('mouseup', this.handleMouseUp);\n    this.element.removeEventListener('touchstart', this.handleTouchStart);\n    this.element.removeEventListener('touchmove', this.handleTouchMove);\n    this.element.removeEventListener('touchend', this.handleTouchEnd);\n  }\n\n  move(xDistance, yDistance) {\n    this.scrollLeft = this.scrollLeft + xDistance;\n    this.scrollTop = this.scrollTop + yDistance;\n    const eventObject = new _model__WEBPACK_IMPORTED_MODULE_1__[\"ScrollEventObject\"](this.scrollTop, this.scrollLeft, yDistance, xDistance);\n    this.emit('scroll', eventObject);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scroll-sensor.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: getSign, EndInertiaUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSign\", function() { return getSign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EndInertiaUtil\", function() { return EndInertiaUtil; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/**\r\n * Get positive and negative sign of a number.\r\n */\n\nfunction getSign(num) {\n  if (num > 0) {\n    return 1;\n  } else if (num < 0) {\n    return -1;\n  } else if (num === 0) {\n    return 0;\n  } else {\n    return NaN;\n  }\n}\n\nclass PositionStore {\n  constructor(endTimeRange) {\n    this.endTimeRange = endTimeRange;\n\n    _defineProperty(this, \"positions\", []);\n  }\n\n  filterPositions() {\n    const now = new Date();\n    this.positions = this.positions.filter(item => {\n      return now.getTime() - item[0].getTime() <= this.endTimeRange;\n    });\n  }\n\n  push(position) {\n    if (this.positions.length && this.positions[this.positions.length - 1][1] * position < 0) {\n      this.clear();\n    }\n\n    this.positions.push([new Date(), position]);\n    this.filterPositions();\n  }\n\n  getEndSpeed() {\n    this.filterPositions();\n\n    if (this.positions.length === 0 || this.positions.length === 1) {\n      return 0;\n    }\n\n    const start = this.positions[0];\n    const end = this.positions[this.positions.length - 1];\n    return (end[1] - start[1]) / ((end[0].getTime() - start[0].getTime()) / 1000);\n  }\n\n  clear() {\n    this.positions = [];\n  }\n\n}\n/**\r\n * A util to deal scroll end inertia.\r\n * @event inertiaMove Be emitted continuously after call \"end\" method, until the speed drop to 0.\r\n *         Its event object has four property:xSpeed,ySpeed,xDistance,yDistance.\r\n */\n\n\nclass EndInertiaUtil extends events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n  constructor(endTimeRange = 200, xDecelerationPerSecond = Infinity, yDecelerationPerSecond = Infinity, xMaxSpeed = Infinity, yMaxSpeed = Infinity) {\n    super();\n    this.xDecelerationPerSecond = xDecelerationPerSecond;\n    this.yDecelerationPerSecond = yDecelerationPerSecond;\n    this.xMaxSpeed = xMaxSpeed;\n    this.yMaxSpeed = yMaxSpeed;\n\n    _defineProperty(this, \"xPositionStore\", void 0);\n\n    _defineProperty(this, \"yPositionStore\", void 0);\n\n    _defineProperty(this, \"timer\", void 0);\n\n    this.xPositionStore = new PositionStore(endTimeRange);\n    this.yPositionStore = new PositionStore(endTimeRange);\n  }\n\n  setEndTimeRange(endTimeRange) {\n    this.xPositionStore.endTimeRange = endTimeRange;\n    this.yPositionStore.endTimeRange = endTimeRange;\n  }\n\n  setXDecelerationPerSecond(xDecelerationPerSecond) {\n    this.xDecelerationPerSecond = xDecelerationPerSecond;\n  }\n\n  setYDecelerationPerSecond(yDecelerationPerSecond) {\n    this.yDecelerationPerSecond = yDecelerationPerSecond;\n  }\n\n  setXMaxSpeed(xMaxSpeed) {\n    this.xMaxSpeed = xMaxSpeed;\n  }\n\n  setYMaxSpeed(yMaxSpeed) {\n    this.yMaxSpeed = yMaxSpeed;\n  }\n  /**\r\n   * Push a move position.It will be used to calculate the end speed.\r\n   */\n\n\n  push(positionX, positionY) {\n    this.xPositionStore.push(positionX);\n    this.yPositionStore.push(positionY);\n  }\n  /**\r\n   * End a series of position push and start to calculate inertia move distance and emit \"inertiaMove\" event.\r\n   */\n\n\n  end() {\n    if (this.timer) {\n      window.clearInterval(this.timer);\n    }\n\n    const originalXSpeed = this.dealOriginalSpeed(this.xPositionStore.getEndSpeed(), this.xMaxSpeed);\n    const originalYSpeed = this.dealOriginalSpeed(this.yPositionStore.getEndSpeed(), this.yMaxSpeed);\n    const xDecelerationPerSecond = getSign(originalXSpeed) === 0 ? 0 : getSign(originalXSpeed) * this.xDecelerationPerSecond;\n    const yDecelerationPerSecond = getSign(originalYSpeed) === 0 ? 0 : getSign(originalYSpeed) * this.yDecelerationPerSecond;\n    let xSpeed = originalXSpeed;\n    let ySpeed = originalYSpeed;\n    let time = Date.now();\n    this.timer = setInterval(() => {\n      const pastSeconds = (Date.now() - time) / 1000;\n\n      if (pastSeconds === 0) {\n        return;\n      }\n\n      xSpeed = xSpeed - pastSeconds * xDecelerationPerSecond;\n      ySpeed = ySpeed - pastSeconds * yDecelerationPerSecond;\n      time = Date.now();\n\n      if (xSpeed * originalXSpeed > 0 || ySpeed * originalYSpeed > 0) {\n        if (isNaN(xSpeed * originalXSpeed) || xSpeed * originalXSpeed < 0) {\n          xSpeed = 0;\n        }\n\n        if (isNaN(xSpeed * originalYSpeed) || ySpeed * originalYSpeed < 0) {\n          ySpeed = 0;\n        }\n\n        this.emit('inertiaMove', {\n          xSpeed,\n          ySpeed,\n          xDistance: xSpeed * pastSeconds,\n          yDistance: ySpeed * pastSeconds\n        });\n      } else {\n        this.stop();\n      }\n    });\n  }\n  /**\r\n   * Stop the inertia move.\r\n   * It also stop to emit the \"inertiaMove\" event.\r\n   */\n\n\n  stop() {\n    this.xPositionStore.clear();\n    this.yPositionStore.clear();\n    window.clearInterval(this.timer);\n    this.timer = null;\n  }\n\n  dealOriginalSpeed(speed, maxSpeed) {\n    if (Math.abs(speed) > maxSpeed) {\n      return getSign(speed) * maxSpeed;\n    } else {\n      return speed;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/util.ts?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_events__;\n\n//# sourceURL=webpack:///external_%22events%22?");

/***/ })

/******/ });
});