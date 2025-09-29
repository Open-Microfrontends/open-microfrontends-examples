
# OpenMicrofrontends Example Browser Standalone Hello World

This example consists of:

 * A pure ES Microfrontend that shows a welcome message and sends and receives ping messages
 * A browser-based Application Host (the Microfrontend doesn't require any specific server-side code)

The implementation only depends on *Node.js* and doesn't use any bundlers.

The *OpenMicrofrontend* description is in [microfrontends.yaml](./microfrontends.yaml).
If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7800

For local development run 

    npm run dev

and open http://localhost:7800/testPage.html

### Start the Application Host

    cd application-host
    npm i
    npm start

The Application Host will be available under: http://127.0.0.1:7900
