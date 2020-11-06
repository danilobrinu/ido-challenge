import * as http from 'http';
import app from './src/app';
import dotenv from 'dotenv';

dotenv.config();

const port = Number.parseInt(process.env.PORT || '6000', 10);

http
  .createServer(app)
  .listen(port, () => console.log(`Server is running on http://localhost:${port}`));
