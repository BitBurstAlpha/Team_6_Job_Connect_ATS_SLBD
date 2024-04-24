import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { nanoid } from 'nanoid';

import { JobPostingInput, JobUpdateInput } from '../schemas/job.schemas';
import {
    getAllJobs,
    openingJob,
    getJobBySlug,
    deleteJobBySlug,
    updateJobBySlug,
} from '../services/job.services';
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

        const slug = nanoid();

        await openingJob({
            userId: req.user?.id,
            slug,
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

export const getAllJobHandler = async (req: Request, res: Response) => {
    try {
        const jobs = await getAllJobs();

        if (jobs.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'Not Any Jobs',
            });
        }

        return res.status(StatusCodes.OK).json(jobs);
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

export const getJobBySlugHandler = async (
    req: Request<{ slug: string }>,
    res: Response,
) => {
    const slug = req.params.slug ?? '';

    try {
        const job = await getJobBySlug(slug);

        if (!job) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'Job Not Found',
            });
        }

        return res.status(StatusCodes.OK).json(job);
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

export const deleteJobBySlugHandler = async (
    req: Request<{ slug: string }>,
    res: Response,
) => {
    const slug = req.params.slug ?? '';

    try {
        if (!req.user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                msg: 'unauthorized',
            });
        }

        await deleteJobBySlug(slug, req.user.id);

        return res.status(StatusCodes.OK).json({
            msg: 'job deleted',
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

export const updateJobBySlugHandler = async (
    req: Request<{ slug: string }, {}, JobUpdateInput>,
    res: Response,
) => {
    const slug = req.params.slug ?? '';

    const data = req.body;

    try {
        if (!req.user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                msg: 'unauthorized',
            });
        }

        const job = await getJobBySlug(slug);

        if (!job) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'Job Not Found',
            });
        }

        await updateJobBySlug(data, slug, req.user.id);

        return res.status(StatusCodes.OK).json({
            msg: 'job updated',
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
