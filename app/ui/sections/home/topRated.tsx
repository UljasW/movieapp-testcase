import { getTopRated } from "@/app/lib/data";
import React from "react";
import SmallMovieDisplay from "../../components/smallMovieDisplay";

export default async function TopRated() {
  const data = await getTopRated();
  return (
    <div className="mt-20">
      <h1 className="text-white font-inter  text-4xl font-bold ">Top rated</h1>
      <SmallMovieDisplay movies={data} />
    </div>
  );
}
