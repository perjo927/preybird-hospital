import { Condition } from './condition.model';

export class Patient {
  constructor(
    public firstName: number,
    public lastName: string,
    public condition: Condition,
    public image?: string
  ) {  }
}
