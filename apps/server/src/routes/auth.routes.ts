import express from 'express';
import validator from '../middleware/validator';
import { LoginUserSchema } from '../schemas/auth.schema';
import {
    userLoginHandler,
    getCurrentUser,
    logoutHandler,
} from '../controllers/auth.controllers';
import { verifyJwt } from '../middleware/auth.middleware';
import { guard } from '../utils/guard';

const router = express.Router();

router.post('/create-session', validator(LoginUserSchema), userLoginHandler);

router.get(
    '/current-user',
    verifyJwt,
    guard.check([['client'], ['applicant']]),
    getCurrentUser,
);

router.post('/logout', verifyJwt, logoutHandler);

export default router;
