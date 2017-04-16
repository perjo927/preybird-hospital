import { Condition } from './condition.model';
import { PatientImage } from './image.model';

export class Patient {
  constructor(
    public firstName: number,
    public lastName: string,
    public condition: Condition,
    public image?: PatientImage
  ) {  }
}
