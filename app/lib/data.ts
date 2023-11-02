import { Movie } from "./types";

const headers = {
  accept: "application/json",
  Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
};

const getOptions = {
  method: "GET",
  headers,
};

export const getTrending = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    getOptions
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => console.error(err));

  console.log(response);

  return response;
};

export const topRated = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    getOptions
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  console.log(response);

  return response;
};
