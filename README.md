
# OpenMicrofrontends Examples

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub CI](https://github.com/open-microfrontends/open-microfrontends-examples/actions/workflows/ci_build_all.yml/badge.svg)](https://github.com/open-microfrontends/open-microfrontends-examples/actions/workflows/ci_build_all.yml)

Working examples of [OpenMicrofrontends](https://www.open-microfrontends.org) compliant Microfrontends and host integrations.

## Requirements

 * Node.js >= 20 
 * Java >= 17 (only for the Java Host Integration example)

## Examples

| Folder                                                                                       | Description                                                                                                                          |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| [browser-standalone-hello-world](./browser-standalone-hello-world)                           | A minimal, pure ES Microfrontend that can be hosted in a browser and doesn't need any server routes on the host side                 |
| [browser-standalone-shared-libraries](./browser-standalone-shared-libraries)                 | Two small [React](https://react.dev) Microfrontends that share vendor libraries                                                      |
| [browser-standalone-code-splitting](./browser-standalone-code-splitting)                     | A small [Svelte](https://svelte.dev) Microfrontend that dynamically loads components (code splitting)                                |
| [browser-standalone-routing](./browser-standalone-routing)                                   | A [React](https://react.dev) Microfrontend and a [Vue.js](https://vuejs.org) Microfrontend with routes put together on a single page |
| [host-backend-integration-api-proxy-security](./host-backend-integration-api-proxy-security) | A pure ES Microfrontend that requests an API Proxy that requires an API Key. This example includes a JS and a Java backend.          |
| [host-backend-integration-ssr](./host-backend-integration-ssr)                               | A small [Vue.js](https://vuejs.org) Microfrontend with server-side rendering                                                         |

> [!NOTE]
> These examples are not meant to be templates for your own Microfrontends/Integrations.
> The goal is to cover all typical scenarios and to use different UI frameworks and bundlers just to show that they don't really matter ;-)  
