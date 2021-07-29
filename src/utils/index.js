import axios from "axios";
import { api_key, api_url } from "../config/index";

const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" }
];

const tvGenres = [
  { id: 10759, name: "Action & Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 10762, name: "Kids" },
  { id: 9648, name: "Mystery" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 10768, name: "War & Politics" },
  { id: 37, name: "Western" }
];

export const getMovieGenres = genresArray => {
  return genresArray
    .map(genre_id => genres.find(genresItem => genresItem.id === genre_id).name)
    .join(", ");
};

export const getTvGenres = serieGenres => {
  return serieGenres
    .map(genre_id => {
      const genre = tvGenres.find(tvGenre => tvGenre.id === genre_id);
      return genre ? genre.name : null;
    })
    .filter(genre => genre !== null)
    .join(", ");
};

export const moneyPipe = value => {
  if (value / 1000000 > 1) {
    return Math.floor(value / 1000000)
      .toLocaleString("en")
      .concat(" M");
  }

  if (value / 100000 > 1) {
    return Math.floor(value / 1000)
      .toLocaleString("en")
      .concat(" K");
  }

  return value.toLocaleString("en");
};

export const getFullDate = releaseDate => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date = new Date(releaseDate);
  let fullDate = `${
    months[date.getUTCMonth()]
  } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

  return fullDate;
};

export const moviedb = axios.create({
  baseURL: api_url
});

moviedb.interceptors.request.use(
  config => {
    const [base, query] = String(config.url).split("?");
    const newQuery = `api_key=${api_key}`.concat(query ? `&${query}` : "");
    config.url = `${base}?${newQuery}`;

    return config;
  },
  error => Promise.reject(error)
);
