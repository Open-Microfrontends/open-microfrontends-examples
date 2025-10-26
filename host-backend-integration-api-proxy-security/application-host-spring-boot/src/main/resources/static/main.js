import {startOpenMicrofrontendsExampleAPIProxyWithSecurity} from './_generated/microfrontendStarters.js';

const start = async () => {
    console.info('Starting Microfrontend in container #root');

    const host = document.getElementById('root');

    try {
        const result = await startOpenMicrofrontendsExampleAPIProxyWithSecurity(host, {
                id: '1',
                config: {
                    customerId: '1000',
                },
                messageBus: window.globalMessageBus,
            });
    } catch (e) {
        // TODO: show a proper error message to the user
        console.error('Microfrontend loading failed!', e);
    }
};

start();

