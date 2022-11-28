import { IUser } from '../../entities/IUser';

export default interface IUserService {
  login(email: string, password: string): Promise<String | null>;
  findAll(token: string | undefined): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUser | null>;
  findMoviesInRentalByUserId(id: number, token:string | undefined): Promise<IUser[]>;
}