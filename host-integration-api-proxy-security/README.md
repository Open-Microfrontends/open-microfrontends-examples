
# OpenMicrofrontends Example API Proxy with Security

A - *OpenMicrofrontends* compliant - Microfrontend with an [Express.js](https://expressjs.com) based
BFF (Backend For Frontend) API that needs to be accessed through a proxy, because it is not directly 
accessible from the browser the *Microfrontend* is running in (CORS) and requires an API Key. 

This example requires a server component on the host side to fetch the resources and
make the internal API accessible through some proxy path.

The spec file is [microfrontends.yaml](./microfrontends.yaml). 
If you update it you have to run ```npm run generate``` in all submodules. 

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

The OpenMicrofrontend specs will be exposed under: http://localhost:7891/microfrontends.yaml

### Express.js Application Host

**TODO**

### Spring Boot Server Application Host

**TODO**

### Mashroom Server 3

To host the Microfrontend in *Mashroom Server*:

* Start the [Mashroom Portal v3 Preview Quickstart](https://github.com/nonblocking/mashroom-portal-quickstart-v3-preview)
* Open http://localhost:5050/mashroom/admin/ext/remote-plugin-packages
* Add http://localhost:7890 as a new Remote Plugin Package URL
* Goto http://localhost:5050, login as admin/admin
* Add the App "OpenMicrofrontends Example Minimal" to an arbitrary page

