import { Router } from 'express';
import Repository from '../repositories/implementations/SequelizeUser.repository';
import Service from '../service/implementations/user.service';
import Controller from '../controller/user.controller';

const router = Router();
const repository = new Repository();
const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.findAll);
router.get('/:email', controller.findByEmail);
router.get('/:id/movies', controller.findMoviesInRentalByUserId);
router.delete('/me', controller.deleteUserLogged);
router.delete('/:id', controller.deleteById);

export default router;