import { useState, useCallback } from "react";
import { moviedb } from "@moviedb/utils";

const useHttp = (transformResponse = v => v) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(undefined);

  const get = useCallback(async (...args) => {
    try {
      setHasError(false);
      setIsLoading(true);
      const { data } = await moviedb.get(...args);
      setData(transformResponse(data));
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, hasError, data, get };
};

export default useHttp;
