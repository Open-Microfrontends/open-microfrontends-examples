import {resolve} from 'path';
import express from 'express';
import api from './routes/api';
import ssr from './routes/ssr';
import {OpenMicrofrontendsExampleSSRServerSideRendererPath} from '../_generated/microfrontendRenderersServerSide';
import {OpenMicrofrontendsExampleSSRAssetsBasePath} from '../_generated/microfrontendRenderers';

// Unfortunately, we cannot use import.meta.dirname with Webpack
const serverDir = resolve(process.cwd(), 'dist');

const PORT = 7840;

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    // Template engine
    app.set('view engine', 'ejs');
    app.set('views', resolve(serverDir, '..', 'views'));

    const devEnvironment = await import('./devEnvironment');
    devEnvironment.default(app);
}

// BFF API
app.use('/api', api);

// SSR routes
app.post(OpenMicrofrontendsExampleSSRServerSideRendererPath, ssr);

// Assets
app.use(OpenMicrofrontendsExampleSSRAssetsBasePath, express.static(resolve(serverDir, 'public')));

// Expose description
app.use('/microfrontends.yaml', express.static(resolve(serverDir, '..', '..', 'microfrontends.yaml')));

app.listen(PORT, () => {
    console.info(`OpenMicrofrontends SSR Example running on http://localhost:${PORT}`);
});

