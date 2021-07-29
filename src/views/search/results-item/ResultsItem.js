import React from "react";
import { Link } from "react-router-dom";

const ResultsItem = ({ item, selectedOption }) => {
  let releaseDate = null;
  let releaseYear = null;
  let title = null;
  let overview = null;
  let detailsLink = null;
  let imgUrl = null;
  const movieUrl = "https://image.tmdb.org/t/p/w92";
  const personUrl = "https://image.tmdb.org/t/p/w45";
  const dummyImg = "https://placeimg.com/64/96/animals";

  if (selectedOption === "movie") {
    const poster = item.poster_path;
    releaseDate = new Date(item.release_date);
    releaseYear = releaseDate.getFullYear();
    imgUrl = poster ? movieUrl + poster : dummyImg;
    title = (
      <strong>
        {item.title} {item.release_date !== "" ? `(${releaseYear})` : null}
      </strong>
    );
    overview = item.overview;
    detailsLink = "/" + selectedOption + "/" + item.id;
  }

  if (selectedOption === "tv") {
    const poster = item.poster_path;
    imgUrl = poster ? movieUrl + poster : dummyImg;
    title = <strong>{item.name}</strong>;
    overview = item.overview;
    detailsLink = "/" + selectedOption + "/" + item.id;
  }

  if (selectedOption === "person") {
    const poster = item.profile_path;
    imgUrl = poster ? personUrl + poster : dummyImg;
    title = <strong>{item.name}</strong>;
    detailsLink = `/people/${item.id}`;
  }

  return (
    <div className="media" style={{ minHeight: "100px" }}>
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={imgUrl} alt={title} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            {title}
            <br />
            {overview}
          </p>
        </div>
        <Link to={detailsLink} className="button is-info">
          Details
        </Link>
      </div>
    </div>
  );
};

export default ResultsItem;
