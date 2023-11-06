import { Movie } from "@/app/lib/types";
import React from "react";
import Backdrop from "./backdrop";

interface Props {
  movies: Movie[];
}
export default function BackdropDisplay(props: Props) {
  return (
    <div className="flex md:flex-row gap-8 mt-8 flex-col">
      {props.movies.splice(0, 2).map((movie) => (
        <Backdrop movie={movie} />
      ))}
    </div>
  );
}
