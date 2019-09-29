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
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = $getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  var args = [];\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/*! exports provided: Options, ScrollEventObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Options\", function() { return Options; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollEventObject\", function() { return ScrollEventObject; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Options {\n  constructor(options) {\n    _defineProperty(this, \"mouseMoveIsEnable\", void 0);\n\n    _defineProperty(this, \"mouseWheelIsEnable\", void 0);\n\n    _defineProperty(this, \"touchIsEnable\", void 0);\n\n    _defineProperty(this, \"xMouseMoveSpeed\", void 0);\n\n    _defineProperty(this, \"yMouseMoveSpeed\", void 0);\n\n    _defineProperty(this, \"xMouseWheelSpeed\", void 0);\n\n    _defineProperty(this, \"yMouseWheelSpeed\", void 0);\n\n    _defineProperty(this, \"xTouchSpeed\", void 0);\n\n    _defineProperty(this, \"yTouchSpeed\", void 0);\n\n    _defineProperty(this, \"minScrollTop\", void 0);\n\n    _defineProperty(this, \"minScrollLeft\", void 0);\n\n    _defineProperty(this, \"maxScrollTop\", void 0);\n\n    _defineProperty(this, \"maxScrollLeft\", void 0);\n\n    this.mouseMoveIsEnable = options.mouseMoveIsEnable || true;\n    this.mouseWheelIsEnable = options.mouseWheelIsEnable || true;\n    this.touchIsEnable = options.touchIsEnable || true;\n    this.xMouseMoveSpeed = options.xMouseMoveSpeed || 1;\n    this.yMouseMoveSpeed = options.yMouseMoveSpeed || 1;\n    this.xMouseWheelSpeed = options.xMouseWheelSpeed || 1;\n    this.yMouseWheelSpeed = options.yMouseWheelSpeed || 1;\n    this.xTouchSpeed = options.xTouchSpeed || 1;\n    this.yTouchSpeed = options.yTouchSpeed || 1;\n    this.minScrollTop = options.minScrollTop || 0;\n    this.minScrollLeft = options.minScrollLeft || 0;\n    this.maxScrollTop = options.maxScrollTop || Infinity;\n    this.maxScrollLeft = options.maxScrollLeft || Infinity;\n  }\n\n}\nclass ScrollEventObject {\n  constructor(scrollTop, scrollLeft, scrollY, scrollX) {\n    this.scrollTop = scrollTop;\n    this.scrollLeft = scrollLeft;\n    this.scrollY = scrollY;\n    this.scrollX = scrollX;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/model.ts?");

/***/ }),

/***/ "./src/scroll-sensor.ts":
/*!******************************!*\
  !*** ./src/scroll-sensor.ts ***!
  \******************************/
/*! exports provided: ScrollSensor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollSensor\", function() { return ScrollSensor; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/model.ts\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass ScrollSensor extends events__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor({\n    element,\n    options = {},\n    initialScrollTop = 0,\n    initialScrollLeft = 0\n  }) {\n    super();\n\n    _defineProperty(this, \"element\", void 0);\n\n    _defineProperty(this, \"options\", void 0);\n\n    _defineProperty(this, \"scrollTop\", void 0);\n\n    _defineProperty(this, \"scrollLeft\", void 0);\n\n    _defineProperty(this, \"mouseIsScrolling\", void 0);\n\n    _defineProperty(this, \"mouseXLastPosition\", void 0);\n\n    _defineProperty(this, \"mouseYLastPosition\", void 0);\n\n    _defineProperty(this, \"touchXLastPosition\", void 0);\n\n    _defineProperty(this, \"touchYLastPosition\", void 0);\n\n    _defineProperty(this, \"handleMousewheel\", event => {\n      this.move(event.deltaX, event.deltaY);\n    });\n\n    _defineProperty(this, \"handleMouseDown\", event => {\n      console.log(event);\n      this.mouseXLastPosition = event.clientX;\n      this.mouseYLastPosition = event.clientY;\n      this.mouseIsScrolling = true;\n    });\n\n    _defineProperty(this, \"handleMouseMove\", event => {\n      if (this.mouseIsScrolling) {\n        const xDistance = this.mouseXLastPosition - event.clientX;\n        const yDistance = this.mouseYLastPosition - event.clientY;\n        this.move(xDistance, yDistance);\n        this.mouseXLastPosition = event.clientX;\n        this.mouseYLastPosition = event.clientY;\n      }\n    });\n\n    _defineProperty(this, \"handleMouseUp\", event => {\n      this.mouseIsScrolling = false;\n    });\n\n    _defineProperty(this, \"handleTouchStart\", event => {\n      this.touchXLastPosition = Math.round(event.touches[0].clientX);\n      this.touchYLastPosition = Math.round(event.touches[0].clientY);\n    });\n\n    _defineProperty(this, \"handleTouchMove\", event => {\n      const clientX = Math.round(event.touches[0].clientX);\n      const clientY = Math.round(event.touches[0].clientY);\n      const xDistance = this.touchXLastPosition - clientX;\n      const yDistance = this.touchYLastPosition - clientY;\n      this.move(xDistance, yDistance);\n      this.touchXLastPosition = clientX;\n      this.touchYLastPosition = clientY;\n    });\n\n    _defineProperty(this, \"handleTouchEnd\", event => {});\n\n    if (!(element instanceof HTMLElement)) {\n      throw new Error('\"element\" param is must an instance of HTMLElement');\n    }\n\n    this.element = element;\n    this.scrollTop = initialScrollTop;\n    this.scrollLeft = initialScrollTop;\n    this.setOptions(options);\n    this.element.addEventListener('mousewheel', this.handleMousewheel);\n    this.element.addEventListener('mousedown', this.handleMouseDown);\n    this.element.addEventListener('mousemove', this.handleMouseMove);\n    this.element.addEventListener('mouseup', this.handleMouseUp);\n    this.element.addEventListener('touchstart', this.handleTouchStart);\n    this.element.addEventListener('touchmove', this.handleTouchMove);\n    this.element.addEventListener('touchend', this.handleTouchEnd);\n  }\n\n  setOptions(options) {\n    this.options = new _model__WEBPACK_IMPORTED_MODULE_1__[\"Options\"](options);\n  }\n\n  setScrollTop(scrollTop) {\n    if (scrollTop < this.options.minScrollTop) {\n      this.scrollTop = this.options.minScrollTop;\n    } else if (scrollTop > this.options.maxScrollTop) {\n      this.scrollTop = this.options.maxScrollTop;\n    } else {\n      this.scrollTop = scrollTop;\n    }\n  }\n\n  setScrollLeft(scrollLeft) {\n    if (scrollLeft < this.options.minScrollLeft) {\n      this.scrollLeft = this.options.minScrollLeft;\n    } else if (scrollLeft > this.options.maxScrollLeft) {\n      this.scrollLeft = this.options.maxScrollLeft;\n    } else {\n      this.scrollLeft = scrollLeft;\n    }\n  }\n\n  move(xDistance, yDistance) {\n    this.setScrollLeft(this.scrollLeft + xDistance);\n    this.setScrollTop(this.scrollTop + yDistance);\n    super.emit('scroll', new _model__WEBPACK_IMPORTED_MODULE_1__[\"ScrollEventObject\"](this.scrollTop, this.scrollLeft, yDistance, xDistance));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scroll-sensor.ts?");

/***/ })

/******/ });
});