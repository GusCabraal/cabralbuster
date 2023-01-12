import { IMovieUser } from '../../entities/IMovie';

export default interface IMovieService {
  findAll(id:number): Promise<IMovieUser[]>;
}