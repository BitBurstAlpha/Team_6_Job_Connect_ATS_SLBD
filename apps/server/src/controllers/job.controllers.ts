import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { JobPostingInput } from '../schemas/job.schemas';
import { openingJob } from '../services/job.services';
import { getClientById } from '../services/client.services';

export const jobOpeningHandler = async (
    req: Request<{}, {}, JobPostingInput>,
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

        if (!client) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                err: "You can't open a job without completing the client's account.",
            });
        }

        await openingJob({
            userId: req.user?.id,
            ...data,
        });

        return res.status(StatusCodes.CREATED).json({
            msg: 'job opening successful',
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
