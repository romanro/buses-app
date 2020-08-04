import { BaseEntity } from './base-entity.models';
import { Line } from './line.models';
import { Person } from './person.models';
import { Stop } from './stop.models';

export class Bus extends BaseEntity implements IBus {
  maxCapacity: number;
  passengers: Person[];
  currentLine: Line;
  currentStop: Stop;
  currentStopIndex: number;

  constructor(id: number) {
    super(id);
  }

  toString(): void {
    super.toString('Bus', 'Persons, Line, Stop');
  }

  reset(): void { }

  changeColor(): void { }

  showPeople(): void { }

  getPassengersGetOn(): void { }

  addPeople(): void { }

  removePeople(): void { }

}

interface IBus {
  maxCapacity: number;
  passengers: Array<Person>;
  currentLine: Line;
  currentStop: Stop;
  currentStopIndex: number;
}
