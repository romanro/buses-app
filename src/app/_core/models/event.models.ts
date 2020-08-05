import { Bus } from './bus.models';

export class Event implements IEvent {
  time: string;
  action: EnumActions;
  bus: Bus;

  constructor(time: string, action: EnumActions, bus: Bus) {
    this.time = time;
    this.action = action;
    this.bus = bus;
  }

  message(): void { }

  execute(): void { }
}

interface IEvent {
  time: string;
  action: EnumActions;
  bus: Bus;
}

export enum EnumActions {
  goToNextStop = 'Go to Next Stop'
}
