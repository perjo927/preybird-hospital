import { Component, Input } from '@angular/core';
import { RegisteredPatient } from '../../models/registered-patient.model';
import { conditions } from '../../data/condition.data';

@Component({
    selector: 'patient',
    templateUrl: './patient.html',
    styleUrls: ['./patient.css']
})

export class PatientComponent {
    @Input() patient: RegisteredPatient;
    @Input() imageUrl: string;

    conditions = conditions;

    getCondition(key: string): string {
        const condition = conditions.find(element =>  element.type === key);
        return condition.text;
    }
}
