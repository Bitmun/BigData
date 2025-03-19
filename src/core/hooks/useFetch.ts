import { useEffect, useState } from 'react';

import { APIResponce } from 'core/types';

export const useFetch = <T>(
  fetchFunction: () => Promise<APIResponce<T>>,
  dependencies: unknown[] = [],
) => {
  const [response, setResponse] = useState<APIResponce<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetchFunction();
      setResponse(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, dependencies);

  return { response, isLoading, error };
};
