"use server";

import { searchMovies, discoverMovies, genres } from "./data";

export async function getSearchAction(search: string) {
  const res = await searchMovies(search);
  return res;
}

export async function getDiscoverAction(filter: number) {
  const res = await discoverMovies(filter);
  return res;
}

export async function getGenres(){
  const res = await genres();
  return res;
}