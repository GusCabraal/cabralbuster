import { IMovie } from '../../entities/IMovie';

export default interface IUsersRepository {
  findAll(): Promise<IMovie[]>;
}