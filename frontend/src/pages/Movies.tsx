import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect } from "react";
import { MovieModal } from "../components/MovieModal";

export function Movies() {
  const { movies, reloadMovieData, isFetchingMovies } = useMovies();
  useEffect(() => {
    reloadMovieData();
  }, []);

  if (isFetchingMovies) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-cyan-900">
        <h1 className="text-3xl text-white">Carregando....</h1>
      </div>
    );
  }

  return (
    <div className="w-screen mx-auto bg-cyan-900">
      <MovieModal />
      <Header />
      <div className="grid gap-10 grid-cols-4 p-10 mx-20">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
