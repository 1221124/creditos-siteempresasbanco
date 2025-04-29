export type Garantia = {
  beneficiario: string;
  local: string;
  operacao: number;
  dataInicial: string;
  dataFinal: string;
  montante: number;
  extra: {
    encargoAnual: number;
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
  montante: number;
  responsabilidade: number;
};

export type Documento = {
  date: string;
  nome: string;
};
