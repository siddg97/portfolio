import { Transporter } from 'nodemailer';
import config from '../config';

export class MailRepository {
  _transporter: Transporter;

  constructor(transport: Transporter) {
    this._transporter = transport;
  }

  async sendMessage(
    from: string,
    subject: string,
    message: string,
    email: string
  ) {
    // FIXME: format into a good message
    const emailMessage = `
    Name: ${from}
    Email: ${email}

    Subject: ${subject}
    Message: ${message}
    `;

    const mail = {
      from,
      to: config.MAIL_SENDER,
      text: emailMessage,
      subject: '[Portfolio]: Message',
    };

    await this._transporter.sendMail(mail);
  }
}
