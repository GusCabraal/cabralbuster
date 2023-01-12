import { ILogin, IUser, MovieUser } from '../../entities/IUser';
import MovieUserModel from '../../database/models/MovieUser';

export default interface IUsersRepository {
  findByEmailAndPassword(dataUser: ILogin): Promise<IUser | null>;
  createMoviesUsers(movieId: number, userId: number): Promise<number>;
  findMoviesInRentalByUserId(id: number): Promise<any>;
  deleteByMovieAndUserId(userId:number, movieId: number): Promise<void>;

}