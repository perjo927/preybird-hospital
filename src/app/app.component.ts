import { Component } from '@angular/core';

@Component({
  selector: 'hospital-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  title = 'Hospitality Inc.';
  isNavBarDisabled = true;
  isNavBar = false;

  toggleNav() {
    this.isNavBar = !this.isNavBar;
  }
}
