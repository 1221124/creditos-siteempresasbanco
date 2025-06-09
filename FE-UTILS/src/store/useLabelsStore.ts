import { create } from "zustand";
import { LabelsStore } from "./types";

export const useLabelsStore = create<LabelsStore>(() => ({
  //tabs
  walletTabs: [
    {
      label: "Início",
      path: "/",
      module: "dashboard",
    },
    {
      label: "Carteira",
      path: "/",
      module: "creditos",
    },
  ],
  garantiasTabs: [
    {
      label: "Detalhes",
      path: "/garantias-e-avales/detalhes",
      module: "creditos",
    },
    {
      label: "Documentos",
      path: "/garantias-e-avales/documentos",
      module: "creditos",
    },
  ],
  creditosDocImportTabs: [
    { label: "Detalhes", path: "/doc-importacao/detalhes", module: "creditos" },
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
  exportToExcelLabel: "Exportação para Excel",
  exportToExcelSuccessLabel: "Exportação para Excel concluída com sucesso!",
  exportToExcelErrorLabel: "Falha ao exportar o ficheiro. Tenta outra vez!",
  walletLabel: "Carteira de Créditos",
  garantiasLabel: "Garantias e Avales",
  creditosDocImportLabel: "Créditos Documentários de Importação",
}));
