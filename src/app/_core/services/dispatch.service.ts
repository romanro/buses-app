import { Injectable } from '@angular/core';

import { Bus, EnumActions, Event } from '../models';
import { TIME } from './../constants';

@Injectable({
  providedIn: 'root'
})
export class DispatchService {

  events: Array<Event> = [];

  constructor() { }

  dispatch(bus: Bus, action: EnumActions): void {
    const event: Event = new Event(TIME, action, bus);
    this.events.push(event);
    console.log(`Event with action "${action}" was dispatched for bus ${bus.id}`);
  }

}
