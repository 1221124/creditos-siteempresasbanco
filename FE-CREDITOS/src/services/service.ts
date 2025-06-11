import { ENDPOINTS } from "../api/config";
import { CreditoDocImport, Garantia } from "../types/types";
import { get } from "./RESTAdapter";

export async function getCreditosDocImport(): Promise<CreditoDocImport[]> {
  return get<CreditoDocImport>(ENDPOINTS.creditosDocImport);
}

export async function getDocumentos(): Promise<Document[]> {
  return get<Document>(ENDPOINTS.documentos);
}

export async function getFaturas(): Promise<Document[]> {
  return get<Document>(ENDPOINTS.faturas);
}

export async function getGarantias(): Promise<Garantia[]> {
  return get<Garantia>(ENDPOINTS.garantias);
}
