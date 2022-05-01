import app from './app';
import logger from './logger';
import { startMailTransport } from './transport';

const start = async () => {
  try {
    await startMailTransport();
    logger.info('Mail transporter is ready');
  } catch (err) {
    logger.error('Error starting nodemailer transport');
    logger.error(err);
    process.exit(1);
  }

  app.listen(3000, () => {
    logger.info('Backend listening on port 3000');
  });
};

start();
