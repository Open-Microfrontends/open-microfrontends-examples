import { IncomingMessage } from 'http';
import {OpenMicrofrontendsExampleAPIProxyWithSecurityBaseSetup} from './_generated/microfrontendHostIntegrations';

export default class ExampleAPIProxyWithSecuritySetup implements OpenMicrofrontendsExampleAPIProxyWithSecurityBaseSetup {
    get microfrontendBaseUrl() {
        return 'http://localhost:7830'
    };

    async getUser(req: IncomingMessage)  {
        // TODO
        return null;
    }

    async apiProxyRequestBffGetSecurityHeaders(req: IncomingMessage): Promise<Record<string, string>> {
        return {
            'x-api-key': '123456',
        };
    }

    get apiProxyChuckNorrisJokeUrl() {
        return 'https://api.chucknorris.io/jokes/random';
    };

    async userPermissionsRequestGetSecurityHeaders(req: IncomingMessage): Promise<Record<string, string>> {
        return {
          'x-api-key': '123456',
        };
    }

    async buildTimestampOrVersionCachePut(tsOrVersion: string): Promise<void> {
        // TODO
    }

    async buildTimestampOrVersionCacheGet(): Promise<string | null> {
        // TODO
        return null;
    }
}
