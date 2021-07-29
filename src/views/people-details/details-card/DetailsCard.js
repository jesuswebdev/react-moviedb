import React from "react";
import { getFullDate } from "../../../utils";

const DetailsCard = ({ details }) => {
  const knownAs = details.also_known_as.map(name => name).join(", ");

  const homepageButton = details.homepage ? (
    <a className="card-footer-item" href={details.homepage} target="_blank">
      Visit Homepage
    </a>
  ) : null;

  let deathDay = null;

  if (details.deathday) {
    deathDay = <p>Death day: {getFullDate(details.deathday)}</p>;
  }

  const imdbUrl = "https://www.imdb.com/name/";

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p className="title is-3">{details.name}</p>
          {knownAs ? (
            <p className="subtitle is-6">Also known as: {knownAs}</p>
          ) : null}
        </div>
        <div className="content">
          {details.birthday ? (
            <p>Birthday: {getFullDate(details.birthday)}</p>
          ) : null}
          {details.place_of_birth ? (
            <p>Place of birth: {details.place_of_birth} </p>
          ) : null}
          {deathDay}
        </div>
      </div>
      <div className="card-footer">
        {homepageButton}
        {details.imdb_id ? (
          <a
            className="card-footer-item"
            href={imdbUrl + details.imdb_id}
            target="_blank">
            Visit on IMDb
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default DetailsCard;
