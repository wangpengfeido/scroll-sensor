import { EventEmitter } from 'events';

import { OptionsInterface, Options, ScrollEventObject } from './model'
import { EndInertiaUtil } from './util';

/**
 * Scroll sensor main class
 * @event scroll Emit when scroll.
 */
export class ScrollSensor extends EventEmitter {
  private element: HTMLElement;
  private options: Options;

  private _scrollTop: number;
  private _scrollLeft: number;

  private mouseIsScrolling: boolean = false;
  private mouseXLastPosition: number;
  private mouseYLastPosition: number;
  private mouseScrollEndInertiaUtil = new EndInertiaUtil();

  private touchXLastPosition: number;
  private touchYLastPosition: number;
  private touchEndInertiaUtil = new EndInertiaUtil();

  /**
   * @param {HTMLElement} element The dom element to create the ScrollSensor instance.
   * @param {OptionsInterface} options Options.
   * @param {number} initialScrollTop
   * @param {number} initialScrollLeft
   */
  public constructor({ element, options = {}, initialScrollTop = 0, initialScrollLeft = 0 }: { element: HTMLElement; options: OptionsInterface; initialScrollTop: number; initialScrollLeft: number }) {
    super();
    if (!(element instanceof HTMLElement)) {
      throw new Error('"element" param is must an instance of HTMLElement');
    }
    this.element = element;
    this.scrollTop = initialScrollTop;
    this.scrollLeft = initialScrollLeft;
    this.setOptions(options);

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

  public setOptions(options: OptionsInterface = {}): void {
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

  public set scrollTop(scrollTop) {
    if (scrollTop < this.options.minScrollTop) {
      this._scrollTop = this.options.minScrollTop;
    } else if (scrollTop > this.options.maxScrollTop) {
      this._scrollTop = this.options.maxScrollTop;
    } else {
      this._scrollTop = scrollTop;
    }
  }

  public get scrollTop(): number {
    return this._scrollTop;
  }

  public set scrollLeft(scrollLeft) {
    if (scrollLeft < this.options.minScrollLeft) {
      this.scrollLeft = this.options.minScrollLeft;
    } else if (scrollLeft > this.options.maxScrollLeft) {
      this.scrollLeft = this.options.maxScrollLeft;
    } else {
      this.scrollLeft = scrollLeft;
    }
  }

  public get scrollLeft(): number {
    return this._scrollLeft;
  }

  /**
   * Release the resources.
   */
  public destroy(): void {
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

  private handleMousewheel = (event): void => {
    if (!this.options.mouseWheelIsEnable) {
      return;
    }
    this.move(event.deltaX * this.options.mouseWheelXSpeed, event.deltaY * this.options.mouseWheelYSpeed);
  }

  private handleMouseDown = (event): void => {
    if (!this.options.mouseMoveIsEnable) {
      return;
    }
    this.mouseXLastPosition = event.clientX;
    this.mouseYLastPosition = event.clientY;
    this.mouseIsScrolling = true;
    this.mouseScrollEndInertiaUtil.stop();
  }

  private handleMouseMove = (event): void => {
    if (this.mouseIsScrolling) {
      const xDistance = this.mouseXLastPosition - event.clientX;
      const yDistance = this.mouseYLastPosition - event.clientY;
      this.move(xDistance * this.options.mouseMoveXSpeed, yDistance * this.options.mouseMoveYSpeed);
      this.mouseXLastPosition = event.clientX;
      this.mouseYLastPosition = event.clientY;
      this.mouseScrollEndInertiaUtil.push(this.scrollLeft, this.scrollTop);
    }
  }

  private handleMouseUp = (): void => {
    this.mouseIsScrolling = false;
    this.mouseScrollEndInertiaUtil.end();
  }

  private handleTouchStart = (event): void => {
    if (!this.options.touchIsEnable) {
      return;
    }
    this.touchXLastPosition = Math.round(event.touches[0].clientX);
    this.touchYLastPosition = Math.round(event.touches[0].clientY);
    this.touchEndInertiaUtil.stop();
  }

  private handleTouchMove = (event): void => {
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
  }

  private handleTouchEnd = (): void => {
    this.touchEndInertiaUtil.end();
  }

  private handleInertiaMove = (event): void => {
    this.move(event.xDistance, event.yDistance);
  }

  private move(xDistance, yDistance): void {
    this.scrollLeft = this.scrollLeft + xDistance;
    this.scrollTop = this.scrollTop + yDistance;
    const eventObject = new ScrollEventObject(this.scrollTop, this.scrollLeft, yDistance, xDistance);
    this.emit('scroll', eventObject);
  }
}
