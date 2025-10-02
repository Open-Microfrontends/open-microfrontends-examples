import {createApp} from 'vue';
import Microfrontend2 from './Microfrontend2.vue';
import {Microfrontend1RenderFunction, Microfrontend1RenderFunctionName} from './_generated/microfrontendRenderers';
import router from './router';

const renderFn: Microfrontend1RenderFunction = async (host, context) => {
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

(window as any)[Microfrontend1RenderFunctionName] = renderFn;
