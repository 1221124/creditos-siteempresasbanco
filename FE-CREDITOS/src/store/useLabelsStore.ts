import { create } from "zustand";

interface Tab {
  label: string;
  path: string;
}

interface LabelsStore {
  appTabs: Tab[];
  garantiasTabs: Tab[];
  creditosDocImportTabs: Tab[];
  garantiasHeaders: string[];
  creditosDocImportHeaders: string[];
  documentosHeaders: string[];
  beneficiarySearchLabel: string;
  exportLabel: string;
  seeInvoicesLabel: string;
}

export const useLabelsStore = create<LabelsStore>(() => ({
  appTabs: [
    { label: "Início", path: "/creditos" },
    { label: "Garantias e Avales", path: "/creditos/garantias-e-avales" },
    { label: "Créditos Doc. Importação", path: "/creditos/doc-importacao" },
  ],
  garantiasTabs: [
    { label: "Detalhes", path: "/creditos/garantias-e-avales" },
    { label: "Documentos", path: "/creditos/garantias-e-avales/documentos" },
  ],
  creditosDocImportTabs: [
    { label: "Detalhes", path: "/creditos/doc-importacao" },
  ],
  garantiasHeaders: [
    "Nome do Beneficiário",
    "Local",
    "Nº Operação",
    "Data inicial",
    "Data final",
    "Montante",
  ],
  creditosDocImportHeaders: [
    "Nome do Beneficiário",
    "Local",
    "Nº Operação",
    "Data inicial",
    "Data final",
    "Montante",
    "Responsabilidade Atual",
  ],
  documentosHeaders: ["Nome", "Data"],
  beneficiarySearchLabel: "Pesquisar por beneficiário",
  exportLabel: "Exportar",
  seeInvoicesLabel: "Ver faturas",
}));
