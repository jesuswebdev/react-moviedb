import React from "react";
import TvCardItem from "../tv-card-item/TvCardItem";

const TvItems = props => {
  if (props.hasError) {
    return (
      <p>
        There was an error trying to load the tv series...{" "}
        <strong onClick={props.reloadTv}>Click here to try again.</strong>
      </p>
    );
  }

  let items = props.series.map(serie => {
    return (
      <div
        className="column is-10-mobile is-5-tablet is-4-desktop"
        key={serie.id}>
        <TvCardItem serie={serie} />
      </div>
    );
  });

  return (
    <div className="columns is-mobile is-multiline is-centered">{items}</div>
  );
};

export default TvItems;
