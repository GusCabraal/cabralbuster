import { IUser } from '../../entities/IUser';

export default interface IUserService {
  findByEmail(email: string): Promise<IUser | null>;
}