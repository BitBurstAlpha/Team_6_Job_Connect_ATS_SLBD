import type { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../services/user.services';
import { UserPayload } from '../interfaces';

export const verifyJwt = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const token =
        req.cookies?.accessToken ||
        req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).send('unauthorized');
    }

    try {
        const decodedToken: UserPayload = jwt.verify(
            token,
            process.env.JWT_ACCESS_KEY as string,
        ) as UserPayload;

        const user = await getUserByEmail(decodedToken.email);

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).send('unauthorized');
        }

        req.user = {
            id: user.id,
            email: user.email,
        };

        req.identity = {
            scopes: [user.role],
        };

        next();
    } catch (error: unknown) {
        return res.status(StatusCodes.UNAUTHORIZED).send('unauthorized');
    }
};
