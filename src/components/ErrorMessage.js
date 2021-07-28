import React from "react";

const ErrorMessage = ({ message, retry }) => {
  const defaultMessage =
    "There was an error loading your data. Click here to retry.";
  const defaultFn = () => {};
  return <p onClick={retry || defaultFn}>{message || defaultMessage}</p>;
};

export default ErrorMessage;
