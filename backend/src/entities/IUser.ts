import { ISimpleMovie } from './IMovie'

export interface IUser {
    id: number
    username: string
    email: string
    password: string
    image?: string
    admin: boolean
}
export interface IUserDTO {
    id: number
    username: string
    email: string
    image?: string
    admin: boolean
}
export interface ILogin {
    email: string
    password: string
}

export interface IUserMovies {
    id: number
    username: string
    email: string
    image?: string
    admin: boolean
    movies: ISimpleMovie[]
}
export interface IUserLoginDTO extends IUserDTO {
    token: string
}
export interface ITokenDTO {
    data: {
        id: number
        username: string
        email: string
        admin: boolean
        token: string
    }
}
