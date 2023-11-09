import { Movie } from "@/app/lib/types";
import React from "react";
import Poster from "./poster";

interface Props {
  movies: Movie[] | undefined;
}
export default function SmallMovieDisplay(props: Props) {
  return (
    <div className="flex flex-wrap md:flex-nowrap md:flex-row gap-8 w-full justify-center md:justify-start overflow-hidden mt-8 md:overflow-x-auto">
      {props.movies?.map((movie) => (
        <div className="shrink-0">
          <Poster movie={movie} />
        </div>
      ))}
    </div>
  );
}
