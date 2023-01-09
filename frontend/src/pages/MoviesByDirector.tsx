import Header from "../components/Header";
import Footer from "../components/Footer";
import undoImg from "../images/undo.svg";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect } from "react";
import { MovieModal } from "../components/MovieModal";
import { Link, useParams } from "react-router-dom";
import { useDirectors } from "../context/directorContext";

export function MoviesByDirector() {
  const { movies, reloadMovieData } = useMovies();
  const { directors } = useDirectors();
  const { directorId } = useParams();

  useEffect(() => {
    reloadMovieData();
  }, []);

  const directorName = directors?.find(
    ({ id }) => id === Number(directorId)
  )?.name;

  return (
    <div className="w-screen mx-auto bg-sky-900 min-h-screen">
      <MovieModal />
      <Header />
      <div className="min-h-screen">
        <div className="pt-8 pb-3 flex items-center justify-center">
          <Link
            to="/movies"
            className="w-10 cursor-pointer hover:opacity-80 absolute left-10 ml-20"
          >
            <img src={undoImg} alt="logoutIcon" />
          </Link>
          <h1 className="text-4xl text-center  font-bold	 text-white">
            Filmes de {directorName}
          </h1>
        </div>
        <div className="grid gap-10 grid-cols-4 p-10 mx-20">
          {movies
            ?.filter((movie) => movie["director.id"] === Number(directorId))
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
