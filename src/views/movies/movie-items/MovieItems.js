import React from "react";
import MovieCardItem from "../movie-card-item/MovieCardItem";

const MovieItems = ({ movies }) => {
  return (
    <div className="columns is-mobile is-multiline is-centered">
      {(movies || []).map(movie => (
        <MovieCardItem key={`movie-card-item-${movie.id}`} movie={movie} />
      ))}
    </div>
  );
};

export default MovieItems;
