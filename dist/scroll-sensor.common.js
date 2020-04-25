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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/model.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Options {
  constructor(options = {}) {
    _defineProperty(this, "mouseWheelIsEnable", void 0);

    _defineProperty(this, "mouseWheelXSpeed", void 0);

    _defineProperty(this, "mouseWheelYSpeed", void 0);

    _defineProperty(this, "mouseMoveIsEnable", void 0);

    _defineProperty(this, "mouseMoveXSpeed", void 0);

    _defineProperty(this, "mouseMoveYSpeed", void 0);

    _defineProperty(this, "mouseMoveInertiaXDeceleration", void 0);

    _defineProperty(this, "mouseMoveInertiaYDeceleration", void 0);

    _defineProperty(this, "mouseMoveInertiaXMaxSpeed", void 0);

    _defineProperty(this, "mouseMoveInertiaYMaxSpeed", void 0);

    _defineProperty(this, "touchIsEnable", void 0);

    _defineProperty(this, "touchXSpeed", void 0);

    _defineProperty(this, "touchYSpeed", void 0);

    _defineProperty(this, "touchInertiaXDeceleration", void 0);

    _defineProperty(this, "touchInertiaYDeceleration", void 0);

    _defineProperty(this, "touchInertiaXMaxSpeed", void 0);

    _defineProperty(this, "touchInertiaYMaxSpeed", void 0);

    _defineProperty(this, "minScrollTop", void 0);

    _defineProperty(this, "minScrollLeft", void 0);

    _defineProperty(this, "maxScrollTop", void 0);

    _defineProperty(this, "maxScrollLeft", void 0);

    this.mouseWheelIsEnable = this.dealParam(options.mouseWheelIsEnable, true);
    this.mouseWheelXSpeed = this.dealParam(options.mouseWheelXSpeed, 1);
    this.mouseWheelYSpeed = this.dealParam(options.mouseWheelYSpeed, 1);
    this.mouseMoveIsEnable = this.dealParam(options.mouseMoveIsEnable, true);
    this.mouseMoveXSpeed = this.dealParam(options.mouseMoveXSpeed, 1);
    this.mouseMoveYSpeed = this.dealParam(options.mouseMoveYSpeed, 1);
    this.mouseMoveInertiaXDeceleration = this.dealParam(options.mouseMoveInertiaXDeceleration, Infinity);
    this.mouseMoveInertiaYDeceleration = this.dealParam(options.mouseMoveInertiaYDeceleration, Infinity);
    this.mouseMoveInertiaXMaxSpeed = this.dealParam(options.mouseMoveInertiaXMaxSpeed, this.mouseMoveInertiaXDeceleration);
    this.mouseMoveInertiaYMaxSpeed = this.dealParam(options.mouseMoveInertiaYMaxSpeed, this.mouseMoveInertiaYDeceleration);
    this.touchIsEnable = this.dealParam(options.touchIsEnable, true);
    this.touchXSpeed = this.dealParam(options.touchXSpeed, 1);
    this.touchYSpeed = this.dealParam(options.touchYSpeed, 1);
    this.touchInertiaXDeceleration = this.dealParam(options.touchInertiaXDeceleration, Infinity);
    this.touchInertiaYDeceleration = this.dealParam(options.touchInertiaYDeceleration, Infinity);
    this.touchInertiaXMaxSpeed = this.dealParam(options.touchInertiaXMaxSpeed, this.touchInertiaXDeceleration);
    this.touchInertiaYMaxSpeed = this.dealParam(options.touchInertiaYMaxSpeed, this.touchInertiaYDeceleration);
    this.minScrollTop = this.dealParam(options.minScrollTop, 0);
    this.minScrollLeft = this.dealParam(options.minScrollLeft, 0);
    this.maxScrollTop = this.dealParam(options.maxScrollTop, Infinity);
    this.maxScrollLeft = this.dealParam(options.maxScrollLeft, 0);
  }

  dealParam(param, defaultValue) {
    if (param === undefined || param === null) {
      return defaultValue;
    } else {
      return param;
    }
  }

}
class ScrollEventObject {
  constructor(scrollTop, scrollLeft, scrollY, scrollX) {
    this.scrollTop = scrollTop;
    this.scrollLeft = scrollLeft;
    this.scrollY = scrollY;
    this.scrollX = scrollX;
  }

}
// CONCATENATED MODULE: ./src/util.ts
function util_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Get positive and negative sign of a number.
 */

function getSign(num) {
  if (num > 0) {
    return 1;
  } else if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  } else {
    return NaN;
  }
}

class PositionStore {
  constructor(endTimeRange) {
    this.endTimeRange = endTimeRange;

    util_defineProperty(this, "positions", []);
  }

  filterPositions() {
    const now = new Date();
    this.positions = this.positions.filter(item => {
      return now.getTime() - item[0].getTime() <= this.endTimeRange;
    });
  }

  push(position) {
    if (this.positions.length && this.positions[this.positions.length - 1][1] * position < 0) {
      this.clear();
    }

    this.positions.push([new Date(), position]);
    this.filterPositions();
  }

  getEndSpeed() {
    this.filterPositions();

    if (this.positions.length === 0 || this.positions.length === 1) {
      return 0;
    }

    const start = this.positions[0];
    const end = this.positions[this.positions.length - 1];
    return (end[1] - start[1]) / ((end[0].getTime() - start[0].getTime()) / 1000);
  }

  clear() {
    this.positions = [];
  }

}
/**
 * A util to deal scroll end inertia.
 * @event inertiaMove Be emitted continuously after call "end" method, until the speed drop to 0.
 *         Its event object has four property:xSpeed,ySpeed,xDistance,yDistance.
 */


class util_EndInertiaUtil extends external_events_["EventEmitter"] {
  constructor(endTimeRange = 200, xDecelerationPerSecond = Infinity, yDecelerationPerSecond = Infinity, xMaxSpeed = Infinity, yMaxSpeed = Infinity) {
    super();
    this.xDecelerationPerSecond = xDecelerationPerSecond;
    this.yDecelerationPerSecond = yDecelerationPerSecond;
    this.xMaxSpeed = xMaxSpeed;
    this.yMaxSpeed = yMaxSpeed;

    util_defineProperty(this, "xPositionStore", void 0);

    util_defineProperty(this, "yPositionStore", void 0);

    util_defineProperty(this, "timer", void 0);

    this.xPositionStore = new PositionStore(endTimeRange);
    this.yPositionStore = new PositionStore(endTimeRange);
  }

  setEndTimeRange(endTimeRange) {
    this.xPositionStore.endTimeRange = endTimeRange;
    this.yPositionStore.endTimeRange = endTimeRange;
  }

  setXDecelerationPerSecond(xDecelerationPerSecond) {
    this.xDecelerationPerSecond = xDecelerationPerSecond;
  }

  setYDecelerationPerSecond(yDecelerationPerSecond) {
    this.yDecelerationPerSecond = yDecelerationPerSecond;
  }

  setXMaxSpeed(xMaxSpeed) {
    this.xMaxSpeed = xMaxSpeed;
  }

  setYMaxSpeed(yMaxSpeed) {
    this.yMaxSpeed = yMaxSpeed;
  }
  /**
   * Push a move position.It will be used to calculate the end speed.
   */


  push(positionX, positionY) {
    this.xPositionStore.push(positionX);
    this.yPositionStore.push(positionY);
  }
  /**
   * End a series of position push and start to calculate inertia move distance and emit "inertiaMove" event.
   */


  end() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }

    const originalXSpeed = this.dealOriginalSpeed(this.xPositionStore.getEndSpeed(), this.xMaxSpeed);
    const originalYSpeed = this.dealOriginalSpeed(this.yPositionStore.getEndSpeed(), this.yMaxSpeed);
    const xDecelerationPerSecond = getSign(originalXSpeed) === 0 ? 0 : getSign(originalXSpeed) * this.xDecelerationPerSecond;
    const yDecelerationPerSecond = getSign(originalYSpeed) === 0 ? 0 : getSign(originalYSpeed) * this.yDecelerationPerSecond;
    let xSpeed = originalXSpeed;
    let ySpeed = originalYSpeed;
    let time = Date.now();
    this.timer = setInterval(() => {
      const pastSeconds = (Date.now() - time) / 1000;

      if (pastSeconds === 0) {
        return;
      }

      xSpeed = xSpeed - pastSeconds * xDecelerationPerSecond;
      ySpeed = ySpeed - pastSeconds * yDecelerationPerSecond;
      time = Date.now();

      if (xSpeed * originalXSpeed > 0 || ySpeed * originalYSpeed > 0) {
        if (isNaN(xSpeed * originalXSpeed) || xSpeed * originalXSpeed < 0) {
          xSpeed = 0;
        }

        if (isNaN(xSpeed * originalYSpeed) || ySpeed * originalYSpeed < 0) {
          ySpeed = 0;
        }

        this.emit('inertiaMove', {
          xSpeed,
          ySpeed,
          xDistance: xSpeed * pastSeconds,
          yDistance: ySpeed * pastSeconds
        });
      } else {
        this.stop();
      }
    });
  }
  /**
   * Stop the inertia move.
   * It also stop to emit the "inertiaMove" event.
   */


  stop() {
    this.xPositionStore.clear();
    this.yPositionStore.clear();
    window.clearInterval(this.timer);
    this.timer = null;
  }

  dealOriginalSpeed(speed, maxSpeed) {
    if (Math.abs(speed) > maxSpeed) {
      return getSign(speed) * maxSpeed;
    } else {
      return speed;
    }
  }

}
// CONCATENATED MODULE: ./src/scroll-sensor.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSensor", function() { return scroll_sensor_ScrollSensor; });
function scroll_sensor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Scroll sensor main class
 * @event scroll Emit when scroll.
 */

class scroll_sensor_ScrollSensor extends external_events_["EventEmitter"] {
  /**
   * @param {HTMLElement} element The dom element to create the ScrollSensor instance.
   * @param {OptionsInterface} options Options.
   * @param {number} initialScrollTop
   * @param {number} initialScrollLeft
   */
  constructor({
    element,
    options = {},
    initialScrollTop = 0,
    initialScrollLeft = 0
  }) {
    super();

    scroll_sensor_defineProperty(this, "element", void 0);

    scroll_sensor_defineProperty(this, "options", void 0);

    scroll_sensor_defineProperty(this, "_scrollTop", void 0);

    scroll_sensor_defineProperty(this, "_scrollLeft", void 0);

    scroll_sensor_defineProperty(this, "mouseIsScrolling", false);

    scroll_sensor_defineProperty(this, "mouseXLastPosition", void 0);

    scroll_sensor_defineProperty(this, "mouseYLastPosition", void 0);

    scroll_sensor_defineProperty(this, "mouseScrollEndInertiaUtil", new util_EndInertiaUtil());

    scroll_sensor_defineProperty(this, "touchXLastPosition", void 0);

    scroll_sensor_defineProperty(this, "touchYLastPosition", void 0);

    scroll_sensor_defineProperty(this, "touchEndInertiaUtil", new util_EndInertiaUtil());

    scroll_sensor_defineProperty(this, "handleMousewheel", event => {
      if (!this.options.mouseWheelIsEnable) {
        return;
      }

      this.move(event.deltaX * this.options.mouseWheelXSpeed, event.deltaY * this.options.mouseWheelYSpeed);
    });

    scroll_sensor_defineProperty(this, "handleMouseDown", event => {
      if (!this.options.mouseMoveIsEnable) {
        return;
      }

      this.mouseXLastPosition = event.clientX;
      this.mouseYLastPosition = event.clientY;
      this.mouseIsScrolling = true;
      this.mouseScrollEndInertiaUtil.stop();
    });

    scroll_sensor_defineProperty(this, "handleMouseMove", event => {
      if (this.mouseIsScrolling) {
        const xDistance = this.mouseXLastPosition - event.clientX;
        const yDistance = this.mouseYLastPosition - event.clientY;
        this.move(xDistance * this.options.mouseMoveXSpeed, yDistance * this.options.mouseMoveYSpeed);
        this.mouseXLastPosition = event.clientX;
        this.mouseYLastPosition = event.clientY;
        this.mouseScrollEndInertiaUtil.push(this.scrollLeft, this.scrollTop);
      }
    });

    scroll_sensor_defineProperty(this, "handleMouseUp", () => {
      this.mouseIsScrolling = false;
      this.mouseScrollEndInertiaUtil.end();
    });

    scroll_sensor_defineProperty(this, "handleTouchStart", event => {
      if (!this.options.touchIsEnable) {
        return;
      }

      this.touchXLastPosition = Math.round(event.touches[0].clientX);
      this.touchYLastPosition = Math.round(event.touches[0].clientY);
      this.touchEndInertiaUtil.stop();
    });

    scroll_sensor_defineProperty(this, "handleTouchMove", event => {
      if (!this.options.touchIsEnable) {
        return;
      }

      const clientX = Math.round(event.touches[0].clientX);
      const clientY = Math.round(event.touches[0].clientY);
      const xDistance = this.touchXLastPosition - clientX;
      const yDistance = this.touchYLastPosition - clientY;
      this.move(xDistance, yDistance);
      this.touchXLastPosition = clientX;
      this.touchYLastPosition = clientY;
      this.touchEndInertiaUtil.push(this.scrollLeft, this.scrollTop);
    });

    scroll_sensor_defineProperty(this, "handleTouchEnd", () => {
      this.touchEndInertiaUtil.end();
    });

    scroll_sensor_defineProperty(this, "handleInertiaMove", event => {
      this.move(event.xDistance, event.yDistance);
    });

    if (!(element instanceof HTMLElement)) {
      throw new Error('"element" param is must an instance of HTMLElement');
    }

    this.setOptions(options);
    this.element = element;
    this.scrollTop = initialScrollTop;
    this.scrollLeft = initialScrollLeft;
    this.element.addEventListener('mousewheel', this.handleMousewheel);
    this.element.addEventListener('mousedown', this.handleMouseDown);
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseup', this.handleMouseUp);
    this.element.addEventListener('touchstart', this.handleTouchStart);
    this.element.addEventListener('touchmove', this.handleTouchMove);
    this.element.addEventListener('touchend', this.handleTouchEnd);
    this.mouseScrollEndInertiaUtil.on('inertiaMove', this.handleInertiaMove);
    this.touchEndInertiaUtil.on('inertiaMove', this.handleInertiaMove);
  }

  setOptions(options = {}) {
    this.options = new Options(options);
    this.mouseScrollEndInertiaUtil.setXDecelerationPerSecond(this.options.mouseMoveInertiaXDeceleration);
    this.mouseScrollEndInertiaUtil.setYDecelerationPerSecond(this.options.mouseMoveInertiaYDeceleration);
    this.mouseScrollEndInertiaUtil.setXMaxSpeed(this.options.mouseMoveInertiaXMaxSpeed);
    this.mouseScrollEndInertiaUtil.setYMaxSpeed(this.options.mouseMoveInertiaYMaxSpeed);
    this.touchEndInertiaUtil.setXDecelerationPerSecond(this.options.touchInertiaXDeceleration);
    this.touchEndInertiaUtil.setYDecelerationPerSecond(this.options.touchInertiaYDeceleration);
    this.touchEndInertiaUtil.setXMaxSpeed(this.options.touchInertiaXMaxSpeed);
    this.touchEndInertiaUtil.setYMaxSpeed(this.options.touchInertiaYMaxSpeed);
  }

  set scrollTop(scrollTop) {
    if (scrollTop < this.options.minScrollTop) {
      this._scrollTop = this.options.minScrollTop;
    } else if (scrollTop > this.options.maxScrollTop) {
      this._scrollTop = this.options.maxScrollTop;
    } else {
      this._scrollTop = scrollTop;
    }
  }

  get scrollTop() {
    return this._scrollTop;
  }

  set scrollLeft(scrollLeft) {
    if (scrollLeft < this.options.minScrollLeft) {
      this._scrollLeft = this.options.minScrollLeft;
    } else if (scrollLeft > this.options.maxScrollLeft) {
      this._scrollLeft = this.options.maxScrollLeft;
    } else {
      this._scrollLeft = scrollLeft;
    }
  }

  get scrollLeft() {
    return this._scrollLeft;
  }
  /**
   * Release the resources.
   */


  destroy() {
    this.mouseScrollEndInertiaUtil.removeAllListeners();
    this.touchEndInertiaUtil.removeAllListeners();
    this.element.removeEventListener('mousewheel', this.handleMousewheel);
    this.element.removeEventListener('mousedown', this.handleMouseDown);
    this.element.removeEventListener('mousemove', this.handleMouseMove);
    this.element.removeEventListener('mouseup', this.handleMouseUp);
    this.element.removeEventListener('touchstart', this.handleTouchStart);
    this.element.removeEventListener('touchmove', this.handleTouchMove);
    this.element.removeEventListener('touchend', this.handleTouchEnd);
  }

  move(xDistance, yDistance) {
    this.scrollLeft = this.scrollLeft + xDistance;
    this.scrollTop = this.scrollTop + yDistance;
    const eventObject = new ScrollEventObject(this.scrollTop, this.scrollLeft, yDistance, xDistance);
    this.emit('scroll', eventObject);
  }

}

/***/ })
/******/ ]);