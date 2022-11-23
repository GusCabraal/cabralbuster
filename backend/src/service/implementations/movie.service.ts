import IMovieRepository from '../../repositories/interfaces/IMovie.repository';
import NotFoundError from '../../utils/errors/NotFoundError';

export default class UserService {
  private _moviesRepository: IMovieRepository;

  constructor(moviesRepository: IMovieRepository) {
    this._moviesRepository = moviesRepository;
  }

  public findAll = async () => {
    const movies = await this._moviesRepository.findAll();

    return movies;
  };

  public findById = async (id: string) => {
    const movie = await this._moviesRepository.findById(id);

    if(!movie) throw new NotFoundError('Movie not found')

    return movie;
  };

}