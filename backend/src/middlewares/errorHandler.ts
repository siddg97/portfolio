import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';
import logger from '../logger';

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

  logger.error(`Novel Error:
  ${err.name}: ${err.message}
  ${err.stack}`);

  res.status(500).send({
    message: 'Something went wrong',
  });
}
