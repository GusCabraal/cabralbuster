import {api} from "../axios/config";
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
      return api
        .get(`/movies/${idMovie}`)
        .then((response) => response.data);
    }
  );

  return (
    <div>
      <Header />
      <main className="w-screen mx-auto flex items-center p-20 gap-12">
        <section className="flex flex-col justify-between gap-16">
          <h1 className="text-5xl text-center">{data?.name}</h1>
          <p>{data?.description}</p>
          <div>
            <p>Ano de lançamento: {data?.releaseYear}</p>
            <p>Diretor: {data?.director.name}</p>
            <p>Gênero: {data?.category.name}</p>
          </div>
        </section>
        <img
          src={data?.image}
          alt={`poster movie-${data?.name}`}
          className="w-80 object-cover"
        />
      </main>
      <Footer />
    </div>
  );
}

export default MovieDetails;
