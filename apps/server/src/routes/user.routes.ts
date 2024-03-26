import express from 'express';
import validator from '../middleware/validator';
import { RegisterUserSchema } from '../schemas/user.schema';
import { UserRegisterHandler } from '../controllers/user.controllers';

const router = express.Router();

router.post('/register', validator(RegisterUserSchema), UserRegisterHandler);

export default router;
