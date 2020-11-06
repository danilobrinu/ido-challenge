import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import type { Payload } from '../types/payload';
import { getToken } from '../utils/get-token';

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || 'foo';

router.get('/', (_req: Request, res: Response) => {
  res.json({ message: '¡Hola Mundo!' });
});

router.post('/login', (req: Request, res: Response) => {
  const payload = req.body as Payload;
  const token = jwt.sign(payload, SECRET_KEY);

  res.json({ token });
});

router.get('/verify', (req: Request, res: Response) => {
  try {
    jwt.verify(getToken(req.headers.authorization), SECRET_KEY);

    res.send({ message: 'verificado' });
  } catch (e) {
    res.status(401).json({ message: 'token no valido' });
  }
});

export default router;
