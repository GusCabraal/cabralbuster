import {
  createContext,
  ReactNode,
  useContext,
} from "react";
import {  useQuery } from "react-query";
import { ISimpleMoviesByUsers } from "../@types/movie";
import { api } from "../axios/config";

interface MoviesProviderProps {
  children: ReactNode;
}

interface MoviesContextData {
  movies: ISimpleMoviesByUsers[] | undefined;
  toggleMovieInRental: (isMovieInRental: boolean, idMovie: number) => Promise<void>;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {

  const {
    data: movies,
    refetch,
  } = useQuery<ISimpleMoviesByUsers[]>(
    "movies",
    async () => {
      const userData = JSON.parse(localStorage.getItem("user") as string);
      if (userData) {
        return api
          .get(`/movies/users/${userData?.id}`)
          .then((response) => response.data);
      }
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  async function toggleMovieInRental( isMovieInRental: boolean, idMovie: number) {
    if (isMovieInRental) {
      await api.delete(`/users/movies/${idMovie}`);
    } else {
      await api.post(`/users/movies/${idMovie}`);
    }
    refetch();
  }

  return (
    <MoviesContext.Provider value={{ movies, toggleMovieInRental }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => {
  const context = useContext(MoviesContext);
  return context;
};
