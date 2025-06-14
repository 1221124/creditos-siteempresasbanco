export type Tab = {
  label: string;
  path: string;
  module: "creditos" | "dashboard";
};

export type InfoItem = {
  image?: string;
  text: string;
};

export type InfoSection = {
  title: string;
  items: InfoItem[];
};

export type LabelsStore = {
  //tabs
  walletTabs: Tab[];
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
  homeMessageLabel: string;
  bankNameLabel: string;
  companyNameLabel: string;
  personNameLabel: string;
  exportToExcelLabel: string;
  exportToExcelSuccessLabel: string;
  exportToExcelErrorLabel: string;
  walletLabel: string;
  garantiasLabel: string;
  creditosDocImportLabel: string;
  garantiasPathLabel: string;
  creditosDocImportPathLabel: string;
  homeLabel: string;
  creditosLabel: string;
  sendEmailLabel: string;
  defaultExcelFilename: string;
  //info
  infoSections: InfoSection[];
  //free text
  emailSubjectText: string;
  emailBodyText: string;
};
