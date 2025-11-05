import React from 'react';
import {createRoot} from 'react-dom/client';
import {Microfrontend2} from "./Microfrontend2";
import {OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2Renderer, OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2RendererFunctionName} from './_generated/microfrontendRenderers';

const renderer: OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2Renderer = async (host, context) => {
    const {config, messageBus} = context;

    const root = createRoot(host);
    root.render((
        <Microfrontend2
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

(window as any)[OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2RendererFunctionName] = renderer;
