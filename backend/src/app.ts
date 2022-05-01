import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { NotFoundError } from './errors';
import { errorHandler } from './middlewares';
import configureRoutes from './routes';

const app = express();

app.set('trust proxy', true);

// json parser
app.use(json());

app.get('/api/ping', (_, res) => res.send({ ping: 'pong' }));

configureRoutes(app);

// 404
app.all('*', async () => {
  throw new NotFoundError();
});

// Any novel errors thrown
app.use(errorHandler);

export default app;
