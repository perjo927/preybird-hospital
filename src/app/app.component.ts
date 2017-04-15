import { Component } from '@angular/core';

@Component({
  selector: 'hospital-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  logo = './assets/logo.svg';

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

  title = 'Hospitality Inc.';

  toggleNavBar() {
    this.showNavBar = !this.showNavBar;
  }
}
