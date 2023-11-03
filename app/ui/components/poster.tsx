import { Movie } from "@/app/lib/types";
import React from "react";
import Image from "next/image";

interface Props {
  movie: Movie;
}

export default function Poster(props: Props) {
  const image = "https://image.tmdb.org/t/p/w500/" + props.movie.poster_path;

  return (
    <div className="w-64 h-auto">
      <Image
        src={image}
        alt={""}
        width={0}
        height={0}
        className="h-full w-full"
        sizes="100vw"

      ></Image>
    </div>
  );
}
