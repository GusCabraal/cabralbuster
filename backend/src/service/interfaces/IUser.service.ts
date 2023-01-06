import { ILogin, IUser, IUserLoginDTO, IUserMovies } from '../../entities/IUser';

export default interface IUserService {
  login(dataUser: ILogin): Promise<IUserLoginDTO>;
  findAll(token: string | undefined): Promise<IUser[]>;
  deleteById(id: string, token:string | undefined): Promise<void>;
  deleteUserLogged(token:string | undefined): Promise<void>
  createMoviesUsers(id:number, token:string | undefined): Promise<number>;
  findMoviesInRentalByUserId(id: number, token:string | undefined): Promise<IUserMovies>;
  deleteByMovieAndUserId(userId:number, token:string | undefined): Promise<void>;
}