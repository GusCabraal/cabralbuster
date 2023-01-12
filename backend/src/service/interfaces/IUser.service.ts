import { ILogin, IUser, IUserLoginDTO, IUserMovies } from '../../entities/IUser';

export default interface IUserService {
  login(dataUser: ILogin): Promise<IUserLoginDTO>;
  createMoviesUsers(id:number, token:string | undefined): Promise<number>;
  findMoviesInRentalByUserId(id: number, token:string | undefined): Promise<IUserMovies>;
  deleteByMovieAndUserId(userId:number, token:string | undefined): Promise<void>;
}