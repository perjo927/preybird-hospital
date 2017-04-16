import { Condition } from './condition.model';
import { PatientImage } from './image.model';

export class Patient {
  constructor(
    public firstName: string,
    public lastName: string,
    public condition: Condition,
    public image?: PatientImage,
  ) { }
}
