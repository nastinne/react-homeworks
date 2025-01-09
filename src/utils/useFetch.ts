import { useEffect } from 'react';

type FetchOptions = RequestInit; // The options parameter is of type RequestInit for fetch options.

const useFetch = (url: string, options: FetchOptions): void => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Save the options in localStorage (if needed).
        localStorage.setItem('apiPayload', JSON.stringify(options));

        const response = await fetch(url, options);
        const status = response.status;

        // Save the response status in localStorage.
        localStorage.setItem('apiResponseStatus', String(status));
      } catch (error) {
        console.error('Error in useFetch:', error);
      }
    };

    fetchData();
  }, [url, options]);
};

export default useFetch;
