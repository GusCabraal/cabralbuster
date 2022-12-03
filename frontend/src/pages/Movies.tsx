import httpRequest from "../axios/config";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Header from "../components/Header";

interface IMovies {
  id: number;
  name: string;
  description: string;
  releaseYear: number;
  image?: string;
  imdbRating: number;
  directorId: number;
  categoryId: number;
}

function Movies() {
  const { data } = useQuery<IMovies[]>("movies", async () => {
    return httpRequest.get("/movies").then((response) => response.data);
  });

  return (
    <div>
      <Header/>
      {data?.map(({ name, releaseYear, image, id }) => (
        <Link to={`/movies/${id}`} key={name}>
          <div >
            <h3>{name}</h3>
            <p>{releaseYear}</p>
            <img src={image} alt={`poster movie-${name}`} width='100px' />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Movies;
