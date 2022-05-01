import nodemailer, { SendMailOptions } from 'nodemailer';
import config from './config';

export const transport = nodemailer.createTransport(
  config.transportOptions as SendMailOptions
);

export const startMailTransport = async () => {
  await transport.verify();
};
