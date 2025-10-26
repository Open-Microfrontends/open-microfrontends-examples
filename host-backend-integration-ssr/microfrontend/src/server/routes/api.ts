import {Router} from 'express';
import getCustomer from '../getCustomer';

const api = Router();

api.get('/customers/:id', async (req, res) => {
    // Security
    if (process.env.NODE_ENV !== 'development') {
        if (req.headers['x-api-key'] !== '123456') {
            res.sendStatus(401);
            return;
        }
    }

    const customer = await getCustomer(req.params.id);
    if (!customer) {
        res.status(400).end();
        return;
    }
    res.json(customer);
});

export default api;
