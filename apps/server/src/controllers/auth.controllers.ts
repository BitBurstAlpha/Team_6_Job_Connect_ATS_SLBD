import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { LoginUserInput } from '../schemas/auth.schema';
import { getUserByEmail } from '../services/user.services';
import { passwordCompare } from '../utils/hashing';

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

    return res.status(StatusCodes.OK).json({
        msg: 'login success!',
    });
};
