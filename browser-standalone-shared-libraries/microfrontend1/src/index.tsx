import React from 'react';
import {createRoot} from 'react-dom/client';
import {Microfrontend1} from "./Microfrontend1";
import {OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries1Renderer, OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries1RendererFunctionName} from './_generated/microfrontendRenderers';

const renderer: OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries1Renderer = async (host, context) => {
    const {config, messageBus} = context;

    const root = createRoot(host);
    root.render((
        <Microfrontend1
            welcomeMessage={config.welcomeMessage}
            messageBus={messageBus}
        />
    ));

    return {
        onRemove: () => {
            root.unmount();
        }
    }
}

export default {
    [OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries1RendererFunctionName]: renderer,
};
