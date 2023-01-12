export interface ISimpleMovie {
    id: number
    name: string
    image: string
}

export interface IMovieUser extends ISimpleMovie {
    isMovieInRental: boolean;
}
export interface IMovie extends ISimpleMovie {
    description: string
    releaseYear: number
    imdbRating: number
    directorId: number
    categoryId: number
}
export interface IMovieDTO {
    name: string
    description: string
    releaseYear: number
    image: string
    imdbRating: number
    directorId: number
    categoryId: number
}
