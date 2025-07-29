import {startMinimalMicrofrontend} from './_generated/microfrontendStarters.js';

console.info('Starting Microfrontend in container #root');

const host = document.getElementById('root');

const start = async () => {
    const {close, messages} = await startMinimalMicrofrontend('http://localhost:7890', host, {
        // id: '1',
        // lang: 'en',
        // user,
        config: {
            welcomeMessage: 'Microfrontend Demo!',
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

