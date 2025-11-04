import {IncomingMessage} from "http";
import {OpenMicrofrontendsExampleSSRBaseSetup} from "./_generated/microfrontendHostIntegrations";

export default class OpenMicrofrontendsExampleSSRSetup implements OpenMicrofrontendsExampleSSRBaseSetup {
    get microfrontendBaseUrl() {
        return 'http://localhost:7840'
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

    async ssrGetSecurityHeaders(req: IncomingMessage): Promise<Record<string, string>> {
        return {
            'x-api-key': '123456',
        };
    }

    async ssrCachePut(key: string, userName: string | undefined, result: object): Promise<void> {
        // TODO
    }

    async ssrCacheGet(key: string, userName: string | undefined): Promise<object | null> {
        // TODO
        return null;
    }
}
