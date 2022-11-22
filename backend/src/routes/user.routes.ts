import { Router } from 'express';
import UsersRepository from '../repositories/implementations/SequelizeUser.repository';
import UserService from '../service/user.service';
import UserController from '../controller/user.controller';

const usersRouter = Router();
const usersRepository = new UsersRepository();
const userService = new UserService(usersRepository);
const userController = new UserController(userService);

usersRouter.get('/:email', userController.findByEmail);

export default usersRouter;