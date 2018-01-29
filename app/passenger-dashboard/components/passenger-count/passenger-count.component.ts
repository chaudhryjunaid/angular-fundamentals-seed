import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h3>Airline Passengers!</h3>
      Total checked in: {{ checkedInCount() }}/{{items?.length}}
    </div>
  `
})
export class PassengerCountComponent {
  constructor() {}
  @Input()
  items: Passenger[];
  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
