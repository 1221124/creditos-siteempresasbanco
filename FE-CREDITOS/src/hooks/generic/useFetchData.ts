import { useState, useEffect } from "react";
import { fetchList } from "../../services/service";

export function useFetchData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchList<T>(endpoint);
        setData(result);
      } catch (err) {
        setError("Erro ao buscar dados: " + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  if (loading) {
    return { data, loading, error: null };
  }

  if (error) {
    return { data, loading: false, error };
  }

  return { data, loading: false, error: null };
}
