import {OpenMicrofrontendsExampleAPIProxyWithSecurityRenderFunction, OpenMicrofrontendsExampleAPIProxyWithSecurityRenderFunctionName} from './_generated/microfrontendRenderers.js';

const mainTemplate = (customerId: string) => {
    return `
        <div style="padding: 20px">
            <h3>Customer #${customerId}</h3>
            <div id="content">
                Loading...
            </div>
        </div>
    `;
};

const customerTemplate = (customerId: string, lastName: string, firstName: string) => {
    return `
        <table>         
           <tr>
               <th style="text-align: left; padding: 2px 5px 2px 0;">Last Name</th>
               <td>${lastName}</td>
           </tr>
           <tr>
               <th style="text-align: left; padding: 2px 5px 2px 0;">First Name</th>
               <td>${firstName}</td>
           </tr>
       </table>
    `;
}

const chuckNorrisJokeTemplate = (joke: string) => {
    return `
        <div style="padding-top: 20px;">
            <div style="padding-bottom: 10px">Joke of the day:</div>  
            <div>${joke}</div>
        </div>
    `;
}

const renderFn: OpenMicrofrontendsExampleAPIProxyWithSecurityRenderFunction = async (host, context) => {
    const {config, apiProxyPaths, permissions} = context;

    const tpl = document.createElement('template');
    tpl.innerHTML = mainTemplate(config.customerId);
    const contentNode = tpl.content.querySelector('#content');

    host.innerHTML = '';
    host.append( tpl.content);

    try {
        const response = await fetch(`${apiProxyPaths.bff}/customers/${config.customerId}`);
        const customer = await response.json();
        const customerTpl = document.createElement('template');
        customerTpl.innerHTML = customerTemplate(config.customerId, customer.lastName, customer.firstName);
        contentNode.innerHTML = '';
        contentNode.append(customerTpl.content);
    } catch (e) {
        console.error('Loading customer failed!', e);
        contentNode.innerHTML = '<span style="color: red">Customer loading failed!</span>';
    }

    if (permissions.showJoke) {
        try {
            const response = await fetch(apiProxyPaths.chuckNorrisJoke);
            const joke = await response.json();
            const jokeTpl = document.createElement('template');
            jokeTpl.innerHTML = chuckNorrisJokeTemplate(joke.value);
            contentNode.append(jokeTpl.content);
        } catch (e) {
            console.error('Loading Chuck Norris joke failed!', e);
        }
    }

    return {
        onRemove: () => {
            host.innerHTML = '';
        }
    }
};

window[OpenMicrofrontendsExampleAPIProxyWithSecurityRenderFunctionName] = renderFn;
