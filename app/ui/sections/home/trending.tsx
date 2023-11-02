import { getTrending } from "@/app/lib/data";
import { Movie } from "@/app/lib/types";
import React from "react";
import Backdrop from "../../components/backdrop";

export default async function Trending() {
  const data = await getTrending();

  return (
    <div>
      {data.splice(0, 2).map((movie) => (
        <Backdrop movie={movie} />
      ))}
    </div>
  );
}
