import Header from "../components/Header";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { useMovies } from "../context/movieContext";
import { useEffect, useState } from "react";
import { MovieModal } from "../components/MovieModal";
import { SelectCategory } from "../components/SelectCategory";
import { DirectorsContainer } from "../components/DirectorsContainer";

export function Movies() {
  const { movies, reloadMovieData, isFetchingMovies } = useMovies();
  const [selectedCategory, setSelectedCategory] = useState("Selecione");
  
  useEffect(() => {
    reloadMovieData();
  }, []);

  function handleSelectedCategory (category:string) {
    setSelectedCategory(category)
  }


  if (isFetchingMovies) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-cyan-900">
        <h1 className="text-3xl text-white">Carregando....</h1>
      </div>
    );
  }

  return (
    <div className="w-screen mx-auto bg-sky-900">
      <MovieModal />
      <Header />
      <div className="min-h-screen">
        <h1 className="text-4xl text-center pt-8 pb-3 font-bold	 text-white">Catálogo</h1>
        <DirectorsContainer />
        <SelectCategory
          handleSelectedCategory={ handleSelectedCategory }
          selectedCategory={ selectedCategory }
        />
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
