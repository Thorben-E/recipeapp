import { Request, Response } from 'express';

exports.signup = (req: Request, res: Response) => {
  res.send('signup');
};

exports.login = (req: Request, res: Response) => {
  res.send('login');
};
