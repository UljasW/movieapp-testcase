import { Movie } from "@/app/lib/types";
import React from "react";
import Image from "next/image";
import "../components.css"
interface Props {
  movie: Movie;
}

export default function Poster(props: Props) {
  const image = "https://image.tmdb.org/t/p/w500/" + props.movie.poster_path;

  return (
    <div className="w-64 h-auto relative	">
      <Image
        src={image}
        alt={""}
        width={0}
        height={0}
        className="h-full w-full rounded-md"
        sizes="100vw"

      ></Image>

      <div className="rounded-md posterCover">
        <h4 className="text-white text-4xl font-bold">{props.movie.title}</h4>
        <span className="text-white text-base font-normal">{props.movie.release_date.split("-")[0]}</span>
      </div>
    </div>
  );
}
