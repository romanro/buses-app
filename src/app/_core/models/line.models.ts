import { BaseEntity } from './base-entity.models';
import { Bus } from './bus.models';
import { Stop } from './stop.models';

export class Line extends BaseEntity implements ILine {
  name: string;
  stops: Stop[] = [];
  buses: Bus[] = [];
  onSim: boolean;
  interval: number;

  constructor(id: number, name: string, stops: Array<Stop>, onSim: boolean, interval: number) {
    super(id);
    this.name = name;
    this.stops = [...stops];
    this.onSim = onSim;
    this.interval = interval;
  }

  toString(): void {
    super.toString('Line', 'Buses, Stops');
  }

  reset(): void {
    this.name = undefined;
    this.stops = [];
    this.buses = [];
    this.onSim = undefined;
    this.interval = undefined;
  }

}

interface ILine {
  name: string;
  stops: Array<Stop>;
  buses: Array<Bus>;
  onSim: boolean;
  interval: number;
}
