
# OpenMicrofrontends Example Browser Standalone Shared Libraries

This example consists of:

 * Two small React Microfrontends that show a welcome message and send and receive ping messages.
   The Microfrontends use SystemJS and an importMap to share vendor libraries and use different builders (Webpack, Vite).
 * A browser-based Application Host (the Microfrontends don't require any specific server-side code)

There are two independent Microfrontend descriptions:
 *  [microfrontends1.yaml](./microfrontends1.yaml)
 *  [microfrontends2.yaml](./microfrontends2.yaml)

If you update one of them, you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend 1 Server

    cd microfrontend1
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7810

For local development, run this Microfrontend like this:

    npm run dev

### Start the Microfrontend 2 Server

    cd microfrontend2
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7811

For local development, run this Microfrontend like this:

    npm run dev

### Start the Application Host

    cd application-host
    npm i
    npm start

The Application Host will be available under: http://localhost:7910
