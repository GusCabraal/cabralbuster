import { Router } from 'express';
import Repository from '../repositories/implementations/SequelizeUser.repository';
import Service from '../service/implementations/user.service';
import Controller from '../controller/user.controller';

const router = Router();
const repository = new Repository();
const service = new Service(repository);
const controller = new Controller(service);

router.get('/:id/movies', controller.findMoviesInRentalByUserId);
router.post('/movies/:id', controller.createMoviesUsers);
router.delete('/movies/:id', controller.deleteByMovieAndUserId);

export default router;