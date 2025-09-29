
# OpenMicrofrontends Example Browser Standalone Hello World

A minimal - *OpenMicrofrontends* compliant - Microfrontend that shows a welcome message
and sends and receives ping messages.

The implementation only depends on *Node.js* and doesn't use any bundlers.

This Microfrontend can be hosted on a simple HTML page, because it doesn't require any specific server-side code.

The spec file is [microfrontends.yaml](./microfrontends.yaml).
If you update it you have to run ```npm run generate``` in all submodules.

## Usage

### Start the Microfrontend Server

    cd microfrontend
    npm i
    npm start

 The Microfrontend resources will be served under http://localhost:7890

### Start the Application Host

    cd html-page-host
    npm i
    npm start

The Application Host will be available under: http://127.0.0.1:7895

### Mashroom Server 3

To host the Microfrontend in *Mashroom Server*:

 * Start the [Mashroom Portal v3 Preview Quickstart](https://github.com/nonblocking/mashroom-portal-quickstart-v3-preview)
 * Open http://localhost:5050/mashroom/admin/ext/remote-plugin-packages
 * Add http://localhost:7890 as a new Remote Plugin Package URL
 * Goto http://localhost:5050, login as admin/admin
 * Add the App "OpenMicrofrontends Example Minimal" to an arbitrary page
