import app from './app';
import { startTransporter } from './transporter';

const start = async () => {
    if (!process.env.MHOST) {
        throw new Error('No MHOST set');
    }

    if (!process.env.CUSER) {
        throw new Error('No CUSER set');
    }

    if (!process.env.CPASS) {
        throw new Error('No CPASS set');
    }

    if (!process.env.SEND_TO_EMAIL) {
        throw new Error('No SEND_TO_EMAIL set');
    }

    if (!process.env.GH_PAT) {
        throw new Error('No GH_PAT set');
    }

    if (!process.env.GH_API) {
        throw new Error('No GH_API set');
    }

    startTransporter();

    app.listen(3000, () => console.log('Server listening on port 3000 !!'));
};

start();
