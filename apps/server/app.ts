import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { config } from './src/config';

import swaggerDocument from './swagger.json';

import routes from './src/routes';
import { logger } from './src/utils/logger';
import { ValidateEnv } from './src/utils/validateEnv';
import { StatusCodes } from 'http-status-codes';

ValidateEnv();

const app = express();

app.use(express.json());

const corsOrigin: string[] | undefined = config.CORS_ORIGIN?.split(',');

app.use(
    cors({
        origin: corsOrigin ?? [
            'http://localhost:3000',
            'http://localhost:3001',
        ],
        credentials: true,
    }),
);
app.use(cookieParser());
app.use(morgan('tiny'));

// Serve static files
app.use('/uploads', express.static('./public/images'));

// Api Endpoints
app.use('/api', routes);

// Documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
    (
        err: { code: string },
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        if (err.code === 'permission_denied') {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                error: 'unauthorized',
            });
        }

        next();
    },
);

const port = process.env.PORT ?? 8000;

app.listen(port, () => {
    logger.info('------------------------------------------');
    logger.info('🚀 Running Server on http://localhost:8000');
    logger.info(`PORT ${port} `);
    logger.info('------------------------------------------');
});
