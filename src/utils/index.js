import { genres, tvGenres } from "../config";

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
