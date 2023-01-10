import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import { useMovies } from "../context/movieContext";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const classGiveBack =
  "mt-5 bg-red-700 w-full py-4 rounded text-white text-lg font-bold hover:bg-red-900";
const classRent =
  "mt-5 bg-green-700 w-full py-4 rounded text-white text-lg font-bold hover:bg-gren-900";

export function MovieModal() {
  const {
    toggleMovieInRental,
    isMovieModalOpen,
    handleCloseMovieModal,
    movieSelectedId,
    movies,
    showPreviousMovie,
    showNextMovie,
  } = useMovies();

  const data = movies?.find((movie) => movie.id === movieSelectedId);

  const { pathname } = useLocation();

  const isMovieInRental = data?.isMovieInRental;

  return (
    <Modal
      isOpen={isMovieModalOpen}
      onRequestClose={handleCloseMovieModal}
      overlayClassName="bg-slate-900/50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      className="w-full max-w-3xl min-h-min bg-white relative rounded-md flex items-center"
    >
      <div className="flex items-center px-5">
        {pathname === "/movies" && (
          <div>
            <BsChevronCompactLeft
              className="cursor-pointer"
              onClick={() => showPreviousMovie()}
              size={30}
            />
          </div>
        )}
        <div>
          <button
            type="button"
            onClick={handleCloseMovieModal}
            className="absolute top-8 right-8 "
          >
            <GrClose className="cursor-pointer"/>
          </button>
          <section className="flex flex-col	items-center px-5 py-10">
            <div className="mb-5 text-center">
              <h1 className="text-3xl">{data?.name}</h1>
              {pathname === "/movies" && (<span className="text-slate-600 font-light	text-sm	">
                {movieSelectedId}/{movies?.length}
              </span>)}
            </div>
            <div className="flex items-center">
              <div>
                <p className="text-justify">{data?.description}</p>
                <div className="mt-5">
                  <p>Ano de lançamento: {data?.releaseYear}</p>
                  <p>Diretor: {data?.["director.name"]}</p>
                  <p>Gênero: {data?.["category.name"]}</p>
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
              onClick={() =>
                toggleMovieInRental({
                  isMovieInRental,
                  movieSelectedId,
                  pathname,
                })
              }
            >
              {isMovieInRental ? <p> Devolver filme</p> : <p>Alugar filme</p>}
            </button>
          </section>
        </div>
        {pathname === "/movies" && (
          <div>
            <BsChevronCompactRight
              className="cursor-pointer"
              onClick={() => showNextMovie()}
              size={30}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}
