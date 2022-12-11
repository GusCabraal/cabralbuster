import { ISimpleMovie } from '../../entities/IMovie';
import { IUser, IUserLoginDTO, IUserMovies } from '../../entities/IUser';

export default interface IUserService {
  login(email: string, password: string): Promise<IUserLoginDTO>;
  findAll(token: string | undefined): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUser | null>;
  deleteById(id: string, token:string | undefined): Promise<void>;
  deleteUserLogged(token:string | undefined): Promise<void>
  createMoviesUsers(id:number, token:string | undefined): Promise<void>;
  findMoviesInRentalByUserId(id: number, token:string | undefined): Promise<IUserMovies>;
  deleteByMovieAndUserId(userId:number, token:string | undefined): Promise<void>;
}