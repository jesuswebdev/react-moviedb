import React from "react";
import MovieCardItem from "../movie-card-item/MovieCardItem";

const MovieItems = ({ movies }) => {
  let peliculas = null;

  if (movies.length > 0) {
    peliculas = movies.map(movie => (
      <MovieCardItem key={movie.id} movie={movie} />
    ));
  }

  return (
    <div className="columns is-mobile is-multiline is-centered">
      {peliculas}
    </div>
  );
};

export default MovieItems;
