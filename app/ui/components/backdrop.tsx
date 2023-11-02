import { Movie } from "@/app/lib/types";
import React from "react";
import Image from "next/image";

interface Props {
  movie: Movie;
}

export default function Backdrop(props: Props) {
  const image = "https://image.tmdb.org/t/p/w500/" + props.movie.backdrop_path;

  return <Image src={image} alt={""} width={680} height={382.182}></Image>;
}
