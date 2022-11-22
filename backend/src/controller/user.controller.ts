import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import IUserService from '../service/interfaces/IUser.service';

export default class UserController {
  private _userService: IUserService;

  constructor(userService: IUserService) {
    this._userService = userService;
  }

  public findByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;

    const user = await this._userService.findByEmail(email);
    return res.status(StatusCodes.OK).json(user);
  };

}