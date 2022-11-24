import { IMovie, IMovieDTO } from '../../entities/IMovie';

export default interface IMovieService {
  findAll(): Promise<IMovie[]>;
  findById(id:string): Promise<IMovie | void>;
  create(movie:IMovieDTO, token:string | undefined): Promise<IMovie>;
}