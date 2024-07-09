import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { setupMongo } from './database';
import { routes } from './routes';
import { errorHandler } from './middleware/error.handler.midleware';

setupMongo().then(() => {
  const app = express();

  app.use(cors({
    origin: process.env.FRONT_URL,
  }));
  app.use(json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(3333, () => console.log('🚀App is running a port 3333'));
});
