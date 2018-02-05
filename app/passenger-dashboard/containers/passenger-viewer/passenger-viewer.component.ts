import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from "../../passenger-dashboard.service";

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <passenger-form [detail]="passenger" (update)="updatePassenger($event)">
    </passenger-form>
  `
})
export class PassengerViewerComponent {
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data) => this.passenger = data);
  }

  updatePassenger(passenger: Passenger) {
    this.passengerService.updatePassenger(passenger)
      .subscribe((data: Passenger) => this.passenger = data);
  }
}
