import { useFetchData } from "./generic/useFetchData";
import { ENDPOINTS } from "../api/endpoints";
import { CreditoDocImport } from "../types/types";

export function useCreditosDocImportFetch() {
  const { data, loading, error } = useFetchData<CreditoDocImport>(
    ENDPOINTS.creditosDocImport
  );
  return { data, loading, error };
}
