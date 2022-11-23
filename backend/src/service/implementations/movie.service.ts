import IMovieRepository from '../../repositories/interfaces/IMovie.repository';

export default class UserService {
  private _moviesRepository: IMovieRepository;

  constructor(moviesRepository: IMovieRepository) {
    this._moviesRepository = moviesRepository;
  }

  public findAll = async (email: string) => {
    const movies = await this._moviesRepository.findAll();

    return movies;
  };

}