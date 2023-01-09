import { useMovies } from "../context/movieContext";

interface MovieCardProps {
  id: number;
  image: string;
  name: string;
}

export function MovieCard({ id: idMovie, name, image }: MovieCardProps) {
  const { handleOpenMovieModal, handleSelectedMovieId } = useMovies();

  function handleSelectedMovie(id: number) {
    handleSelectedMovieId(id);
    handleOpenMovieModal();
  }
  return (
    <div key={name} className="p-7 rounded-xl shadow-2xl bg-slate-300">
      <button
        onClick={() => handleSelectedMovie(idMovie)}
        className="flex flex-col items-center w-full"
      >
        <img
          src={image}
          alt={`poster movie-${name}`}
          className="max-w-xs max-h-60 object-cover"
        />
        <div className="h-20 py-5 flex items-center mt-3">
          <p className="text-lg ">{name}</p>
        </div>
      </button>
    </div>
  );
}
