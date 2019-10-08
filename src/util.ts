import { EventEmitter } from 'events';

class PositionStore {
  private positions: [Date, number][] = [];

  public constructor(public endTimeRange) {
  }

  private filterPositions() {
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

  public clear() {
    this.positions = [];
  }
}

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

  public push(positionX: number, positionY: number): void {
    this.xPositionStore.push(positionX);
    this.yPositionStore.push(positionY);
  }

  public end(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
    const originalXSpeed = this.xPositionStore.getEndSpeed()
    const originalYSpeed = this.yPositionStore.getEndSpeed()
    const xDecelerationPerSecond = originalXSpeed >= 0 ? this.xDecelerationPerSecond : -this.xDecelerationPerSecond;
    const yDecelerationPerSecond = originalYSpeed >= 0 ? this.yDecelerationPerSecond : -this.yDecelerationPerSecond;
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

  public stop(): void {
    this.xPositionStore.clear();
    this.yPositionStore.clear();
    window.clearInterval(this.timer);
    this.timer = null;
  }
}
