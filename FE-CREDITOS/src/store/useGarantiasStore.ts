import { create } from "zustand";
import { Garantia } from "./creditos.types";

interface GarantiaStore {
  data: Garantia[];
}

export const useGarantiasStore = create<GarantiaStore>(() => ({
  data: [
    {
      beneficiario: "Beneficiário 1",
      local: "Portugal",
      operacao: 1,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      extra: {
        encargoAnual: 2.5,
        intervaloCobranca: "Mês a mês",
        debitoAgendado: "30 EUR",
        contaOrigem: 1,
      },
    },
    {
      beneficiario: "Beneficiário 2",
      local: "Portugal",
      operacao: 2,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      extra: {
        encargoAnual: 2.0,
        intervaloCobranca: "Dois em dois meses",
        debitoAgendado: "50 EUR",
        contaOrigem: 1,
      },
    },
    {
      beneficiario: "Beneficiário 3",
      local: "França",
      operacao: 3,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      extra: {
        encargoAnual: 1.5,
        intervaloCobranca: "Trimestral",
        debitoAgendado: "100 EUR",
        contaOrigem: 1,
      },
    },
    {
      beneficiario: "Beneficiário 4",
      local: "Itália",
      operacao: 4,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      extra: {
        encargoAnual: 3.0,
        intervaloCobranca: "Semestral",
        debitoAgendado: "200 EUR",
        contaOrigem: 1,
      },
    },
    {
      beneficiario: "Beneficiário 5",
      local: "Portugal",
      operacao: 5,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      extra: {
        encargoAnual: 2.5,
        intervaloCobranca: "Anual",
        debitoAgendado: "300 EUR",
        contaOrigem: 1,
      },
    },
    {
      beneficiario: "Beneficiário 6",
      local: "Portugal",
      operacao: 6,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      extra: {
        encargoAnual: 2.0,
        intervaloCobranca: "Mensal",
        debitoAgendado: "400 EUR",
        contaOrigem: 1,
      },
    },
  ],
}));
