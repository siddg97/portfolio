import { renderHook, initMockServer } from 'tests/setup.js';
import { rest } from 'msw';
import { cleanup } from '@testing-library/react-hooks';
import { useSendMail } from 'hooks/queries';
import { act } from 'react-test-renderer';

describe('useSendMail hook', () => {
    const SEND_MAIL_URL = '/api/mail';
    const server = initMockServer();
    beforeAll(() => server.listen());
    beforeEach(() => {
        cleanup();
        server.resetHandlers();
    });
    afterAll(() => server.close());

    it('should have success status if email was sent', async () => {
        const handlers = [
            rest.post(SEND_MAIL_URL, (_, res, ctx) => {
                return res(ctx.status(200));
            }),
        ];
        server.use(...handlers);

        const { result, waitFor } = renderHook(useSendMail);
        await act(result.current.refetch);
        await waitFor(() => {
            expect(result.current.status).toEqual('success');
        });
    });

    it('should have error status if email was not sent', async () => {
        const handlers = [
            rest.post(SEND_MAIL_URL, (_, res, ctx) => {
                return res(ctx.status(400));
            }),
        ];
        server.use(...handlers);

        const { result, waitFor } = renderHook(useSendMail);
        await act(result.current.refetch);
        await waitFor(() => {
            expect(result.current.status).toEqual('error');
        });
    });
});
