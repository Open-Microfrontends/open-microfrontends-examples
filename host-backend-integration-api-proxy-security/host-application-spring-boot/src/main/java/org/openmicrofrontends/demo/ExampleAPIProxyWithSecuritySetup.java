package org.openmicrofrontends.demo;

import java.util.Map;

import jakarta.servlet.http.HttpServletRequest;
import org.openmicrofrontends.demo._generated.OpenMicrofrontendHostIntegrations;

public class ExampleAPIProxyWithSecuritySetup implements
        OpenMicrofrontendHostIntegrations.OpenMicrofrontendsExampleAPIProxyWithSecurityHostIntegrationFilter.MicrofrontendBaseSetup {

    @Override
    public String getMicrofrontendBaseUrl() {
        return "http://localhost:7830";
    }

    @Override
    public OpenMicrofrontendHostIntegrations.User getUser(HttpServletRequest req) {
        // TODO
        return null;
    }

    @Override
    public Map<String, String> getApiProxyRequestBffGetSecurityHeaders(HttpServletRequest req) {
        return Map.of("x-api-key", "123456");
    }

    @Override
    public String getApiProxyChuckNorrisJokeUrl() {
        return "https://api.chucknorris.io/jokes/random";
    }

    @Override
    public Map<String, String> getUserPermissionsRequestSecurityHeaders(HttpServletRequest req) {
        return Map.of("x-api-key", "123456");
    }

    @Override
    public void buildTimestampOrVersionCachePut(String tsOrVersion) {
        // TODO
    }

    @Override
    public String buildTimestampOrVersionCacheGet() {
        // TODO
        return null;
    }
}
