import { Component, EventEmitter, Input, Output, OnChanges, SimpleChange } from '@angular/core';
import { Consultation } from '../../models/consultation.model';
import { RegisteredPatient } from '../../models/registered-patient.model';

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

    @Output() requestDetails = new EventEmitter<any>();

    isExpanded: boolean = false;

    changeLog: string[] = [];
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                let from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join(', '));
        console.log(this.changeLog)
    }

    toggleExpand(): void {
        this.requestDetails.emit({
            consultation: this.consultation,
            patient: this.patient
        });

        this.isExpanded = !this.isExpanded;
    }
}
