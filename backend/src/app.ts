import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';
import { userRoutes } from './routes';


const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use(handleErrors)

export default app;