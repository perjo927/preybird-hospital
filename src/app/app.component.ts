import { Component } from '@angular/core';
import { NavItem } from './models/navitem.model';
import { ImageService } from './services/image.service';

@Component({
  selector: 'hospital-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [
    ImageService
  ]
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

  toggleNavBar() {
    this.showNavBar = !this.showNavBar;
  }
}
