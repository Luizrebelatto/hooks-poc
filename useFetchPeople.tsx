import { useEffect, useState } from "react";

export default function useFetchPeople(){
    const url = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState<null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
} 