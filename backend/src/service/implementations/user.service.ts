import { ILogin } from '../../entities/IUser';
import IUsersRepository from '../../repositories/interfaces/IUser.repository';
import NotFoundError from '../../utils/errors/NotFoundError';
import UnauthorizedError from '../../utils/errors/UnauthorizedError';
import authenticate from '../../utils/helpers/authenticate';
import { hashGenerator } from '../../utils/helpers/hashGenerator';
import TokenManager from '../../utils/helpers/tokenManager';

export default class UserService {
  private _usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this._usersRepository = usersRepository;
  }

  public login = async (userInfo:ILogin) => {

    const hashedUser = hashGenerator(userInfo);

    const foundUser = await this._usersRepository.findByEmailAndPassword(hashedUser);

    if(!foundUser) throw new UnauthorizedError('Invalid email or password');

    const {password, ...userWithoutPassword  } = foundUser;
    
    const token = TokenManager.makeToken(userWithoutPassword);
    
    return {...userWithoutPassword, token };
  };

  public findAll = async (token: string) => {

    const { admin } = await authenticate(token);

    if(!admin) throw new UnauthorizedError('Acesso não autorizado')
    
    const users = await this._usersRepository.findAll();

    return users;
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

    const userMovies = await this._usersRepository.findMoviesInRentalByUserId(id);

    if(!userMovies) throw new NotFoundError('User not found');
    
    return userMovies;
  };

  public createMoviesUsers = async (movieId: number, token:string | undefined) => {

    const { id: userId } = await authenticate(token);

    return this._usersRepository.createMoviesUsers(movieId, userId);
  };
  
  public deleteByMovieAndUserId = async (movieId: number, token:string | undefined) => {

    const { id: userId } = await authenticate(token);

    return this._usersRepository.deleteByMovieAndUserId(userId, movieId);
    
  };


}