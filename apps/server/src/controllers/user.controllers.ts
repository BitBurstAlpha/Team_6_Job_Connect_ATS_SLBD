import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { updateUserById } from '../services/user.services';

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
