import IUsersRepository from '../repositories/interfaces/IUser.repository';

export default class UserService {
  private _usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this._usersRepository = usersRepository;
  }

  public findByEmail = async (email: string) => {
    const user = await this._usersRepository.findByEmail(email);

    return user;
  };

}