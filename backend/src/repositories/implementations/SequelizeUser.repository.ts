import UserModel from '../../database/models/User';
import IUsersRepository from '../interfaces/IUser.repository';

export default class SequelizeUsersRepository implements IUsersRepository {
  private _model = UserModel;

  public findByEmail = async (email: string) => {
    const user = await this._model.findOne({
      where: { email },
      raw: true
    });

    return user;
  };
}