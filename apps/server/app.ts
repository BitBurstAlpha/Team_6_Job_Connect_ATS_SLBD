import express from 'express';
import 'dotenv/config';

import routes from './src/routes';
import { logger } from './src/utils/logger';

const app = express();

app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT ?? 8000;

app.listen(port, () => {
    logger.info('------------------------------------------');
    logger.info('🚀 Running Server on http://localhost:8000');
    logger.info(`PORT ${port} `);
    logger.info('------------------------------------------');
});
