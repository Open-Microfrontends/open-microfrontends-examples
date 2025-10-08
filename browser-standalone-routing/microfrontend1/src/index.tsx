import React from 'react';
import {createRoot} from 'react-dom/client';
import Microfrontend1 from "./Microfrontend1";
import {OpenMicrofrontendsExampleBrowserStandaloneRouting1RenderFunction, OpenMicrofrontendsExampleBrowserStandaloneRouting1RenderFunctionName} from './_generated/microfrontendRenderers';

const renderFn: OpenMicrofrontendsExampleBrowserStandaloneRouting1RenderFunction = async (host, context) => {
    const {config} = context;

    const root = createRoot(host);
    root.render((
        <Microfrontend1 routePrefix={config.routePrefix} />
    ));

    return {
        onRemove: () => {
            root.unmount();
        }
    }
}

export default {
    [OpenMicrofrontendsExampleBrowserStandaloneRouting1RenderFunctionName]: renderFn,
};
