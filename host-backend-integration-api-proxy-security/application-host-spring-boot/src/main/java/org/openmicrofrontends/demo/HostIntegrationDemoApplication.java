package org.openmicrofrontends.demo;

import jakarta.servlet.Filter;
import org.openmicrofrontends.demo._generated.OpenMicrofrontendHostIntegrations;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HostIntegrationDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(HostIntegrationDemoApplication.class, args);
	}

    @Bean
    public Filter createExampleMicrofrontendFilter() {
        return new OpenMicrofrontendHostIntegrations.OpenMicrofrontendsExampleAPIProxyWithSecurityHostIntegrationFilter(new ExampleAPIProxyWithSecuritySetup());
    }

}
