import { Router } from 'express';
import Repository from '../repositories/implementations/SequelizeMovie.repository';
import Service from '../service/implementations/movie.service';
import Controller from '../controller/movie.controller';

const router = Router();
const repository = new Repository();
const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.findAll);
router.get('/:id', controller.findById);

export default router;