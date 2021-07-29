import React, { useEffect, useMemo } from "react";
import { useRouteMatch } from "react-router";

import Spinner from "../../components/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs";
import ErrorMessage from "../../components/ErrorMessage";
import MovieItems from "./movie-items/MovieItems";
import Tabs from "../../components/Tabs";

import { useHttp } from "@moviedb/hooks";

const Movies = () => {
  const { isLoading, hasError, data, get } = useHttp();

  const { params } = useRouteMatch();

  useEffect(() => {
    let url = `/trending/movie/day`;
    if (params.type === "top-rated") {
      url = `/movie/top_rated?language=en-US&page=1`;
    }
    if (params.type === "in-theatres") {
      url = `/movie/now_playing?language=en-US&page=1`;
    }
    get(url);
  }, [params.type]);

  const movies = data?.results;

  const breadcrumbLinks = [{ to: "/movies", name: "movie" }];

  const tabs = useMemo(
    () => [
      {
        text: "Trending Movies",
        path: "/movies/trending",
        icon: "fire",
        iconColor: "danger",
        active: params.type === "trending"
      },
      {
        text: "In Theatres",
        path: "/movies/in-theatres",
        icon: "ticket-alt",
        iconColor: "black",
        active: params.type === "in-theatres"
      },
      {
        text: "Top Rated Movies",
        path: "/movies/top-rated",
        icon: "star",
        iconColor: "warning",
        active: params.type === "top-rated"
      }
    ],
    [params.type]
  );

  return (
    <>
      <Breadcrumbs links={breadcrumbLinks} />
      <Tabs items={tabs} />
      {isLoading && <Spinner />}
      {!isLoading && !hasError && <MovieItems movies={movies || []} />}
      {!isLoading && hasError && <ErrorMessage />}
    </>
  );
};

export default Movies;
