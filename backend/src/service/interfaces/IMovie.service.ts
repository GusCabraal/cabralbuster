import { IMovie, IMovieDTO, ISimpleMovie } from '../../entities/IMovie';

export default interface IMovieService {
  findAll(): Promise<ISimpleMovie[]>;
  findById(id:string): Promise<IMovie | void>;
  create(movie:IMovieDTO, token:string | undefined): Promise<IMovie>;
}