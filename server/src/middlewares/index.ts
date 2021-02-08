import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError, CustomError } from '../errors';

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
): void => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).send({ reason: err.serializeErrors() });
        return;
    }
    res.status(500).send({
        reason: [{ details: 'Something went wrong' }],
    });
};

export const validateRequest = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    } else {
        next();
    }
};
