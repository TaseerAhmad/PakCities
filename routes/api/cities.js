import Router from 'express';
import city from '../../database/index.js';

const cityRoutes = Router();

cityRoutes.get("/cities", async (req, res) => {
    try {
        return res.send(await city.getCities());
    } catch (err) {
        return res.status(500).send(':(');
    }
});

export default cityRoutes;