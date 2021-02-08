import axios from 'axios';
jest.mock('axios');

export const mockAxios = (): jest.Mocked<typeof axios> =>
    axios as jest.Mocked<typeof axios>;

beforeAll(() => {
    process.env.MHOST = 'some host';
    process.env.CUSER = 'some email';
    process.env.CPASS = 'some password';
    process.env.SEND_TO_EMAIL = 'some email';
    process.env.GH_PAT = 'some PAT';
    process.env.GH_API = 'https://api.github.com';
});

/**
 * Reset all mocks
 */
beforeEach(() => {
    jest.clearAllMocks();
});
