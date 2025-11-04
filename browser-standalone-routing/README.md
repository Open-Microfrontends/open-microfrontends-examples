
# OpenMicrofrontends Example Browser Standalone Routing

A demo of Microfrontends that use routing and integrate into a base route of the Host Application.

It consists of:

 * A [React](https://react.dev) Microfrontend that uses [react-router](https://reactrouter.com)
 * A [Vue.js](https://vuejs.org) Microfrontend that uses [vue-router](https://router.vuejs.org)
 * A simple [Express](https://expressjs.com) Host Application without any backend logic 
   that uses [page.js](https://github.com/visionmedia/page.js) to load one of the Microfrontends based on 
   the base route. It also configures the correct route prefix for the Microfrontends so their routes work correctly.

Notes:

 * [Rollup](https://rollupjs.org/) is used to bundle the Microfrontend 1 and the Host Application to ES modules
 * [Vite](https://vite.dev) is used to bundle Microfrontend 2
 * There are two independent Microfrontend descriptions:
   *  [microfrontends1.yaml](./microfrontends1.yaml)
   *  [microfrontends2.yaml](./microfrontends2.yaml)

If you update one of them, you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend 1 Server

    cd microfrontend1
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7820

For local development, run this Microfrontend like this:

    npm run dev

### Start the Microfrontend 2 Server

    cd microfrontend2
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7821

For local development, run this Microfrontend like this:

    npm run dev

### Start the Host Application

    cd host-application
    npm i
    npm start

The Host Application will be available under: http://localhost:7920
