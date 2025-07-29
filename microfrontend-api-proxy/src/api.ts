import {Router} from 'express';

const api = Router();

api.get('/customers/:id', (req, res) => {
    if (req.params.id !== '1000') {
        res.status(400).end();
        return;
    }

    res.json({
       lastName: 'Subrahmanya',
       firstName: 'Anna',
    });
});

export default api;
