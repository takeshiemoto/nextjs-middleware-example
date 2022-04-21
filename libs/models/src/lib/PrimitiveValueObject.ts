import { ValueObjectBase } from '@nextjs-middleware-example/models';

export abstract class PrimitiveValueObject<T> extends ValueObjectBase<T> {
  get value() {
    return this._value;
  }
}
