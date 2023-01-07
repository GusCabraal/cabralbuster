import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect, useState } from "react";
import { MovieModal } from "../components/MovieModal";

export function Movies() {
  const { movies, reloadMovieData, isFetchingMovies, categories } = useMovies();
  const [selectedCategory, setSelectedCategory] = useState("Selecione");
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
      <div>
        <h1 className="text-5xl text-center py-8 bold text-white">Catalogo</h1>
        <label className="px-10 mx-20">
          Categoria:
          <select
            value={selectedCategory}
            onChange={({ target: { value } }) => setSelectedCategory(value)}
          >
            <option value="Selecione">Selecione</option>
            {categories?.map(({ name, id }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-10 grid-cols-4 p-10 mx-20">
          {movies
            ?.filter(
              (movie) =>
                selectedCategory === movie["category.name"] ||
                selectedCategory === "Selecione"
            )
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
