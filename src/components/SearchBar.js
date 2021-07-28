import React from "react";

const SearchBar = props => {
  const buttonClasses = props.isLoading ? "button is-loading" : "button";

  return (
    <form
      onSubmit={e => {
        props.onSubmitSearch(
          e,
          props.query,
          props.selectedOption,
          props.nextPage
        );
      }}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Search..."
            onChange={e => {
              props.onInputChange(e.target.value);
            }}
            value={props.query}
          />
        </div>
        <div className="control">
          <span className="select">
            <select
              value={props.selectedOption}
              onChange={e => {
                props.onSelectOption(e.target.value);
              }}>
              <option value="movie">Movie</option>
              <option value="tv">TV</option>
              <option value="person">People</option>
            </select>
          </span>
        </div>
        <div className="control">
          <button className={buttonClasses}>Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
