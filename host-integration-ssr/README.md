
# OpenMicrofrontends Example SSR

This demo consists of:

 * A Vue.js Microfrontend with an SSR route
 * An Express-based Application Host

Notes: 

 * Vite is used as a build tool for the Microfrontend (emits ES modules)
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
