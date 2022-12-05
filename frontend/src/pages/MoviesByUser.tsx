import httpRequest from "../axios/config";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { IMoviesByUsers } from "../@types/movie";

function MoviesByUser() {
  const { data } = useQuery<IMoviesByUsers>("moviesByUsers", async () => {
    const { id } = JSON.parse(localStorage.getItem("user") as string);
    return httpRequest.get(`/users/${id}/movies`).then((response) => response.data);
  });

  return (
    <div className="w-screen mx-auto">
      <Header/>
      <div
        className="grid gap-10 grid-cols-3 grid-rows-3">
        {data?.movies.map(({ name,  image, id }) => (
          <Link to={`/movies/${id}`} key={name}>
            <div
              className="flex flex-col items-center p-5 rounded-xl shadow-xl max-w-xs">
              <img
                src={image}
                alt={`poster movie-${name}`}
                className="max-w-xs max-h-60 object-cover" />
              <p
                className="text-center"
                >{name}</p>
              <button
                className="mt-5 bg-red-700 w-full p-2 rounded text-white font-bold hover:bg-red-900 disabled:bg-gray-500 "
              >
                Devolver filme
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoviesByUser;
