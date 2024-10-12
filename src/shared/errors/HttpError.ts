export class HttpError {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
  ) {}
}
