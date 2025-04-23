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
    },
    {
      beneficiario: "Beneficiário 2",
      local: "Portugal",
      operacao: 2,
      dataInicial: "01/01/1900",
      dataFinal: "01/01/2100",
      montante: -500,
    },
  ],
}));
