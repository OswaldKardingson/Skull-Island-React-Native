import { useState, useEffect } from 'react';

// Define the type for the hook's return value
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// Define the props for the hook
interface UseFetchProps {
  url: string;
  options?: RequestInit; // Optional fetch options (e.g., headers, method, etc.)
}

const useFetch = <T = any>({ url, options }: UseFetchProps): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state
      setError(null); // Reset error state

      try {
        const response = await fetch(url, options); // Use fetch with optional options
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Set data state
      } catch (err: any) {
        setError(err); // Set error state
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [url, options]); // Trigger effect on `url` or `options` change

  return { data, loading, error };
};

export default useFetch;
