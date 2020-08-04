export class BaseEntity implements IEntity {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

}

interface IEntity {
  id: number;
}
