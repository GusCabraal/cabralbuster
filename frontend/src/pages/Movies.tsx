import httpRequest from "../axios/config";
import { useQuery } from "react-query";

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
  const { data, isFetching } = useQuery<IMovies[]>("movies", async () => {
    const response = await httpRequest.get("/movies");
    return response.data;
  });

  return (
    <div>
      {data?.map(({ name, releaseYear, image }) => (
        <div key={name}>
          <h1>{name}</h1>
          <p>{releaseYear}</p>
          <img src={image} alt={`poster movie-${name}`} />
        </div>
    ))}
    </div>
  );
};

export default Movies;
