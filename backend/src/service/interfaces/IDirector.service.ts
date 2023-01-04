import { IDirector } from '../../entities/IDirector';

export interface IDirectorService {
  findAll(): Promise<IDirector[]>;
}