export interface OptionsInterface {
  mouseMoveIsEnable?: boolean;
  mouseWheelIsEnable?: boolean;
  touchIsEnable?: boolean;
  xMouseMoveSpeed?: number;
  yMouseMoveSpeed?: number;
  xMouseWheelSpeed?: number;
  yMouseWheelSpeed?: number;
  xTouchSpeed?: number;
  yTouchSpeed?: number;
  minScrollTop?: number;
  minScrollLeft?: number;
  maxScrollTop?: number;
  maxScrollLeft?: number;
}

export class Options implements OptionsInterface {
  public mouseMoveIsEnable;
  public mouseWheelIsEnable;
  public touchIsEnable;
  public xMouseMoveSpeed;
  public yMouseMoveSpeed;
  public xMouseWheelSpeed;
  public yMouseWheelSpeed;
  public xTouchSpeed;
  public yTouchSpeed;
  public minScrollTop;
  public minScrollLeft;
  public maxScrollTop;
  public maxScrollLeft;

  public constructor(options: OptionsInterface) {
    this.mouseMoveIsEnable = options.mouseMoveIsEnable || true;
    this.mouseWheelIsEnable = options.mouseWheelIsEnable || true;
    this.touchIsEnable = options.touchIsEnable || true;
    this.xMouseMoveSpeed = options.xMouseMoveSpeed || 1;
    this.yMouseMoveSpeed = options.yMouseMoveSpeed || 1;
    this.xMouseWheelSpeed = options.xMouseWheelSpeed || 1;
    this.yMouseWheelSpeed = options.yMouseWheelSpeed || 1;
    this.xTouchSpeed = options.xTouchSpeed || 1;
    this.yTouchSpeed = options.yTouchSpeed || 1;
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
