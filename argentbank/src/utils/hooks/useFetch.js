import { useState, useEffect } from 'react'
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  timeout: 1000,
  headers: {'autorization': 'Bearer'},
});

export default function useFetch({ verb, url, body }) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url || !verb || !body) return
    setLoading(true)
    setError(null)
    async function fetchData() {
      try {
        const response = await instance[verb](url, body);
        const data = response.data.body;
        setData(data)
      } catch (err) {
        console.log(err)
        setError(err.stack)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [verb, url, body])
  return { isLoading, data, error }
}