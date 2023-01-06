import UserModel from '../../database/models/User';
import MovieUserModel from '../../database/models/MovieUser';
import IUsersRepository from '../interfaces/IUser.repository';
import MovieModel from '../../database/models/Movie';
import { ILogin } from '../../entities/IUser';

export default class SequelizeUsersRepository implements IUsersRepository {
  private _model = UserModel;

  public findAll = async () => {
    const users = await this._model.findAll({
      attributes: { exclude:['password'] },
      raw: true
    });

    return users;
  };

  public findByEmailAndPassword = async ({email, password}: ILogin) => {
    const user = await this._model.findOne({
      where: { email, password },
      raw: true
    });

    return user;
  };

  public deleteById = async (id: string | number) => {
    await MovieUserModel.destroy({
      where: { userId: id },
    });
    await this._model.destroy({
      where: { id },
    });

  };

  public findMoviesInRentalByUserId = async (id:number) => {
    const movies = await this._model.findOne({
      where: { id },
      include: [
        { model: MovieModel, as: 'movies', through: { attributes: [] },
        attributes: ['id', 'name', 'image'],},
      ],
      attributes: { exclude:['password'] },
  });
  
    return movies;
  };

  public createMoviesUsers = async (movieId:number, userId:number) => {
    return MovieUserModel.create({movieId, userId})
    .then(response => response.movieId);
  };

  public deleteByMovieAndUserId = async (userId:number, movieId: number) => {
    await MovieUserModel.destroy({
      where: { userId, movieId },
    });
  };
}