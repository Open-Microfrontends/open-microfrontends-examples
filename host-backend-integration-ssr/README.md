
# OpenMicrofrontends Example Host Backend Integration SSR

This demo shows how a Microfrontend that supports Server-Side-Rendering (SSR) can be integrated into an [Express](https://expressjs.com)-based Application Host.
It also shows how a preloaded state can be provided to the frontend.

It consists of:

 * A [Vue.js](https://vuejs.org) Microfrontend with an SSR route
 * An Express-based Application Host

Notes: 

 * On the Application Host side the pre-rendered App content and the stylesheets are added to the HTML page via template
 * The App detects via *context.serverSideRendered* that it needs to hydrate instead of client-side render
 * [Webpack](https://webpack.js.org) is used as a build tool for the Microfrontend (emits ES modules)
 * [Rollup](https://rollupjs.org/) is used to bundle the Host Application to ES modules
 * Microfrontend and Application Host use [EJS](https://ejs.co) templates to generate HTML pages
 * The spec file is [microfrontends.yaml](./microfrontends.yaml).
   If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7840

For local development run

    npm run dev

and open http://localhost:7840/test

and for a test page with pre-rendering on the server: http://localhost:7840/test-ssr

To check the SSR result, call POST http://localhost:7840/ssr with the following body:

```json
{
    "id": "1",
    "config": {
        "customerId": "1000"
    }
}
```

### Start the Application Host

    cd application-host
    npm i
    npm start

The Application Host will be available under: http://localhost:7940
