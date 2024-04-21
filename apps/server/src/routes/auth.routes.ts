import express from 'express';
import validator from '../middleware/validator';
import { LoginUserSchema } from '../schemas/auth.schema';
import { candidateLoginHandler } from '../controllers/auth.controllers';

const router = express.Router();

router.post(
    '/candidate/login',
    validator(LoginUserSchema),
    candidateLoginHandler,
);

export default router;
