import { Express } from 'express';
import { mailRouter } from './mail';

function configureRoutes(app: Express) {
  app.use('/api/mail', mailRouter);
}

export default configureRoutes;
