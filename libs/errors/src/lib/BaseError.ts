export class FetchErrorBase extends Error {
  constructor(public statusText: string, public statusCode: number) {
    super(statusText);
  }
}
