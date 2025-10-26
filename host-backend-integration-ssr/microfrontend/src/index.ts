import {createApp, createSSRApp} from 'vue';
import state from './state';
import Microfrontend from './Microfrontend.vue';
import {OpenMicrofrontendsExampleSSRRenderFunction, OpenMicrofrontendsExampleSSRRenderFunctionName} from './_generated/microfrontendRenderers';

const renderFn: OpenMicrofrontendsExampleSSRRenderFunction = async (host, context) => {
    const {id, config, apiProxyPaths, serverSideRendered} = context;

    let microfrontend;
    if (serverSideRendered) {
        console.info('Hydrating Microfrontend');
        // Check for preloaded state
        const preloadedState = window[`ExampleSSRServerSideRender_State_${id}`];
        if (preloadedState) {
            console.info('Preloaded state:', preloadedState);
            state.customer = preloadedState.customer;
        }
        microfrontend = createSSRApp(Microfrontend, {
            customerId: config.customerId,
            bffPath: apiProxyPaths.bff,
        });
    } else {
        microfrontend = createApp(Microfrontend, {
            customerId: config.customerId,
            bffPath: apiProxyPaths.bff,
        });
    }

    microfrontend.mount(host);

    return {
        onRemove: () => {
            microfrontend.unmount();
        }
    }
}

export default {
    [OpenMicrofrontendsExampleSSRRenderFunctionName]: renderFn,
};
