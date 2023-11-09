import { getTrending } from "@/app/lib/data";
import { Movie } from "@/app/lib/types";
import React from "react";
import Backdrop from "../../components/backdrop";
import BackdropDisplay from "../../components/backdropDisplay";

export default async function Trending() {
  const data = await getTrending();

  return (
    <section className="mt-20">
      <h1 className="text-white font-inter text-4xl font-bold">Trending</h1>
      <BackdropDisplay movies={data}/>
    </section>
  );
}
