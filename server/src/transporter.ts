import * as nodeMailer from 'nodemailer';

const transport = {
    host: process.env.MHOST,
    auth: {
        user: process.env.CUSER,
        pass: process.env.CPASS,
    },
};

export const transporter = nodeMailer.createTransport(transport);

export const startTransporter = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transporter.verify((error: unknown, _) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Transporter is ready');
        }
    });
};
