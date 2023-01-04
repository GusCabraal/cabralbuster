import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import {IDirectorService} from '../service/interfaces/IDirector.service';

export class DirectorController {

  constructor(private directorService: IDirectorService) {
  }

  public findAll = async (req: Request, res: Response) => {
    
    return this.directorService.findAll()
      .then(directors => res.status(StatusCodes.OK).json(directors));

  };

}