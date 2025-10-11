import {resolve} from 'path';
import express from 'express';
import api from './api.js';

const PORT = 7820;

const app = express();

// Test Page
if (process.env.NODE_ENV === 'local') {
    app.use('/test', express.static(resolve(import.meta.dirname, '..', 'testPage.html')));
}

// BFF API
app.use('/api', api);

// Resources
app.use('/public', express.static(resolve(import.meta.dirname, '..', 'dist')));

// Expose declaration
app.use('/microfrontends.yaml', express.static(resolve(import.meta.dirname, 'microfrontends.yaml')));

app.listen(PORT, () => {
    console.info(`OpenMicrofrontends API with Security Example running on http://localhost:${PORT}`);
});

