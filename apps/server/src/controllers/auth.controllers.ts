import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sign } from 'jsonwebtoken';

import { LoginUserInput } from '../schemas/auth.schema';
import { getUserByEmail } from '../services/user.services';
import { passwordCompare } from '../utils/hashing';

interface UserPayload {
    id: number;
    email: string;
}

export const userLoginHandler = async (
    req: Request<{}, {}, LoginUserInput>,
    res: Response,
) => {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            msg: 'invalid credentials',
        });
    }

    const comparedPassword = await passwordCompare(user.password, password);

    if (!comparedPassword) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            msg: 'invalid credentials',
        });
    }

    const accessToken = sign(
        {
            id: user.id,
            email: user.email,
        } as UserPayload,
        (process.env.JWT_ACCESS_KEY as string) ?? '',
        {
            expiresIn: '7d',
        },
    );

    res.cookie('accessToken', accessToken, {
        maxAge: 604800000,
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
    });

    return res.status(StatusCodes.OK).json({
        accessToken,
    });
};
