import { Fetch } from '@nextjs-middleware-example/infra';
import { User } from '@nextjs-middleware-example/type';

export class UserRepository {
  static getUsers(): Promise<User[]> {
    return Fetch.get(`/users`);
  }

  static getUserById(id: number): Promise<User> {
    return Fetch.get(`/users/${id}`);
  }
}
