import { shallowEqual } from "shallow-equal-object";

export abstract class ValueObjectBase<T> {
  protected _value: T;

  protected constructor(_value: T) {
    this._value = Object.freeze(_value);
  }

  equals(vo?: ValueObjectBase<T>): boolean {
    if (vo === null) {
      return false
    }

    return shallowEqual(this._value, vo?._value)
  }

}