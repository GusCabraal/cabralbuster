import { useState } from "react";
import { useMovies } from "../context/movieContext";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export function DirectorsContainer() {
  const [firstDirectorToShow, setFirstDirectorToShow] = useState(1);
  const { directors } = useMovies();

  function showNextMovie() {
    const firstDirectorOfLastContainer = (Math.floor((directors?.length as number) / 5) * 5 ) + 1;
    
    if (firstDirectorToShow === firstDirectorOfLastContainer) {
      setFirstDirectorToShow(1);
    } else {
      setFirstDirectorToShow(firstDirectorToShow + 5);
    }
  }

  function showPreviousMovie() {
    const firstDirectorOfLastContainer = (Math.floor((directors?.length as number) / 5) * 5 ) + 1;
    if (firstDirectorToShow === 1) {
      setFirstDirectorToShow(firstDirectorOfLastContainer);
    } else {
      setFirstDirectorToShow(firstDirectorToShow - 5);
    }
  }

  return (
    <div className="px-10 mx-20 my-5">
        <h3 className="text-xl text-white">Diretores em destaque:</h3>
      <div className="w-full flex items-center justify-between">
        <div>
          <BsChevronCompactLeft
            className="cursor-pointer"
            onClick={() => showPreviousMovie()}
            size={30}
          />
        </div>
        <div className="flex">
          {directors
            ?.filter(
              (director) =>
                director.id >= firstDirectorToShow &&
                director.id < firstDirectorToShow + 5 // mostrar apenas 5 diretores por vez
            )
            .map((director) => (
              <Link
                to={`/movies/director/${director.id}`}
                className="min-h-fit mx-5 flex flex-col items-center"
                key={director.id}
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="max-h-40 object-cover rounded-full p-4 grayscale"
                />
                <p className="text-white">{director.name}</p>
              </Link>
            ))}
        </div>
        <div>
          <BsChevronCompactRight
            className="cursor-pointer"
            onClick={() => showNextMovie()}
            size={30}
          />
        </div>
      </div>
    </div>
  );
}
