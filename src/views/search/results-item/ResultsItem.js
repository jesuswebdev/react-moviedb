import React, { Component } from "react";
import { Link } from "react-router-dom";

class ResultsItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.item.id !== this.props.item.id;
  }

  render() {
    let releaseDate = null;
    let releaseYear = null;
    let title = null;
    let overview = null;
    let detailsLink = null;
    let imgUrl = null;
    const movieUrl = "https://image.tmdb.org/t/p/w92";
    const personUrl = "https://image.tmdb.org/t/p/w45";
    const dummyImg = "https://placeimg.com/64/96/animals";

    if (this.props.selectedOption === "movie") {
      const poster = this.props.item.poster_path;
      releaseDate = new Date(this.props.item.release_date);
      releaseYear = releaseDate.getFullYear();
      imgUrl = poster ? movieUrl + poster : dummyImg;
      title = (
        <strong>
          {this.props.item.title}{" "}
          {this.props.item.release_date !== "" ? `(${releaseYear})` : null}
        </strong>
      );
      overview = this.props.item.overview;
      detailsLink = "/" + this.props.selectedOption + "/" + this.props.item.id;
    }

    if (this.props.selectedOption === "tv") {
      const poster = this.props.item.poster_path;
      imgUrl = poster ? movieUrl + poster : dummyImg;
      title = <strong>{this.props.item.name}</strong>;
      overview = this.props.item.overview;
      detailsLink = "/" + this.props.selectedOption + "/" + this.props.item.id;
    }

    if (this.props.selectedOption === "person") {
      const poster = this.props.item.profile_path;
      imgUrl = poster ? personUrl + poster : dummyImg;
      title = <strong>{this.props.item.name}</strong>;
      detailsLink = `/people/${this.props.item.id}`;
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
  }
}

export default ResultsItem;
