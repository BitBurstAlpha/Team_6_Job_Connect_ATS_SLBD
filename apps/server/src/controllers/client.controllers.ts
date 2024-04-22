import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import sendEmail from '../utils/mail';

import { getUserByEmail } from '../services/user.services';
import { createUser } from '../services/user.services';
import { RegisterUserInput } from '../schemas/user.schema';
import { passwordHash } from '../utils/hashing';

export const clientRegisterHandler = async (
    req: Request<{}, {}, RegisterUserInput>,
    res: Response,
) => {
    const { username, email, password } = req.body;

    try {
        const existedUser = await getUserByEmail(email);

        if (existedUser) {
            return res.status(StatusCodes.CONFLICT).send({
                msg: 'email already exists',
            });
        }

        const hashedPassword = await passwordHash(password);

        const newUser = await createUser({
            username,
            email,
            password: hashedPassword,
            role: 'client',
        });

        if (!newUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: 'client register fail',
            });
        }

        await sendEmail({
            body: 'client register success',
            email: email,
            subject: 'congratulation! account created',
        });

        return res.status(StatusCodes.CREATED).json({
            msg: 'user created successful',
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                msg: err.message,
            });
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            msg: 'something went wrong',
        });
    }
};
