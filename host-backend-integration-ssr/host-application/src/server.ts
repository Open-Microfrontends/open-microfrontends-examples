import {resolve} from 'path';
import express from 'express';
import {openMicrofrontendsExampleSSRHostIntegrationMiddleware, openMicrofrontendsExampleSSRServerSideRender} from './_generated/microfrontendHostIntegrations';
import OpenMicrofrontendsExampleSSRSetup from './OpenMicrofrontendsExampleSSRSetup';
import {microfrontend1} from './microfrontends';

const PORT = 7940;

const app = express();

// Template engine
app.set('view engine', 'ejs');
app.set('views', resolve(import.meta.dirname, '..', 'views'));

// Add the Microfrontend Host Integration
app.use(openMicrofrontendsExampleSSRHostIntegrationMiddleware(
    new OpenMicrofrontendsExampleSSRSetup()
));

// Assets
app.use('/public', express.static(resolve(import.meta.dirname, '..', 'dist', 'public')));

app.get('/', async (req, res) => {
    let microfrontendContentHtml = '';
    let microfrontendHeadHtml = '';
    try {
        const result = await openMicrofrontendsExampleSSRServerSideRender(req, {
            ...microfrontend1,
        });
        // console.debug('SSR result', result);
        microfrontendContentHtml = result.contentHtml;
        microfrontendHeadHtml = result.headHtml;
    } catch (e) {
        console.error('Server-side rendering failed!', e);
    }
    return res.render('index', {
        microfrontendContentHtml,
        microfrontendHeadHtml,
    });
})

app.listen(PORT, () => {
    console.info(`OpenMicrofrontends SSR Example Host Application running on http://localhost:${PORT}`);
});

