#!/usr/bin/env bash

NPM_PACKAGES=(
  "browser-standalone-code-splitting/application-host"
  "browser-standalone-code-splitting/microfrontend"
  "browser-standalone-hello-world/application-host"
  "browser-standalone-hello-world/microfrontend"
  "browser-standalone-routing/application-host"
  "browser-standalone-routing/microfrontend1"
  "browser-standalone-routing/microfrontend2"
  "browser-standalone-shared-libraries/application-host"
  "browser-standalone-shared-libraries/microfrontend1"
  "browser-standalone-shared-libraries/microfrontend2"
  "host-backend-integration-api-proxy-security/microfrontend"
)

JAVA_PACKAGES=()

for npmPackagePath in "${NPM_PACKAGES[@]}"; do
  echo "=== Building NPM package $npmPackagePath ==="
  npm i --prefix "$npmPackagePath"
  npm run type-check --prefix "$npmPackagePath"
  npm run build --prefix "$npmPackagePath"
done
