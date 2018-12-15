import { fetchWithAuth } from "../helpers/fetchWithAuth";
import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

export function useFetch(config: AxiosRequestConfig) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const response = fetchWithAuth(config);

      setData(response as any);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return [data, error, loading];
}
