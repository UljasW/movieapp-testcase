import { Movie } from "@/app/lib/types";
import React from "react";
import Poster from "./poster";

interface Props {
  movies: Movie[] | undefined;
}
export default function SmallMovieDisplay(props: Props) {
  return (
    <div className="flex flex-row gap-8 overflow-x-auto mt-8 ">
      {props.movies?.map((movie) => (
        <div className=" shrink-0">
          <Poster movie={movie} />
        </div>
      ))}
    </div>
  );
}
