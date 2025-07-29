
# OpenMicrofrontends Example Minimal

A minimal - *OpenMicrofrontends* compliant - Microfrontend that shows a welcome message
and sends and receives ping messages.

The implementation only depends on *Node.js* and doesn't use any bundlers.

The Microfrontend is hosted on a simple HTML page and doesn't require any specific server-side code.

The definition file is [microfrontends.yaml](./microfrontends.yaml).
If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

 The Microfrontend resources will be served under http://localhost:7890

### Browser Host

    cd host-browser
    npm i
    npm start

The Microfrontend host page will be available under: http://127.0.0.1:7895

### Mashroom Server Host

Run the Microfrontend in *Mashroom Server* like this:

 * Start the [Mashroom Portal Quickstart Template](https://github.com/nonblocking/mashroom-portal-quickstart)
 * Open http://localhost:5050/mashroom/admin/ext/remote-portal-apps
 * Add http://localhost:7890 as a new Remote App URL
 * Goto http://localhost:5050, login as admin/admin
 * Add the App "OpenMicrofrontends Example Minimal" to any page
