import { ENDPOINTS } from "./../api/endpoints";
import { BASE_URL } from "../api/config";
import { CreditoDocImport, Garantia } from "../types/types";
import { useLabelsStore } from "../store/useLabelsStore";

const apiErrorLabel = useLabelsStore.getState().apiErrorLabel;

export async function fetchList<T>(endpoint: string): Promise<T[]> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`${apiErrorLabel} ${response.status}`);
  }

  const data = await response.json();
  return data as T[];
}
export async function getCreditosDocImport(): Promise<CreditoDocImport[]> {
  return fetchList<CreditoDocImport>(ENDPOINTS.creditosDocImport);
}

export async function getDocumentos(): Promise<Document[]> {
  return fetchList<Document>(ENDPOINTS.documentos);
}

export async function getFaturas(): Promise<Document[]> {
  return fetchList<Document>(ENDPOINTS.faturas);
}

export async function getGarantias(): Promise<Garantia[]> {
  return fetchList<Garantia>(ENDPOINTS.garantias);
}
