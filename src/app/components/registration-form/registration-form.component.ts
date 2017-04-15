import { Component, EventEmitter, Output } from '@angular/core';
import { Condition } from './condition.model';
import { Patient } from './patient.model';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css']
})

export class RegistrationFormComponent {

  @Output() submitPatient = new EventEmitter<Patient>();

  conditions: Array<Condition> = [
    {
      text: 'Breast Cancer',
      type: 'breastcancer'
    },
    {
      text: 'Head & Neck Cancer',
      type: 'headandneckcancer'
    },
    {
      text: 'Flu',
      type: 'flu'
    },
  ];

  patient = new Patient(null, null, null, 'http://placehold.it/100x100');

  chooseImage() {
    this.patient.image = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Creative-Tail-People-girl.svg';
  }
  onSubmit() {
    console.log("true");
  }
}
