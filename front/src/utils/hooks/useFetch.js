import { useState, useEffect } from 'react';
import fetcher from '../axios';

export default function useFetch({ verb, url, body }) {
  const [ data, setData ] = useState({});
  const [ isLoading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  useEffect(() => {
    if (!url || !verb) return;
    const headers = {
      'authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    setLoading(true);
    setError(null);
    async function fetchData() {
      try {
        const response = await fetcher[verb](url, body ?? {}, { headers });
        const data = response.data.body;
        setData(data);
      } catch (err) {
        console.log(err);
        setError(err.stack);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [ verb, url, body ]);

  return { isLoading, data, error };
}
