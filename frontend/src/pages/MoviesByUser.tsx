import httpRequest from "../axios/config";
import {  useQuery } from "react-query";
import Header from "../components/Header";
import { ISimpleMoviesByUsers } from "../@types/movie";
import Footer from "../components/Footer";
import { MovieCard } from "../components/MovieCard";


function MoviesByUser() {
  const { data, refetch } = useQuery<ISimpleMoviesByUsers[]>("moviesByUsers", async () => {
    const { id } = JSON.parse(localStorage.getItem("user") as string);
    return httpRequest
      .get(`/movies/users/${id}`)
      .then((response) => response.data);
  });

  return (
    <div className="w-screen mx-auto bg-cyan-900">
      <Header />
      <div className="grid gap-10 grid-cols-4 p-10 mx-20">
        {data?.filter(({isMovieInRental}) => isMovieInRental) // mostra apenas os filmes que estão alugados no momento
        .map((movie) => (
          <MovieCard key={movie.id} {...movie} onRefetch={refetch} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MoviesByUser;
