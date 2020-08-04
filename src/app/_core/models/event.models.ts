import { Bus } from './bus.models';

export class Event implements IEvent {
  time: string;
  action: EnumActions;
  bus: Bus = null;

  constructor(time: string, action: EnumActions) {
    this.time = time;
    this.action = action;
  }

  message(): void { }

  execute(): void { }
}

interface IEvent {
  time: string;
  action: EnumActions;
  bus: Bus;
}

enum EnumActions {

}
