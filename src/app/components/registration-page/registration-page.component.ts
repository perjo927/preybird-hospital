import { Component } from '@angular/core';
import { Condition } from '../../models/condition.model';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.html',
  styleUrls: ['./registration-page.css']
})

export class RegistrationPageComponent {

  registerPatient(event: any) {
    console.log(event);
  }

}
