export type Garantia = {
  beneficiario: string;
  local: string;
  operacao: number;
  dataInicial: string;
  dataFinal: string;
  montante: string;
  extra: {
    encargoAnual: string;
    intervaloCobranca: string;
    debitoAgendado: string;
    contaOrigem: number;
  };
};

export type CreditoDocImport = {
  beneficiario: string;
  local: string;
  operacao: number;
  dataInicial: string;
  dataFinal: string;
  montante: string;
  responsabilidade: string;
};

export type Documento = {
  date: string;
  nome: string;
  pdf: string;
};

export type CreditWalletCard = {
  title: string;
  operations: number;
  amount: string;
};
