import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof HttpError) {
    res.status(err.statusCode).send(err.serializeError());
    return;
  }

  res.status(500).send({
    message: 'Something went wrong',
  });
}
