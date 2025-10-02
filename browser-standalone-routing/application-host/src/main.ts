import page from 'page.js';
import {startOpenMicrofrontendsExampleBrowserStandaloneRouting1} from './_generated/mf1/microfrontendStarters.js';
import {startOpenMicrofrontendsExampleBrowserStandaloneRouting2} from './_generated/mf2/microfrontendStarters.js';

let closeCurrent: (() => void) | undefined;

const startMicrofrontend1 = async () => {
    console.info('Starting Microfrontend 1 in container #root');
    closeCurrent?.();

    const host = document.getElementById('root');

    const result = await startOpenMicrofrontendsExampleBrowserStandaloneRouting1('http://localhost:7820', host, {
        id: '1',
        // lang: 'en',
        // user,
        config: {
            routePrefix: '/microfrontend1',
        },
        messageBus: (window as any).globalMessageBus,
    });

    closeCurrent = result.close;
};

const startMicrofrontend2 = async () => {
    console.info('Starting Microfrontend 2 in container #root');
    closeCurrent?.();

    const host = document.getElementById('root');

    const result = await startOpenMicrofrontendsExampleBrowserStandaloneRouting2('http://localhost:7821', host, {
        id: '1',
        // lang: 'en',
        // user,
        config: {
            routePrefix: '/microfrontend2',
        },
    });

    closeCurrent = result.close;
};

// Setup routes
page(/\/microfrontend1.*/, () => {
    startMicrofrontend1();
});
page(/\/microfrontend2.*/, () => {
    startMicrofrontend2();
});
page('/', () => {
    page.redirect('/microfrontend1');
});
page();

(window as any).gotoPage = (path: string) => {
    page.redirect(path);
};

