export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    image?: string;
    admin: boolean;
  }  
export interface IUserDTO {
    id: number;
    username: string;
    email: string;
    image?: string;
    admin: boolean;
  }  
export interface IUserLoginDTO extends IUserDTO {
    token: string
  }  
export interface ITokenDTO {
  data: {
    user: IUserDTO;
    token: string;
  }
}  