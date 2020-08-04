import { BaseEntity } from './base-entity.models';
import { Person } from './person.models';

export class Stop extends BaseEntity implements IStop {

  name: string;
  location: number;
  passengers: Array<Person> = [];

  constructor(id: number, name: string, location: number) {
    super(id);
    this.name = name;
    this.location = location;
  }

  toString(): void {
    super.toString('Stop', 'Persons');
  }

  showPeople(): void {
    console.log(`Number of passengers on stop ${this.name}: ${this.passengers.length}`);
  }
}

interface IStop {
  name: string;
  location: number;
  passengers: Array<Person>;
}
