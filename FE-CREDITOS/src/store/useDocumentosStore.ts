import { create } from "zustand";
import { Documento } from "./creditos.types";

interface DocumentoStore {
  data: Documento[];
}

export const useDocumentosStore = create<DocumentoStore>(() => ({
  data: [
    {
      data: "2023-10-01",
      nome: "Documento 1",
    },
    {
      data: "2023-10-02",
      nome: "Documento 2",
    },
    {
      data: "2023-10-03",
      nome: "Documento 3",
    },
    {
      data: "2023-10-04",
      nome: "Documento 4",
    },
  ],
}));
