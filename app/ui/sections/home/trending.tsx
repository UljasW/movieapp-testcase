import { getTrending } from "@/app/lib/data";
import React from "react";
import Image from "next/image";
export default async function Trending() {
  const data = await getTrending();

  return (
    <div>
      {data.map((movie) => {
        const image = "https://image.tmdb.org/t/p/w500/"+movie.backdrop_path;
        return <Image src={image} alt={""} width={680} height={382.182}></Image>;
      })}
    </div>
  );
}
