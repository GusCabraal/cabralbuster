export interface IUser {
    id: number;
    username: string;
    email: string;
    image?: string;
    admin: boolean;
  }  
  export type ContextType = {
    user: IUser | null;
  };