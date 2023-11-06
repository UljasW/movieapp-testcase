import { Movie } from "@/app/lib/types";
import React from "react";
import Image from "next/image";
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

      <div className="rounded-md w-full h-full absolute bottom-0 border-2 border-white bg-opacity-80 bg-black opacity-0 hover:flex hover:flex-col hover:justify-center hover:items-center hover:text-center hover:opacity-100">
        <h4 className="text-white text-4xl font-bold">{props.movie.title}</h4>
        <span className="text-white text-base font-normal">
          {props.movie.release_date.split("-")[0]}
        </span>
      </div>
    </div>
  );
}
