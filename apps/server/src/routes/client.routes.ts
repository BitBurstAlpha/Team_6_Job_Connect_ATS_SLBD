import express from 'express';
import {
    clientAccountCreationHandler,
    clientRegisterHandler,
} from '../controllers/client.controllers';
import { verifyJwt } from '../middleware/auth.middleware';
import { guard } from '../utils/guard';

const router = express.Router();

router.post('/register', clientRegisterHandler);
router.post(
    '/account',
    verifyJwt,
    guard.check(['client']),
    clientAccountCreationHandler,
);

export default router;
