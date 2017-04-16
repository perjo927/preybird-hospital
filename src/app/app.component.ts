import { Component } from '@angular/core';
import { NavItem } from './models/navitem.model';
import { ConsultationService } from './services/consultation.service';
import { DoctorService } from './services/doctors.service';
import { ImageService } from './services/image.service';
import { MachineService } from './services/machines.service';
import { PatientService } from './services/patient.service';
import { RoomService } from './services/rooms.service';

@Component({
  selector: 'hospital-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [
    ConsultationService,
    DoctorService,
    ImageService,
    MachineService,
    PatientService,
    RoomService
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
