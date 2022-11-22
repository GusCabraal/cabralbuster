import UserModel from '../../database/models/User';
import { IUser } from '../../entities/IUser';
import IUsersRepository from '../interfaces/IUser.repository';

export default class SequelizeUsersRepository implements IUsersRepository {
  private _model = UserModel;

  public findByEmail = async (email: string) => {
    const sequelizeUser = await this._model.findOne({
      where: { email },
      attributes: {exclude: ['password']}
    });

    if (!sequelizeUser) return null;

    const user: IUser = {
      id: sequelizeUser.id,
      username: sequelizeUser.username,
      email: sequelizeUser.email,
      admin: sequelizeUser.admin,
      image: sequelizeUser.image,
      password: sequelizeUser.password,
    };

    return user;
  };
}