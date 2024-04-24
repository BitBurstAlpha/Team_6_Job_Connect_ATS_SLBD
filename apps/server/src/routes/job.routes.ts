import express from 'express';
import validator from '../middleware/validator';
import { JobPostingSchema } from '../schemas/job.schemas';
import { verifyJwt } from '../middleware/auth.middleware';
import { guard } from '../utils/guard';
import {
    getAllJobHandler,
    jobOpeningHandler,
    getJobBySlugHandler,
    deleteJobBySlugHandler,
    updateJobBySlugHandler,
} from '../controllers/job.controllers';

const router = express.Router();

router.post(
    '/',
    validator(JobPostingSchema),
    verifyJwt,
    guard.check(['client']),
    jobOpeningHandler,
);

router.get('/', getAllJobHandler);
router.get('/:slug', getJobBySlugHandler);
router.delete(
    '/:slug',
    verifyJwt,
    guard.check(['client']),
    deleteJobBySlugHandler,
);
router.patch(
    '/:slug',
    verifyJwt,
    guard.check(['client']),
    updateJobBySlugHandler,
);

export default router;
