import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">Change name</button>
      <input
      type="text"
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'Todd';
  constructor() {
    this.title = 'Ultimate Angular';
  }
  handleClick() {
    this.name = 'Motto';
  }
  handleInput($event) {
    this.name = $event.target.value;
  }
  handleBlur($event) {
    this.name = $event.target.value;
    console.log($event);
  }
}
