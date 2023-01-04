import { IDirector } from '../../entities/IDirector';

export interface IDirectorRepository {
  findAll(): Promise<IDirector[]>;
}