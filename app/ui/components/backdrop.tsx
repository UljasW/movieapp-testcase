import { Movie } from "@/app/lib/types";
import React from "react";
import Image from "next/image";

interface Props {
  movie: Movie;
}

export default function Backdrop(props: Props) {
  const image = "https://image.tmdb.org/t/p/w500/" + props.movie.backdrop_path;

  return (
    <div className="w-full h-auto relative rounded-xl overflow-hidden">
      <Image
        className=" w-full h-auto"
        src={image}
        alt={""}
        width={0}
        height={0}
        sizes="100vw"
      ></Image>

      <div className="gradientRect">
        <h3 className="text-white text-lg font-bold">
          {props.movie.original_title}
        </h3>
        <span
          className="text-white text-base font-medium
"
        >
          {props.movie.release_date.split("-")[0]}
        </span>
      </div>
    </div>
  );
}
