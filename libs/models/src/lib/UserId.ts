import { PrimitiveValueObject } from './PrimitiveValueObject';

export class UserId extends PrimitiveValueObject<number> {
  static create(value: number): UserId {
    if (!(value > 0)) {
      throw new Error('idは1以上');
    }
    return new UserId(value);
  }
}
