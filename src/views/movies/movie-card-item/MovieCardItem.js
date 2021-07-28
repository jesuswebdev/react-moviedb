import React from "react";
import { Link } from "react-router-dom";
import { getMovieGenres } from "../../../utils";
import { IMG_URL } from "../../../config";

const MovieCardItem = ({ movie }) => {
  let img = `${IMG_URL}${movie.poster_path}`;
  let originalTitle =
    movie.title !== movie.original_title ? ` (${movie.original_title})` : null;
  let detailsLink = `/movie/${movie.id}`;
  let genres = getMovieGenres(movie.genre_ids);

  let overview = <p className="has-text-justified">{movie.overview}</p>;

  if (movie.overview.length > 160) {
    overview = (
      <p className="has-text-justified">
        {movie.overview.slice(0, 150)}...
        <Link to={`/movie/${movie.id}`}>More</Link>
      </p>
    );
  }

  return (
    <div className="column is-4-desktop is-5-tablet is-10-mobile">
      <div className="card">
        <div className="card-image">
          <Link to={detailsLink}>
            <figure className="image">
              <img src={img} alt={movie.title} />
            </figure>
          </Link>
        </div>

        <div className="card-content">
          <Link to={detailsLink}>
            <p className="title is-4">
              {movie.title}
              {originalTitle}
            </p>
          </Link>
          <p className="subtitle is-6">{genres}</p>
          <p className="subtitle is-6">
            Score:{" "}
            {movie.vote_count > 0
              ? `${movie.vote_average}/10 (${movie.vote_count} votes)`
              : "No votes yet"}
          </p>
          {overview}
        </div>

        <div className="card-footer">
          <Link to={detailsLink} className="card-footer-item">
            {" "}
            Details{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCardItem;
