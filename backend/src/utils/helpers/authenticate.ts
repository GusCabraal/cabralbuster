import { IUserDTO } from '../../entities/IUser';
import UnauthorizedError from '../errors/UnauthorizedError';

import TokenManager from './tokenManager';

const authenticate = async (token:string | undefined) => {

  if (!token) throw new UnauthorizedError('Token not found');

  const data = await TokenManager.decodeToken(token);

  if (!data) throw new UnauthorizedError('Token must be a valid token');

};

export default authenticate;