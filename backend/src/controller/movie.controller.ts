import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import IMovieService from '../service/interfaces/IMovie.service';

export default class MovieController {
  private _movieService: IMovieService;

  constructor(movieService: IMovieService) {
    this._movieService = movieService;
  }

  public findAll = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const movies = await this._movieService.findAll(Number(id));

    return res.status(StatusCodes.OK).json(movies);
  };

  public findById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const movie = await this._movieService.findById(id);

    return res.status(StatusCodes.OK).json(movie);
  };

  public create = async (req: Request, res: Response) => {
    const {body, headers: { authorization }} = req;
    const newMovie = await this._movieService.create(body, authorization);

    return res.status(StatusCodes.CREATED).json(newMovie);
  };

}