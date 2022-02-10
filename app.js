import express from 'express';
import apiRoutes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(apiRoutes);
app.listen(3000, () => {
    console.log('Server started!');
});
