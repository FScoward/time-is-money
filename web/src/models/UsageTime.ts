export default class UsageTime {
  millis: number = 0;

  constructor(init?: Partial<UsageTime>) {
    Object.assign(this, init);
  }

  /** ref: https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript */
  toSecondsString(): string {
    let minutes = Math.floor(this.millis / 60000);
    let seconds = ((this.millis % 60000) / 1000); //.toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds.toFixed(0);
  }
};