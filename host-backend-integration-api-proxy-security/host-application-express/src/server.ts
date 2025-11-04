import express from 'express';
import {openMicrofrontendsExampleAPIProxyWithSecurityHostIntegrationMiddleware} from './_generated/microfrontendHostIntegrations';
import ExampleAPIProxyWithSecuritySetup  from "./ExampleAPIProxyWithSecuritySetup";

const PORT = 7930;

const app = express();

app.use('/', express.static('dist'));

// Add the Microfrontend Host Integration
app.use(openMicrofrontendsExampleAPIProxyWithSecurityHostIntegrationMiddleware(
    new ExampleAPIProxyWithSecuritySetup()
));

app.listen(PORT, () => {
   console.info(`Host Application running on http://localhost:${PORT}`);
});
