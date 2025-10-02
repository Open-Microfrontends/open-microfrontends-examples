import React from 'react';
import {createRoot} from 'react-dom/client';
import Microfrontend1 from "./Microfrontend1";
import {Microfrontend1RenderFunction, Microfrontend1RenderFunctionName} from './_generated/microfrontendRenderers';

const renderFn: Microfrontend1RenderFunction = async (host, context) => {
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
    [Microfrontend1RenderFunctionName]: renderFn,
};
