import DirectorModel from '../../database/models/Director';
import { IDirectorRepository } from '../interfaces/IDirector.repository';

export class SequelizeDirectorRepository implements IDirectorRepository {
  private _model = DirectorModel;

  public findAll = async () => {
    return this._model.findAll({
      raw: true
    });

  };

}