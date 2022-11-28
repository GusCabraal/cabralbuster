import { IUser } from '../../entities/IUser';

export default interface IUsersRepository {
  findAll(): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUser | null>;
  deleteById(id: string): Promise<void>;
  findMoviesInRentalByUserId(id: number): Promise<IUser[]>;
}