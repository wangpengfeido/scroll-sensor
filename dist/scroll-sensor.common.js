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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(0);
var model_1 = __webpack_require__(2);
var util_1 = __webpack_require__(3);
/**
 * Scroll sensor main class
 * @event scroll Emit when scroll.
 */
var ScrollSensor = /** @class */ (function (_super) {
    __extends(ScrollSensor, _super);
    /**
     * @param {HTMLElement} element The dom element to create the ScrollSensor instance.
     * @param {OptionsInterface} options Options.
     * @param {number} initialScrollTop
     * @param {number} initialScrollLeft
     */
    function ScrollSensor(_a) {
        var element = _a.element, _b = _a.options, options = _b === void 0 ? {} : _b, _c = _a.initialScrollTop, initialScrollTop = _c === void 0 ? 0 : _c, _d = _a.initialScrollLeft, initialScrollLeft = _d === void 0 ? 0 : _d;
        var _this = _super.call(this) || this;
        _this.mouseIsScrolling = false;
        _this.mouseScrollEndInertiaUtil = new util_1.EndInertiaUtil();
        _this.touchEndInertiaUtil = new util_1.EndInertiaUtil();
        _this.handleMousewheel = function (event) {
            if (!_this.options.mouseWheelIsEnable) {
                return;
            }
            _this.move(event.deltaX * _this.options.mouseWheelXSpeed, event.deltaY * _this.options.mouseWheelYSpeed);
        };
        _this.handleMouseDown = function (event) {
            if (!_this.options.mouseMoveIsEnable) {
                return;
            }
            _this.mouseXLastPosition = event.clientX;
            _this.mouseYLastPosition = event.clientY;
            _this.mouseIsScrolling = true;
            _this.mouseScrollEndInertiaUtil.stop();
        };
        _this.handleMouseMove = function (event) {
            if (_this.mouseIsScrolling) {
                var xDistance = _this.mouseXLastPosition - event.clientX;
                var yDistance = _this.mouseYLastPosition - event.clientY;
                _this.move(xDistance * _this.options.mouseMoveXSpeed, yDistance * _this.options.mouseMoveYSpeed);
                _this.mouseXLastPosition = event.clientX;
                _this.mouseYLastPosition = event.clientY;
                _this.mouseScrollEndInertiaUtil.push(_this.scrollLeft, _this.scrollTop);
            }
        };
        _this.handleMouseUp = function () {
            _this.mouseIsScrolling = false;
            _this.mouseScrollEndInertiaUtil.end();
        };
        _this.handleTouchStart = function (event) {
            if (!_this.options.touchIsEnable) {
                return;
            }
            _this.touchXLastPosition = Math.round(event.touches[0].clientX);
            _this.touchYLastPosition = Math.round(event.touches[0].clientY);
            _this.touchEndInertiaUtil.stop();
        };
        _this.handleTouchMove = function (event) {
            if (!_this.options.touchIsEnable) {
                return;
            }
            var clientX = Math.round(event.touches[0].clientX);
            var clientY = Math.round(event.touches[0].clientY);
            var xDistance = _this.touchXLastPosition - clientX;
            var yDistance = _this.touchYLastPosition - clientY;
            _this.move(xDistance, yDistance);
            _this.touchXLastPosition = clientX;
            _this.touchYLastPosition = clientY;
            _this.touchEndInertiaUtil.push(_this.scrollLeft, _this.scrollTop);
        };
        _this.handleTouchEnd = function () {
            _this.touchEndInertiaUtil.end();
        };
        _this.handleInertiaMove = function (event) {
            _this.move(event.xDistance, event.yDistance);
        };
        if (!(element instanceof HTMLElement)) {
            throw new Error('"element" param is must an instance of HTMLElement');
        }
        _this.setOptions(options);
        _this.element = element;
        _this.scrollTop = initialScrollTop;
        _this.scrollLeft = initialScrollLeft;
        _this.element.addEventListener('mousewheel', _this.handleMousewheel);
        _this.element.addEventListener('mousedown', _this.handleMouseDown);
        _this.element.addEventListener('mousemove', _this.handleMouseMove);
        _this.element.addEventListener('mouseup', _this.handleMouseUp);
        _this.element.addEventListener('touchstart', _this.handleTouchStart);
        _this.element.addEventListener('touchmove', _this.handleTouchMove);
        _this.element.addEventListener('touchend', _this.handleTouchEnd);
        _this.mouseScrollEndInertiaUtil.on('inertiaMove', _this.handleInertiaMove);
        _this.touchEndInertiaUtil.on('inertiaMove', _this.handleInertiaMove);
        return _this;
    }
    ScrollSensor.prototype.setOptions = function (options) {
        if (options === void 0) { options = {}; }
        this.options = new model_1.Options(options);
        this.mouseScrollEndInertiaUtil.setXDecelerationPerSecond(this.options.mouseMoveInertiaXDeceleration);
        this.mouseScrollEndInertiaUtil.setYDecelerationPerSecond(this.options.mouseMoveInertiaYDeceleration);
        this.mouseScrollEndInertiaUtil.setXMaxSpeed(this.options.mouseMoveInertiaXMaxSpeed);
        this.mouseScrollEndInertiaUtil.setYMaxSpeed(this.options.mouseMoveInertiaYMaxSpeed);
        this.touchEndInertiaUtil.setXDecelerationPerSecond(this.options.touchInertiaXDeceleration);
        this.touchEndInertiaUtil.setYDecelerationPerSecond(this.options.touchInertiaYDeceleration);
        this.touchEndInertiaUtil.setXMaxSpeed(this.options.touchInertiaXMaxSpeed);
        this.touchEndInertiaUtil.setYMaxSpeed(this.options.touchInertiaYMaxSpeed);
    };
    Object.defineProperty(ScrollSensor.prototype, "scrollTop", {
        get: function () {
            return this._scrollTop;
        },
        set: function (scrollTop) {
            if (scrollTop < this.options.minScrollTop) {
                this._scrollTop = this.options.minScrollTop;
            }
            else if (scrollTop > this.options.maxScrollTop) {
                this._scrollTop = this.options.maxScrollTop;
            }
            else {
                this._scrollTop = scrollTop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollSensor.prototype, "scrollLeft", {
        get: function () {
            return this._scrollLeft;
        },
        set: function (scrollLeft) {
            if (scrollLeft < this.options.minScrollLeft) {
                this._scrollLeft = this.options.minScrollLeft;
            }
            else if (scrollLeft > this.options.maxScrollLeft) {
                this._scrollLeft = this.options.maxScrollLeft;
            }
            else {
                this._scrollLeft = scrollLeft;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Release the resources.
     */
    ScrollSensor.prototype.destroy = function () {
        this.mouseScrollEndInertiaUtil.removeAllListeners();
        this.touchEndInertiaUtil.removeAllListeners();
        this.element.removeEventListener('mousewheel', this.handleMousewheel);
        this.element.removeEventListener('mousedown', this.handleMouseDown);
        this.element.removeEventListener('mousemove', this.handleMouseMove);
        this.element.removeEventListener('mouseup', this.handleMouseUp);
        this.element.removeEventListener('touchstart', this.handleTouchStart);
        this.element.removeEventListener('touchmove', this.handleTouchMove);
        this.element.removeEventListener('touchend', this.handleTouchEnd);
    };
    ScrollSensor.prototype.move = function (xDistance, yDistance) {
        this.scrollLeft = this.scrollLeft + xDistance;
        this.scrollTop = this.scrollTop + yDistance;
        var eventObject = new model_1.ScrollEventObject(this.scrollTop, this.scrollLeft, yDistance, xDistance);
        this.emit('scroll', eventObject);
    };
    return ScrollSensor;
}(events_1.EventEmitter));
exports.ScrollSensor = ScrollSensor;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Options = /** @class */ (function () {
    function Options(options) {
        if (options === void 0) { options = {}; }
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
    Options.prototype.dealParam = function (param, defaultValue) {
        if (param === undefined || param === null) {
            return defaultValue;
        }
        else {
            return param;
        }
    };
    return Options;
}());
exports.Options = Options;
var ScrollEventObject = /** @class */ (function () {
    function ScrollEventObject(
    // current total distance to the top and left
    scrollTop, scrollLeft, 
    // latest scroll distance on the x-axis and y-axis
    scrollY, scrollX) {
        this.scrollTop = scrollTop;
        this.scrollLeft = scrollLeft;
        this.scrollY = scrollY;
        this.scrollX = scrollX;
    }
    return ScrollEventObject;
}());
exports.ScrollEventObject = ScrollEventObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(0);
/**
 * Get positive and negative sign of a number.
 */
function getSign(num) {
    if (num > 0) {
        return 1;
    }
    else if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 0;
    }
    else {
        return NaN;
    }
}
exports.getSign = getSign;
var PositionStore = /** @class */ (function () {
    function PositionStore(endTimeRange) {
        this.endTimeRange = endTimeRange;
        this.positions = [];
    }
    PositionStore.prototype.filterPositions = function () {
        var _this = this;
        var now = new Date();
        this.positions = this.positions.filter(function (item) {
            return now.getTime() - item[0].getTime() <= _this.endTimeRange;
        });
    };
    PositionStore.prototype.push = function (position) {
        if (this.positions.length && (this.positions[this.positions.length - 1][1] * position < 0)) {
            this.clear();
        }
        this.positions.push([new Date(), position]);
        this.filterPositions();
    };
    PositionStore.prototype.getEndSpeed = function () {
        this.filterPositions();
        if (this.positions.length === 0 || this.positions.length === 1) {
            return 0;
        }
        var start = this.positions[0];
        var end = this.positions[this.positions.length - 1];
        return (end[1] - start[1]) / ((end[0].getTime() - start[0].getTime()) / 1000);
    };
    PositionStore.prototype.clear = function () {
        this.positions = [];
    };
    return PositionStore;
}());
/**
 * A util to deal scroll end inertia.
 * @event inertiaMove Be emitted continuously after call "end" method, until the speed drop to 0.
 *         Its event object has four property:xSpeed,ySpeed,xDistance,yDistance.
 */
var EndInertiaUtil = /** @class */ (function (_super) {
    __extends(EndInertiaUtil, _super);
    function EndInertiaUtil(endTimeRange, xDecelerationPerSecond, yDecelerationPerSecond, xMaxSpeed, yMaxSpeed) {
        if (endTimeRange === void 0) { endTimeRange = 200; }
        if (xDecelerationPerSecond === void 0) { xDecelerationPerSecond = Infinity; }
        if (yDecelerationPerSecond === void 0) { yDecelerationPerSecond = Infinity; }
        if (xMaxSpeed === void 0) { xMaxSpeed = Infinity; }
        if (yMaxSpeed === void 0) { yMaxSpeed = Infinity; }
        var _this = _super.call(this) || this;
        _this.xDecelerationPerSecond = xDecelerationPerSecond;
        _this.yDecelerationPerSecond = yDecelerationPerSecond;
        _this.xMaxSpeed = xMaxSpeed;
        _this.yMaxSpeed = yMaxSpeed;
        _this.xPositionStore = new PositionStore(endTimeRange);
        _this.yPositionStore = new PositionStore(endTimeRange);
        return _this;
    }
    EndInertiaUtil.prototype.setEndTimeRange = function (endTimeRange) {
        this.xPositionStore.endTimeRange = endTimeRange;
        this.yPositionStore.endTimeRange = endTimeRange;
    };
    EndInertiaUtil.prototype.setXDecelerationPerSecond = function (xDecelerationPerSecond) {
        this.xDecelerationPerSecond = xDecelerationPerSecond;
    };
    EndInertiaUtil.prototype.setYDecelerationPerSecond = function (yDecelerationPerSecond) {
        this.yDecelerationPerSecond = yDecelerationPerSecond;
    };
    EndInertiaUtil.prototype.setXMaxSpeed = function (xMaxSpeed) {
        this.xMaxSpeed = xMaxSpeed;
    };
    EndInertiaUtil.prototype.setYMaxSpeed = function (yMaxSpeed) {
        this.yMaxSpeed = yMaxSpeed;
    };
    /**
     * Push a move position.It will be used to calculate the end speed.
     */
    EndInertiaUtil.prototype.push = function (positionX, positionY) {
        this.xPositionStore.push(positionX);
        this.yPositionStore.push(positionY);
    };
    /**
     * End a series of position push and start to calculate inertia move distance and emit "inertiaMove" event.
     */
    EndInertiaUtil.prototype.end = function () {
        var _this = this;
        if (this.timer) {
            window.clearInterval(this.timer);
        }
        var originalXSpeed = this.dealOriginalSpeed(this.xPositionStore.getEndSpeed(), this.xMaxSpeed);
        var originalYSpeed = this.dealOriginalSpeed(this.yPositionStore.getEndSpeed(), this.yMaxSpeed);
        var xDecelerationPerSecond = getSign(originalXSpeed) === 0 ? 0 : getSign(originalXSpeed) * this.xDecelerationPerSecond;
        var yDecelerationPerSecond = getSign(originalYSpeed) === 0 ? 0 : getSign(originalYSpeed) * this.yDecelerationPerSecond;
        var xSpeed = originalXSpeed;
        var ySpeed = originalYSpeed;
        var time = Date.now();
        this.timer = setInterval(function () {
            var pastSeconds = (Date.now() - time) / 1000;
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
                _this.emit('inertiaMove', {
                    xSpeed: xSpeed,
                    ySpeed: ySpeed,
                    xDistance: xSpeed * pastSeconds,
                    yDistance: ySpeed * pastSeconds,
                });
            }
            else {
                _this.stop();
            }
        });
    };
    /**
     * Stop the inertia move.
     * It also stop to emit the "inertiaMove" event.
     */
    EndInertiaUtil.prototype.stop = function () {
        this.xPositionStore.clear();
        this.yPositionStore.clear();
        window.clearInterval(this.timer);
        this.timer = null;
    };
    EndInertiaUtil.prototype.dealOriginalSpeed = function (speed, maxSpeed) {
        if (Math.abs(speed) > maxSpeed) {
            return getSign(speed) * maxSpeed;
        }
        else {
            return speed;
        }
    };
    return EndInertiaUtil;
}(events_1.EventEmitter));
exports.EndInertiaUtil = EndInertiaUtil;


/***/ })
/******/ ]);