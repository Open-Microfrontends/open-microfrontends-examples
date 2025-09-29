import {Router} from 'express';

const api = Router();

// Security middleware
if (process.env.NODE_ENV !== 'local') {
    api.use((req, res, next) => {
        if (req.headers['x-api-key'] !== '123456') {
            res.sendStatus(401);
            return;
        }
        next();
    });
}

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
