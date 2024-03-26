import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import { StatusCodes } from 'http-status-codes';

const validator =
    (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });

            next();
        } catch (e: unknown) {
            if (e instanceof Error) {
                return res.status(StatusCodes.BAD_REQUEST).send(e.message);
            }

            return res
                .status(StatusCodes.BAD_REQUEST)
                .send('input validation error');
        }
    };

export default validator;
