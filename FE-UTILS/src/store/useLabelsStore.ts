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
  homeMessageLabel: "Bem-vindo ao novo Site de Empresas - Banco",
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
  homeLabel: "Página Inicial",
  creditosLabel: "Créditos",
  sendEmailLabel: "Enviar documentos por e-mail",
  defaultExcelFilename: "DADOS_DE_CREDITOS_SITEEMPRESASBANCO.xlsx",
  //info sections
  infoSections: [
    {
      title: "Notícias e Atualizações",
      items: [
        {
          image:
            "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Novo cartão Platinum sem anuidade!",
        },
        {
          image:
            "https://images.pexels.com/photos/7534801/pexels-photo-7534801.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Nova atualização na app mobile",
        },
        {
          image:
            "https://images.pexels.com/photos/4359144/pexels-photo-4359144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          text: "Nova agência inaugurada no centro",
        },
        {
          image:
            "https://images.pexels.com/photos/7709172/pexels-photo-7709172.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Atendimento 24h por chat disponível",
        },
      ],
    },
    {
      title: "Dicas de Segurança",
      items: [
        {
          image:
            "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Não partilhe a sua password",
        },
        {
          image:
            "https://images.pexels.com/photos/5474301/pexels-photo-5474301.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Use autenticação em dois fatores",
        },
        {
          image:
            "https://images.pexels.com/photos/3747486/pexels-photo-3747486.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Evite redes públicas",
        },
        {
          image:
            "https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Desconfie de e-mails suspeitos",
        },
      ],
    },
    {
      title: "Serviços Disponíveis",
      items: [
        {
          image:
            "https://images.pexels.com/photos/6633599/pexels-photo-6633599.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Consulta de créditos",
        },
        {
          image:
            "https://images.pexels.com/photos/7947999/pexels-photo-7947999.jpeg?auto=compress&cs=tinysrgb&w=600",
          text: "Extração de dados para formato Excel",
        },
      ],
    },
  ],
  //free text
  emailSubjectText: "Envio de Documentos de Créditos",
  emailBodyText:
    "Aqui tem os seus documentos de créditos.\n\nSite de Empresas - Banco",
}));
