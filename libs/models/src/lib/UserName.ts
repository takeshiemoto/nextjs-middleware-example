import { PrimitiveValueObject } from './PrimitiveValueObject';

export class UserName extends PrimitiveValueObject<string> {
  static create(value: string): UserName {
    if (!(value.length > 0)) {
      throw new Error('1文字以上');
    }
    return new UserName(value);
  }
}
