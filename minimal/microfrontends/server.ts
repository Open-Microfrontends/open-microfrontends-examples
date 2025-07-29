import {createServer} from 'http';
import {createReadStream} from 'fs';
import {resolve, extname} from 'path';
import {pipeline} from 'stream/promises';
import type {ServerResponse} from 'http';

const PORT = 7890;

const writeFile = async (res: ServerResponse, path: string, mime: string) => {
    res.writeHead(200, {
        'Content-Type': mime,
    });
    try {
        const fileStream = createReadStream(path);
        await pipeline(fileStream, res);
    } catch (e) {
        console.error(`Sending file ${path} failed!`, e);
        if (!res.headersSent) {
            res.writeHead(500);
        }
        res.end();
    }
}

const httpServer = createServer(async (req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405);
        res.end();
    }
    // Resources
    if (req.url.startsWith('/public/')) {
        let mime = 'application/octet-stream';
        let resourcePath = req.url.substring('/public/'.length)
            .replace('.mjs', '.js');
        switch (extname(resourcePath)) {
        case '.js': {
            mime = 'application/javascript';
            break;
        }
        case '.html': {
            mime = 'text/html';
            break;
        }
        default: {
            if (resourcePath === 'test') {
                resourcePath = 'test/index.html';
                mime = 'text/html';
            } else {
                resourcePath += '.js';
                mime = 'application/javascript';
            }
        }
        }
        resourcePath = resolve(import.meta.dirname, '..', resourcePath);
        await writeFile(res, resourcePath, mime);
        return;
    }

    // Everything below here is optional and only required to register the Microfrontend
    // in the OpenFrontendRegistry (OMIR) or in Mashroom Server
    if (req.url === '/microfrontends.yaml') {
        await writeFile(res, resolve(import.meta.dirname, '..', '..', 'microfrontends.yaml'), 'application/yaml');
        return;
    }
    if (req.url === '/mashroom.json') {
        await writeFile(res, resolve(import.meta.dirname, '..', '..', 'microfrontends', '_generated', 'mashroom.json'), 'application/json');
        return;
    }
    if (req.url === '/package.json') {
        await writeFile(res, resolve(import.meta.dirname, '..', '..', 'package.json'), 'application/json');
        return;
    }

    res.writeHead(404);
    res.end();
});

httpServer.listen(PORT, () => {
   console.info(`OpenMicrofrontends Minimal Example running on port ${PORT}`);
});
