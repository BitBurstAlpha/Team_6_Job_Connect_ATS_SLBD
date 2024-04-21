import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import sendEmail from '../utils/mail';

import { getUserByEmail, createUser } from '../services/candidate.services';
import { RegisterCandidateInput } from '../schemas/user.schema';
import { passwordHash } from '../utils/hashing';

export const CandidateRegisterHandler = async (
    req: Request<{}, {}, RegisterCandidateInput>,
    res: Response,
) => {
    const { username, email, password } = req.body;

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
    });

    if (newUser) {
        await sendEmail({
            body: 'candidate user register success',
            email: email,
            subject: 'congratulation! account created',
        });

        return res.status(StatusCodes.CREATED).json({
            msg: 'user created successful',
        });
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'something went wrong',
    });
};

export const GetCurrentUserHandler = async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({
        id: req.user.id,
        email: req.user.email,
    });
};
