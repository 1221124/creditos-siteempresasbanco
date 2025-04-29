import { useFetchData } from "./generic/useFetchData";
import { ENDPOINTS } from "../api/endpoints";
import { Documento } from "../types/types";

export function useDocumentosFetch() {
  const { data, loading, error } = useFetchData<Documento>(
    ENDPOINTS.documentos
  );
  return { data, loading, error };
}
