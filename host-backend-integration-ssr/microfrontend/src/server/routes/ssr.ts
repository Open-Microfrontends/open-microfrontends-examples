import type {Request, Response} from 'express';
import renderMicrofrontend from '../renderMicrofrontend';

export default async (req: Request, res: Response) => {
    // Security
    if (process.env.NODE_ENV !== 'development') {
        if (req.headers['x-api-key'] !== '123456') {
            res.sendStatus(401);
            return;
        }
    }

    try {
        const html = await renderMicrofrontend(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.send(html);
    } catch (e: any) {
        console.error('Server-side rendering failed!', e),
        res.sendStatus(500);
    }
}
