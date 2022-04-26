import HttpError from './HttpError';

class NotFoundError extends HttpError {
  statusCode = 404;
  errCode = 'not-found-err';

  constructor() {
    super('Resource not found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError(): { message: string; code: string } {
    return { message: this.message, code: this.errCode };
  }
}

export default NotFoundError;
