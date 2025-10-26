import type {Request, Response} from 'express';
import type {Microfrontend1Permissions} from '../_generated/microfrontendRenderers';

export default (req: Request, res: Response) => {
    if (req.headers['x-api-key'] !== '123456') {
        res.sendStatus(401);
        return;
    }
    // TODO: implement properly (based on the API Key/user)
    const permissions: Microfrontend1Permissions = {
        showJoke: true,
    };
    res.json(permissions);
};
