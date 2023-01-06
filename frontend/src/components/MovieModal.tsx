import Modal from "react-modal";
import { useMovies } from "../context/movieContext";
import { IMoviesDetails } from "../@types/movie";
import { useQuery } from "react-query";
import { api } from "../axios/config";
import closeImg from "../images/close.svg"

const classGiveBack =
  "my-3 bg-red-700 w-full py-4 rounded text-white text-lg font-bold hover:bg-red-900";
const classRent =
  "my-3 bg-green-700 w-full py-4 rounded text-white text-lg font-bold hover:bg-gren-900";

export function MovieModal() {
  const {
    toggleMovieInRental,
    isMovieModalOpen,
    handleCloseMovieModal,
    movieSelectedId,
    movies,
  } = useMovies();

  const { data, isFetching } = useQuery<IMoviesDetails | null>(
    `movies-${movieSelectedId}`,
    async () => {
      return api
        .get(`/movies/${movieSelectedId}`)
        .then((response) => response.data);
    }
  );

  const isMovieInRental = movies?.find(
    (movie) => movie.id === movieSelectedId
  )?.isMovieInRental;

  return (
    <Modal
      isOpen={isMovieModalOpen}
      onRequestClose={handleCloseMovieModal}
      overlayClassName="bg-slate-900/50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      className="w-full max-w-3xl min-h-min bg-white p-10 relative rounded-md flex items-center"
    >
      {isFetching ? (
        <div className="w-full h-96 flex items-center justify-center bg-white">
          <h1 className="text-xl text-cyan-900">Carregando....</h1>
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={handleCloseMovieModal}
            className="absolute top-8 right-8 "
          >
            <img src={closeImg} alt="Fechar modal" />
          </button>
          <section className="flex flex-col	items-center">
            <h1 className="text-3xl text-center">{data?.name}</h1>
            <div className="flex items-center">
              <div>
                <p className="text-justify">{data?.description}</p>
                <div className="mt-5">
                  <p>Ano de lançamento: {data?.releaseYear}</p>
                  <p>Diretor: {data?.director.name}</p>
                  <p>Gênero: {data?.category.name}</p>
                </div>
              </div>
              <img
                src={data?.image}
                alt={`poster movie-${data?.name}`}
                className="max-h-72 object-cover m-5"
              />
            </div>
            <button
              className={isMovieInRental ? classGiveBack : classRent}
              onClick={() => toggleMovieInRental({ isMovieInRental, movieSelectedId })}
            >
              {isMovieInRental ? <p> Devolver filme</p> : <p>Alugar filme</p>}
            </button>
          </section>
        </div>
      )}
    </Modal>
  );
}
