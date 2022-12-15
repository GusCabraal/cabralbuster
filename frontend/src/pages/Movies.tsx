import httpRequest from "../axios/config";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ISimpleMovies, ISimpleMoviesByUsers } from "../@types/movie";
import Footer from "../components/Footer";
const classGiveBack =
  "mt-5 bg-red-700 w-full p-2 rounded text-white font-bold hover:bg-red-900";
const classRent =
  "mt-5 bg-green-700 w-full p-2 rounded text-white font-bold hover:bg-gren-900";

function Movies() {
    const { data, refetch } = useQuery<ISimpleMoviesByUsers[]>(
      "movies",
      async () => {
      const { id } = JSON.parse(localStorage.getItem("user") as string);
      return httpRequest.get(`/movies/users/${id}`).then((response) => response.data);
    },
    {
      // staleTime: 1000 * 60, // 1 minuto
    }
  );


  function toggleMovieInRental(isMovieInRental:boolean, idMovie:number) {
    if(isMovieInRental){
      httpRequest.delete(`/users/movies/${idMovie}`)
    } else {
      httpRequest.post(`/users/movies/${idMovie}`)
    }
    refetch()
  }


  return (
    <div className="w-screen mx-auto">
      <Header />
      <div className="grid gap-10 grid-cols-3 grid-rows-3 py-10 px-20">
        {data?.map(({ name, image, id, isMovieInRental }) => (
          <div
          key={name}
            className="p-5 rounded-xl shadow-2xl"
          >
            <Link
              to={`/movies/${id}`}
              className="flex flex-col justify-between items-center">
              <img
                src={image}
                alt={`poster movie-${name}`}
                className="max-w-xs max-h-60 object-cover"
              />
              <p className="text-center text-lg h-20 pt-8">{name}</p>
            </Link>
            <button
              className={isMovieInRental ? classGiveBack : classRent}
              onClick={() => toggleMovieInRental(isMovieInRental, id) }
              >
              {isMovieInRental ? (
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
