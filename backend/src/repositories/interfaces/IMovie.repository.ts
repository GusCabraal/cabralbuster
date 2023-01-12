import { IMovie, IMovieDTO, ISimpleMovie } from '../../entities/IMovie';

export default interface IUsersRepository {
  findAll(): Promise<ISimpleMovie[]>;
}