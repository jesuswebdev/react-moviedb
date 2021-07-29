import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { img_url } from "../../config/index";
import DetailsCard from "./details-card/DetailsCard";
import Creators from "./creators/Creators";
import Cast from "./cast/Cast";
import Seasons from "./seasons/Seasons";
import Spinner from "../../components/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs";

import { useHttp } from "@moviedb/hooks";

const TvDetails = () => {
  const [showFullCast, setShowFullCast] = useState(false);
  const {
    isLoading: isLoadingTvShow,
    data: show,
    get: getTvShowDetails
  } = useHttp();

  const {
    isLoading: isLoadingTvShowCast,
    data: cast,
    get: getTvShowCast
  } = useHttp();

  const { params } = useRouteMatch();

  const toggleShowFullCast = () => {
    setShowFullCast(value => !value);
  };

  useEffect(() => {
    getTvShowDetails(`/tv/${params.id}?language=en-US`);
    getTvShowCast(`/tv/${params.id}/credits?language=en-US`);
  }, []);

  const styles = {
    minHeight: "85vh",
    marginBottom: "30px"
  };

  if (!show || isLoadingTvShow || !showCast || isLoadingTvShowCast) {
    return <Spinner />;
  }

  const dummyImg = "https://placeimg.com/500/750/animals";

  const img = show.poster_path ? img_url + show.poster_path : dummyImg;

  const breadcrumbLinks = [
    { to: "/shows/trending", name: "tv" },
    { to: "/show/" + show.id, name: show.name }
  ];

  return (
    <div className="container" style={styles}>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="columns is-mobile is-centered is-multiline">
        <div className="column is-10-mobile is-5-tablet is-5-desktop">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={img} alt={show.name} />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-10-mobile is-5-tablet is-5-desktop">
          <DetailsCard serie={show} />
        </div>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-10">
          {show.created_by.length > 0 && (
            <Creators creators={show.created_by} />
          )}
        </div>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-10">
          {cast && (
            <Cast
              cast={showFullCast ? cast : cast.slice(0, 10)}
              isFullCast={showFullCast}
              onClickShowFullCast={toggleShowFullCast}
            />
          )}
        </div>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-10">
          <Seasons seasons={show.seasons} />
        </div>
      </div>
    </div>
  );
};

export default TvDetails;
