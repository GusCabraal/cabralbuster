import { ILogin, IUser, MovieUser } from '../../entities/IUser';
import MovieUserModel from '../../database/models/MovieUser';

export default interface IUsersRepository {
  findAll(): Promise<IUser[]>;
  findByEmailAndPassword(dataUser: ILogin): Promise<IUser | null>;
  deleteById(id: string| number): Promise<void>;
  createMoviesUsers(movieId: number, userId: number): Promise<number>;
  findMoviesInRentalByUserId(id: number): Promise<any>;
  deleteByMovieAndUserId(userId:number, movieId: number): Promise<void>;

}