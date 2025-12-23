import {resolve} from 'path';
import express from 'express';
import permissions from './permissions.js';
import api from './api.js';
import {
    OpenMicrofrontendsExampleAPIProxyWithSecurityAssetsBasePath,
    OpenMicrofrontendsExampleAPIProxyWithSecurityBuildManifestPath,
    OpenMicrofrontendsExampleAPIProxyWithSecurityUserPermissionsPath
} from '../_generated/microfrontendRenderers.js';

const PORT = 7830;

const app = express();

// Test Page
if (process.env.NODE_ENV === 'development') {
    app.use('/test', express.static(resolve(import.meta.dirname, '..', '..', 'testPage.html')));
}

// BFF API
app.use('/api', api);

// Permissions
app.get(OpenMicrofrontendsExampleAPIProxyWithSecurityUserPermissionsPath, permissions);

// Assets
app.use(OpenMicrofrontendsExampleAPIProxyWithSecurityAssetsBasePath, express.static(resolve(import.meta.dirname, '..')));

// Expose description
app.use('/microfrontends.yaml', express.static(resolve(import.meta.dirname, '..', 'microfrontends.yaml')));
// Expose package.json (as build manifest)
app.use(OpenMicrofrontendsExampleAPIProxyWithSecurityBuildManifestPath, express.static(resolve(import.meta.dirname, '..', '..', 'package.json')));

app.listen(PORT, () => {
    console.info(`OpenMicrofrontends API with Security Example running on http://localhost:${PORT}`);
});

