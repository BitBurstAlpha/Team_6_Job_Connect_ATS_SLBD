import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import sendEmail from '../utils/mail';

import { getUserByEmail } from '../services/user.services';
import { createUser } from '../services/user.services';
import { RegisterUserInput } from '../schemas/user.schema';
import { ClientAccountInput } from '../schemas/client.schemas';
import { passwordHash } from '../utils/hashing';
import {
    createClientAccount,
    getClientById,
} from '../services/client.services';

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

        await createUser({
            username,
            email,
            password: hashedPassword,
            role: 'client',
        });

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

export const clientAccountCreationHandler = async (
    req: Request<{}, {}, ClientAccountInput>,
    res: Response,
) => {
    const data = req.body;

    try {
        if (!req.user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                err: 'unauthorized',
            });
        }

        const client = await getClientById(req.user?.id);

        if (client) {
            return res.status(StatusCodes.CONFLICT).json({
                err: 'client account already created',
            });
        }

        await createClientAccount({
            userID: req.user.id,
            ...data,
        });

        return res.status(StatusCodes.CREATED).json({
            msg: 'client account creation successful',
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                err: err.message,
            });
        }
    }
};
