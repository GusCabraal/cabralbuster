import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect } from "react";
import { MovieModal } from "../components/MovieModal";
import { useLocation } from "react-router-dom";


export function MoviesByUser() {
  const { movies, reloadMovieData } = useMovies();
  const location = useLocation()
  console.log(location.pathname);
  

  useEffect(() => {
    reloadMovieData();
  }, []);

  return (
    <div className="w-screen mx-auto bg-cyan-900">
      <MovieModal />
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

