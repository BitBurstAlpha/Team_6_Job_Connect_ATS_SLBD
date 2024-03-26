import express from 'express';
import validator from '../middleware/validator';
import { LoginUserSchema } from '../schemas/auth.schema';
import { userLoginHandler } from '../controllers/auth.controllers';

const router = express.Router();

router.post('/login', validator(LoginUserSchema), userLoginHandler);

export default router;
