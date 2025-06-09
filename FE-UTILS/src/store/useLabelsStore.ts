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
    "Montante Original",
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
  homeLabel: "Bem-vindo ao novo Site de Empresas - Banco",
  bankNameLabel: "Site de Empresas - Banco",
  companyNameLabel: "EMPRESA X",
  personNameLabel: "Nome Falso",
  exportToExcelLabel: "Exportação para Excel",
  exportToExcelSuccessLabel: "Exportação para Excel concluída com sucesso!",
  exportToExcelErrorLabel: "Falha ao exportar o ficheiro. Tenta outra vez!",
  walletLabel: "Carteira de Créditos",
  garantiasLabel: "Garantias e Avales",
  creditosDocImportLabel: "Créditos Documentários de Importação",
  garantiasPathLabel: "garantias-e-avales",
  creditosDocImportPathLabel: "doc-importacao",
  //info sections
  infoSections: [
    {
      title: "Notícias e Atualizações",
      items: [
        {
          image: "https://picsum.photos/id/1015/60/60",
          text: "Novo cartão Platinum sem anuidade!",
        },
        {
          image: "https://picsum.photos/id/1011/60/60",
          text: "App mobile atualizado com novas funções",
        },
        {
          image: "https://picsum.photos/id/1016/60/60",
          text: "Nova agência inaugurada no centro",
        },
        {
          image: "https://picsum.photos/id/1018/60/60",
          text: "Atendimento 24h por chat disponível",
        },
      ],
    },
    {
      title: "Dicas de Segurança",
      items: [
        {
          image: "https://picsum.photos/id/1022/60/60",
          text: "Não partilhe a sua password",
        },
        {
          image: "https://picsum.photos/id/1023/60/60",
          text: "Use autenticação em dois fatores",
        },
        {
          image: "https://picsum.photos/id/1024/60/60",
          text: "Evite redes públicas",
        },
        {
          image: "https://picsum.photos/id/1025/60/60",
          text: "Desconfie de e-mails suspeitos",
        },
      ],
    },
    {
      title: "Serviços Disponíveis",
      items: [
        {
          image: "https://picsum.photos/id/1026/60/60",
          text: "Consulta de créditos",
        },
        {
          image: "https://picsum.photos/id/1021/60/60",
          text: "Extração de dados de créditos para Excel",
        },
      ],
    },
  ],
}));
