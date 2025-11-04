
# OpenMicrofrontends Example Host Backend Integration API Proxy with Security

This demo shows how a Microfrontend that requires API proxies with security can be integrated into an Host Application.
It also demonstrates the use of *userPermissions* and how Host Applications can use the *buildManifest* for proper browser cache invalidation.

It consists of:

 * A pure ES Microfrontend that shows customer data from an (BFF) API that needs to be accessed through a proxy because it requires an API key
 * A [Express](https://expressjs.com) based Host Application
 * A [Spring Boot](https://spring.io/projects/spring-boot) based Host Application

Notes: 

 * This demo uses a different asset base path than / (/public)
 * The API base path is /api
 * The API requires security (API Key), which is passed to every request by the Host Integration
 * The host backend integrations are also proxying the static assets, so the Microfrontend host is no longer visible to the user
 * The version in the *package.json* of the *Microfrontend* is used for cache busting of assets in the browser (?v=1.0.0)
 * The *OpenMicrofrontend* description is in [microfrontends.yaml](./microfrontends.yaml). 
   If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7830

For local development run

    npm run dev

and open http://localhost:7830/test

Open http://localhost:7830/api/customers/1000 for an API test route.

### Start the Express Host Application

    cd host-application-express
    npm i
    npm start

The Host Application will be available under: http://localhost:7930

### Start the Spring Boot Host Application

    cd host-application-spring-boot
    ./gradlew bootRun

The Host Application will be available under: http://localhost:7931
