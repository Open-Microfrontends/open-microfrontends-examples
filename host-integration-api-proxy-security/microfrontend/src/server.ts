import {resolve} from 'path';
import express from 'express';
import api from './api.js';

const PORT = 7891;

const app = express();

// Security middleware
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-api-key'] !== '123456') {
            res.sendStatus(401);
            return;
        }
    }
    next();
});

// BFF API
app.use('/api', api);

// Resources
app.use('/public', express.static(resolve(import.meta.dirname, '../dist')));

// Expose declaration
app.use('/microfrontends.yaml', express.static(resolve(import.meta.dirname, 'microfrontends.yaml')));

app.listen(PORT, () => {
    console.info(`OpenMicrofrontends API with Security Example running on http://localhost:${PORT}`);
});

