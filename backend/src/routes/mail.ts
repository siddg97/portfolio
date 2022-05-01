import express, { Request, Response } from 'express';
import escapeHTML from 'escape-html';
import { body } from 'express-validator';
import { mailRepo } from '../repository';
import { validateRequest } from '../middlewares';
import logger from '../logger';
import { InternalServerError } from '../errors';

const router = express.Router();

const sendMailRequestValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('"name" cannot be empty'),
  body('email')
    .isEmail()
    .withMessage('"email" has to be a valid email address'),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('"subject" cannot be empty'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('"message" cannot be empty'),
];
async function sendMail(req: Request, res: Response) {
  let { name, email, subject, message } = req.body;

  name = escapeHTML(name);
  email = escapeHTML(email);
  subject = escapeHTML(subject);
  message = escapeHTML(message);

  try {
    await mailRepo.sendMessage(name, subject, message, email);
  } catch (error) {
    logger.error(`Failed to send mail: ${error}`);
    throw new InternalServerError();
  }

  return res.send({ status: 'success' });
}

router
  .route('/')
  .post(sendMailRequestValidation, validateRequest, sendMail);

export { router as mailRouter };
