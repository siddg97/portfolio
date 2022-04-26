import HttpError from './HttpError';

class BadRequestError extends HttpError {
  statusCode = 400;
  errCode = 'bad-request-err';

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError(): { message: string; code: string } {
    return { message: this.message, code: this.errCode };
  }
}

export default BadRequestError;
