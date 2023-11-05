"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import SmallMovieDisplay from "../../components/smallMovieDisplay";
import { Movie } from "@/app/lib/types";
import { getSearchAction } from "@/app/lib/serverActions";

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
    <div>
      <SmallMovieDisplay movies={data} />
    </div>
  );
}
