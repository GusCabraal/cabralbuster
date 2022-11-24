export interface IMovie {
    id: number;
    name: string;
    description: string;
    releaseYear: number;
    image?: string;
    imdbRating: number;
    directorId: number;
    categoryId: number;
  }  

export interface IMovieDTO {
    name: string;
    description: string;
    releaseYear: number;
    image?: string;
    imdbRating: number;
    directorId: number;
    categoryId: number;
  }  