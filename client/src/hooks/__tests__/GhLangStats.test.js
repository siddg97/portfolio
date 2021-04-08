import { renderHook, initMockServer } from 'tests/setup.js';
import { rest } from 'msw';
import { cleanup } from '@testing-library/react-hooks';
import { useGhLangStats } from 'hooks/queries';

describe('useGhLangStats hook', () => {
    const GH_LANG_STATS_URL = '/api/github/lang-stats';
    const server = initMockServer();
    beforeAll(() => server.listen());
    beforeEach(() => {
        cleanup();
        server.resetHandlers();
    });
    afterAll(() => server.close());

    it('should receive lang stats data if request was successful', async () => {
        const mockData = {
            langStats: {
                someKey: 'some value',
                someOtherKey: 'some other value',
            },
        };
        const handlers = [
            rest.get(GH_LANG_STATS_URL, (_, res, ctx) => {
                return res(ctx.json(mockData));
            }),
        ];
        server.use(...handlers);

        const { result, waitFor } = renderHook(useGhLangStats);
        await waitFor(() => {
            expect(result.current.status).toEqual('success');
        });
        expect(result.current.data).toEqual(mockData.langStats);
    });
});
