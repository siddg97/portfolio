import { renderHook, initMockServer } from 'tests/setup.js';
import { rest } from 'msw';
import { cleanup } from '@testing-library/react-hooks';
import { useGhUserData } from 'hooks/queries';

describe('useGhUserData hook', () => {
    const GH_USER_DATA_URL = '/api/github/user';
    const server = initMockServer();
    beforeAll(() => server.listen());
    beforeEach(() => {
        cleanup();
        server.resetHandlers();
    });
    afterAll(() => server.close());

    it('should receive user data if request was successful', async () => {
        const mockData = {
            user: {
                someKey: 'some value',
                someOtherKey: 'some other value',
            },
        };
        const handlers = [
            rest.get(GH_USER_DATA_URL, (_, res, ctx) => {
                return res(ctx.json(mockData));
            }),
        ];
        server.use(...handlers);

        const { result, waitFor } = renderHook(useGhUserData);
        await waitFor(() => {
            expect(result.current.status).toEqual('success');
        });
        expect(result.current.data).toEqual(mockData.user);
    });
});
