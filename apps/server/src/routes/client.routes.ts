import express from 'express';
import { clientRegisterHandler } from '../controllers/client.controllers';

const router = express.Router();

router.post('/register', clientRegisterHandler);

export default router;
