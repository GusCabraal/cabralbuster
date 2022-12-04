import IUsersRepository from '../../repositories/interfaces/IUser.repository';
import NotFoundError from '../../utils/errors/NotFoundError';
import UnauthorizedError from '../../utils/errors/UnauthorizedError';
import authenticate from '../../utils/helpers/authenticate';
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
    
    return {...userWithoutPassword, token };
  };

  public findAll = async (token: string) => {

    const { admin } = await authenticate(token);

    if(!admin) throw new UnauthorizedError('Acesso não autorizado')
    
    const users = await this._usersRepository.findAll();

    return users;
  };

  public findByEmail = async (email: string) => {
    const user = await this._usersRepository.findByEmail(email);

    if(!user) throw new NotFoundError('User not found');
    
    return user;
  };
  public deleteById = async (id: string, token: string | undefined) => {

    const { admin } = await authenticate(token);

    if(!admin) throw new UnauthorizedError('Acesso não autorizado')
    
    await this._usersRepository.deleteById(id);
  };

  public deleteUserLogged = async (token: string | undefined) => {

    const { id } = await authenticate(token);

    await this._usersRepository.deleteById(id);
  };

  public findMoviesInRentalByUserId = async (id: number, token:string | undefined) => {

    const { id: userId, admin} = await authenticate(token);

    if(id !== userId){
      if(!admin) throw new UnauthorizedError('Acesso não autorizado')
    } 

    const movies = await this._usersRepository.findMoviesInRentalByUserId(id);

    return movies;
  };
}