import { ILogin, IUser, IUserMovies } from '../../entities/IUser';

export default interface IUsersRepository {
  findAll(): Promise<IUser[]>;
  findByEmailAndPassword(dataUser: ILogin): Promise<IUser | null>;
  deleteById(id: string| number): Promise<void>;
  createMoviesUsers(movieId: number, userId: number): Promise<void>;
  findMoviesInRentalByUserId(id: number): Promise<any>;
  deleteByMovieAndUserId(userId:number, movieId: number): Promise<void>;

}