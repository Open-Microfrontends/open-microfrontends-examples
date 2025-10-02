import {Microfrontend1RenderFunction, Microfrontend1RenderFunctionName} from './_generated/microfrontendRenderers.js';

const template = (helloWorldMessage: string) => {
    return `
        <div style="margin: 20px">
            <h3>${helloWorldMessage}</h3>
            <button id="ping_button">Send Ping</button>
            <div style="margin-top: 10px;">
                Received Pings: <span id="pings_received">0</span>
            </div>    
        </div>
    `;
};

const renderFn: Microfrontend1RenderFunction = async (host, context) => {
    const {config, messageBus} = context;
    let count = 0;

    const tpl = document.createElement('template');
    tpl.innerHTML = template(config.welcomeMessage);
    const content = tpl.content;

    content.querySelector('#ping_button').addEventListener('click', () => {
        messageBus.publish('ping', {
            ping: true,
        });
    })

    const pingsReceivedNode = content.querySelector('#pings_received');
    const onPing = () => {
        count ++;
        pingsReceivedNode.innerHTML = String(count);
    };
    messageBus.subscribe('ping', onPing);

    host.innerHTML = '';
    host.append(content);

    return {
        onRemove: () => {
            messageBus.unsubscribe('ping', onPing);
            host.innerHTML = '';
        }
    }
};

export default {
    [Microfrontend1RenderFunctionName]: renderFn,
};
