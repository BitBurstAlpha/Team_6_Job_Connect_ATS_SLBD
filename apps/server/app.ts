import express from 'express';

import { logger } from './src/utils/logger';

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.send({ msg: 'Hello World' });
});

app.listen(port, () => {
    logger.info('------------------------------------------');
    logger.info('🚀 Running Server on http://localhost:8000');
    logger.info(`PORT ${port} `);
    logger.info('------------------------------------------');
});
