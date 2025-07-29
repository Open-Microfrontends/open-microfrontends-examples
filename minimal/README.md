
# OpenMicrofrontends Minimal Example

A minimal - *OpenMicrofrontends* compliant - Microfrontend that shows a welcome message
and sends and receives ping messages.

The implementation has no framework dependencies and doesn't use any bundler. 
The Microfrontend is hosted in a simple HTML page and doesn't require a server component (on the host side).

The definition file is [microfrontends.yaml](./microfrontends.yaml). 
If you update it run ```npm run generate``` to re-generate the types.

## Usage

Start the Microfrontend (server):

    npm start

There is a test page available under http://localhost:7890/public/test that starts the *Microfrontend* using a generated starter.

Alternatively, it could be loaded in *Mashroom Portal* like this:

 * Start the [Mashroom Portal Quickstart Template](https://github.com/nonblocking/mashroom-portal-quickstart)
 * Open http://localhost:5050/mashroom/admin/ext/remote-portal-apps
 * Add http://localhost:7890 as a new Remote App URL
 * Goto http://localhost:5050, login as admin/admin
 * Add the App "Minimal Microfrontend" to any page
