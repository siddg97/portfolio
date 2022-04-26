import app from './app';
import logger from './logger';

const start = async () => {
  app.listen(3000, () => {
    logger.info('Email listening on port 3000 !!!');
  });
};

start();
