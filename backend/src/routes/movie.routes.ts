import { Router } from 'express';
import Repository from '../repositories/implementations/SequelizeMovie.repository';
import UserRepository from '../repositories/implementations/SequelizeUser.repository';
import Service from '../service/implementations/movie.service';
import Controller from '../controller/movie.controller';

const router = Router();
const repository = new Repository();
const userRepository = new UserRepository();
const service = new Service(repository, userRepository);
const controller = new Controller(service);

router.get('/users', controller.findAll);

export default router;