import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Request, Response, Application } from 'express';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app: Application = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node.js app.');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡ Server is running on port: ${PORT}. ⚡`);
});
