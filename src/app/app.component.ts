import { Component } from '@angular/core';

import { Bus, Line } from './_core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  line: Line = new Line(1, 'First Line', [], true, 500000);
  bus: Bus = new Bus(1, 50, this.line, undefined, null);

}
