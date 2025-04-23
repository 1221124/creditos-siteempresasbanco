export type Garantia = {
  beneficiario: string;
  local: string;
  operacao: number;
  dataInicial: string;
  dataFinal: string;
  montante: number;
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
