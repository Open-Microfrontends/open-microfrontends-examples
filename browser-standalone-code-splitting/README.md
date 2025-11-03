
# OpenMicrofrontends Example Browser Standalone Code Splitting

This demo shows how code splitting has to be configured so the integration in the Host Application and browser caching works properly. 

It consists of:

 * A simple [Svelte](https://svelte.dev) Microfrontend that loads components with *import()* which leads to code splitting
 * A browser-based Application Host (the Microfrontend doesn't require any specific server-side code)

Notes:

  * [Vite](https://vite.dev) is used for bundling the Microfrontend (all chunks are ES modules)
  * **IMPORTANT**: In case of using ES modules, the entry file ([`index.ts`](microfrontend/src/index.ts)) must use dynamic imports for all dependencies, including the framework and components. 
    Without this pattern, using query parameters for cache busting (e.g., `Microfrontend.js?v=123`) would break ES module resolution.
    Check out the [implementation hints](https://www.open-microfrontends.org/implementation-hints/microfrontends) here for more details.
  * It is **very import** to set a relative base path for assets (e.g., in *Vite* this is done by setting ```base: ''```)
  * It is also important that all chunks except the entries have the hash in their name for cache busting
  * Due to the fact that Vite expects a script tag and does not allow dynamic imports, the render function is attached to `window`.
  * The *OpenMicrofrontend* description is in [microfrontends.yaml](./microfrontends.yaml). 
    If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7850

For local development run 

    npm run dev

### Start the Application Host

    cd application-host
    npm i
    npm start

The Application Host will be available under: http://localhost:7950
