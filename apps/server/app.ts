import express from 'express';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import swaggerDocument from './swagger.json';

import routes from './src/routes';
import { logger } from './src/utils/logger';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
);
app.use(cookieParser());

app.use('/api', routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT ?? 8000;

app.listen(port, () => {
    logger.info('------------------------------------------');
    logger.info('🚀 Running Server on http://localhost:8000');
    logger.info(`PORT ${port} `);
    logger.info('------------------------------------------');
});
