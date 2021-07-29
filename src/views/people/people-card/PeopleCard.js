import React from "react";
import { Link } from "react-router-dom";
import PosterImage from "../../../components/PosterImage";

const PeopleCard = props => {
  const url = "https://image.tmdb.org/t/p/h632";
  const dummyImg = "https://placeimg.com/45/68/animals";
  const linkDetails = "/people/" + props.people.id;
  const knownFor = props.people.known_for.map((item, index) => {
    return (
      <Link to={"" + item.media_type + "/" + item.id} key={item.id}>
        {index > 0 && ", "}
        {item.name || item.title}
      </Link>
    );
  });

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Link to={linkDetails}>
            <PosterImage
              src={
                props.people.profile_path
                  ? url + props.people.profile_path
                  : dummyImg
              }
              alt={props.people.name}
            />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <Link to={linkDetails}>
            <p className="title is-3">{props.people.name}</p>
          </Link>
        </div>
        <div className="content">
          Known for: <i>{knownFor}</i>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
