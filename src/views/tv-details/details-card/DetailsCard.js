import React from "react";
import { getFullDate } from "../../../utils";

const DetailsCard = ({ serie }) => {
  const homepageButton = serie.homepage ? (
    <div className="card-footer">
      <a href={serie.homepage} className="card-footer-item">
        Visit homepage
      </a>
    </div>
  ) : null;

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p className="title is-3">{serie.name}</p>
          <p className="subtitle is-6">
            {serie.genres.map(genre => genre.name).join(", ")}
          </p>
        </div>

        <div className="content">{serie.overview}</div>

        <div className="content">
          Score:{" "}
          {serie.vote_count > 0
            ? `${serie.vote_average}/10 (${serie.vote_count} votes)`
            : "No votes yet"}
          {serie.first_air_date ? (
            <p>First air date: {getFullDate(serie.first_air_date)}</p>
          ) : null}
        </div>
      </div>
      {homepageButton}
    </div>
  );
};

export default DetailsCard;
