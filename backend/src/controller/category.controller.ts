import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import {ICategoryService} from '../service/interfaces/ICategory.service';

export class CategoryController {
  private _categoryService: ICategoryService;

  constructor(categoryService: ICategoryService) {
    this._categoryService = categoryService;
  }

  public findAll = async (_req: Request, res: Response) => {
    
    const categories = await this._categoryService.findAll();

    return res.status(StatusCodes.OK).json(categories);
  };

}