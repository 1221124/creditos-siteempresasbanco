import { create } from "zustand";
import { CreditoDocImport } from "./creditos.types";

interface CreditoDocImportStore {
  data: CreditoDocImport[];
}

export const useCreditoDocImportStore = create<CreditoDocImportStore>(() => ({
  data: [
    {
      beneficiario: "Beneficiário 1",
      local: "Portugal",
      operacao: 1,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 2",
      local: "Portugal",
      operacao: 2,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 3",
      local: "França",
      operacao: 3,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 4",
      local: "Itália",
      operacao: 4,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 5",
      local: "Portugal",
      operacao: 5,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 6",
      local: "Portugal",
      operacao: 6,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 7",
      local: "Portugal",
      operacao: 7,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 8",
      local: "Portugal",
      operacao: 8,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
    {
      beneficiario: "Beneficiário 9",
      local: "Portugal",
      operacao: 9,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
      responsabilidade: -500,
    },
  ],
}));
