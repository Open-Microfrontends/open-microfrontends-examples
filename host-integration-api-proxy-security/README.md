
# OpenMicrofrontends Example API Proxy with Security

This example consists of:

 * A pure ES Microfrontend that shows customer data from an API that needs to be accessed through a proxy because it requires security
 * A [Express](https://expressjs.com) based Application Host
 * A [Spring Boot](https://spring.io/projects/spring-boot) based Application Host

Notes: 

 * TypeScript is used for transpiling to ES modules, no bundlers are involved
 * The Microfrontend adds the render function as global (window) variable
 * The *OpenMicrofrontend* description is in [microfrontends.yaml](./microfrontends.yaml). 
   If you update it you have to run ```npm run generate``` in all submodules.
  

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The Microfrontend resources will be served under http://localhost:7820

For local development run

    npm run dev

and open http://localhost:7820/test

### Start the Express Application Host

**TODO**

### Start the Spring Boot Application Host

**TODO**

