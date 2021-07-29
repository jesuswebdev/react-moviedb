import React from "react";
import { Link } from "react-router-dom";
import { img_url } from "../../../config/index";
import { getTvGenres } from "../../../utils";

const TvCardItem = ({ serie }) => {
  const genres = getTvGenres(serie.genre_ids);
  const detailsLink = `/show/${serie.id}`;

  let overview = serie.overview;

  if (serie.overview.length > 160) {
    overview = (
      <>
        {serie.overview.slice(0, 150)}...
        <Link to={detailsLink}>More</Link>
      </>
    );
  }

  return (
    <div className="card">
      <div className="card-image">
        <Link to={detailsLink}>
          <figure className="image">
            <img src={img_url + serie.poster_path} alt={serie.name} />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <Link to={detailsLink}>
          <p className="title is-4">{serie.name}</p>
        </Link>
        <p className="subtitle is-6">{genres}</p>
        <p className="subtitle is-6">
          Score:{" "}
          {serie.vote_count > 0
            ? `${serie.vote_average}/10 (${serie.vote_count} votes)`
            : "No votes yet"}
        </p>
        <p className="has-text-justified">{overview}</p>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default TvCardItem;
