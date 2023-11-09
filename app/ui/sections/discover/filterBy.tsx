"use client";
import React, { useEffect, useState } from "react";
import FilterButton from "../../components/filterButton";
import BiglMovieDisplay from "../../components/bigMovieDisplay";
import { getDiscoverAction, getGenres } from "@/app/lib/serverActions";
import { Genre, Movie } from "@/app/lib/types";

export default function FilterBy() {
  const [activeGenre, setActiveGenre] = useState<number>();
  const [movies, setMovies] = useState<Movie[]>();
  const [genres, setGenres] = useState<Genre[]>();

  useEffect(() => {
    fetchMovies();
  }, [activeGenre]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchMovies = async () => {
    const data = await getDiscoverAction(activeGenre || 0);
    setMovies(data);
  };

  const fetchGenres = async () => {
    const data = await getGenres();
    setGenres(data);
  };

  return (
    <section className="mt-20">
      <h1 className="text-white font-inter text-4xl font-bold">Discover</h1>
      <div className="flex flex-row mt-8 gap-2.5 flex-wrap md:flex-nowrap md:overflow-x-auto">
        {genres?.map((genre) => (
          <FilterButton
            key={genre.id}
            genre={genre.name}
            isActive={activeGenre === genre.id}
            setIsActive={() => setActiveGenre(genre.id)}
          />
        ))}
      </div>
      <BiglMovieDisplay movies={movies} />
    </section>
  );
}
