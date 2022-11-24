import { IMovie, IMovieDTO } from '../../entities/IMovie';

export default interface IUsersRepository {
  findAll(): Promise<IMovie[]>;
  findById(id:string): Promise<IMovie | null>;
  create(movie:IMovieDTO): Promise<IMovie>;
}