import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import IUserService from '../service/interfaces/IUser.service';

export default class UserController {
  private _userService: IUserService;

  constructor(userService: IUserService) {
    this._userService = userService;
  }

  public login = async (req: Request, res: Response) => {
    const user = await this._userService.login(req.body);
    return res.status(StatusCodes.OK).json(user);
  };

  public findMoviesInRentalByUserId = async (req: Request, res: Response) => {
    const { params: { id }, headers: { authorization }} = req;

    const userMovies = await this._userService.findMoviesInRentalByUserId(Number(id), authorization);

    return res.status(StatusCodes.OK).json(userMovies.movies);
  };

  public createMoviesUsers = async (req: Request, res: Response) => {
    const { params: { id }, headers: { authorization }} = req;

    return this._userService.createMoviesUsers(Number(id), authorization)
      .then(movieId => res.status(StatusCodes.CREATED).json(movieId));;

  };

  public deleteByMovieAndUserId = async (req: Request, res: Response) => {
    const {params: { id }, headers: { authorization }} = req;

    await this._userService.deleteByMovieAndUserId(Number(id), authorization);

    return res.status(StatusCodes.OK).json(Number(id));
  };
}