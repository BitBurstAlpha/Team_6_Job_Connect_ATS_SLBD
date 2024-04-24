import express from 'express';
import applicantRoutes from './applicant.routes';
import authRoutes from './auth.routes';
import clientRoutes from './client.routes';
import jobRoutes from './job.routes';
import userRoutes from './user.routes';

const router = express.Router();

router.use('/applicant', applicantRoutes);
router.use('/auth', authRoutes);
router.use('/client', clientRoutes);
router.use('/jobs', jobRoutes);
router.use('/users', userRoutes);

export default router;
