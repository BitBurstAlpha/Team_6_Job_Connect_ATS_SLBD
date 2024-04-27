import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import {
    getAllJobCategory,
    getAllJobExperience,
    getAllJobQualification,
    getAllJobType,
} from '../services/generic.services';

export const getAllJobTypeHandler = async (req: Request, res: Response) => {
    try {
        const result = await getAllJobType();

        if (!result) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'types not found',
            });
        }

        return res.status(StatusCodes.OK).json(result);
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

export const getAllJobCategoryHandler = async (req: Request, res: Response) => {
    try {
        const result = await getAllJobCategory();

        if (!result) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'job categories not found',
            });
        }

        return res.status(StatusCodes.OK).json(result);
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

export const getAllJobExperienceHandler = async (
    req: Request,
    res: Response,
) => {
    try {
        const result = await getAllJobExperience();

        if (!result) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'job experience not found',
            });
        }

        return res.status(StatusCodes.OK).json(result);
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

export const getAllJobQualificationHandler = async (
    req: Request,
    res: Response,
) => {
    try {
        const result = await getAllJobQualification();

        if (!result) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: 'Job Qualification not found',
            });
        }

        return res.status(StatusCodes.OK).json(result);
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
