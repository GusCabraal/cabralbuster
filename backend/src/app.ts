import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors';
import { userRoutes, movieRoutes, loginRoutes, categoryRoutes, directorRoutes } from './routes';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors())

app.use('/login', loginRoutes);
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/categories', categoryRoutes );
app.use('/directors', directorRoutes );
app.use(express.static('public'));
app.use(handleErrors)

export default app;