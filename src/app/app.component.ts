import { Component } from '@angular/core';
import { NavItem } from './models/navitem.model';
import { ImageService } from './services/image.service';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'hospital-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [
    ImageService,
    PatientService
  ]
})

export class AppComponent {
  logo = './assets/logo.svg';

  navBarItems: Array<NavItem> = [
    {
      text: 'Register New Patient',
      route: 'register'
    },
    {
      text: 'Consultations',
      route: 'consultations'
    }
  ];

  showNavBar = false;
  title = 'Hospitality Inc.';

  toggleNavBar() {
    this.showNavBar = !this.showNavBar;
  }
}
