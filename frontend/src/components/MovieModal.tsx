import Modal from "react-modal";
import { useMovies } from "../context/movieContext";
import { IMoviesDetails } from "../@types/movie";
import { useQuery } from "react-query";
import { api } from "../axios/config";

export function MovieModal() {
  const { mutation, isMovieModalOpen, handleOpenMovieModal, movieSelectedId } = useMovies();

  const { data, isFetching } = useQuery<IMoviesDetails | null>(
    `movies-${movieSelectedId}`,
    async () => {
      return api
        .get(`/movies/${movieSelectedId}`)
        .then((response) => response.data);
    }
  );


  return (
    <Modal
      isOpen={isMovieModalOpen}
      onRequestClose={handleOpenMovieModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
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
    </Modal>
  );
}
