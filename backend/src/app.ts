import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

import { contactRoute } from './app/routes/contactme.ts';

export const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(contactRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

