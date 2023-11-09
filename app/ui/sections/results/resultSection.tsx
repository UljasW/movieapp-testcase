"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Movie } from "@/app/lib/types";
import { getSearchAction } from "@/app/lib/serverActions";
import BiglMovieDisplay from "../../components/bigMovieDisplay";

export default function ResultSection() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [data, setData] = React.useState<Movie[]>();

  useEffect(() => {
    fetchData();
  }, [search]);

  const fetchData = async () => {
    const data = await getSearchAction(search);
    setData(data);
  };

  return (
    <section className="mt-20">
      <h1 className="text-white font-inter  text-4xl font-bold ">Search</h1>
      <BiglMovieDisplay movies={data} />
    </section>
  );
}
