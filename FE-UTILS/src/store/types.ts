export type Tab = {
  label: string;
  path: string;
  module: "creditos" | "dashboard";
};

export type LabelsStore = {
  //tabs
  appTabs: Tab[];
  garantiasTabs: Tab[];
  creditosDocImportTabs: Tab[];
  //headers
  garantiasHeaders: string[];
  creditosDocImportHeaders: string[];
  documentosHeaders: string[];
  operationsSummaryHeaders: string[];
  extraInfoHeaders: string[];
  //labels
  beneficiarySearchLabel: string;
  exportLabel: string;
  seeInvoicesLabel: string;
  portugalLabel: string;
  loadingLabel: string;
  errorOccuredLabel: string;
  tryAgainLabel: string;
  apiErrorLabel: string;
  invoicesLabel: string;
  homeLabel: string;
  bankNameLabel: string;
  companyNameLabel: string;
  personNameLabel: string;
};
