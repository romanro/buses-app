import { Component, Input, OnInit } from '@angular/core';

import { Bus, EnumActions } from '../_core/models';
import { DispatchService } from '../_core/services';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html'
})
export class BusComponent implements OnInit {

  @Input() bus: Bus;

  constructor(private dispatchService: DispatchService) { }

  ngOnInit(): void {
  }

  handelAddPassengers(): void {
    console.log('Add Passengers called');
    this.bus.addPeople();
    this.dispatchService.dispatch(this.bus, EnumActions.goToNextStop);
  }

}
