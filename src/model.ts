export interface OptionsInterface {
  mouseWheelIsEnable?: boolean;
  mouseWheelXSpeed?: number;
  mouseWheelYSpeed?: number;

  mouseMoveIsEnable?: boolean;
  mouseMoveXSpeed?: number;
  mouseMoveYSpeed?: number;
  mouseMoveInertiaXDeceleration?: number;
  mouseMoveInertiaYDeceleration?: number;
  mouseMoveInertiaXMaxSpeed?: number;
  mouseMoveInertiaYMaxSpeed?: number;

  touchIsEnable?: boolean;
  touchXSpeed?: number;
  touchYSpeed?: number;
  touchInertiaXDeceleration?: number;
  touchInertiaYDeceleration?: number;
  touchInertiaXMaxSpeed?: number;
  touchInertiaYMaxSpeed?: number;

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

  public constructor(options: OptionsInterface) {
    this.mouseWheelIsEnable = options.mouseWheelIsEnable || true;
    this.mouseWheelXSpeed = options.mouseWheelXSpeed || 1;
    this.mouseWheelYSpeed = options.mouseWheelYSpeed || 1;

    this.mouseMoveIsEnable = options.mouseMoveIsEnable || true;
    this.mouseMoveXSpeed = options.mouseMoveXSpeed || 1;
    this.mouseMoveYSpeed = options.mouseMoveYSpeed || 1;
    this.mouseMoveInertiaXDeceleration = options.mouseMoveInertiaXDeceleration || Infinity;
    this.mouseMoveInertiaYDeceleration = options.mouseMoveInertiaYDeceleration || Infinity;
    this.mouseMoveInertiaXMaxSpeed = options.mouseMoveInertiaXMaxSpeed || this.mouseMoveInertiaXDeceleration
    this.mouseMoveInertiaYMaxSpeed = options.mouseMoveInertiaYMaxSpeed || this.mouseMoveInertiaYDeceleration

    this.touchIsEnable = options.touchIsEnable || true;
    this.touchXSpeed = options.touchXSpeed || 1;
    this.touchYSpeed = options.touchYSpeed || 1;
    this.touchInertiaXDeceleration = options.touchInertiaXDeceleration || Infinity;
    this.touchInertiaYDeceleration = options.touchInertiaYDeceleration || Infinity;
    this.touchInertiaXMaxSpeed = options.touchInertiaXMaxSpeed || this.touchInertiaXDeceleration;
    this.touchInertiaYMaxSpeed = options.touchInertiaYMaxSpeed || this.touchInertiaYDeceleration;


    this.minScrollTop = options.minScrollTop || 0;
    this.minScrollLeft = options.minScrollLeft || 0;
    this.maxScrollTop = options.maxScrollTop || Infinity;
    this.maxScrollLeft = options.maxScrollLeft || 0;
  }
}

export class ScrollEventObject {
  public constructor(
    public scrollTop: number,
    public scrollLeft: number,
    public scrollY: number,
    public scrollX: number,
  ) { }
}
