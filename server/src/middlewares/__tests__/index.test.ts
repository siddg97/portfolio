import { errorHandler, validateRequest } from '..';
import { Response, Request } from 'express';
import { BadRequestError, NotFoundError, RequestValidationError } from '../../errors';
import { ValidationChain } from 'express-validator';

const initializeMocks = () => {
    const req: any = jest.fn();
    const res: any = {
        send: jest.fn(),
        status: jest.fn((code: number) => res),
    };
    const next = jest.fn();
    return { req, res, next };
};

describe('errorHandler middleware', () => {
    type CustomError = NotFoundError | BadRequestError | RequestValidationError;

    interface CustomErrorTest {
        x: CustomError;
        name: string;
        expectedResult: {
            status: number;
            response: { reason: { details: string; code: string; field?: string }[] };
        };
    }

    function expectedErrResponse(x: CustomError): CustomErrorTest {
        return {
            x,
            name: x.constructor.name,
            expectedResult: {
                status: x.statusCode,
                response: { reason: x.serializeErrors() },
            },
        };
    }

    const customErrors = [
        new NotFoundError(),
        new BadRequestError('some error message'),
        new RequestValidationError([
            {
                location: 'body',
                param: 'some param',
                value: 'some value',
                msg: 'some message',
            },
        ]),
    ].map(expectedErrResponse);

    let res: any;
    let req: any;
    let next: any;

    beforeEach(() => {
        jest.clearAllMocks();
        const mocks = initializeMocks();
        res = mocks.res;
        req = mocks.req;
        next = mocks.next;
    });

    it('should never call next function', async () => {
        const x = new Error('some unknown error');
        errorHandler(x, req as Request, res as Response, next);

        expect(next).not.toHaveBeenCalled();
    });

    it('should never call req function', async () => {
        const x = new Error('some unknown error');

        errorHandler(x, req as Request, res as Response, next);

        expect(req).not.toHaveBeenCalled();
    });

    it('should return 500 and associated error message with unknown exception', async () => {
        const x = new Error('some unknown error');
        const expectedResult = {
            status: 500,
            response: { reason: [{ details: 'Something went wrong' }] },
        };
        errorHandler(x, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(expectedResult.status);
        expect(res.send).toHaveBeenCalledWith(expectedResult.response);
    });

    customErrors.map(
        ({
            x,
            name,
            expectedResult: { status: expectedStatus, response: expectedResponse },
        }) => {
            it(`should return correct error response for ${name} exception`, async () => {
                errorHandler(x, req as Request, res as Response, next);

                expect(res.status).toHaveBeenCalledWith(expectedStatus);
                expect(res.send).toHaveBeenCalledWith(expectedResponse);
            });
        }
    );
});

describe('validateRequest middleware', () => {
    let res: any;
    let req: any;
    let next: any;

    async function validationTester(
        validators: ValidationChain[],
        req?: any
    ): Promise<{ req: any; res: any; next: any }> {
        const request = req || jest.fn();
        const response: any = jest.fn();
        const nextFn: any = jest.fn();

        for (let i = 0; i < validators.length; i++) {
            validators[i](request, response, nextFn);
        }

        validateRequest(request, response, nextFn);
        return { req: request, res: response, next: nextFn };
    }

    beforeEach(() => {
        jest.clearAllMocks();
        const mocks = initializeMocks();
        res = mocks.res;
        req = mocks.req;
        next = mocks.next;
    });

    it('should not call any method of the res(response) param', async () => {
        const { res } = await validationTester([]);

        expect(res).not.toHaveBeenCalled();
    });

    it('should call next function if no validation errors were found', async () => {
        const { next } = await validationTester([]);

        expect(next).toHaveBeenCalledTimes(1);
    });
});
