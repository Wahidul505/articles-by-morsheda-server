import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

export const auth =
  () =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      //   checking token exists on req.headers or not
      const email = req.headers.email;
      const password = req.headers.password;

      if (!email || !password) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }

      if (email === process.env.EMAIL && password === process.env.PASSWORD) {
        next();
      } else {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
    } catch (error) {
      next(error);
    }
  };
