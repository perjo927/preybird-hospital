import { Component, Input } from '@angular/core';
import { Consultation } from '../../models/consultation.model';
import { RegisteredPatient } from '../../models/registered-patient.model';

@Component({
    selector: 'consultation',
    templateUrl: './consultation.html',
    styleUrls: ['./consultation.css']
})

export class ConsultationComponent {

    @Input() consultation: Consultation;
    @Input() patient: RegisteredPatient;
    // @Input() details?: any;

    isExpanded: boolean = false;

    toggleExpand(): void {
        this.isExpanded = !this.isExpanded;
    }
}
