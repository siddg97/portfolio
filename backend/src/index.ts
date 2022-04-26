import app from './app';
import logger from './logger';

const start = async () => {
  app.listen(3000, () => {
    console.log('Backend listening on port 3000');
  });
};

start();
