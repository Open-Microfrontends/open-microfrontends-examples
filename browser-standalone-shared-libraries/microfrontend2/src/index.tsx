import React from 'react';
import {createRoot} from 'react-dom/client';
import {Microfrontend2} from "./Microfrontend2";
import {OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2RenderFunction, OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2RenderFunctionName} from './_generated/microfrontendRenderers';

const renderFn: OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2RenderFunction = async (host, context) => {
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

(window as any)[OpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2RenderFunctionName] = renderFn;
