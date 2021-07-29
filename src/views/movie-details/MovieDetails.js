import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { img_url } from "../../config/index";
import InfoCard from "./info-card/InfoCard";
import DetailsCard from "./details-card/DetailsCard";
import CastCard from "./cast-card/CastCard";
import Spinner from "../../components/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs";

import { useHttp } from "@moviedb/hooks";

const MovieDetails = () => {
  const {
    isLoading: isLoadingMovieDetails,
    data: movieDetails,
    get: getMovieDetails
  } = useHttp();

  const {
    isLoading: isLoadingMovieCast,
    data: { cast: movieCast } = {},
    get: getMovieCast
  } = useHttp();

  const [showFullCast, setShowFullCast] = useState(false);

  const toggleShowFullCast = () => {
    setShowFullCast(value => !value);
  };

  const { params } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(`/movie/${params.id}?language=en-US`);
    getMovieCast(`/movie/${params.id}/credits`);
  }, [params.id]);

  if (
    isLoadingMovieCast ||
    isLoadingMovieDetails ||
    !movieDetails ||
    !movieCast
  ) {
    return <Spinner />;
  }

  let movie = movieDetails;
  const dummyImg = "https://placeimg.com/500/750/animals";
  let img = movie.poster_path ? `${img_url}${movie.poster_path}` : dummyImg;

  let cast;

  if (movieCast.length > 10 && !showFullCast) {
    cast = (
      <CastCard
        cast={movieCast.slice(0, 10)}
        onClickShowFullCast={toggleShowFullCast}
      />
    );
  } else {
    cast = <CastCard cast={movieCast} showFullCast />;
  }

  const breadcrumbLinks = [
    { to: "/movies", name: "movie" },
    { to: "/movie/" + movie.id, name: movie.title }
  ];

  return (
    <>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="columns is-mobile is-centered is-multiline">
        <div className="column is-10-mobile is-5-tablet is-5-desktop">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={img} alt={movie.title} />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-10-mobile is-5-tablet is-5-desktop">
          <DetailsCard movie={movie} />
        </div>
      </div>

      <div className="columns is-mobile is-centered">
        <div className="column is-10-mobile is-10-tablet is-10-desktop">
          {movieCast.length && cast}
        </div>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-10-mobile is-10-tablet is-10-desktop">
          <InfoCard movie={movie} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
