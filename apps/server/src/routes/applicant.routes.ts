import express from 'express';
import validator from '../middleware/validator';
import { RegisterUserSchema } from '../schemas/user.schema';
import {
    CandidateRegisterHandler,
    getAllAppliedJobsHandler,
} from '../controllers/applicant.controllers';
import { verifyJwt } from '../middleware/auth.middleware';
import { guard } from '../utils/guard';

const router = express.Router();

router.post(
    '/register',
    validator(RegisterUserSchema),
    CandidateRegisterHandler,
);

router.get(
    '/jobs',
    verifyJwt,
    guard.check(['applicant']),
    getAllAppliedJobsHandler,
);

export default router;
