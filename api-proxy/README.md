
# OpenMicrofrontends Example API Proxy 

A - *OpenMicrofrontends* compliant - Microfrontend with an [Express.js](https://expressjs.com) based
BFF (Backend For Frontend) API that needs to be accessed through a proxy, because it is not directly 
accessible from the browser the *Microfrontend* is running in (CORS). 

This example requires a server component on the host side to fetch the resources and
make the internal API accessible through some proxy path.

The definition file is [microfrontends.yaml](./microfrontends.yaml). 
If you update it you have to run ```npm run generate``` in all submodules. 

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The OpenMicrofrontend specs will be exposed under: http://localhost:7891/microfrontends.yaml

### Express.js Host

**TODO**

## Spring Boot Host

**TODO**

### Mashroom Server Host

Run the Microfrontend in *Mashroom Server* like this:

* Start the [Mashroom Portal Quickstart Template](https://github.com/nonblocking/mashroom-portal-quickstart)
* Open http://localhost:5050/mashroom/admin/ext/remote-portal-apps
* Add http://localhost:7891 as a new Remote App URL
* Goto http://localhost:5050, login as admin/admin
* Add the App "OpenMicrofrontends Example API Proxy" to any page

