import { AxiosRequestConfig } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Category } from "../@types/category";
import { Director } from "../@types/director";
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
  categories: Category[] | undefined;
  directors: Director[] | undefined;
  isMovieModalOpen: boolean;
  handleCloseMovieModal: () => void;
  handleOpenMovieModal: () => void;
  movieSelectedId: number;
  handleSelectedMovieId: (id: number) => void;
  isFetchingMovies: boolean;
  toggleMovieInRental: (data: ToggleMovieInRentalFunction) => void;
  reloadMovieData: () => void;
  showNextMovie: () => void
  showPreviousMovie: () => void
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

  const {
    data: categories,
  } = useQuery<Category[]>(
    "categories",
    async () => {
      return api
        .get("/categories")
        .then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto,
    }
  );

  const {
    data: directors,
  } = useQuery<Director[]>(
    "directors",
    async () => {
      return api
        .get("/directors")
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
    },
  });

  function toggleMovieInRental({isMovieInRental, movieSelectedId, pathname}: ToggleMovieInRentalFunction
  ) {
    mutation.mutate({ isMovieInRental, movieSelectedId });
    if (pathname === "/users/movies") {
      handleCloseMovieModal();
    }
  }

  function showNextMovie() {
    if (movieSelectedId === movies?.length){
      setMovieSelectedId(1)

    } else {
      setMovieSelectedId(movieSelectedId + 1)
    }
  }

  function showPreviousMovie() {
    if (movieSelectedId === 1){
      setMovieSelectedId((movies?.length) as number)
    } else {
      setMovieSelectedId(movieSelectedId - 1)
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
        showNextMovie,
        showPreviousMovie,
        categories,
        directors,

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
