import {mount, unmount} from 'svelte';
import {OpenMicrofrontendsExampleBrowserStandaloneCodeSplittingRenderFunction, OpenMicrofrontendsExampleBrowserStandaloneCodeSplittingRenderFunctionName} from './_generated/microfrontendRenderers';
import Microfrontend from './Microfrontend.svelte';

const renderFn: OpenMicrofrontendsExampleBrowserStandaloneCodeSplittingRenderFunction = async (host, context) => {
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

(window as any)[OpenMicrofrontendsExampleBrowserStandaloneCodeSplittingRenderFunctionName] = renderFn;
