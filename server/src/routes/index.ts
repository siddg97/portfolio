import { Express } from 'express';
import { mailRouter } from './mail';
import { portFolioRouter } from './portfolio';

export const configureRoutes = (app: Express): void => {
    app.use('/api/mail', mailRouter);
    app.use('/api/github', portFolioRouter);
};
