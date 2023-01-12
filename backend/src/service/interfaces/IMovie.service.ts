import { IMovieUser } from '../../entities/IMovie';

export default interface IMovieService {
  findAll(token: string | undefined): Promise<IMovieUser[]>;
}