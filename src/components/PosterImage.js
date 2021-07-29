import { useState } from "react";
import Spinner from "./Spinner";

const PosterImage = props => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoadHandler = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <img
        {...props}
        onLoad={onLoadHandler}
        style={isLoaded ? {} : { display: "none" }}
      />
      {!isLoaded && (
        <div
          style={{
            height: 450,
            width: 300,
            display: isLoaded ? "none" : "inline"
          }}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default PosterImage;
