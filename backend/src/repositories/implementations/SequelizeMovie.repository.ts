import MovieModel from '../../database/models/Movie';
import CategoryModel from '../../database/models/Category';
import DirectorModel from '../../database/models/Director';
import IMovieRepository from '../interfaces/IMovie.repository';

export default class SequelizeUsersRepository implements IMovieRepository {
  private _model = MovieModel;

  public findAll = async () => {
    const movies = await this._model.findAll({
      include: [
        { model: CategoryModel, as: 'category', attributes: { exclude: ['id'] } },
        { model: DirectorModel, as: 'director', attributes: { exclude: ['id'] } },
      ],
      attributes: { exclude: ['directorId', 'categoryId', 'director_id', 'category_id'] }
    });

    return movies;
  };

  public findById = async (id:string) => {
    const movies = await this._model.findOne({
      include: [
        { model: CategoryModel, as: 'category', attributes: { exclude: ['id'] } },
        { model: DirectorModel, as: 'director', attributes: { exclude: ['id'] } },
      ],
      attributes: { exclude: ['directorId', 'categoryId', 'director_id', 'category_id'] },
      where: { id },
    });

    return movies;
  };
}