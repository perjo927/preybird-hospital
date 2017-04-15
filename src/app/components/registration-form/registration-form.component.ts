import { Component } from '@angular/core';
import { Condition } from './condition.model';
import { Patient } from './patient.model';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css']
})

export class RegistrationFormComponent {

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
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.patient); }
}
