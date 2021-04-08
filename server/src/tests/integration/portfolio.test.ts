import request from 'supertest';
import app from '../../app';
import { mockAxios } from '../setup';

describe('/api/github/user', () => {
    const url = '/api/github/user';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it(`should have a route handler listening to the ${url} endpoint`, async () => {
        const moxios = mockAxios();
        const mockUser = {
            login: 'someGhId',
            created_at: '2018-05-17T01:58:33Z',
            avatar_url: 'some link',
            location: 'somewhere',
            public_repos: 99,
            followers: 98,
            following: 97,
            name: 'Some User',
            html_url: 'some user link',
        };

        moxios.get.mockResolvedValue({
            data: {
                ...mockUser,
            },
        });
        const response = await request(app).get(url).send();
        expect(response.status).not.toBe(404);
    });

    it('should return the correct response along with 200 status', async () => {
        const moxios = mockAxios();
        const mockUser = {
            login: 'someGhId',
            created_at: '2018-05-17T01:58:33Z',
            avatar_url: 'some link',
            location: 'somewhere',
            public_repos: 99,
            followers: 98,
            following: 97,
            name: 'Some User',
            html_url: 'some user link',
        };

        moxios.get.mockResolvedValue({
            data: {
                ...mockUser,
            },
        });
        const response = await request(app).get(url).send().expect(200);
        expect(response.body.user).toEqual(mockUser);
    });

    it('should send a 500 if api is github api is not reachable', async () => {
        const moxios = mockAxios();
        moxios.get.mockRejectedValue({ data: { error: 'some err ' } });
        await request(app).get(url).send().expect(500);
    });
});

describe('/api/github/top-repos', () => {
    const url = '/api/github/top-repos';
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it(`should have a route handler listening to the ${url} endpoint`, async () => {
        const moxios = mockAxios();
        const mockTopRepos: [] = [];
        moxios.get.mockResolvedValue({
            data: mockTopRepos,
        });
        const response = await request(app).get(url).send();
        expect(response.status).not.toBe(404);
    });

    it('should return the correct response along with 200 status', async () => {
        const moxios = mockAxios();
        const mockTopRepos = [
            {
                name: 'some repo 1',
                html_url: 'repo 1 link',
                description: 'repo 1 description',
                stargazers_count: 44,
                size: 345,
                forks_count: 122,
                language: 'some lang',
            },
            {
                name: 'some repo 2',
                html_url: 'repo 2 link',
                description: 'repo 2 description',
                stargazers_count: 40,
                size: 347,
                forks_count: 124,
                language: 'some other lang',
            },
        ];
        moxios.get.mockResolvedValue({
            data: mockTopRepos,
        });
        const response = await request(app).get(url).send().expect(200);
        expect(JSON.stringify(response.body.topRepos)).toEqual(
            JSON.stringify(mockTopRepos)
        );
    });

    it('should send a 500 if api is github api is not reachable', async () => {
        const moxios = mockAxios();
        moxios.get.mockRejectedValue({ data: { error: 'some err ' } });
        await request(app).get(url).send().expect(500);
    });
});

describe('/api/github/lang-stats', () => {
    const url = '/api/github/lang-stats';
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it(`should have a route handler listening to the ${url} endpoint`, async () => {
        const moxios = mockAxios();
        const mockRepos: [] = [];
        moxios.get.mockResolvedValue({
            data: mockRepos,
        });
        const response = await request(app).get(url).send();
        expect(response.status).not.toBe(404);
    });

    it('should return the correct response along with 200 status', async () => {
        const mockRepos = [
            {
                fork: false,
                language: 'Python',
            },
            {
                fork: false,
                language: 'C',
            },
            {
                fork: false,
                language: 'C',
            },
            {
                fork: true,
                language: 'C',
            },
            {
                fork: false,
                language: 'JavaScript',
            },
        ];

        const moxios = mockAxios();
        moxios.get.mockResolvedValue({
            data: mockRepos,
        });

        const response = await request(app).get(url).send().expect(200);

        const expectedResp = [
            { label: 'C', value: 2, color: '#555555' },
            { label: 'JavaScript', value: 1, color: '#f1e05a' },
            { label: 'Python', value: 1, color: '#3572A5' },
        ];

        expect(JSON.stringify(response.body.langStats)).toEqual(
            JSON.stringify(expectedResp)
        );
    });

    it('should send a 500 if api is github api is not reachable', async () => {
        const moxios = mockAxios();
        moxios.get.mockRejectedValue({ data: { error: 'some err' } });
        await request(app).get(url).send().expect(500);
    });
});

describe('/api/github/lang-stars', () => {
    const url = '/api/github/lang-stars';
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it(`should have a route handler listening to the ${url} endpoint`, async () => {
        const moxios = mockAxios();
        const mockRepos: [] = [];
        moxios.get.mockResolvedValue({
            data: mockRepos,
        });
        const response = await request(app).get(url).send();
        expect(response.status).not.toBe(404);
    });

    it('should return the correct response along with 200 status', async () => {
        const mockRepos = [
            {
                fork: false,
                language: 'Python',
                stargazers_count: 10,
            },
            {
                fork: false,
                language: 'C',
                stargazers_count: 10,
            },
            {
                fork: false,
                language: 'C',
                stargazers_count: 10,
            },
            {
                fork: true,
                language: 'C',
                stargazers_count: 10,
            },
            {
                fork: false,
                language: 'JavaScript',
                stargazers_count: 10,
            },
        ];

        const moxios = mockAxios();
        moxios.get.mockResolvedValue({
            data: mockRepos,
        });

        const response = await request(app).get(url).send().expect(200);

        const expectedResp = [
            { label: 'C', value: 20, color: '#555555' },
            { label: 'JavaScript', value: 10, color: '#f1e05a' },
            { label: 'Python', value: 10, color: '#3572A5' },
        ];

        expect(JSON.stringify(response.body.langStars)).toEqual(
            JSON.stringify(expectedResp)
        );
    });

    it('should send a 500 if api is github api is not reachable', async () => {
        const moxios = mockAxios();
        moxios.get.mockRejectedValue({ data: { error: 'some err' } });
        await request(app).get(url).send().expect(500);
    });
});
