import { Movie } from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.themoviedb.org/3/";

export const getTrending = async (): Promise<Movie[]> => {
  const response = await fetch(
    baseUrl + "trending/movie/week?api_key=" + API_KEY
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.error(err));

  return response;
};

export const topRated = async (): Promise<Movie[]> => {
  const response = await fetch(baseUrl + "movie/now_playing?api_key=" + API_KEY)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
};

export const getTopRated = async (): Promise<Movie[]> => {
  const response = await fetch(baseUrl + "movie/top_rated?api_key=" + API_KEY)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.error(err));

  return response;
};

export const discoverMovies = async (
  filters: Record<string, string>
): Promise<Movie[]> => {
  const searchParams = new URLSearchParams(filters);
  const response = await fetch(
    baseUrl +
      "discover/movie?api_key=" +
      API_KEY +
      "&" +
      searchParams.toString()
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.error(err));

  return response;
};
