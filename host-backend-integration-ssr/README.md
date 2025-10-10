
# OpenMicrofrontends Example Host Backend Integration SSR

This demo shows how a Microfrontend that supports Server-Side-Rendering (SSR) can be integrated into an [Express](https://expressjs.com)-based Application Host.
It also shows how preloaded state can be provided to the frontend.

It consists of:

 * A [Vue.js](https://vuejs.org) Microfrontend with an SSR route
 * An Express-based Application Host

Notes: 

 * [Webpack](https://webpack.js.org) is used as a build tool for the Microfrontend (emits ES modules)
 * The spec file is [microfrontends.yaml](./microfrontends.yaml).
   If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7840

### Start the Application Host

    cd application-host
    npm i
    npm start

The Application Host will be available under: http://localhost:7940
