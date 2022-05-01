import request from 'supertest';
import app from '../../app';
import { mailRepo } from '../../repository';

const MAIL_URL = '/api/mail';

describe(`POST ${MAIL_URL}`, () => {
  let mailSendSpy;
  beforeEach(() => {
    mailSendSpy = jest
      .spyOn(mailRepo, 'sendMessage')
      .mockImplementation(async () => Promise.resolve());
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it(`has route handler listening for POST requests for ${MAIL_URL}`, async () => {
    const resp = await request(app).post(MAIL_URL).send();
    expect(resp.status).not.toBe(404);
  });

  const fields = ['name', 'email', 'subject', 'message'];
  fields.forEach((field: string) => {
    it(`return 400 if "${field}" is not defined in request json body`, async () => {
      let resp = await request(app).post(MAIL_URL).send({});
      expect(resp.status).toBe(400);

      const body = {
        name: 'test-name',
        email: 'email@test.com',
        subject: 'test subject',
        message: 'test message',
      };

      delete body[field];

      resp = await request(app).post(MAIL_URL).send(body).expect(400);
      expect(resp.body.code).toBe('bad-request-err');
    });
  });

  it('return 400 if "email" is malformed in request json body', async () => {
    const body = {
      name: 'test-name',
      email: 'invalid-email',
      subject: 'test subject',
      message: 'test message',
    };

    const resp = await request(app)
      .post(MAIL_URL)
      .send(body)
      .expect(400);
    expect(resp.body.code).toBe('bad-request-err');
  });

  it('returns 200 if email was sent successfully', async () => {
    const body = {
      name: 'test-name',
      email: 'email@test.com',
      subject: 'test subject',
      message: 'test message',
    };

    const resp = await request(app)
      .post(MAIL_URL)
      .send(body)
      .expect(200);
    expect(resp.body.status).toBe('success');
  });

  it('should call mailRepo.sendMessage only once with correct arguments if email was sent successfully', async () => {
    const body = {
      name: 'test-name',
      email: 'email@test.com',
      subject: 'test subject',
      message: 'test message',
    };

    const resp = await request(app)
      .post(MAIL_URL)
      .send(body)
      .expect(200);
    expect(resp.body.status).toBe('success');
    expect(mailSendSpy).toBeCalledTimes(1);

    const [from, subject, message, email] = mailSendSpy.mock.calls[0];
    expect(from).toBe(body.name);
    expect(subject).toBe(body.subject);
    expect(email).toBe(body.email);
    expect(message).toBe(body.message);
  });

  it('returns 500 if email was not sent successfully', async () => {
    mailSendSpy = jest
      .spyOn(mailRepo, 'sendMessage')
      .mockImplementation(async () => Promise.reject());

    const body = {
      name: 'test-name',
      email: 'email@test.com',
      subject: 'test subject',
      message: 'test message',
    };

    await request(app)
      .post(MAIL_URL)
      .send(body)
      .expect(500);
  });
});
