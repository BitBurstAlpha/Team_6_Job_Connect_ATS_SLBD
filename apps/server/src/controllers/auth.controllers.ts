import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { signJwt } from '../utils/jwt';
import { LoginUserInput } from '../schemas/auth.schema';
import { getUserByEmail } from '../services/user.services';
import { passwordCompare } from '../utils/hashing';

import { UserPayload } from '../interfaces';

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

    const accessToken = signJwt(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        } as UserPayload,
        'JWT_ACCESS_KEY',
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

export const getCurrentUser = (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({
        ...req.user,
    });
};

export const logoutHandler = (req: Request, res: Response) => {
    res.cookie('accessToken', '', {
        maxAge: 0,
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
    });

    return res.status(StatusCodes.OK).json({
        msg: 'logout success',
    });
};
