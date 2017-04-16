import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ImageService } from '../../services/image.service';
import { PatientService } from '../../services/patient.service';
import { PatientImage } from '../../models/image.model';
import { RegisteredPatient } from '../../models/registered-patient.model';

@Component({
  selector: 'patient-page',
  templateUrl: './patient-page.html',
  styleUrls: ['./patient-page.css']
})

@Injectable()
export class PatientPageComponent implements OnInit {

  private patient: RegisteredPatient;

  consultations: any; // TODO Array<Consultation>
  imageUrl = 'http://placehold.it/100x100';

  constructor(
    private imageService: ImageService,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      const id = params['id'];
      const patient = await this.getPatient(id);

      if (patient) {
        this.patient = patient;
        // this.name = patient.name;
        // this.condition = patient.condition;

        if (patient.imageId) {
          const imageUrl = await this.getImage(patient.imageId);
          if (imageUrl) {
            this.imageUrl = imageUrl;
          }
        }
      }
    });
  }

  private async getImage(id: string): Promise<string> {
    try {
      const patientImage: PatientImage = await this.imageService.get<PatientImage>(id);
      return patientImage.url;
    } catch (err) {
      console.error(`${err.status} ${err.statusText}`);
    }
    return null;
  }

  private async getPatient(id: string): Promise<RegisteredPatient> {
    try {
      const patient: RegisteredPatient = await this.patientService.get<RegisteredPatient>(id);
      return patient;
    } catch (err) {
      console.error(`${err.status} ${err.statusText}`);
    }
    return null;
  }

  private async getConsultations(id: string): Promise<any> { // TODO Array<Consultation>
    try {
      const consultations = await this.patientService.get<any>(id); // TODO COnslutation
      return null;
    } catch (err) {
      console.error(`${err.status} ${err.statusText}`);
    }
    return null;
  }

}
