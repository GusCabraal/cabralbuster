import { QueryObserverResult } from "react-query";
import { Link } from "react-router-dom";
import { ISimpleMoviesByUsers } from "../@types/movie";
import {api} from "../axios/config";
import { useMovies } from "../context/movieContext";
const classGiveBack =
  "mt-5 bg-red-700 w-full p-2 rounded text-white font-bold hover:bg-red-900";
const classRent =
  "mt-5 bg-green-700 w-full p-2 rounded text-white font-bold hover:bg-gren-900";

interface MovieCardProps {
  id: number;
  image: string;
  name: string;
  isMovieInRental: boolean;
}

export function MovieCard({
  id: idMovie,
  name,
  image,
  isMovieInRental,
}: MovieCardProps) {
  const { mutation } = useMovies();
  return (
    <div key={name} className="p-5 rounded-xl shadow-2xl bg-slate-300">
      <Link
        to={`/movies/${idMovie}`}
        className="flex flex-col justify-between items-center"
      >
        <img
          src={image}
          alt={`poster movie-${name}`}
          className="max-w-xs max-h-60 object-cover"
        />
        <p className="text-center text-lg h-20 pt-8">{name}</p>
      </Link>
      <button
        className={isMovieInRental ? classGiveBack : classRent}
        onClick={() => mutation.mutate({isMovieInRental, idMovie })}
      >
        {isMovieInRental ? <p> Devolver filme</p> : <p>Alugar filme</p>}
      </button>
    </div>
  );
}
