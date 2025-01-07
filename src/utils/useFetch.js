import { useEffect } from 'react';

const useFetch = (url, options) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                localStorage.setItem('apiPayload', JSON.stringify(options));

                const response = await fetch(url, options);
                const status = response.status;

                localStorage.setItem('apiResponseStatus', status);
            } catch (error) {
                console.error('Error in useFetch:', error);
            }
        };

        fetchData();
    }, [url, options]);
};

export default useFetch;
