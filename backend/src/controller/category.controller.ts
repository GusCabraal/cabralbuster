import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import {ICategoryService} from '../service/interfaces/ICategory.service';

export class CategoryController {
  private _movieService: ICategoryService;

  constructor(movieService: ICategoryService) {
    this._movieService = movieService;
  }

  public findAll = async (req: Request, res: Response) => {
    
    const categories = await this._movieService.findAll();

    return res.status(StatusCodes.OK).json(categories);
  };

}