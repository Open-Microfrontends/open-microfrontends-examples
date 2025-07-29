
# OpenMicrofrontends API Proxy Example

A minimal - *OpenMicrofrontends* compliant - Microfrontend with an [express](https://expressjs.com) based
BFF (Backend For Frontend) API that needs to be accessed through a proxy, because it is not directly 
accessible from the browser the *Microfrontend* is running in. 

This example requires a server component on the host side to fetch the resources and
make the internal API accessible through some proxy path.

The definition file is [microfrontends.yaml](./microfrontends.yaml). 
If you update it run ```npm run generate``` to re-generate the types.

## Usage

Start the Microfrontend (server):

    npm start

Start one of the host integrations:

**TODO**

Or load the Microfrontend in *Mashroom Portal* like this:

* Start the [Mashroom Portal Quickstart Template](https://github.com/nonblocking/mashroom-portal-quickstart)
* Open http://localhost:5050/mashroom/admin/ext/remote-portal-apps
* Add http://localhost:7891 as a new Remote App URL
* Goto http://localhost:5050, login as admin/admin
* Add the App "Minimal API Proxy Microfrontend" to any page

