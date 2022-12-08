import httpRequest from "../axios/config";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { IMoviesByUsers, ISimpleMovies } from "../@types/movie";

function MoviesByUser() {
  const { data, refetch } = useQuery<ISimpleMovies[]>("moviesByUsers", async () => {
    const { id } = JSON.parse(localStorage.getItem("user") as string);
    return httpRequest
      .get(`/users/${id}/movies`)
      .then((response) => response.data);
  });
  // const mutation = useMutation<IMoviesByUsers>("deleteMoviesAndUsersById", async (movieId) => {
  //   return httpRequest.delete(`/users/movies/${movieId}`);
  // });

  const mutation = useMutation({
    mutationFn: (movieId) => {
      return httpRequest.delete(`/users/movies/${movieId}`)
      .then((response) => response.data);
    },
    onSuccess:() => {
      refetch();
    }
  });

  return (
    <div className="w-screen mx-auto">
      <Header />
      <div className="grid gap-10 grid-cols-3 grid-rows-3">
        {data?.map(({ name, image, id }) => (
          <div
            key={name}
            className="flex flex-col items-center p-5 rounded-xl shadow-xl max-w-xs"
          >
            <Link to={`/movies/${id}`}>
              <img
                src={image}
                alt={`poster movie-${name}`}
                className="max-w-xs max-h-60 object-cover"
              />
              <p className="text-center">{name}</p>
            </Link>
            <button
              className="mt-5 bg-red-700 w-full p-2 rounded text-white font-bold hover:bg-red-900 disabled:bg-gray-500 "
              onClick={() => mutation.mutate(id)}
            >
              Devolver filme
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesByUser;
