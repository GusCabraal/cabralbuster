import httpRequest from "../axios/config";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ISimpleMovies } from "../@types/movie";
import Footer from "../components/Footer";
const classGiveBack =
  "mt-5 bg-red-700 w-full p-2 rounded text-white font-bold hover:bg-red-900";
const classRent =
  "mt-5 bg-green-700 w-full p-2 rounded text-white font-bold hover:bg-gren-900";

function Movies() {
  const { data } = useQuery<ISimpleMovies[]>(
    "movies",
    async () => {
      return httpRequest.get("/movies").then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const { data: movieUser, refetch } = useQuery<ISimpleMovies[]>(
    "moviesByUsers",
    async () => {
      const { id } = JSON.parse(localStorage.getItem("user") as string);
      return httpRequest
        .get(`/users/${id}/movies`)
        .then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  function isMovieInRental(idMovie: number) {
    return movieUser?.some((movie) => movie.id === idMovie);
  }

  function toggleMovieInRental(idMovie: number) {
    if(isMovieInRental(idMovie)){
      httpRequest.delete(`/users/movies/${idMovie}`)
    } else {
      httpRequest.post(`/users/movies/${idMovie}`)
    }
    refetch()
  }


  return (
    <div className="w-screen mx-auto">
      <Header />
      <div className="grid gap-10 grid-cols-3 grid-rows-3">
        {data?.map(({ name, image, id }) => (
          <div
            className="p-5 rounded-xl shadow-xl"
            key={name}
          >
            <Link
              to={`/movies/${id}`}
              className="flex flex-col items-center gap-3">
              <img
                src={image}
                alt={`poster movie-${name}`}
                className="max-w-xs max-h-60 object-cover"
              />
              <p className="text-center h-10">{name}</p>
            </Link>
            <button
              className={isMovieInRental(id) ? classGiveBack : classRent}
              onClick={() => toggleMovieInRental(id) }
              >
              {isMovieInRental(id) ? (
                <p> Devolver filme</p>
              ) : (
                <p>Alugar filme</p>
              )}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
