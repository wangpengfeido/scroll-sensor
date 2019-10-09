import { EventEmitter } from 'events';

/**
 * Get positive and negative sign of a number.
 */
export function getSign(num: number): number {
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
  private positions: [Date, number][] = [];

  public constructor(public endTimeRange) {
  }

  private filterPositions(): void {
    const now = new Date();
    this.positions = this.positions.filter((item: [Date, number]): boolean => {
      return now.getTime() - item[0].getTime() <= this.endTimeRange;
    });
  }

  public push(position: number): void {
    if (this.positions.length && (this.positions[this.positions.length - 1][1] * position < 0)) {
      this.clear();
    }
    this.positions.push([new Date(), position]);
    this.filterPositions();
  }

  public getEndSpeed(): number {
    this.filterPositions();
    if (this.positions.length === 0 || this.positions.length === 1) {
      return 0;
    }
    const start = this.positions[0];
    const end = this.positions[this.positions.length - 1];
    return (end[1] - start[1]) / ((end[0].getTime() - start[0].getTime()) / 1000);
  }

  public clear(): void {
    this.positions = [];
  }
}

/**
 * A util to deal scroll end inertia.
 * @event inertiaMove Be emitted continuously after call "end" method, until the speed drop to 0.
 *         Its event object has four property:xSpeed,ySpeed,xDistance,yDistance.
 */
export class EndInertiaUtil extends EventEmitter {

  private xPositionStore: PositionStore;
  private yPositionStore: PositionStore;
  private timer: number;

  public constructor(
    endTimeRange = 200,
    private xDecelerationPerSecond = Infinity,
    private yDecelerationPerSecond = Infinity,
    private xMaxSpeed = Infinity,
    private yMaxSpeed = Infinity) {
    super();
    this.xPositionStore = new PositionStore(endTimeRange);
    this.yPositionStore = new PositionStore(endTimeRange);
  }

  public setEndTimeRange(endTimeRange): void {
    this.xPositionStore.endTimeRange = endTimeRange;
    this.yPositionStore.endTimeRange = endTimeRange;
  }

  public setXDecelerationPerSecond(xDecelerationPerSecond): void {
    this.xDecelerationPerSecond = xDecelerationPerSecond;
  }

  public setYDecelerationPerSecond(yDecelerationPerSecond): void {
    this.yDecelerationPerSecond = yDecelerationPerSecond;
  }

  public setXMaxSpeed(xMaxSpeed): void {
    this.xMaxSpeed = xMaxSpeed;
  }

  public setYMaxSpeed(yMaxSpeed): void {
    this.yMaxSpeed = yMaxSpeed;
  }

  /**
   * Push a move position.It will be used to calculate the end speed.
   */
  public push(positionX: number, positionY: number): void {
    this.xPositionStore.push(positionX);
    this.yPositionStore.push(positionY);
  }

  /**
   * End a series of position push and start to calculate inertia move distance and emit "inertiaMove" event.
   */
  public end(): void {
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
    this.timer = setInterval((): void => {
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
          yDistance: ySpeed * pastSeconds,
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
  public stop(): void {
    this.xPositionStore.clear();
    this.yPositionStore.clear();
    window.clearInterval(this.timer);
    this.timer = null;
  }

  private dealOriginalSpeed(speed: number, maxSpeed: number): number {
    if (Math.abs(speed) > maxSpeed) {
      return getSign(speed) * maxSpeed;
    } else {
      return speed;
    }
  }
}


