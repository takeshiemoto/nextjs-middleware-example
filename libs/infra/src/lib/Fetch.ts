import { NotFoundError, ServerError } from '@nextjs-middleware-example/errors';
import { StatusCodes } from 'http-status-codes';

export class Fetch {
  static async get(path: string) {
    return fetch(`http://localhost:3333/api${path}`).then((res) => {
      if (!res.ok) {
        if (res.status === StatusCodes.NOT_FOUND) {
          throw new NotFoundError(res.statusText);
        }

        throw new ServerError(res.statusText, res.status);
      }

      return res.json();
    });
  }
}
