import { Component } from '@angular/core';

@Component({
  selector: 'hospital-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  title = 'Hospitality Inc.';

  navBarItems = [
    {
      text: 'Register New Patient',
      route: 'patient',
      enabled: true
    },
    {
      text: 'Consultations',
      route: 'consultations',
      enabled: false
    }
  ];
  showNavBar = false;

  toggleNav() {
    this.showNavBar = !this.showNavBar;
  }
}
