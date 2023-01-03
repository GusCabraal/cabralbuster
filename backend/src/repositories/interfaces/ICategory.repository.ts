import { ICategory } from '../../entities/ICategory';

export interface ICategoryRepository {
  findAll(): Promise<ICategory[]>;
}