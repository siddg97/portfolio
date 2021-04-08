import { renderHook, initMockServer } from 'tests/setup.js';
import { rest } from 'msw';
import { cleanup } from '@testing-library/react-hooks';
import { useGhLangStars } from 'hooks/queries';

describe('useGhLangStars hook', () => {
    const GH_LANG_STARS_URL = '/api/github/lang-stars';
    const server = initMockServer();
    beforeAll(() => server.listen());
    beforeEach(() => {
        cleanup();
        server.resetHandlers();
    });
    afterAll(() => server.close());

    it('should receive lang stars data if request was successful', async () => {
        const mockData = {
            langStars: {
                someKey: 'some value',
                someOtherKey: 'some other value',
            },
        };
        const handlers = [
            rest.get(GH_LANG_STARS_URL, (_, res, ctx) => {
                return res(ctx.json(mockData));
            }),
        ];
        server.use(...handlers);

        const { result, waitFor } = renderHook(useGhLangStars);
        await waitFor(() => {
            expect(result.current.status).toEqual('success');
        });
        expect(result.current.data).toEqual(mockData.langStars);
    });
});
