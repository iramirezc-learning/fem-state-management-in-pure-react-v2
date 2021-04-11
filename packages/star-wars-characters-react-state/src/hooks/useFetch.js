import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setIsLoading(true);
    setError(null);

    const doFetch = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setResponse(data);
      } catch (err) {
        // NOTE: make sure you are passing the `err` from the
        // try-catch block and not from the `error` from the state hook! 🤦🏻‍♂️
        // Lesson learned!
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    doFetch();
    // eslint-disable-next-line
  }, []);

  return [response, isLoading, error];
};

export default useFetch;
