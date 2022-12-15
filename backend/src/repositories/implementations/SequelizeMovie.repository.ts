import MovieModel from '../../database/models/Movie';
import CategoryModel from '../../database/models/Category';
import DirectorModel from '../../database/models/Director';
import { IMovie, IMovieDTO, ISimpleMovie } from '../../entities/IMovie';
import IMovieRepository from '../interfaces/IMovie.repository';

export default class SequelizeUsersRepository implements IMovieRepository {
  private _model = MovieModel;

  public findAll = async () => {
    const movies = await this._model.findAll({
      attributes: ['id', 'name', 'image'],
      raw: true
    });

    return movies as ISimpleMovie[];
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

    return movies as IMovie;
  };
  
  public create = async({name, description, releaseYear, imdbRating, directorId, categoryId, image}: IMovieDTO) => {
    
    const newMovie = await this._model.create({name, description, releaseYear, imdbRating, directorId, categoryId, image });
    
    return newMovie as IMovie;
  };

}