import UserModel from '../../database/models/User';
import MovieUserModel from '../../database/models/MovieUser';
import IUsersRepository from '../interfaces/IUser.repository';
import MovieModel from '../../database/models/Movie';
import { IUserMovies } from '../../entities/IUser';


export default class SequelizeUsersRepository implements IUsersRepository {
  private _model = UserModel;

  public findAll = async () => {
    const users = await this._model.findAll({
      raw: true
    });

    return users;
  };

  public findByEmail = async (email: string) => {
    const user = await this._model.findOne({
      where: { email },
      raw: true
    });

    return user;
  };

  public deleteById = async (id: string | number) => {
    await MovieUserModel.destroy({
      where: { userId: id },
    });
    const deleteId = await this._model.destroy({
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
      attributes: {exclude:['password']}
    });
    return movies;
  };
}