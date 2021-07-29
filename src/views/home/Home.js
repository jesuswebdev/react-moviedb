import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="columns is-mobile is-centered is-multiline"
        style={{ paddingTop: "120px" }}>
        <div className="column is-10-mobile is-10-tablet is-10-desktop">
          <p className="title is-1 has-text-centered has-text-white">
            Movie Finder
          </p>
          <p className="subtitle is-4 has-text-centered has-text-white">
            and a little more...
          </p>
        </div>
      </div>
      <div
        className="columns is-mobile is-centered is-multiline"
        style={{ paddingTop: "50px" }}>
        <div className="column is-10-mobile is-5-tablet is-2-desktop">
          <p className="subtitle is-5 has-text-centered has-text-white">
            Browse through trending and top rated movies
          </p>
          <p className="has-text-centered">
            <Link to="/movies/trending" className="button is-white">
              Go to Movies
            </Link>
          </p>
        </div>

        <div className="column is-10-mobile is-5-tablet is-2-desktop">
          <p className="subtitle is-5 has-text-centered has-text-white">
            Browse through trending and top rated tv shows
          </p>
          <p className="has-text-centered">
            <Link to="/shows/trending" className="button is-white">
              Go to TV Shows
            </Link>
          </p>
        </div>

        <div className="column is-10-mobile is-5-tablet is-2-desktop">
          <p className="subtitle is-5 has-text-centered has-text-white">
            Browse through trending movie and TV stars
          </p>
          <p className="has-text-centered">
            <Link to="/people" className="button is-white">
              Go to People
            </Link>
          </p>
        </div>

        <div className="column is-10-mobile is-5-tablet is-2-desktop">
          <p className="subtitle is-5 has-text-centered has-text-white">
            Search for movies, TV shows, movie and TV stars
          </p>
          <p className="has-text-centered">
            <Link to="/search" className="button is-white">
              Go to Search
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
