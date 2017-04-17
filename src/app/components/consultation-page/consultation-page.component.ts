import { Component, Injectable, OnInit } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';
import { DoctorService } from '../../services/doctors.service';
import { ImageService } from '../../services/image.service';
import { MachineService } from '../../services/machines.service';
import { PatientService } from '../../services/patient.service';
import { RoomService } from '../../services/rooms.service';
import { Consultation } from '../../models/consultation.model';
import { PatientImage } from '../../models/image.model';
import { RegisteredPatient } from '../../models/registered-patient.model';

@Component({
  selector: 'consultation-page',
  templateUrl: './consultation-page.html',
  styleUrls: ['./consultation-page.css']
})

@Injectable()
export class ConsultationPageComponent implements OnInit {

  consultations: Array<Consultation>;
  consultationDetails = {
    patientImage: 'http://placehold.it/100x100',
    doctor: {},
    room: {},
    machine: {}
  };
  patients: Array<RegisteredPatient>;
  patientConsultations: Array<any>;
  datesMap = {};
  dates: any;
  selectedDate: string;

  constructor(
    private consultationService: ConsultationService,
    private doctorService: DoctorService,
    private imageService: ImageService,
    private machineService: MachineService,
    private patientService: PatientService,
    private roomService: RoomService,
  ) { }

  ngOnInit(): void {
    this.fetchData().then(() => {
      this.consultations = this.sortConsultations(this.consultations);
      this.patientConsultations = this.mapConsultations(this.consultations);
      this.datesMap = this.mapDates(this.datesMap);
      this.dates = Object.keys(this.datesMap);
    });
  }

  async fetchData() {
    this.consultations = await this.getConsultations();
    this.patients = await this.getPatients();
  }

  async setDetails(consultation: Consultation, patient: RegisteredPatient) {
    const imageUrl = await this.getImage(patient.imageId);
    if (imageUrl) {
      this.consultationDetails.patientImage = imageUrl;
    }
    const doctor = await this.getDoctor(consultation.doctorId)
    if (doctor) {
      const doctorImageUrl = await this.getImage(doctor.imageId);
      console.log(doctorImageUrl)
      if (doctorImageUrl) {
        doctor.imageUrl = doctorImageUrl;
      }
      this.consultationDetails.doctor = doctor;
    }
    // ,
    // room: this.getRoom(element.roomId)
    // ,
    // machine: this.getMachine(room.treatmentMachineId)
    // console.log(url, this.consultationDetails)    

  }

  handleDetails(event: any): void {
    this.setDetails(event.consultation, event.patient);
    // this.consultationDetails = {};
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

  private async getDoctor(id: string): Promise<any> {
    try {
      const doctor = await this.doctorService.get<any>(id);
      console.log(doctor);
      return doctor;
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

  private async getImage(id: string): Promise<string> {
    try {
      const image: PatientImage = await this.imageService.get<PatientImage>(id);
      console.log(image.url);
      return image.url;
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

  private mapConsultations(consultations: Array<Consultation>) {//: Promise<any> {
    return consultations.map((element: Consultation) => {
      const patient = this.getPatient(element.patientId);
      return {
        consultation: element,
        patient: patient

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
