import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false);
        setResponse(response);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return [response, isLoading, error];
};

export default useFetch;
