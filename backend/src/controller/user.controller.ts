import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import IUserService from '../service/interfaces/IUser.service';

export default class UserController {
  private _userService: IUserService;

  constructor(userService: IUserService) {
    this._userService = userService;
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await this._userService.login(email, password);
    return res.status(StatusCodes.OK).json({ token });
  };

  public findAll = async (req: Request, res: Response) => {
    const {headers: { authorization }} = req;

    const users = await this._userService.findAll(authorization);
    
    return res.status(StatusCodes.OK).json(users);
  };

  public findByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;

    const user = await this._userService.findByEmail(email);
    return res.status(StatusCodes.OK).json(user);
  };


  public deleteById = async (req: Request, res: Response) => {
    const {params: { id }, headers: { authorization }} = req;

    await this._userService.deleteById(id, authorization);

    return res.sendStatus(StatusCodes.NO_CONTENT);
  };

  public findMoviesInRentalByUserId = async (req: Request, res: Response) => {
    const {params: { id }, headers: { authorization }} = req;

    const movies = await this._userService.findMoviesInRentalByUserId(Number(id), authorization);

    return res.status(StatusCodes.OK).json(movies);
  };
}