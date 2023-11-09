import { Movie } from "@/app/lib/types";
import React from "react";
import Poster from "./poster";

interface Props {
  movies: Movie[] | undefined;
}
export default function BiglMovieDisplay(props: Props) {
  return (
    <div className="flex flex-wrap flex justify-center md:justify-start start gap-8 mt-8">
      {props.movies?.map((movie) => (
        <div className="shrink-0">
          <Poster movie={movie} />
        </div>
      ))}
    </div>
  );
}
