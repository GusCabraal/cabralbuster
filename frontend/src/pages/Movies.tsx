import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";

function Movies() {
  const {movies } = useMovies();

  return (
    <div className="w-screen mx-auto bg-cyan-900">
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

export default Movies;
