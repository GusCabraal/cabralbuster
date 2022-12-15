import httpRequest from "../axios/config";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ISimpleMoviesByUsers } from "../@types/movie";
import Footer from "../components/Footer";

const classGiveBack =
  "mt-5 bg-red-700 w-full p-2 rounded text-white font-bold hover:bg-red-900";

function MoviesByUser() {
  const { data, refetch } = useQuery<ISimpleMoviesByUsers[]>("moviesByUsers", async () => {
    const { id } = JSON.parse(localStorage.getItem("user") as string);
    return httpRequest
      .get(`/movies/users/${id}`)
      .then((response) => response.data);
  });

  const mutation = useMutation({
    mutationFn: (movieId: number) => {
      return httpRequest.delete(`/users/movies/${movieId}`)
    },
    onSuccess:() => {
      refetch();
    }
  });

  return (
    <div className="w-screen mx-auto">
      <Header />
      <div className="grid gap-10 grid-cols-3 grid-rows-3 py-10 px-20">
        {data?.filter(({isMovieInRental}) => isMovieInRental) // mostra apenas os filmes que estão alugados no momento
        .map(({ name, image, id }) => (
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
              className={classGiveBack}
              onClick={() => mutation.mutate(id)}
            >
              Devolver filme
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MoviesByUser;
