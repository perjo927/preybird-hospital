import { Component, Injectable, OnInit } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';
import { Consultation } from '../../models/consultation.model';
import { RegisteredPatient } from '../../models/registered-patient.model';
// import * as moment from 'moment';

@Component({
  selector: 'consultation-page',
  templateUrl: './consultation-page.html',
  styleUrls: ['./consultation-page.css']
})

@Injectable()
export class ConsultationPageComponent implements OnInit {

  consultations: Array<Consultation>;
  patients: Array<RegisteredPatient>;
  consultationPatientMap: any;
  datesConsultationMap: any;
  dates: any;

  constructor(
    private consultationService: ConsultationService,
    private patientService: PatientService,
  ) {
    this.init();
  }

  ngOnInit(): void {
    // this.init();
  }

  async init() {
    this.consultations = await this.getConsultations();
    this.patients = await this.getPatients();

    this.consultations.sort((a: any, b: any): any => {
      return a.consultationDate > b.consultationDate;
    });

    this.datesConsultationMap = {};
    for (let c of this.consultations) {
      let d = c.consultationDate.slice(0, 10);

      if (!this.datesConsultationMap[d]) {
        this.datesConsultationMap[d] = [];
      } else {
        this.datesConsultationMap[d].push(c);
      }
    }
    this.dates = Object.keys(this.datesConsultationMap)


    this.consultationPatientMap = this.consultations.map((element) => {
      return {
        consultation: element,
        patient: this.getPatient(element.patientId)
      };
    });

  }

  getPatient(id: string): RegisteredPatient {
    const patient = this.patients.find(element => element.id === id);
    return patient;
  }

  private async getConsultations(): Promise<Consultation[]> {
    try {
      const consultations: Array<Consultation> = await this.consultationService.getAll<Consultation>();
      return consultations;
    } catch (err) {
      console.error(`${err.status} ${err.statusText}`);
    }
    return null;
  }

  private async getPatients(): Promise<RegisteredPatient[]> {
    try {
      const patients: Array<RegisteredPatient> = await this.patientService.getAll<RegisteredPatient>();
      return patients;
    } catch (err) {
      console.error(`${err.status} ${err.statusText}`);
    }
    return null;
  }
}
