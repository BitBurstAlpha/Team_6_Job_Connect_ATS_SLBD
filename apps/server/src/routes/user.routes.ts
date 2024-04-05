import express from 'express';
import validator from '../middleware/validator';
import { RegisterUserSchema } from '../schemas/user.schema';
import {
    GetCurrentUserHandler,
    UserRegisterHandler,
} from '../controllers/user.controllers';
import { verifyJwt } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/register', validator(RegisterUserSchema), UserRegisterHandler);
router.get('/current-user', verifyJwt, GetCurrentUserHandler);

export default router;
