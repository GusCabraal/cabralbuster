import {IDirectorRepository} from '../../repositories/interfaces/IDirector.repository';

export class DirectorService {

  constructor(private directorRepository: IDirectorRepository) {
  }

  public findAll = async () => {
    return this.directorRepository.findAll();
  };

}