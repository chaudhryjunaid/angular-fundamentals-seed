import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <div>
      {{detail | json}}
      <form #form="ngForm" novalidate>
        <div>
          Passenger name:
          <input
            type="text"
            name="fullname"
            [ngModel]="detail?.fullname"
          >
        </div>
        <div>
          Passenger ID:
          <input
            type="number"
            name="id"
            [ngModel]="detail?.id"
          >
        </div>
      </form>
      {{ form.value | json }}
    </div>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  constructor() {}
}
