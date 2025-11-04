#!/usr/bin/env bash

NPM_PACKAGES=(
  "browser-standalone-code-splitting/host-application"
  "browser-standalone-code-splitting/microfrontend"
  "browser-standalone-hello-world/host-application"
  "browser-standalone-hello-world/microfrontend"
  "browser-standalone-routing/host-application"
  "browser-standalone-routing/microfrontend1"
  "browser-standalone-routing/microfrontend2"
  "browser-standalone-shared-libraries/host-application"
  "browser-standalone-shared-libraries/microfrontend1"
  "browser-standalone-shared-libraries/microfrontend2"
  "host-backend-integration-api-proxy-security/microfrontend"
  "host-backend-integration-api-proxy-security/host-application-express"
  "host-backend-integration-ssr/microfrontend"
  "host-backend-integration-ssr/host-application"
)

JAVA_PACKAGES=(
  "host-backend-integration-api-proxy-security/host-application-spring-boot"
)

CWD="$(dirname "$0")"

for npmPackagePath in "${NPM_PACKAGES[@]}"; do
  echo "=== Building NPM package $npmPackagePath ==="
  npm i --prefix "$npmPackagePath"
  # npm run generate --prefix "$npmPackagePath"
  npm run type-check --prefix "$npmPackagePath"
  npm run build --prefix "$npmPackagePath"
done

for javaPackagePath in "${JAVA_PACKAGES[@]}"; do
  echo "=== Building Java package javaPackagePath ==="
  cd "$CWD/$javaPackagePath"
  ./gradlew build
done
