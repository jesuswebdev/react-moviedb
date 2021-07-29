import React, { useEffect, useCallback } from "react";
import { useRouteMatch } from "react-router";
import DetailsCard from "./details-card/DetailsCard";
import Spinner from "../../components/Spinner";
import Biography from "./biography/Biography";
import Credits from "./credits/Credits";
import Breadcrumbs from "../../components/Breadcrumbs";
import PosterImage from "../../components/PosterImage";
import { useHttp } from "@moviedb/hooks";

const PeopleDetails = () => {
  const {
    isLoading: loadingDetails,
    data: details,
    get: getDetails
  } = useHttp();
  const {
    isLoading: loadingCredits,
    data: credits,
    get: getCredits
  } = useHttp(useCallback(v => v.cast, []));

  const { params } = useRouteMatch();

  useEffect(() => {
    getDetails(`/person/${params.id}?language=en-US`);
    getCredits(`/person/${params.id}/combined_credits?language=en-US`);
  }, []);

  if (!details || loadingDetails || !credits || loadingCredits) {
    return <Spinner />;
  }

  const url = "https://image.tmdb.org/t/p/h632";
  const dummyImg = "https://placeimg.com/500/750/animals";
  const img = details.profile_path ? url + details.profile_path : dummyImg;
  const breadcrumbLinks = [
    { to: "/people", name: "people" },
    { to: "/people/" + details.id, name: details.name }
  ];

  return (
    <>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="columns is-mobile is-centered is-multiline">
        <div className="column is-10-mobile is-5-tablet is-5-desktop">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <PosterImage src={img} alt={details.name} />
              </figure>
            </div>
          </div>
        </div>

        <div className="column is-10-mobile is-5-tablet is-5-desktop">
          <DetailsCard details={details} />
        </div>
      </div>

      <Biography bio={details.biography} />
      <Credits credits={credits} />
    </>
  );
};

export default PeopleDetails;
