import { IMovie } from '../../entities/IMovie';

export default interface IMovieService {
  findAll(): Promise<IMovie[]>;
}