import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from "../../passenger-dashboard.service";

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <button (click)="goBack()">
      &lsaquo; Go back
    </button>
    <passenger-form [detail]="passenger" (update)="updatePassenger($event)">
    </passenger-form>
  `
})
export class PassengerViewerComponent {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((data) => this.passenger = data);
  }

  updatePassenger(passenger: Passenger) {
    this.passengerService.updatePassenger(passenger)
      .subscribe((data: Passenger) => this.passenger = data);
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
