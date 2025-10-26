import type {Request, Response} from 'express';
import renderMicrofrontend from '../renderMicrofrontend';

export default async (req: Request, res: Response) => {
    const microfrontendId = '1';
    const customerId = '1000';

    const renderResult = await renderMicrofrontend({
        id: microfrontendId,
        config: {
            customerId: customerId,
        }
    });

    const model = {
        microfrontendId,
        customerId,
        ssrContent: renderResult.html,
        headScript: renderResult.injectHeadScript,
    };

    res.render('testPageSSR', model);
}
