import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { RegisteredPatient } from '../../models/registered-patient.model';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.html',
  styleUrls: ['./registration-page.css']
})

@Injectable()
export class RegistrationPageComponent {

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  registerPatient(patient: Patient) {
    const body = {
      condition: patient.condition,
      imageId: patient.image.id,
      name: patient.firstName + ' ' + patient.lastName
    };

    this.postPatient(body);
  }

  private async postPatient(body: any) {
    try {
      const patient: RegisteredPatient = await this.patientService.post<RegisteredPatient>(body);
      this.router.navigate(['/patient', patient.id]);
    } catch (err) {
      console.error(`${err.status} ${err.statusText}`);
    }
  }

}
