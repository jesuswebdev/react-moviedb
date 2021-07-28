import React from "react";

const Spinner = () => {
  return (
    <>
      <p className="has-text-centered">
        <img src="/img/loading.gif" alt="loading" />
      </p>
      <p className="has-text-centered">Loading...</p>
    </>
  );
};

export default Spinner;
