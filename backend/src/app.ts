import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';
import { userRoutes, movieRoutes, loginRoutes } from './routes';


const app = express();
app.use(express.json());

app.use('/login', loginRoutes);
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use(handleErrors)

export default app;