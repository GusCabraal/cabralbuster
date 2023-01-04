import { AxiosRequestConfig, AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
  UseMutationResult,
  useQuery,
} from "react-query";
import { ISimpleMoviesByUsers } from "../@types/movie";
import { api } from "../axios/config";

interface MoviesProviderProps {
  children: ReactNode;
}

interface ToggleMovieInRental {
  isMovieInRental: boolean;
  idMovie: number;
}

interface MoviesContextData {
  movies: ISimpleMoviesByUsers[] | undefined;
  // toggleMovieInRental: (isMovieInRental: boolean, idMovie: number) => Promise<void>;
  isMovieModalOpen: boolean;
  handleOpenMovieModal: () => void;
  movieSelectedId: number;
  setMovieSelectedId: React.Dispatch<React.SetStateAction<number>>;

  mutation: UseMutationResult<
    AxiosResponse<any, any>,
    unknown,
    ToggleMovieInRental,
    unknown
  >;
  refetch: (
    options?: (RefetchOptions & RefetchQueryFilters<unknown>) | undefined
  ) => Promise<QueryObserverResult<ISimpleMoviesByUsers[], unknown>>;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [movieSelectedId, setMovieSelectedId] = useState(1);

  function handleOpenMovieModal() {
    setIsMovieModalOpen(true);
  }

  function handleCloseMovieModal() {
    setIsMovieModalOpen(false);
  }

  const { data: movies, refetch } = useQuery<ISimpleMoviesByUsers[]>(
    "movies",
    async () => {
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token") as string),
        },
      };
      return api
        .get(
          `/movies/users/${
            JSON.parse(localStorage.getItem("user") as string)?.id
          }`,
          config
        )
        .then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto,
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
    mutationFn: ({ isMovieInRental, idMovie }: ToggleMovieInRental) => {
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token") as string),
        },
      };
      if (isMovieInRental) {
        return api.delete(`/users/movies/${idMovie}`, config);
      } else {
        return api.post(`/users/movies/${idMovie}`, {}, config);
      }
    },
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <MoviesContext.Provider
      value={{
        movies,
        mutation,
        refetch,
        isMovieModalOpen,
        handleOpenMovieModal,
        movieSelectedId,
        setMovieSelectedId,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export const useMovies = () => {
  const context = useContext(MoviesContext);
  return context;
};
