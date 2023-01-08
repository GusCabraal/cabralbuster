import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect } from "react";
import { MovieModal } from "../components/MovieModal";
import {  useParams } from "react-router-dom";


export function MoviesByDirector() {
  const { movies, reloadMovieData, directors } = useMovies();
  const { directorId } = useParams()

  useEffect(() => {
    reloadMovieData();
  }, []);

  const directorName = directors?.find(({ id }) => id === Number(directorId))?.name;
  console.log(directorName);
  

  return (
    <div className="w-screen mx-auto bg-cyan-900 min-h-screen">
      <MovieModal />
      <Header />
      <h1 className="text-4xl text-center pt-8 pb-3 font-bold	 text-white">Filmes de {directorName}</h1>
      <div className="grid gap-10 grid-cols-4 p-10 mx-20">
        {movies?.filter((movie) => movie["director.id"] === Number(directorId))
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

