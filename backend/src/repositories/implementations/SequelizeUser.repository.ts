import UserModel from '../../database/models/User';
import IUsersRepository from '../interfaces/IUser.repository';
import MovieModel from '../../database/models/Movie';
import CategoryModel from '../../database/models/Category';
import DirectorModel from '../../database/models/Director';


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

  public findMoviesInRentalByUserId = async (id:number) => {
    const movies = await this._model.findAll({
      where: { id },
      include: [
        { model: MovieModel, as: 'movies', through: { attributes: [] },
        attributes: { exclude: ['directorId', 'categoryId', 'director_id', 'category_id'] },
          include:[
          { model: CategoryModel, as: 'category', attributes: { exclude: ['id'] } },
          { model: DirectorModel, as: 'director', attributes: { exclude: ['id'] } },
        ] },
      ],
      attributes: {exclude:['password']}
    });
    return movies;
  };
}