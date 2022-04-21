import { ValueObjectBase } from './ValueObjectBase';

interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<
  T extends ValueObjectProps
> extends ValueObjectBase<T> {}
