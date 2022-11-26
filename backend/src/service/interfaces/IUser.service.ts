import { IUser } from '../../entities/IUser';

export default interface IUserService {
  login(email: string, password: string): Promise<String | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findMoviesInRentalByUserId(id: number, token:string | undefined): Promise<IUser[]>;
}