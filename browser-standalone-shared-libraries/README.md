
# OpenMicrofrontends Example Browser Standalone Shared Libraries

A demo that shows how vendor libraries can be shared between Microfrontends using import maps.
They use [SystemJS](https://github.com/systemjs/systemjs) modules because dynamically adding import maps for ES modules is limited at the moment.

Shared libraries in this example:

  * React — ^19.1.1
  * ReactDOM — ^19.1.1
  

It consists of:

 * Two small [React](https://react.dev) Microfrontends that show a welcome message and send and receive ping messages
 * A browser-based Host Application (the Microfrontends don't require any specific server-side code)

Notes:

 * [Webpack](https://webpack.js.org) and [Vite](https://vite.dev) are used to bundle the Microfrontends to SystemJS modules
 * The Vite-based build uses a separate config for local development based on ES modules because *vite serve* doesn't support SystemJS properly
 * Microfrontend 1 exports the Renderer function, Microfrontend 2 attaches it to `window` (because Vite expects an import via <script> tag)
 * There are two independent Microfrontend descriptions:
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

### Start the Host Application

    cd host-application
    npm i
    npm start

The Host Application will be available under: http://localhost:7910
