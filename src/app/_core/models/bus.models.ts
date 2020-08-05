import { BaseEntity } from './base-entity.models';
import { Line } from './line.models';
import { Person } from './person.models';
import { Stop } from './stop.models';

export class Bus extends BaseEntity implements IBus {
  maxCapacity: number;
  passengers: Person[] = [];
  currentLine: Line;
  currentStop: Stop;
  currentStopIndex: number;

  constructor(id: number, maxCapacity: number, currentLine: Line, currentStop: Stop, currentStopIndex: number) {
    super(id);
    this.maxCapacity = maxCapacity;
    this.currentLine = currentLine;
    this.currentStop = currentStop;
    this.currentStopIndex = currentStopIndex;
  }

  toString(): void {
    super.toString('Bus', 'Persons, Line, Stop');
  }

  reset(): void {
    this.maxCapacity = undefined;
    this.passengers = [];
    this.currentLine = undefined;
    this.currentStop = undefined;
    this.currentStopIndex = undefined;
  }

  changeColor(): void { }

  showPeople(): void { }

  getPassengersGetOn(): void { }

  addPeople(): void { console.log(`Adding people to bus ${this.id}`); }

  removePeople(): void { }

}

interface IBus {
  maxCapacity: number;
  passengers: Array<Person>;
  currentLine: Line;
  currentStop: Stop;
  currentStopIndex: number;
}
