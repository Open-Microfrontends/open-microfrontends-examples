import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import state from '../state';
import type {OpenMicrofrontendsExampleSSRServerSideRenderer} from "../_generated/microfrontendRenderersServerSide";
import Microfrontend from "../Microfrontend.vue";

const renderer: OpenMicrofrontendsExampleSSRServerSideRenderer = async (requestBody) => {
    const { id, config } = requestBody;

    const microfrontend = createSSRApp(Microfrontend, {
        customerId: config.customerId,
    });

    const html = await renderToString(microfrontend);
    const injectHeadScript = `window.ExampleSSRServerSideRender_State_${id} = ${JSON.stringify(state)};`;

    return {
        html,
        injectHeadScript,
    };
};

export default renderer;
