import { BaseEntity } from './base-entity.models';

export class Person extends BaseEntity implements IPerson {
  line: number;
  from: number;
  to: number;

  constructor(id: number) {
    super(id);
  }
}

interface IPerson {
  line: number;
  from: number;
  to: number;
}
