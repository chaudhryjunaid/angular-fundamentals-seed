import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="detail.checkedIn"></span>
        <div *ngIf="editing">
          <input type="text"
            [value]="detail.fullname"
            (input)="onNameChange(name.value)"
            #name>
        </div>
        <div *ngIf="!editing">
          {{ detail.fullname }}
        </div>
      <div class="date">
        Check in date:
        {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <button
        (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button
        (click)="onRemove()">
        Remove
      </button>
      <button
        (click)="onView()">
        View
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input()
  detail: Passenger;
  editing: boolean = false;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string) {
    console.log('value: ', value);
    this.detail.fullname = value;
  }

  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  onView() {
    this.view.emit(this.detail);
  }
}
