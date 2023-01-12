import MovieModel from '../../database/models/Movie';
import CategoryModel from '../../database/models/Category';
import DirectorModel from '../../database/models/Director';
import { IMovie, IMovieDTO, ISimpleMovie } from '../../entities/IMovie';
import IMovieRepository from '../interfaces/IMovie.repository';

export default class SequelizeUsersRepository implements IMovieRepository {
  private _model = MovieModel;

  public findAll = async () => {
    const movies = await this._model.findAll({
      include: [
        { model: CategoryModel, as: 'category', attributes: { exclude: [] } },
        { model: DirectorModel, as: 'director', attributes: { exclude: [] } },
      ],
      attributes: { exclude: ['director_id', 'category_id'] },
      raw: true
    });
    
    return movies as ISimpleMovie[];
  };

}