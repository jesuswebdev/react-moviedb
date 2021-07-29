import React, { useEffect } from "react";
import { useRouteMatch } from "react-router";
import Spinner from "../../components/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs";
import TvItems from "./tv-items/TvItems";
import Tabs from "../../components/Tabs";

import { useHttp } from "@moviedb/hooks";

const Tv = () => {
  const { isLoading, hasError, data: shows, get } = useHttp(v => v.results);

  const { params } = useRouteMatch();

  useEffect(() => {
    let url = `/trending/tv/day`;
    if (params.type === "top-rated") {
      url = `/tv/top_rated?language=en-US&page=1`;
    }
    get(url);
  }, [params.type]);

  const breadcrumbLinks = [{ to: "/shows/trending", name: "tv" }];

  const tabs = [
    {
      text: "Trending TV Shows",
      path: "/shows/trending",
      icon: "fire",
      iconColor: "danger",
      active: params.type === "trending"
    },
    {
      text: "Top Rated TV Shows",
      path: "/shows/top-rated",
      icon: "star",
      iconColor: "warning",
      active: params.type === "top-rated"
    }
  ];

  return (
    <>
      <Breadcrumbs links={breadcrumbLinks} />
      <Tabs items={tabs} />
      {(isLoading || !shows) && <Spinner />}
      {!isLoading && shows && (
        <TvItems series={shows} hasError={hasError} reloadTv={() => {}} />
      )}
    </>
  );
};

export default Tv;
