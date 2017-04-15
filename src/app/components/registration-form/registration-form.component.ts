import { Component } from '@angular/core';
import { Condition } from './condition.model';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css']
})

export class RegistrationFormComponent {

  conditions: Array<Condition>;

  constructor() {
    this.conditions = [
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
  }
}
