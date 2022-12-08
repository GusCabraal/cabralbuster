import httpRequest from "../axios/config";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { IMoviesDetails } from "../@types/movie";
import Footer from "../components/Footer";



function MovieDetails() {
  const { idMovie } = useParams();
  const { data, isFetching } = useQuery<IMoviesDetails | null>(
    `movies-${idMovie}`,
    async () => {
      return httpRequest
        .get(`/movies/${idMovie}`)
        .then((response) => response.data);
    }
  );

  return isFetching ? (
    <p>Carregando...</p>
  ) : (
    <div>
      <Header />
      <main className="flex items-center px-10 py-20 gap-5">
        <section
          className="flex flex-col justify-between gap-10"
          >
          <h1 
            className="text-4xl text-center"
            >{data?.name}</h1>
          <p>{data?.description}</p>
          <p>Ano de lançamento: {data?.releaseYear}</p>
          <p>Diretor: {data?.director.name}</p>
          <p>Gênero: {data?.category.name}</p>
        </section>
        <img
          src={data?.image}
          alt={`poster movie-${data?.name}`}
          className="max-w-md object-cover"/>
      </main>
      <Footer/>
    </div>
  );
}

export default MovieDetails;
