import IUsersRepository from '../../repositories/interfaces/IUser.repository';
import NotFoundError from '../../utils/errors/NotFoundError';
import UnauthorizedError from '../../utils/errors/UnauthorizedError';
import TokenManager from '../../utils/helpers/tokenManager';

export default class UserService {
  private _usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this._usersRepository = usersRepository;
  }

  public login = async (email: string, loginPassword: string) => {
    const user = await this._usersRepository.findByEmail(email);

    if(!user) throw new NotFoundError('User not found');

    if(user.password !== loginPassword) throw new UnauthorizedError('Invalid email or password')

    const {password, ...userWithoutPassword  } = user;
    
    const token = TokenManager.makeToken(userWithoutPassword);
    
    return token;
  };

  public findByEmail = async (email: string) => {
    const user = await this._usersRepository.findByEmail(email);

    if(!user) throw new NotFoundError('User not found');
    
    return user;
  };

}