import { renderHook, initMockServer } from 'tests/setup.js';
import { rest } from 'msw';
import { cleanup } from '@testing-library/react-hooks';
import { useGhTopRepos } from 'hooks/queries';

describe('useGhTopRepos hook', () => {
    const GH_TOP_REPOS = '/api/github/top-repos';
    const server = initMockServer();
    beforeAll(() => server.listen());
    beforeEach(() => {
        cleanup();
        server.resetHandlers();
    });
    afterAll(() => server.close());

    it('should receive top repos data if request was successful', async () => {
        const mockData = {
            topRepos: {
                someKey: 'some value',
                someOtherKey: 'some other value',
            },
        };
        const handlers = [
            rest.get(GH_TOP_REPOS, (_, res, ctx) => {
                return res(ctx.json(mockData));
            }),
        ];
        server.use(...handlers);

        const { result, waitFor } = renderHook(useGhTopRepos);
        await waitFor(() => {
            expect(result.current.status).toEqual('success');
        });
        expect(result.current.data).toEqual(mockData.topRepos);
    });
});
