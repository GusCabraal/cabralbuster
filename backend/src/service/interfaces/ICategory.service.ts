import { ICategory } from '../../entities/ICategory';

export interface ICategoryService {
  findAll(): Promise<ICategory[]>;
}