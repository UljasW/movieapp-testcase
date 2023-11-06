"use server";

import { searchMovies, discoverMovies } from "./data";

export async function getSearchAction(search: string) {
  const res = await searchMovies(search);
  return res;
}

export async function getDiscoverAction(filters: Record<string, string>) {
  const res = await discoverMovies(filters);
  return res;
}
