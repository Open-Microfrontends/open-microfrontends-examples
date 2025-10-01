import {mount, unmount} from 'svelte';
import {Microfrontend1RenderFunction, Microfrontend1RenderFunctionName} from './_generated/microfrontendRenderers';
import Microfrontend from './Microfrontend.svelte';

const renderFn: Microfrontend1RenderFunction = async (host, context) => {
    let mf = mount(Microfrontend, {
        target: host,
        props: {
            welcomeMessage: context.config.welcomeMessage,
        }
    })
    return {
        onRemove: () => {
            unmount(mf);
        }
    }
}

(window as any)[Microfrontend1RenderFunctionName] = renderFn;
