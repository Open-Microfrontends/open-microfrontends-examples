import {OpenMicrofrontendsExampleBrowserStandaloneCodeSplittingRenderFunction, OpenMicrofrontendsExampleBrowserStandaloneCodeSplittingRenderFunctionName} from './_generated/microfrontendRenderers';

const renderFn: OpenMicrofrontendsExampleBrowserStandaloneCodeSplittingRenderFunction = async (host, context) => {
    const {mount, unmount} = await import('svelte');
    const Microfrontend = await import('./Microfrontend.svelte');

    let mf = mount(Microfrontend.default, {
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
