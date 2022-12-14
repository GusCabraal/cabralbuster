import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import IMovieService from '../service/interfaces/IMovie.service';

export default class MovieController {
  private _movieService: IMovieService;

  constructor(movieService: IMovieService) {
    this._movieService = movieService;
  }

  public findAll = async (req: Request, res: Response) => {
    const { headers: { authorization } } = req;
    
    const movies = await this._movieService.findAll(authorization);

    return res.status(StatusCodes.OK).json(movies);
  };

}