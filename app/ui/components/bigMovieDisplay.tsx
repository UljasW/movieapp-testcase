import { Movie } from "@/app/lib/types";
import React from "react";
import Poster from "./poster";
import "../components.css"

interface Props {
  movies: Movie[] | undefined;
}
export default function BiglMovieDisplay(props: Props) {
  return (
    <div className="bigMovieDisplay mt-8">
      {props.movies?.map((movie) => (
        <div className="shrink-0">
          <Poster movie={movie} />
        </div>
      ))}
    </div>
  );
}
