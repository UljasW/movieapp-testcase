"use server";

import { searchMovies } from "./data";

export async function getSearchAction(search: string) {
  const res = await searchMovies(search);
  return res;
}
