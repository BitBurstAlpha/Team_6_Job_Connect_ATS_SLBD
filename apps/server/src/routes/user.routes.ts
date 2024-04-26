import express from 'express';
import { upload } from '../middleware/multer.middleware';
import { verifyJwt } from '../middleware/auth.middleware';
import { guard } from '../utils/guard';
import {
    passwordChangeHandler,
    updateUserAvatarHandler,
} from '../controllers/user.controllers';
import validator from '../middleware/validator';
import { PasswordChangeSchema } from '../schemas/user.schema';

const router = express.Router();

router.patch(
    '/avatar',
    verifyJwt,
    guard.check([['client'], ['applicant']]),
    upload.single('avatar'),
    updateUserAvatarHandler,
);

router.post(
    '/change-password',
    verifyJwt,
    guard.check([['client'], ['applicant']]),
    validator(PasswordChangeSchema),
    passwordChangeHandler,
);

export default router;
