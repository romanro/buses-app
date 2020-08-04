export class BaseEntity implements IEntity {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  toString(entityName: string, entityMembers: string = ''): void {
    console.log(`${entityName} with id: ${this.id}, contains: ${entityMembers}`);
  }

}

interface IEntity {
  id: number;
}
