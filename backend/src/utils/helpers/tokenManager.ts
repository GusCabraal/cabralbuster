import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { ITokenDTO } from '../../entities/IUser';

const secret = process.env.JWT_SECRET  || 'secret';

export default class TokenManager {
  static makeToken = (payload: unknown) => {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: payload }, secret, jwtConfig);

    return token;
  };

  static decodeToken = (token: string) => {
    try {
      const { data }  = jwt.verify(token, secret) as ITokenDTO;
      return data;
    } catch (error) {
      return null;
    }
  };
}