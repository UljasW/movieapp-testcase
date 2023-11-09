import { getNowPlaying, getTrending } from "@/app/lib/data";
import { Movie } from "@/app/lib/types";
import React from "react";
import Backdrop from "../../components/backdrop";
import Poster from "../../components/poster";
import SmallMovieDisplay from "../../components/smallMovieDisplay";

export default async function NowPlaying() {
  const data = await getNowPlaying();
  return (
    <section className="mt-20">
      <h1 className="text-white font-inter  text-4xl font-bold ">
        Now playing
      </h1>
      <SmallMovieDisplay movies={data}/>

    </section>
  );
}
