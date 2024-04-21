import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sign } from 'jsonwebtoken';

import { LoginUserInput } from '../schemas/auth.schema';
import { getCandidateByEmail } from '../services/candidate.services';
import { passwordCompare } from '../utils/hashing';

import { UserPayload } from '../interfaces';

export const candidateLoginHandler = async (
    req: Request<{}, {}, LoginUserInput>,
    res: Response,
) => {
    const { email, password } = req.body;

    const user = await getCandidateByEmail(email);

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
            role: user.role,
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
