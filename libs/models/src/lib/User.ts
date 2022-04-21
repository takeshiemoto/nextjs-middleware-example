import { UserId } from './UserId';
import { UserName } from './UserName';
import { ValueObject } from './ValueObject';

interface UserProps {
  id: UserId;
  name: UserName;
}

interface UserArgs {
  id: number;
  name: string;
}

export class User extends ValueObject<UserProps> {
  static create({ id, name }: UserArgs): User {
    return new User({ id: UserId.create(id), name: UserName.create(name) });
  }

  get name() {
    return this._value.name;
  }
}
