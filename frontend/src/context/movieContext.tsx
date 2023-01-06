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
  isMovieInRental: boolean | undefined;
  movieSelectedId: number;
}

interface MoviesContextData {
  movies: ISimpleMoviesByUsers[] | undefined;
  isMovieModalOpen: boolean;
  handleCloseMovieModal: () => void;
  handleOpenMovieModal: () => void;
  movieSelectedId: number;
  handleSelectedMovieId:  (id:number) => void;
  isFetchingMovies: boolean;
  toggleMovieInRental: (data: ToggleMovieInRental) => void
  reloadMovieData: () => void;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [movieSelectedId, setMovieSelectedId] = useState(1);

  function handleSelectedMovieId(id:number) {
    setMovieSelectedId(id);
  }

  function handleOpenMovieModal() {
    setIsMovieModalOpen(true);
  }

  function handleCloseMovieModal() {
    setIsMovieModalOpen(false);
  }

  const { data: movies, refetch, isFetching: isFetchingMovies } = useQuery<ISimpleMoviesByUsers[]>(
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

  function reloadMovieData(){
    refetch()
 }
  const mutation = useMutation({
    mutationFn: ({ isMovieInRental, movieSelectedId }: ToggleMovieInRental) => {
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token") as string),
        },
      };
      if (isMovieInRental) {
        return api.delete(`/users/movies/${movieSelectedId}`, config);
      } else {
        return api.post(`/users/movies/${movieSelectedId}`, {}, config);
      }
    },
    onSuccess: () => {
      refetch();
    },
  });

  function toggleMovieInRental ({ isMovieInRental, movieSelectedId }: ToggleMovieInRental){
    mutation.mutate({ isMovieInRental, movieSelectedId })
    handleCloseMovieModal()
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
        reloadMovieData,
        isMovieModalOpen,
        handleCloseMovieModal,
        handleOpenMovieModal,
        movieSelectedId,
        handleSelectedMovieId,
        isFetchingMovies,
        toggleMovieInRental,
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
