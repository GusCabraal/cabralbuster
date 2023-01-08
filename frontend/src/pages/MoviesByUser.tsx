import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect } from "react";
import { MovieModal } from "../components/MovieModal";

export function MoviesByUser() {
  const { movies, reloadMovieData } = useMovies();

  useEffect(() => {
    reloadMovieData();
  }, []);

  return (
    <div className="w-screen mx-auto bg-cyan-900">
      <MovieModal />
      <Header />
      <div className="min-h-screen">
        <h1 className="text-4xl text-center pt-8 pb-3 font-bold text-white">
          Meus filmes
        </h1>
        <div className="grid gap-10 grid-cols-4 p-10 mx-20">
          {movies
            ?.filter(({ isMovieInRental }) => isMovieInRental) // mostra apenas os filmes que estão alugados no momento
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
