import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import {Baggage} from "../../models/baggage.interface";

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
              type="checkbox"
              name="checkedIn"
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckedIn($event)"
              >
          </label>
        </div>
        
        <div *ngIf="form.value.checkedIn">
          <input
            type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate"
          >
        </div>
        
        <div>
          Luggage:
          <select
            name="baggage"
            [ngModel]="detail?.baggage"
          >
            <option *ngFor="let item of baggage" [ngValue]="item.key">
              {{ item.value}}
            </option>
          </select>
        </div>
      </form>
      {{ form.value | json }}
    </div>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  },{
    key: 'hand-only',
    value: 'Hand baggage'
  },{
    key: 'hold-only',
    value: 'Hold baggage'
  },{
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }];

  constructor() {}

  toggleCheckedIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
