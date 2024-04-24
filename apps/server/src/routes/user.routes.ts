import express from 'express';
import { upload } from '../middleware/multer.middleware';
import { verifyJwt } from '../middleware/auth.middleware';
import { guard } from '../utils/guard';
import { updateUserAvatarHandler } from '../controllers/user.controllers';

const router = express.Router();

router.patch(
    '/avatar',
    verifyJwt,
    guard.check([['client'], ['applicant']]),
    upload.single('avatar'),
    updateUserAvatarHandler,
);

export default router;
