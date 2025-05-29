import { create } from "zustand";
import { LabelsStore } from "./types";

export const useLabelsStore = create<LabelsStore>(() => ({
  //tabs
  appTabs: [
    { label: "Início", path: "/dashboard" },
    { label: "Garantias e Avales", path: "/creditos/garantias-e-avales" },
    { label: "Créditos Doc. Importação", path: "/creditos/doc-importacao" },
  ],
  garantiasTabs: [
    { label: "Detalhes", path: "/creditos/garantias-e-avales/detalhes" },
    { label: "Documentos", path: "/creditos/garantias-e-avales/documentos" },
  ],
  creditosDocImportTabs: [
    { label: "Detalhes", path: "/creditos/doc-importacao/detalhes" },
  ],
  //headers
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
  documentosHeaders: ["Data", "Nome"],
  operationsSummaryHeaders: [
    "Número de Operações",
    "Nacionais",
    "Internacionais",
  ],
  extraInfoHeaders: [
    "Encargo Anual",
    "Intervalo de Cobrança",
    "Débito Agendado",
    "Conta de Origem",
  ],
  //labels
  beneficiarySearchLabel: "Pesquisar por beneficiário",
  exportLabel: "Exportar",
  seeInvoicesLabel: "Ver faturas",
  portugalLabel: "Portugal",
  loadingLabel: "A carregar...",
  errorOccuredLabel: "Ocorreu um erro!",
  tryAgainLabel: "Tentar novamente",
  apiErrorLabel: "Erro na chamada à API:",
  invoicesLabel: "Faturas",
  homeLabel: "Bem-vindo ao novo Site de Empresas do Banco",
  bankNameLabel: "Site de Empresas - Banco",
  companyNameLabel: "EMPRESA X",
  personNameLabel: "Nome Falso",
}));
