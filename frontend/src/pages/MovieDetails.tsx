import httpRequest from "../axios/config";
import { useQuery } from "react-query";
import {useParams } from "react-router-dom";
import Header from "../components/Header";

interface IMovies {
  id: number;
  name: string;
  description: string;
  releaseYear: number;
  image?: string;
  imdbRating: number;
  director:{
    name: string;
  }
  category:{
    name: string;
  }
}

function MovieDetails() {
  const { idMovie } = useParams();
  const { data , isFetching } = useQuery<IMovies | null>(`movies-${idMovie}`, async () => {
    return httpRequest.get(`/movies/${idMovie}`).then((response) => response.data);
  });
  

  return ( isFetching ? <p>Carregando...</p> : (
    <div >
      <Header />
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <p>{data?.releaseYear}</p>
      <p>{data?.director.name}</p>
      <p>{data?.category.name}</p>
      <img src={data?.image} alt={`poster movie-${data?.name}`} />
    </div>
  ));
}

export default MovieDetails;
