import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';

export default function validateRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const [error] = errors.array({ onlyFirstError: true });
    throw new BadRequestError(error.msg);
  }

  next();
}
