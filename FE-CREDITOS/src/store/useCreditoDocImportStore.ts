import { create } from "zustand";
import { CreditoDocImport } from "./creditos.types";

interface CreditoDocImportStore {
  data: CreditoDocImport[];
  setData: (newData: CreditoDocImport[]) => void;
}

export const useCreditoDocImportStore = create<CreditoDocImportStore>(
  (set) => ({
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
    ],
    setData: (newData) => set({ data: newData }),
  })
);
