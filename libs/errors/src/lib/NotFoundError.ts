import { FetchErrorBase } from './BaseError';
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends FetchErrorBase {
  constructor(statusText: string) {
    super(statusText, StatusCodes.NOT_FOUND);
  }
}
