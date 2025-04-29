import { useFetchData } from "./generic/useFetchData";
import { ENDPOINTS } from "../api/endpoints";
import { Garantia } from "../types/types";

export function useGarantiasFetch() {
  const { data, loading, error } = useFetchData<Garantia>(ENDPOINTS.garantias);
  return { data, loading, error };
}
