import React from "react";
import ResultsItem from "../results-item/ResultsItem";
import Spinner from "../../../components/Spinner";

const Results = ({ items, loading, totalResults, selectedOption }) => {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-10-mobile is-8-tablet is-8-desktop">
        {loading && <Spinner />}
        {!loading && (
          <>
            <p className="has-text-centered">{totalResults} results</p>
            {items.map(item => (
              <ResultsItem
                item={item}
                key={item.id}
                selectedOption={selectedOption}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Results;
