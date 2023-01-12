import IMovieRepository from '../../repositories/interfaces/IMovie.repository';
import IUsersRepository from '../../repositories/interfaces/IUser.repository';
import { authenticate } from '../../utils/helpers/authenticate';

export default class MovieService {
  private _moviesRepository: IMovieRepository;
  private _usersRepository: IUsersRepository;

  constructor(moviesRepository: IMovieRepository, usersRepository: IUsersRepository) {
    this._moviesRepository = moviesRepository;
    this._usersRepository = usersRepository;
  }

  public findAll = async (token:string) => {
    const { id } = await authenticate(token);
    const allMovies = await this._moviesRepository.findAll();
    const { movies } = await this._usersRepository.findMoviesInRentalByUserId(id);

    const moviesStatusByUser = allMovies.map((movie) => {
      const isMovieInRental = movies.some((userMovie:any) => movie.id === userMovie.id)
      return {...movie, isMovieInRental}
    })
    return moviesStatusByUser;
  };

}