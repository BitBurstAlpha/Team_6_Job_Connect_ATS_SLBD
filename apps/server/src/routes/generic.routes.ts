import express from 'express';
import {
    getAllJobTypeHandler,
    getAllJobCategoryHandler,
    getAllJobExperienceHandler,
    getAllJobQualificationHandler,
} from '../controllers/generic.controllers';

const router = express.Router();

router.get('/jobs/type', getAllJobTypeHandler);
router.get('/jobs/category', getAllJobCategoryHandler);
router.get('/jobs/experience', getAllJobExperienceHandler);
router.get('/jobs/qualification', getAllJobQualificationHandler);

export default router;
