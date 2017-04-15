import { Component } from '@angular/core';
import { NavItem } from './models/navitem.model';
import { Condition } from './models/condition.model';
import { Patient } from './models/patient.model';

@Component({
  selector: 'hospital-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  logo = './assets/logo.svg';

  navBarItems: Array<NavItem> = [
    {
      text: 'Register New Patient',
      route: '',
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

  registerPatient(event: any) {
    console.log(event);
  }

  toggleNavBar() {
    this.showNavBar = !this.showNavBar;
  }

}
