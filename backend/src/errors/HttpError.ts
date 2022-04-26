abstract class HttpError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
  }

  abstract serializeError(): {
    message: string;
    code: string;
  };
}

export default HttpError;
