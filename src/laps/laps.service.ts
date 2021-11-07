import { Injectable } from '@nestjs/common';
import { Lap } from './lap.model';
@Injectable()
export class LapsService {
  private laps: Lap[] = [];
  insertLap(
    id: number,
    DateStart: string,
    DateEnd: string,
    FormattedTime: string,
    seconds: number,
  ) {
    const newLap = new Lap(id, DateStart, DateEnd, FormattedTime, seconds);
    this.laps.push(newLap);
    return 'post successfully';
  }
  getLaps() {
    return [...this.laps];
  }
  removeLaps() {
    this.laps = [];
    return 'remove all laps successfully';
  }
}
