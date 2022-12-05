export interface IMoviesDetails {
    id: number;
    name: string;
    description: string;
    releaseYear: number;
    image?: string;
    imdbRating: number;
    director: {
      name: string;
    };
    category: {
      name: string;
    };
  }

  interface ISimpleMovies {
    id: number;
    name: string;
    image: string;
  }
  
  interface IMoviesByUsers {
    id: number;
    username: string;
    email: string;
    admin: boolean;
    movies: ISimpleMovies[];
  }