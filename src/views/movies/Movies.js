import React, { useEffect } from "react";
import { useRouteMatch } from "react-router";

import Spinner from "../../components/Spinner";
import Breadcrumbs from "../../components/Breadcrumbs";
import ErrorMessage from "../../components/ErrorMessage";
import MovieItems from "./movie-items/MovieItems";
import Tabs from "./Tabs/Tabs";

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

  return (
    <div
      className="container"
      style={{ minHeight: "85vh", marginBottom: "30px" }}>
      <Breadcrumbs links={breadcrumbLinks} />
      <Tabs active={params.type} />
      {isLoading && <Spinner />}
      {!isLoading && !hasError && <MovieItems movies={movies || []} />}
      {!isLoading && hasError && <ErrorMessage />}
    </div>
  );
};

export default Movies;
