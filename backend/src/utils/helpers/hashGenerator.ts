import md5 from 'md5';
import { ILogin } from '../../entities/IUser';

export const hashGenerator = (data: ILogin) => {
  const { password } = data;

  const hashedData = data;

  const userPassword = md5(password);
  // console.log(userPassword);
  

  hashedData.password = userPassword;

  return hashedData;
};