export interface OptionsInterface {
  // whether the mouse wheel is enable
  mouseWheelIsEnable?: boolean;
  // scroll speed when mouse wheeling on the x-axis and y-axis.It's multiply the actual moving pixel distance.
  mouseWheelXSpeed?: number;
  mouseWheelYSpeed?: number;

  // whether the mouse move is enable
  mouseMoveIsEnable?: boolean;
  // scroll speed when mouse moving
  mouseMoveXSpeed?: number;
  mouseMoveYSpeed?: number;
  // the inertia deceleration after mouse move on x-axis and y-axis.It's unit is pixels/s^2.
  mouseMoveInertiaXDeceleration?: number;
  mouseMoveInertiaYDeceleration?: number;
  // the max mouse move end speed.
  mouseMoveInertiaXMaxSpeed?: number;
  mouseMoveInertiaYMaxSpeed?: number;

  // whether the touch move is enable
  touchIsEnable?: boolean;
  // scroll speed when touch moving
  touchXSpeed?: number;
  touchYSpeed?: number;
  // the inertia deceleration after touch moving
  touchInertiaXDeceleration?: number;
  touchInertiaYDeceleration?: number;
  // the max touch move end speed.
  touchInertiaXMaxSpeed?: number;
  touchInertiaYMaxSpeed?: number;

  // the settings to decide min/max scroll top/left.
  minScrollTop?: number;
  minScrollLeft?: number;
  maxScrollTop?: number;
  maxScrollLeft?: number;
}

export class Options implements OptionsInterface {
  public mouseWheelIsEnable;
  public mouseWheelXSpeed;
  public mouseWheelYSpeed;

  public mouseMoveIsEnable;
  public mouseMoveXSpeed;
  public mouseMoveYSpeed;
  public mouseMoveInertiaXDeceleration;
  public mouseMoveInertiaYDeceleration;
  public mouseMoveInertiaXMaxSpeed;
  public mouseMoveInertiaYMaxSpeed;

  public touchIsEnable;
  public touchXSpeed;
  public touchYSpeed;
  public touchInertiaXDeceleration;
  public touchInertiaYDeceleration;
  public touchInertiaXMaxSpeed;
  public touchInertiaYMaxSpeed;

  public minScrollTop;
  public minScrollLeft;
  public maxScrollTop;
  public maxScrollLeft;

  public constructor(options: OptionsInterface = {}) {
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

  private dealParam(param: any, defaultValue: any): any {
    if (param === undefined || param === null) {
      return defaultValue;
    } else {
      return param;
    }
  }
}

export class ScrollEventObject {
  public constructor(
    // current total distance to the top and left
    public scrollTop: number,
    public scrollLeft: number,
    // latest scroll distance on the x-axis and y-axis
    public scrollY: number,
    public scrollX: number,
  ) { }
}
