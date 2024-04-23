import express from 'express';
import userRoutes from './applicant.routes';
import authRoutes from './auth.routes';
import clientRoutes from './client.routes';
import jobRoutes from './job.routes';

const router = express.Router();

router.use('/applicant', userRoutes);
router.use('/auth', authRoutes);
router.use('/client', clientRoutes);
router.use('/jobs', jobRoutes);

export default router;
