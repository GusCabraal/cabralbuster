import { IMovie, IMovieDTO, ISimpleMovieUser } from '../../entities/IMovie';

export default interface IMovieService {
  findAll(id:number): Promise<ISimpleMovieUser[]>;
  findById(id:string): Promise<IMovie | void>;
  create(movie:IMovieDTO, token:string | undefined): Promise<IMovie>;
}