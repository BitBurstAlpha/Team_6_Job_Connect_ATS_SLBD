import express from 'express';
import validator from '../middleware/validator';
import { JobPostingSchema } from '../schemas/job.schemas';
import { verifyJwt } from '../middleware/auth.middleware';
import { guard } from '../utils/guard';
import { jobOpeningHandler } from '../controllers/job.controllers';

const router = express.Router();

router.post(
    '/',
    validator(JobPostingSchema),
    verifyJwt,
    guard.check(['client']),
    jobOpeningHandler,
);

export default router;
