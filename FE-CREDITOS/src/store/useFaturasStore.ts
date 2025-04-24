import { create } from "zustand";
import { Documento } from "./creditos.types";

interface FaturaStore {
  data: Documento[];
}

export const useFaturasStore = create<FaturaStore>(() => ({
  data: [
    {
      date: "2023-10-01",
      nome: "Fatura 1",
    },
    {
      date: "2023-10-02",
      nome: "Fatura 2",
    },
    {
      date: "2023-10-03",
      nome: "Fatura 3",
    },
    {
      date: "2023-10-04",
      nome: "Fatura 4",
    },
  ],
}));
