import {createApp} from 'vue';
import Microfrontend2 from './Microfrontend2.vue';
import {OpenMicrofrontendsExampleBrowserStandaloneRouting2RenderFunction, OpenMicrofrontendsExampleBrowserStandaloneRouting2RenderFunctionName} from './_generated/microfrontendRenderers';
import router from './router';

const renderFn: OpenMicrofrontendsExampleBrowserStandaloneRouting2RenderFunction = async (host, context) => {
    const {config} = context;

    const mf = createApp(Microfrontend2, {
        routePrefix: config.routePrefix,
    });
    mf.use(router(config.routePrefix));
    mf.mount(host);

    return {
        onRemove: () => {
            mf.unmount();
        }
    }
}

(window as any)[OpenMicrofrontendsExampleBrowserStandaloneRouting2RenderFunctionName] = renderFn;
