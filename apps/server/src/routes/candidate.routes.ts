import express from 'express';
import validator from '../middleware/validator';
import { RegisterCandidateSchema } from '../schemas/user.schema';
import {
    GetCurrentUserHandler,
    CandidateRegisterHandler,
} from '../controllers/candidate.controllers';
import { verifyJwt } from '../middleware/auth.middleware';

const router = express.Router();

router.post(
    '/register',
    validator(RegisterCandidateSchema),
    CandidateRegisterHandler,
);
router.get('/current-user', verifyJwt, GetCurrentUserHandler);

export default router;
