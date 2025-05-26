import { useState, useEffect } from "react";
import { useLabelsStore } from "../../store/useLabelsStore";
import { get } from "../../services/restAdapter";

export function useFetchData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const errorOccuredLabel = useLabelsStore((state) => state.errorOccuredLabel);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get<T>(endpoint);
        setData(result);
      } catch (err) {
        setError(errorOccuredLabel + ": " + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, errorOccuredLabel]);

  if (loading) {
    return { data, loading, error: null };
  }

  if (error) {
    return { data, loading: false, error };
  }

  return { data, loading: false, error: null };
}
