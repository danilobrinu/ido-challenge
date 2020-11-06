import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'morgan';

import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createError(404));
});

export default app;
