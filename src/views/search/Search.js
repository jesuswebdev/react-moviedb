import React, { useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import Results from "./results/Results";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useHttp } from "@moviedb/hooks";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const {
    isLoading,
    hasError,
    data: searchResults,
    get: getSearchResults
  } = useHttp();

  const styles = {
    minHeight: "85vh",
    marginBottom: "30px"
  };

  const breadcrumbLinks = [{ to: "/search", name: "search" }];

  const onSearch = useCallback((query, type) => {
    getSearchResults(
      `/search/${type}?language=en-US&query=${query}&page=1${
        type === "movie" ? "&include_adult=false" : ""
      }`
    );
    setSelectedOption(type);
  }, []);

  return (
    <div className="container" style={styles}>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="columns is-mobile is-centered">
        <div className="column is-10-mobile is-8-tablet is-6-desktop">
          <SearchBar isLoading={isLoading} onSearch={onSearch} />
        </div>
      </div>
      {searchResults && (
        <Results
          items={searchResults.results}
          loading={isLoading}
          totalResults={searchResults.total_results}
          selectedOption={selectedOption}
        />
      )}
    </div>
  );
};

export default Search;
