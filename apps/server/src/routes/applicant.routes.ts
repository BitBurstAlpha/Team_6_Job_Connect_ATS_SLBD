import express from 'express';
import validator from '../middleware/validator';
import { RegisterUserSchema } from '../schemas/user.schema';
import { CandidateRegisterHandler } from '../controllers/applicant.controllers';

const router = express.Router();

router.post(
    '/register',
    validator(RegisterUserSchema),
    CandidateRegisterHandler,
);

export default router;
