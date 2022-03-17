import { StatusCodes } from 'http-status-codes';

import { FetchErrorBase } from './BaseError';

export class NotFoundError extends FetchErrorBase {
  constructor(statusText: string) {
    super(statusText, StatusCodes.NOT_FOUND);
  }
}
