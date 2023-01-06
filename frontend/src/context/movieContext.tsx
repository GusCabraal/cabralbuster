import { AxiosRequestConfig } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Movie } from "../@types/movie";
import { api } from "../axios/config";

interface MoviesProviderProps {
  children: ReactNode;
}

interface ToggleMovieInRental {
  isMovieInRental: boolean | undefined;
  movieSelectedId: number;
}
interface ToggleMovieInRentalFunction {
  isMovieInRental: boolean | undefined;
  movieSelectedId: number;
  pathname: string;
}

interface MoviesContextData {
  movies: Movie[] | undefined;
  isMovieModalOpen: boolean;
  handleCloseMovieModal: () => void;
  handleOpenMovieModal: () => void;
  movieSelectedId: number;
  handleSelectedMovieId: (id: number) => void;
  isFetchingMovies: boolean;
  toggleMovieInRental: (data: ToggleMovieInRentalFunction) => void;
  reloadMovieData: () => void;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [movieSelectedId, setMovieSelectedId] = useState(1);
  const queryClient = useQueryClient();

  function handleSelectedMovieId(id: number) {
    setMovieSelectedId(id);
  }

  function handleOpenMovieModal() {
    setIsMovieModalOpen(true);
  }

  function handleCloseMovieModal() {
    setIsMovieModalOpen(false);
  }

  const {
    data: movies,
    refetch,
    isFetching: isFetchingMovies,
  } = useQuery<Movie[]>(
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

  function reloadMovieData() {
    refetch();
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
    onSuccess: ({ data: movieId }) => {
      queryClient.setQueryData<Movie[] | undefined>("movies", (data) => {
        return data?.map((movie: Movie) =>
          movie.id === movieId
            ? { ...movie, isMovieInRental: !movie.isMovieInRental }
            : movie
        );
      });

      // refetch();
    },
  });

  function toggleMovieInRental({isMovieInRental, movieSelectedId, pathname}: ToggleMovieInRentalFunction
  ) {
    mutation.mutate({ isMovieInRental, movieSelectedId });
    if (pathname === "/users/movies") {
      handleCloseMovieModal();
    }
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
