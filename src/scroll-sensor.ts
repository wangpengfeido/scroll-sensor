import EventEmitter from 'events';

import { OptionsInterface, Options, ScrollEventObject } from './model'

export class ScrollSensor extends EventEmitter {
  private element: HTMLElement;
  private options: Options;

  private scrollTop: number;
  private scrollLeft: number;

  private mouseIsScrolling: boolean;
  private mouseXLastPosition: number;
  private mouseYLastPosition: number;

  private touchXLastPosition: number;
  private touchYLastPosition: number;

  public constructor({ element, options = {}, initialScrollTop = 0, initialScrollLeft = 0 }: { element: HTMLElement; options: OptionsInterface; initialScrollTop: number; initialScrollLeft: number }) {
    super();
    if (!(element instanceof HTMLElement)) {
      throw new Error('"element" param is must an instance of HTMLElement');
    }
    this.element = element;
    this.scrollTop = initialScrollTop;
    this.scrollLeft = initialScrollTop;
    this.setOptions(options);

    this.element.addEventListener('mousewheel', this.handleMousewheel);
    this.element.addEventListener('mousedown', this.handleMouseDown);
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseup', this.handleMouseUp);
    this.element.addEventListener('touchstart', this.handleTouchStart);
    this.element.addEventListener('touchmove', this.handleTouchMove);
    this.element.addEventListener('touchend', this.handleTouchEnd);
  }

  public setOptions(options: OptionsInterface): void {
    this.options = new Options(options);
  }

  public setScrollTop(scrollTop) {
    if (scrollTop < this.options.minScrollTop) {
      this.scrollTop = this.options.minScrollTop;
    } else if (scrollTop > this.options.maxScrollTop) {
      this.scrollTop = this.options.maxScrollTop;
    } else {
      this.scrollTop = scrollTop;
    }
  }

  public setScrollLeft(scrollLeft) {
    if (scrollLeft < this.options.minScrollLeft) {
      this.scrollLeft = this.options.minScrollLeft;
    } else if (scrollLeft > this.options.maxScrollLeft) {
      this.scrollLeft = this.options.maxScrollLeft;
    } else {
      this.scrollLeft = scrollLeft;
    }
  }

  private handleMousewheel = (event) => {
    this.move(event.deltaX, event.deltaY);
  }

  private handleMouseDown = (event) => {
    console.log(event);
    this.mouseXLastPosition = event.clientX;
    this.mouseYLastPosition = event.clientY;
    this.mouseIsScrolling = true;
  }

  private handleMouseMove = (event) => {
    if (this.mouseIsScrolling) {
      const xDistance = this.mouseXLastPosition - event.clientX;
      const yDistance = this.mouseYLastPosition - event.clientY;
      this.move(xDistance, yDistance)
      this.mouseXLastPosition = event.clientX;
      this.mouseYLastPosition = event.clientY;
    }
  }

  private handleMouseUp = (event) => {
    this.mouseIsScrolling = false;
  }

  private handleTouchStart = (event) => {
    this.touchXLastPosition = Math.round(event.touches[0].clientX);
    this.touchYLastPosition = Math.round(event.touches[0].clientY);
  }

  private handleTouchMove = (event) => {
    const clientX = Math.round(event.touches[0].clientX);
    const clientY = Math.round(event.touches[0].clientY);
    const xDistance = this.touchXLastPosition - clientX;
    const yDistance = this.touchYLastPosition - clientY;
    this.move(xDistance, yDistance)
    this.touchXLastPosition = clientX;
    this.touchYLastPosition = clientY;
  }

  private handleTouchEnd = (event) => { }

  private move(xDistance, yDistance) {
    this.setScrollLeft(this.scrollLeft + xDistance);
    this.setScrollTop(this.scrollTop + yDistance);
    super.emit('scroll', new ScrollEventObject(this.scrollTop, this.scrollLeft, yDistance, xDistance));
  }
}
