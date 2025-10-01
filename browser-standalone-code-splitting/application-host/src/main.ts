import {startOpenMicrofrontendsExampleBrowserStandaloneCodeSplitting} from './_generated/microfrontendStarters.js';

console.info('Starting Microfrontend in container #root');

const host = document.getElementById('root');

const start = async () => {
    const {close, messages} = await startOpenMicrofrontendsExampleBrowserStandaloneCodeSplitting('http://localhost:7850', host, {
        id: '1',
        // lang: 'en',
        // user,
        config: {
            welcomeMessage: 'Hello World!',
        },
        messageBus: (window as any).globalMessageBus,
    });

    let receivedPings = 0;
    messages.subscribe('ping', (data) => {
        receivedPings ++;
        console.info('Received pings', receivedPings);
        if (receivedPings === 10) {
            const ok = confirm('10 pings received. Close Microfrontend?');
            if (ok) {
                close();
            }
        }
    });
};

start();

