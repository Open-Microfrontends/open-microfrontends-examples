import {startOpenMicrofrontendsExampleSSR} from './_generated/microfrontendStarters';
import {microfrontend1} from "./microfrontends";

const start = async () => {
    console.info('Starting Microfrontend in container #root');

    const host = document.getElementById('root');

    try {
        const result = await startOpenMicrofrontendsExampleSSR(host, {
            // IMPORTANT: ID and config must be the same server-side and client-side
            ...microfrontend1,
            messageBus: (window as any).globalMessageBus,
        });
    } catch (e) {
        // TODO: show a proper error message to the user
        console.error('Microfrontend loading failed!', e);
    }
};

start();

