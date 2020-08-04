import { BaseEntity } from './base-entity.models';

export class Person extends BaseEntity implements IPerson {
  line: number;
  from: number;
  to: number;

  constructor(id: number, line: number, from: number, to: number) {
    super(id);
    this.line = line;
    this.from = from;
    this.to = to;
  }

  toString(): void {
    super.toString('Person');
  }
}

interface IPerson {
  line: number;
  from: number;
  to: number;
}
