import express from 'express';
import userRoutes from './candidate.routes';
import authRoutes from './auth.routes';

const router = express.Router();

router.use('/candidate', userRoutes);
router.use('/auth', authRoutes);

export default router;
