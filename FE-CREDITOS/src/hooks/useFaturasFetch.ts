import { useFetchData } from "./generic/useFetchData";
import { ENDPOINTS } from "../api/endpoints";
import { Documento } from "../types/types";

export function useFaturasFetch() {
  const { data, loading, error } = useFetchData<Documento>(ENDPOINTS.faturas);
  return { data, loading, error };
}
