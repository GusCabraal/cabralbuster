import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
} from "react";
import {  useMutation, UseMutationResult, useQuery } from "react-query";
import { ISimpleMoviesByUsers } from "../@types/movie";
import { api } from "../axios/config";

interface MoviesProviderProps {
  children: ReactNode;
}

interface ToggleMovieInRental {
  isMovieInRental: boolean,
  idMovie: number;

}

interface MoviesContextData {
  movies: ISimpleMoviesByUsers[] | undefined;
  // toggleMovieInRental: (isMovieInRental: boolean, idMovie: number) => Promise<void>;
  mutation: UseMutationResult<AxiosResponse<any, any>, unknown, ToggleMovieInRental, unknown>
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {

  const {
    data: movies,
    refetch,
  } = useQuery<ISimpleMoviesByUsers[]>(
    "movies",
    async () => {
        return api
          .get(`/movies/users/${ JSON.parse(localStorage.getItem("user") as string)?.id}`)
          .then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  // async function toggleMovieInRental( isMovieInRental: boolean, idMovie: number) {
  //   if (isMovieInRental) {
  //     await api.delete(`/users/movies/${idMovie}`);
  //   } else {
  //     await api.post(`/users/movies/${idMovie}`);
  //   }
  //   refetch();
  // }

  const mutation = useMutation({
    mutationFn: ({isMovieInRental, idMovie }: ToggleMovieInRental) => {
      if (isMovieInRental) {
        return api.delete(`/users/movies/${idMovie}`);
      } else {
        return api.post(`/users/movies/${idMovie}`);
      }
    },
    onSuccess: () => {
      refetch();
    }
  })

  return (
    <MoviesContext.Provider value={{ movies, mutation }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => {
  const context = useContext(MoviesContext);
  return context;
};
