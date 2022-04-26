import request from 'supertest';
import app from '../../app';

const PING_URL = '/api/ping';

describe(`GET ${PING_URL}`, () => {
  it(`has route handler listening for GET requests for ${PING_URL}`, async () => {
    const resp = await request(app).get(PING_URL).send();
    expect(resp.status).not.toBe(404);
  });

  it('returns a ping-pong response', async () => {
    const resp = await request(app).get(PING_URL).send();
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({ ping: 'pong' });
  });
});
