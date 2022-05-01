import { transport } from '../transport';
import { MailRepository } from './mail';

const mailRepo = new MailRepository(transport);

export { mailRepo };
