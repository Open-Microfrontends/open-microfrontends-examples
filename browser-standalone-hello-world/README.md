
# OpenMicrofrontends Example Browser Standalone Hello World

A minimal - *OpenMicrofrontends* compliant - Microfrontend that shows a welcome message
and sends and receives ping messages.

The implementation only depends on *Node.js* and doesn't use any bundlers.

This Microfrontend can be hosted on a simple HTML page, because it doesn't require any specific server-side code.

The spec file is [microfrontends.yaml](./microfrontends.yaml).
If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

 The Microfrontend resources will be served under http://localhost:7890

### Start the Application Host

    cd html-page-host
    npm i
    npm start

The Application Host will be available under: http://127.0.0.1:7895
