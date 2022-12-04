import { IMovie, IMovieDTO, ISimpleMovie } from '../../entities/IMovie';

export default interface IUsersRepository {
  findAll(): Promise<ISimpleMovie[]>;
  findById(id:string): Promise<IMovie | null>;
  create(movie:IMovieDTO): Promise<IMovie>;
}