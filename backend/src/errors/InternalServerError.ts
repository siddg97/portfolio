import HttpError from './HttpError';

class InternalServerError extends HttpError {
  statusCode = 500;
  errCode = 'internal-server-err';

  constructor(message = 'Something went wrong') {
    super(message);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeError(): { message: string; code: string } {
    return { message: this.message, code: this.errCode };
  }
}

export default InternalServerError;
