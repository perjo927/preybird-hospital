import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Condition } from '../../models/condition.model';
import { Patient } from '../../models/patient.model';
import { PatientImage } from '../../models/image.model';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css']
})

@Injectable()
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

  patient = new Patient(null, null, null, { id: null, url: 'http://placehold.it/100x100' });

  constructor(
    private imageService: ImageService
  ) {
      this.postImage(this.patient.image.url);
   }

  chooseImage() {
    this.patient.image = { id: null, url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Creative-Tail-People-girl.svg' };
    this.postImage(this.patient.image.url);
  }

  onSubmit() {
    this.submitPatient.emit(this.patient);
    this.patient = new Patient(null, null, null, { id: null, url: 'http://placehold.it/100x100' });
  }

  private async postImage(imageUrl: string) {
    try {
      const patientImage: PatientImage = await this.imageService.post<PatientImage>({url: imageUrl});
      this.patient.image.id = patientImage.id;
    } catch (err) {
      console.error(`${err.status} ${err.statusText}`);
    }
  }
}
