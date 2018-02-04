import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <div>
      Form!
      <div>
        {{detail | json}}
      </div>
    </div>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  constructor() {}
}
