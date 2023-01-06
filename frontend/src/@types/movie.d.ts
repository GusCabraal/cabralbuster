export interface Movie {
    id: number;
    name: string;
    image: string;
    description: string;
    releaseYear: number;
    imdbRating: number;
    ['director.id']: number;
    ['director.name']: string;
    ['director.image']: string;
    ['category.id']: number;
    ['category.name']: string;
    isMovieInRental: boolean;
  }