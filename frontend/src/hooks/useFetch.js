import { useState, useEffect } from "react";

const useFetch = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchFunction();
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [fetchFunction]);

  return { data, loading, error };
};

export default useFetch;
