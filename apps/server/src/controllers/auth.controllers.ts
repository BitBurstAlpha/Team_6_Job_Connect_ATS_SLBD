import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { signJwt } from '../utils/jwt';
import { LoginUserInput } from '../schemas/auth.schema';
import {
    getUserByEmail,
    getUserByEmailWithRole,
} from '../services/user.services';
import { passwordCompare } from '../utils/hashing';
import { config } from '../config';
import type { User } from '../db/schema/users';

import { UserPayload } from '../interfaces';
import { getClientById } from '../services/client.services';

export const userLoginHandler = async (
    req: Request<{}, {}, LoginUserInput>,
    res: Response,
) => {
    const { email, password, type } = req.body;

    let user: User | undefined;

    if (type === 'client' || type === 'applicant') {
        user = await getUserByEmailWithRole(email, type);
    } else {
        user = await getUserByEmail(email);
    }

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

    if (type === 'client') {
        res.cookie('accessToken', accessToken, {
            maxAge: 604800000,
            path: '/',
            httpOnly: true,
            sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
            secure: config.NODE_ENV === 'production',
            domain:
                config.NODE_ENV === 'production'
                    ? 'client.slbd.uk'
                    : 'localhost',
        });
    } else {
        res.cookie('accessToken', accessToken, {
            maxAge: 604800000,
            path: '/',
            httpOnly: true,
            sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
            secure: config.NODE_ENV === 'production',
            domain: config.NODE_ENV === 'production' ? 'slbd.uk' : 'localhost',
        });
    }

    return res.status(StatusCodes.OK).json({
        id: user.id,
        username: user.username,
        role: user.role,
        avatar: `${config.ORIGIN}${user.avatar}`,
    });
};

export const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const user = await getUserByEmail(req.user.email);

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                err: 'unauthorized',
            });
        }

        const client = await getClientById(user.id);

        return res.status(StatusCodes.OK).json({
            id: user.id,
            username: user.username,
            role: user.role,
            avatar: `${config.ORIGIN}${user.avatar}`,
            isAccount: !!client,
        });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                err: err.message,
            });
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            err: 'something went wrong',
        });
    }
};

export const logoutHandler = (req: Request, res: Response) => {
    res.cookie('accessToken', '', {
        maxAge: 0,
        path: '/',
        httpOnly: true,
        sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
        secure: config.NODE_ENV === 'production',
        domain: config.NODE_ENV === 'production' ? '.slbd.uk' : 'localhost',
    });

    return res.status(StatusCodes.OK).json({
        msg: 'logout success',
    });
};
