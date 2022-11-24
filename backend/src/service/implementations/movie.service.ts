import { IMovieDTO } from '../../entities/IMovie';
import IMovieRepository from '../../repositories/interfaces/IMovie.repository';
import NotFoundError from '../../utils/errors/NotFoundError';
import authenticate from '../../utils/helpers/authenticate';
import { validateBody } from '../../utils/helpers/validateBody';

export default class MovieService {
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

  public create = async (movie: IMovieDTO, token:string | undefined ) => {
    await authenticate(token)
    
    const requiredFields = ['name', 'description', 'releaseYear', 'imdbRating', 'directorId', 'categoryId']
    
    validateBody(movie, requiredFields)
    
    const newMovie = await this._moviesRepository.create(movie);

    return newMovie;
  };

}