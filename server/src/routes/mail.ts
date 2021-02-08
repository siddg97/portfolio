import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares';
import { transporter } from '../transporter';

const router = express.Router();

router.post(
    '/',
    [
        body('name').trim().notEmpty().withMessage('Name cannot be empty'),
        body('email').isEmail().withMessage('Invalid Email Address'),
        body('subject').trim().notEmpty().withMessage('Subject cannot be empty'),
        body('message').trim().notEmpty().withMessage('Message cannot be empty'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { name, email, subject, message } = req.body;
        const text = `
        Name:    ${name}
        Email:   ${email}

        Message:
        ${message}`;

        const mail = {
            from: email,
            to: process.env.SEND_TO_EMAIL,
            text,
            subject: `[Portfolio]: ${subject}`,
        };
        try {
            await transporter.sendMail(mail);
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: 'error' });
        }
        res.send({ status: 'success' });
    }
);

export { router as mailRouter };
