import { ValidationError } from 'express-validator';

export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { details: string; field?: string; code: string }[];
}

export class BadRequestError extends CustomError {
    statusCode = 400;
    errCode = 'bad-request';
    constructor(public message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(): { details: string; code: string }[] {
        return [{ details: this.message, code: this.errCode }];
    }
}

export class NotFoundError extends CustomError {
    statusCode = 404;
    errCode = 'not-found-err';
    constructor() {
        super('Route not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): { details: string; code: string }[] {
        return [{ details: 'Not found', code: this.errCode }];
    }
}

export class RequestValidationError extends CustomError {
    statusCode = 400;
    errCode = 'invalid-request-err';
    constructor(public errors: ValidationError[]) {
        super('Invalid request received');

        // Only for extending built-in class Error
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors(): { details: string; code: string }[] {
        return this.errors.map((err) => ({
            details: err.msg,
            field: err.param,
            code: this.errCode,
        }));
    }
}
