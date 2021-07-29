import React, { useRef, memo } from "react";

const SearchBar = memo(
  ({ isLoading, onSearch }) => {
    const inputRef = useRef();
    const optionRef = useRef();

    const onSubmitForm = e => {
      e.preventDefault();
      onSearch(inputRef.current.value, optionRef.current.value, 1);
    };

    return (
      <form onSubmit={onSubmitForm}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Search..."
              ref={inputRef}
            />
          </div>
          <div className="control">
            <span className="select">
              <select ref={optionRef}>
                <option value="movie">Movie</option>
                <option value="tv">TV</option>
                <option value="person">People</option>
              </select>
            </span>
          </div>
          <div className="control">
            <button className={`button ${isLoading ? "is-loading" : ""}`}>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  },
  (prev, next) => prev.isLoading === next.isLoading
);

export default SearchBar;
