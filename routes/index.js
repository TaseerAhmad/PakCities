import Router from "express";
import cityRoutes from "./api/cities.js";

const apiRoutes = Router();
apiRoutes.use('/api/', cityRoutes);
apiRoutes.use('*', (req, res) => {
    return res.send('Such a wanderer. Get lost from here!');
});

export default apiRoutes;
