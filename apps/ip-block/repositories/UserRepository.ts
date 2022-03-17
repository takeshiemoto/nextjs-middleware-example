import { User } from '../types';
import { ServerError, NotFoundError } from '@nextjs-middleware-example/errors';
import { StatusCodes } from 'http-status-codes';

export class UserRepository {
  static getUsers(): Promise<User[]> {
    return fetch(`http://localhost:3333/api/users`).then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    });
  }

  static getUserById(id: number): Promise<User> {
    return fetch(`http://localhost:3333/api/users/${id}`).then((res) => {
      if (!res.ok) {
        /**
         * ステータスコードでエラーを切り替える
         * 細かく分岐できるとクライアント側のリカバリ処理がやりやすくなる
         */
        if (res.status === StatusCodes.NOT_FOUND) {
          throw new NotFoundError(res.statusText);
        }

        throw new ServerError(res.statusText, res.status);
      }

      return res.json();
    });
  }
}
