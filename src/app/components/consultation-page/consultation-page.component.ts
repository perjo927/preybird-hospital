import { Component, Injectable, OnInit } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';
import { PatientService } from '../../services/patient.service';
import { Consultation } from '../../models/consultation.model';
import { RegisteredPatient } from '../../models/registered-patient.model';

@Component({
  selector: 'consultation-page',
  templateUrl: './consultation-page.html',
  styleUrls: ['./consultation-page.css']
})

@Injectable()
export class ConsultationPageComponent implements OnInit {

  consultations: Array<Consultation>;
  patients: Array<RegisteredPatient>;
  patientConsultations: Array<any>;
  datesMap = {};
  dates: any;
  expanded: false; // TODO
  selectedDate: string;

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
    // Get data from API
    this.consultations = await this.getConsultations();
    this.patients = await this.getPatients();

    // Massage
    this.consultations = this.sortConsultations(this.consultations);
    this.patientConsultations = this.mapConsultations(this.consultations);
    this.datesMap = this.mapDates(this.datesMap);
    this.dates = Object.keys(this.datesMap);
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

  private sortConsultations(consultations: Array<Consultation>): Array<Consultation> {
    return consultations.sort((a: any, b: any): any => {
      return a.consultationDate > b.consultationDate;
    });
  }

  private mapConsultations(consultations: Array<Consultation>): Array<any> {
    return consultations.map((element) => {
      return {
        consultation: element,
        patient: this.getPatient(element.patientId)
      };
    });
  }

  private mapDates(datesMap: any) {
    // for (let cp of this.patientConsultations) {
    for (let c of this.consultations) {
      // const c = cp.consultation; 
      const d: string = new Date(c.consultationDate).toLocaleDateString();

      if (!datesMap[d]) {
        datesMap[d] = [];
      }

      datesMap[d].push(c);
    }
    return datesMap;
  }
}
