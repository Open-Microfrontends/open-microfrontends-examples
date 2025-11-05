import {createApp} from 'vue';
import Microfrontend2 from './Microfrontend2.vue';
import {OpenMicrofrontendsExampleBrowserStandaloneRouting2Renderer, OpenMicrofrontendsExampleBrowserStandaloneRouting2RendererFunctionName} from './_generated/microfrontendRenderers';
import router from './router';

const renderer: OpenMicrofrontendsExampleBrowserStandaloneRouting2Renderer = async (host, context) => {
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

(window as any)[OpenMicrofrontendsExampleBrowserStandaloneRouting2RendererFunctionName] = renderer;
