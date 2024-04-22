import express from 'express';
import userRoutes from './applicant.routes';
import authRoutes from './auth.routes';
import clientRoutes from './client.routes';

const router = express.Router();

router.use('/applicant', userRoutes);
router.use('/auth', authRoutes);
router.use('/client', clientRoutes);

export default router;
