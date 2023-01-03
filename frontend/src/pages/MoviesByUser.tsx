import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect } from "react";


function MoviesByUser() {
  const { movies, refetch } = useMovies();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="w-screen mx-auto bg-cyan-900">
      <Header />
      <div className="grid gap-10 grid-cols-4 p-10 mx-20">
        {movies?.filter(({isMovieInRental}) => isMovieInRental) // mostra apenas os filmes que estão alugados no momento
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MoviesByUser;
