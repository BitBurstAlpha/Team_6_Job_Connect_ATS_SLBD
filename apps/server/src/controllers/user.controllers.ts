import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { getUserByEmail, createUser } from '../services/user.services';
import { RegisterUserInput } from '../schemas/user.schema';
import { passwordHash } from '../utils/hashing';

export async function UserRegisterHandler(
    req: Request<{}, {}, RegisterUserInput>,
    res: Response,
) {
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
        return res.status(StatusCodes.CREATED).json({
            msg: 'user created successful',
        });
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'something went wrong',
    });
}
