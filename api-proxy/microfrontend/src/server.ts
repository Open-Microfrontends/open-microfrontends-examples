import {resolve} from 'path';
import express from 'express';
import api from './api.js';

const PORT = 7891;

const app = express();

// BFF API
app.use('/api', api);

// Resources
app.use('/public', express.static(resolve(import.meta.dirname, '../dist')));

// Expose definitions (optional, only required to register the Microfrontend in the OpenFrontendRegistry (OMIR) or in Mashroom Server)
app.use('/microfrontends.yaml', express.static(resolve(import.meta.dirname, '../microfrontends.yaml')));
app.use('/mashroom.json', express.static(resolve(import.meta.dirname, '../src/_generated/mashroom.json')));
app.use('/package.json', express.static(resolve(import.meta.dirname, '../package.json')));

app.listen(PORT, () => {
    console.info(`OpenMicrofrontends Minimal BFF API Example running on port ${PORT}`);
});

