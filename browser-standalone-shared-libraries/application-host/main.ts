import {startOpenMicrofrontendsExampleBrowserStandaloneSharedLibraries1} from './_generated/mf1/microfrontendStarters.js';
import {startOpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2} from './_generated/mf2/microfrontendStarters.js';

const startMicrofrontend1 = async () => {
    console.info('Starting Microfrontend 1 in container #root1');
    const host = document.getElementById('root1');

    const {close, messages} = await startOpenMicrofrontendsExampleBrowserStandaloneSharedLibraries1('http://localhost:7810', host, {
        id: '1',
        // lang: 'en',
        // user,
        config: {
            welcomeMessage: 'Hello World 1!',
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

const startMicrofrontend2 = async () => {
    console.info('Starting Microfrontend 2 in container #root2');
    const host = document.getElementById('root2');

    const {close, messages} = await startOpenMicrofrontendsExampleBrowserStandaloneSharedLibraries2('http://localhost:7811', host, {
        id: '1',
        // lang: 'en',
        // user,
        config: {
            welcomeMessage: 'Hello World 2!',
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


startMicrofrontend1();
startMicrofrontend2();

