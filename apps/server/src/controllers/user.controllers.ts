import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getUserByEmail, updateUserById } from '../services/user.services';
import { PasswordChangeInput } from '../schemas/user.schema';
import { passwordCompare, passwordHash } from '../utils/hashing';

export const updateUserAvatarHandler = async (req: Request, res: Response) => {
    try {
        if (!req.user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                err: 'unauthorized',
            });
        }

        if (!req.file?.filename) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                err: 'avatar image is required',
            });
        }

        await updateUserById(
            {
                avatar: `/uploads/${req.file?.filename}`,
            },
            req.user.id,
        );

        res.status(StatusCodes.OK).json({
            msg: 'avatar updated successful',
        });
    } catch (err: unknown) {
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

export const passwordChangeHandler = async (
    req: Request<{}, {}, PasswordChangeInput>,
    res: Response,
) => {
    try {
        const { newPassword, oldPassword } = req.body;

        if (!req.user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                err: 'unauthorized',
            });
        }

        const user = await getUserByEmail(req.user.email);

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                err: 'unauthorized',
            });
        }

        const comparedPassword = await passwordCompare(
            user.password,
            oldPassword,
        );

        if (!comparedPassword) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                err: 'invalid credentials',
            });
        }

        const hashedPassword = await passwordHash(newPassword);

        await updateUserById(
            {
                password: hashedPassword,
            },
            req.user.id,
        );

        res.status(StatusCodes.OK).json({
            msg: 'password change successful',
        });
    } catch (err: unknown) {
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
