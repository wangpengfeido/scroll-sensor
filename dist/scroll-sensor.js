(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null;\nvar ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {\n  return Function.prototype.apply.call(target, receiver, args);\n};\nvar ReflectOwnKeys;\n\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys;\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n};\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\n\nmodule.exports = EventEmitter; // Backwards-compat with node 0.10.x\n\nEventEmitter.EventEmitter = EventEmitter;\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\n\nvar defaultMaxListeners = 10;\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function () {\n    return defaultMaxListeners;\n  },\n  set: function (arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function () {\n  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n}; // Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\n\n\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n\n  var doError = type === 'error';\n  var events = this._events;\n  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.\n\n  if (doError) {\n    var er;\n    if (args.length > 0) er = args[0];\n\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    } // At least give some kind of context to the user\n\n\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n  if (handler === undefined) return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n\n    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n\n      events = target._events;\n    }\n\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    } // Check for listener leak\n\n\n    m = $getMaxListeners(target);\n\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true; // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n\n      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener = function prependListener(type, listener) {\n  return _addListener(this, type, listener, true);\n};\n\nfunction onceWrapper() {\n  var args = [];\n\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = {\n    fired: false,\n    wrapFn: undefined,\n    target: target,\n    type: type,\n    listener: listener\n  };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  this.prependListener(type, _onceWrap(this, type, listener));\n  return this;\n}; // Emits a 'removeListener' event if and only if the listener was removed.\n\n\nEventEmitter.prototype.removeListener = function removeListener(type, listener) {\n  var list, events, position, i, originalListener;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = this._events;\n  if (events === undefined) return this;\n  list = events[type];\n  if (list === undefined) return this;\n\n  if (list === listener || list.listener === listener) {\n    if (--this._eventsCount === 0) this._events = Object.create(null);else {\n      delete events[type];\n      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);\n    }\n  } else if (typeof list !== 'function') {\n    position = -1;\n\n    for (i = list.length - 1; i >= 0; i--) {\n      if (list[i] === listener || list[i].listener === listener) {\n        originalListener = list[i].listener;\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0) return this;\n    if (position === 0) list.shift();else {\n      spliceOne(list, position);\n    }\n    if (list.length === 1) events[type] = list[0];\n    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {\n  var listeners, events, i;\n  events = this._events;\n  if (events === undefined) return this; // not listening for removeListener, no need to emit\n\n  if (events.removeListener === undefined) {\n    if (arguments.length === 0) {\n      this._events = Object.create(null);\n      this._eventsCount = 0;\n    } else if (events[type] !== undefined) {\n      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];\n    }\n\n    return this;\n  } // emit removeListener for all listeners on all events\n\n\n  if (arguments.length === 0) {\n    var keys = Object.keys(events);\n    var key;\n\n    for (i = 0; i < keys.length; ++i) {\n      key = keys[i];\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n\n    this.removeAllListeners('removeListener');\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n    return this;\n  }\n\n  listeners = events[type];\n\n  if (typeof listeners === 'function') {\n    this.removeListener(type, listeners);\n  } else if (listeners !== undefined) {\n    // LIFO order\n    for (i = listeners.length - 1; i >= 0; i--) {\n      this.removeListener(type, listeners[i]);\n    }\n  }\n\n  return this;\n};\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n  if (events === undefined) return [];\n  var evlistener = events[type];\n  if (evlistener === undefined) return [];\n  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function (emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\n\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n\n  for (var i = 0; i < n; ++i) copy[i] = arr[i];\n\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++) list[index] = list[index + 1];\n\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n\n  return ret;\n}\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Options = /** @class */ (function () {\r\n    function Options(options) {\r\n        if (options === void 0) { options = {}; }\r\n        this.mouseWheelIsEnable = this.dealParam(options.mouseWheelIsEnable, true);\r\n        this.mouseWheelXSpeed = this.dealParam(options.mouseWheelXSpeed, 1);\r\n        this.mouseWheelYSpeed = this.dealParam(options.mouseWheelYSpeed, 1);\r\n        this.mouseMoveIsEnable = this.dealParam(options.mouseMoveIsEnable, true);\r\n        this.mouseMoveXSpeed = this.dealParam(options.mouseMoveXSpeed, 1);\r\n        this.mouseMoveYSpeed = this.dealParam(options.mouseMoveYSpeed, 1);\r\n        this.mouseMoveInertiaXDeceleration = this.dealParam(options.mouseMoveInertiaXDeceleration, Infinity);\r\n        this.mouseMoveInertiaYDeceleration = this.dealParam(options.mouseMoveInertiaYDeceleration, Infinity);\r\n        this.mouseMoveInertiaXMaxSpeed = this.dealParam(options.mouseMoveInertiaXMaxSpeed, this.mouseMoveInertiaXDeceleration);\r\n        this.mouseMoveInertiaYMaxSpeed = this.dealParam(options.mouseMoveInertiaYMaxSpeed, this.mouseMoveInertiaYDeceleration);\r\n        this.touchIsEnable = this.dealParam(options.touchIsEnable, true);\r\n        this.touchXSpeed = this.dealParam(options.touchXSpeed, 1);\r\n        this.touchYSpeed = this.dealParam(options.touchYSpeed, 1);\r\n        this.touchInertiaXDeceleration = this.dealParam(options.touchInertiaXDeceleration, Infinity);\r\n        this.touchInertiaYDeceleration = this.dealParam(options.touchInertiaYDeceleration, Infinity);\r\n        this.touchInertiaXMaxSpeed = this.dealParam(options.touchInertiaXMaxSpeed, this.touchInertiaXDeceleration);\r\n        this.touchInertiaYMaxSpeed = this.dealParam(options.touchInertiaYMaxSpeed, this.touchInertiaYDeceleration);\r\n        this.minScrollTop = this.dealParam(options.minScrollTop, 0);\r\n        this.minScrollLeft = this.dealParam(options.minScrollLeft, 0);\r\n        this.maxScrollTop = this.dealParam(options.maxScrollTop, Infinity);\r\n        this.maxScrollLeft = this.dealParam(options.maxScrollLeft, 0);\r\n    }\r\n    Options.prototype.dealParam = function (param, defaultValue) {\r\n        if (param === undefined || param === null) {\r\n            return defaultValue;\r\n        }\r\n        else {\r\n            return param;\r\n        }\r\n    };\r\n    return Options;\r\n}());\r\nexports.Options = Options;\r\nvar ScrollEventObject = /** @class */ (function () {\r\n    function ScrollEventObject(\r\n    // current total distance to the top and left\r\n    scrollTop, scrollLeft, \r\n    // latest scroll distance on the x-axis and y-axis\r\n    scrollY, scrollX) {\r\n        this.scrollTop = scrollTop;\r\n        this.scrollLeft = scrollLeft;\r\n        this.scrollY = scrollY;\r\n        this.scrollX = scrollX;\r\n    }\r\n    return ScrollEventObject;\r\n}());\r\nexports.ScrollEventObject = ScrollEventObject;\r\n\n\n//# sourceURL=webpack:///./src/model.ts?");

/***/ }),

/***/ "./src/scroll-sensor.ts":
/*!******************************!*\
  !*** ./src/scroll-sensor.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar events_1 = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\r\nvar model_1 = __webpack_require__(/*! ./model */ \"./src/model.ts\");\r\nvar util_1 = __webpack_require__(/*! ./util */ \"./src/util.ts\");\r\n/**\r\n * Scroll sensor main class\r\n * @event scroll Emit when scroll.\r\n */\r\nvar ScrollSensor = /** @class */ (function (_super) {\r\n    __extends(ScrollSensor, _super);\r\n    /**\r\n     * @param {HTMLElement} element The dom element to create the ScrollSensor instance.\r\n     * @param {OptionsInterface} options Options.\r\n     * @param {number} initialScrollTop\r\n     * @param {number} initialScrollLeft\r\n     */\r\n    function ScrollSensor(_a) {\r\n        var element = _a.element, _b = _a.options, options = _b === void 0 ? {} : _b, _c = _a.initialScrollTop, initialScrollTop = _c === void 0 ? 0 : _c, _d = _a.initialScrollLeft, initialScrollLeft = _d === void 0 ? 0 : _d;\r\n        var _this = _super.call(this) || this;\r\n        _this.mouseIsScrolling = false;\r\n        _this.mouseScrollEndInertiaUtil = new util_1.EndInertiaUtil();\r\n        _this.touchEndInertiaUtil = new util_1.EndInertiaUtil();\r\n        _this.handleMousewheel = function (event) {\r\n            if (!_this.options.mouseWheelIsEnable) {\r\n                return;\r\n            }\r\n            _this.move(event.deltaX * _this.options.mouseWheelXSpeed, event.deltaY * _this.options.mouseWheelYSpeed);\r\n        };\r\n        _this.handleMouseDown = function (event) {\r\n            if (!_this.options.mouseMoveIsEnable) {\r\n                return;\r\n            }\r\n            _this.mouseXLastPosition = event.clientX;\r\n            _this.mouseYLastPosition = event.clientY;\r\n            _this.mouseIsScrolling = true;\r\n            _this.mouseScrollEndInertiaUtil.stop();\r\n        };\r\n        _this.handleMouseMove = function (event) {\r\n            if (_this.mouseIsScrolling) {\r\n                var xDistance = _this.mouseXLastPosition - event.clientX;\r\n                var yDistance = _this.mouseYLastPosition - event.clientY;\r\n                _this.move(xDistance * _this.options.mouseMoveXSpeed, yDistance * _this.options.mouseMoveYSpeed);\r\n                _this.mouseXLastPosition = event.clientX;\r\n                _this.mouseYLastPosition = event.clientY;\r\n                _this.mouseScrollEndInertiaUtil.push(_this.scrollLeft, _this.scrollTop);\r\n            }\r\n        };\r\n        _this.handleMouseUp = function () {\r\n            _this.mouseIsScrolling = false;\r\n            _this.mouseScrollEndInertiaUtil.end();\r\n        };\r\n        _this.handleTouchStart = function (event) {\r\n            if (!_this.options.touchIsEnable) {\r\n                return;\r\n            }\r\n            _this.touchXLastPosition = Math.round(event.touches[0].clientX);\r\n            _this.touchYLastPosition = Math.round(event.touches[0].clientY);\r\n            _this.touchEndInertiaUtil.stop();\r\n        };\r\n        _this.handleTouchMove = function (event) {\r\n            if (!_this.options.touchIsEnable) {\r\n                return;\r\n            }\r\n            var clientX = Math.round(event.touches[0].clientX);\r\n            var clientY = Math.round(event.touches[0].clientY);\r\n            var xDistance = _this.touchXLastPosition - clientX;\r\n            var yDistance = _this.touchYLastPosition - clientY;\r\n            _this.move(xDistance, yDistance);\r\n            _this.touchXLastPosition = clientX;\r\n            _this.touchYLastPosition = clientY;\r\n            _this.touchEndInertiaUtil.push(_this.scrollLeft, _this.scrollTop);\r\n        };\r\n        _this.handleTouchEnd = function () {\r\n            _this.touchEndInertiaUtil.end();\r\n        };\r\n        _this.handleInertiaMove = function (event) {\r\n            _this.move(event.xDistance, event.yDistance);\r\n        };\r\n        if (!(element instanceof HTMLElement)) {\r\n            throw new Error('\"element\" param is must an instance of HTMLElement');\r\n        }\r\n        _this.setOptions(options);\r\n        _this.element = element;\r\n        _this.scrollTop = initialScrollTop;\r\n        _this.scrollLeft = initialScrollLeft;\r\n        _this.element.addEventListener('mousewheel', _this.handleMousewheel);\r\n        _this.element.addEventListener('mousedown', _this.handleMouseDown);\r\n        _this.element.addEventListener('mousemove', _this.handleMouseMove);\r\n        _this.element.addEventListener('mouseup', _this.handleMouseUp);\r\n        _this.element.addEventListener('touchstart', _this.handleTouchStart);\r\n        _this.element.addEventListener('touchmove', _this.handleTouchMove);\r\n        _this.element.addEventListener('touchend', _this.handleTouchEnd);\r\n        _this.mouseScrollEndInertiaUtil.on('inertiaMove', _this.handleInertiaMove);\r\n        _this.touchEndInertiaUtil.on('inertiaMove', _this.handleInertiaMove);\r\n        return _this;\r\n    }\r\n    ScrollSensor.prototype.setOptions = function (options) {\r\n        if (options === void 0) { options = {}; }\r\n        this.options = new model_1.Options(options);\r\n        this.mouseScrollEndInertiaUtil.setXDecelerationPerSecond(this.options.mouseMoveInertiaXDeceleration);\r\n        this.mouseScrollEndInertiaUtil.setYDecelerationPerSecond(this.options.mouseMoveInertiaYDeceleration);\r\n        this.mouseScrollEndInertiaUtil.setXMaxSpeed(this.options.mouseMoveInertiaXMaxSpeed);\r\n        this.mouseScrollEndInertiaUtil.setYMaxSpeed(this.options.mouseMoveInertiaYMaxSpeed);\r\n        this.touchEndInertiaUtil.setXDecelerationPerSecond(this.options.touchInertiaXDeceleration);\r\n        this.touchEndInertiaUtil.setYDecelerationPerSecond(this.options.touchInertiaYDeceleration);\r\n        this.touchEndInertiaUtil.setXMaxSpeed(this.options.touchInertiaXMaxSpeed);\r\n        this.touchEndInertiaUtil.setYMaxSpeed(this.options.touchInertiaYMaxSpeed);\r\n    };\r\n    Object.defineProperty(ScrollSensor.prototype, \"scrollTop\", {\r\n        get: function () {\r\n            return this._scrollTop;\r\n        },\r\n        set: function (scrollTop) {\r\n            if (scrollTop < this.options.minScrollTop) {\r\n                this._scrollTop = this.options.minScrollTop;\r\n            }\r\n            else if (scrollTop > this.options.maxScrollTop) {\r\n                this._scrollTop = this.options.maxScrollTop;\r\n            }\r\n            else {\r\n                this._scrollTop = scrollTop;\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(ScrollSensor.prototype, \"scrollLeft\", {\r\n        get: function () {\r\n            return this._scrollLeft;\r\n        },\r\n        set: function (scrollLeft) {\r\n            if (scrollLeft < this.options.minScrollLeft) {\r\n                this._scrollLeft = this.options.minScrollLeft;\r\n            }\r\n            else if (scrollLeft > this.options.maxScrollLeft) {\r\n                this._scrollLeft = this.options.maxScrollLeft;\r\n            }\r\n            else {\r\n                this._scrollLeft = scrollLeft;\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * Release the resources.\r\n     */\r\n    ScrollSensor.prototype.destroy = function () {\r\n        this.mouseScrollEndInertiaUtil.removeAllListeners();\r\n        this.touchEndInertiaUtil.removeAllListeners();\r\n        this.element.removeEventListener('mousewheel', this.handleMousewheel);\r\n        this.element.removeEventListener('mousedown', this.handleMouseDown);\r\n        this.element.removeEventListener('mousemove', this.handleMouseMove);\r\n        this.element.removeEventListener('mouseup', this.handleMouseUp);\r\n        this.element.removeEventListener('touchstart', this.handleTouchStart);\r\n        this.element.removeEventListener('touchmove', this.handleTouchMove);\r\n        this.element.removeEventListener('touchend', this.handleTouchEnd);\r\n    };\r\n    ScrollSensor.prototype.move = function (xDistance, yDistance) {\r\n        this.scrollLeft = this.scrollLeft + xDistance;\r\n        this.scrollTop = this.scrollTop + yDistance;\r\n        var eventObject = new model_1.ScrollEventObject(this.scrollTop, this.scrollLeft, yDistance, xDistance);\r\n        this.emit('scroll', eventObject);\r\n    };\r\n    return ScrollSensor;\r\n}(events_1.EventEmitter));\r\nexports.ScrollSensor = ScrollSensor;\r\n\n\n//# sourceURL=webpack:///./src/scroll-sensor.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar events_1 = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\r\n/**\r\n * Get positive and negative sign of a number.\r\n */\r\nfunction getSign(num) {\r\n    if (num > 0) {\r\n        return 1;\r\n    }\r\n    else if (num < 0) {\r\n        return -1;\r\n    }\r\n    else if (num === 0) {\r\n        return 0;\r\n    }\r\n    else {\r\n        return NaN;\r\n    }\r\n}\r\nexports.getSign = getSign;\r\nvar PositionStore = /** @class */ (function () {\r\n    function PositionStore(endTimeRange) {\r\n        this.endTimeRange = endTimeRange;\r\n        this.positions = [];\r\n    }\r\n    PositionStore.prototype.filterPositions = function () {\r\n        var _this = this;\r\n        var now = new Date();\r\n        this.positions = this.positions.filter(function (item) {\r\n            return now.getTime() - item[0].getTime() <= _this.endTimeRange;\r\n        });\r\n    };\r\n    PositionStore.prototype.push = function (position) {\r\n        if (this.positions.length && (this.positions[this.positions.length - 1][1] * position < 0)) {\r\n            this.clear();\r\n        }\r\n        this.positions.push([new Date(), position]);\r\n        this.filterPositions();\r\n    };\r\n    PositionStore.prototype.getEndSpeed = function () {\r\n        this.filterPositions();\r\n        if (this.positions.length === 0 || this.positions.length === 1) {\r\n            return 0;\r\n        }\r\n        var start = this.positions[0];\r\n        var end = this.positions[this.positions.length - 1];\r\n        return (end[1] - start[1]) / ((end[0].getTime() - start[0].getTime()) / 1000);\r\n    };\r\n    PositionStore.prototype.clear = function () {\r\n        this.positions = [];\r\n    };\r\n    return PositionStore;\r\n}());\r\n/**\r\n * A util to deal scroll end inertia.\r\n * @event inertiaMove Be emitted continuously after call \"end\" method, until the speed drop to 0.\r\n *         Its event object has four property:xSpeed,ySpeed,xDistance,yDistance.\r\n */\r\nvar EndInertiaUtil = /** @class */ (function (_super) {\r\n    __extends(EndInertiaUtil, _super);\r\n    function EndInertiaUtil(endTimeRange, xDecelerationPerSecond, yDecelerationPerSecond, xMaxSpeed, yMaxSpeed) {\r\n        if (endTimeRange === void 0) { endTimeRange = 200; }\r\n        if (xDecelerationPerSecond === void 0) { xDecelerationPerSecond = Infinity; }\r\n        if (yDecelerationPerSecond === void 0) { yDecelerationPerSecond = Infinity; }\r\n        if (xMaxSpeed === void 0) { xMaxSpeed = Infinity; }\r\n        if (yMaxSpeed === void 0) { yMaxSpeed = Infinity; }\r\n        var _this = _super.call(this) || this;\r\n        _this.xDecelerationPerSecond = xDecelerationPerSecond;\r\n        _this.yDecelerationPerSecond = yDecelerationPerSecond;\r\n        _this.xMaxSpeed = xMaxSpeed;\r\n        _this.yMaxSpeed = yMaxSpeed;\r\n        _this.xPositionStore = new PositionStore(endTimeRange);\r\n        _this.yPositionStore = new PositionStore(endTimeRange);\r\n        return _this;\r\n    }\r\n    EndInertiaUtil.prototype.setEndTimeRange = function (endTimeRange) {\r\n        this.xPositionStore.endTimeRange = endTimeRange;\r\n        this.yPositionStore.endTimeRange = endTimeRange;\r\n    };\r\n    EndInertiaUtil.prototype.setXDecelerationPerSecond = function (xDecelerationPerSecond) {\r\n        this.xDecelerationPerSecond = xDecelerationPerSecond;\r\n    };\r\n    EndInertiaUtil.prototype.setYDecelerationPerSecond = function (yDecelerationPerSecond) {\r\n        this.yDecelerationPerSecond = yDecelerationPerSecond;\r\n    };\r\n    EndInertiaUtil.prototype.setXMaxSpeed = function (xMaxSpeed) {\r\n        this.xMaxSpeed = xMaxSpeed;\r\n    };\r\n    EndInertiaUtil.prototype.setYMaxSpeed = function (yMaxSpeed) {\r\n        this.yMaxSpeed = yMaxSpeed;\r\n    };\r\n    /**\r\n     * Push a move position.It will be used to calculate the end speed.\r\n     */\r\n    EndInertiaUtil.prototype.push = function (positionX, positionY) {\r\n        this.xPositionStore.push(positionX);\r\n        this.yPositionStore.push(positionY);\r\n    };\r\n    /**\r\n     * End a series of position push and start to calculate inertia move distance and emit \"inertiaMove\" event.\r\n     */\r\n    EndInertiaUtil.prototype.end = function () {\r\n        var _this = this;\r\n        if (this.timer) {\r\n            window.clearInterval(this.timer);\r\n        }\r\n        var originalXSpeed = this.dealOriginalSpeed(this.xPositionStore.getEndSpeed(), this.xMaxSpeed);\r\n        var originalYSpeed = this.dealOriginalSpeed(this.yPositionStore.getEndSpeed(), this.yMaxSpeed);\r\n        var xDecelerationPerSecond = getSign(originalXSpeed) === 0 ? 0 : getSign(originalXSpeed) * this.xDecelerationPerSecond;\r\n        var yDecelerationPerSecond = getSign(originalYSpeed) === 0 ? 0 : getSign(originalYSpeed) * this.yDecelerationPerSecond;\r\n        var xSpeed = originalXSpeed;\r\n        var ySpeed = originalYSpeed;\r\n        var time = Date.now();\r\n        this.timer = setInterval(function () {\r\n            var pastSeconds = (Date.now() - time) / 1000;\r\n            if (pastSeconds === 0) {\r\n                return;\r\n            }\r\n            xSpeed = xSpeed - pastSeconds * xDecelerationPerSecond;\r\n            ySpeed = ySpeed - pastSeconds * yDecelerationPerSecond;\r\n            time = Date.now();\r\n            if (xSpeed * originalXSpeed > 0 || ySpeed * originalYSpeed > 0) {\r\n                if (isNaN(xSpeed * originalXSpeed) || xSpeed * originalXSpeed < 0) {\r\n                    xSpeed = 0;\r\n                }\r\n                if (isNaN(xSpeed * originalYSpeed) || ySpeed * originalYSpeed < 0) {\r\n                    ySpeed = 0;\r\n                }\r\n                _this.emit('inertiaMove', {\r\n                    xSpeed: xSpeed,\r\n                    ySpeed: ySpeed,\r\n                    xDistance: xSpeed * pastSeconds,\r\n                    yDistance: ySpeed * pastSeconds,\r\n                });\r\n            }\r\n            else {\r\n                _this.stop();\r\n            }\r\n        });\r\n    };\r\n    /**\r\n     * Stop the inertia move.\r\n     * It also stop to emit the \"inertiaMove\" event.\r\n     */\r\n    EndInertiaUtil.prototype.stop = function () {\r\n        this.xPositionStore.clear();\r\n        this.yPositionStore.clear();\r\n        window.clearInterval(this.timer);\r\n        this.timer = null;\r\n    };\r\n    EndInertiaUtil.prototype.dealOriginalSpeed = function (speed, maxSpeed) {\r\n        if (Math.abs(speed) > maxSpeed) {\r\n            return getSign(speed) * maxSpeed;\r\n        }\r\n        else {\r\n            return speed;\r\n        }\r\n    };\r\n    return EndInertiaUtil;\r\n}(events_1.EventEmitter));\r\nexports.EndInertiaUtil = EndInertiaUtil;\r\n\n\n//# sourceURL=webpack:///./src/util.ts?");

/***/ })

/******/ });
});