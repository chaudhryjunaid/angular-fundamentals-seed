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
        
        <div>
          <label>
            <input
              type="radio"
              [value]="true"
              name="checkedIn"
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckedIn($event)"
              >
            Yes
          </label>
          <label>
            <input
              type="radio"
              [value]="false"
              name="checkedIn"
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckedIn($event)"
            >
            No
          </label>
        </div>
        
        <div *ngIf="form.value.checkedIn">
          <input
            type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate"
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
  toggleCheckedIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
