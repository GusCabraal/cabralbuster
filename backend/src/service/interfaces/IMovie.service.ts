import { IMovie } from '../../entities/IMovie';

export default interface IMovieService {
  findAll(): Promise<IMovie[]>;
  findById(id:string): Promise<IMovie | void>;
}