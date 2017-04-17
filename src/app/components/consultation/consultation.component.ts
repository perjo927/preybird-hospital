import { Component, EventEmitter, Input, Output, OnChanges, SimpleChange } from '@angular/core';
import { Consultation } from '../../models/consultation.model';
import { RegisteredPatient } from '../../models/registered-patient.model';
import { conditions } from '../../data/condition.data';

@Component({
    selector: 'consultation',
    templateUrl: './consultation.html',
    styleUrls: ['./consultation.css']
})

export class ConsultationComponent implements OnChanges {

    @Input() consultation: Consultation;
    @Input() doctor: any;
    @Input() patient: RegisteredPatient;
    @Input() patientImage: any;
    @Input() room: any;
    @Input() machine: any;

    @Output() requestDetails = new EventEmitter<any>();

    conditions = conditions;
    isExpanded: boolean = false;

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    }

    getCondition(key: string): string {
        const condition = conditions.find(element => element.type === key);
        return condition.text;
    }

    toggleExpand(): void {
        this.requestDetails.emit({
            consultation: this.consultation,
            patient: this.patient
        });

        this.isExpanded = !this.isExpanded;
    }
}
