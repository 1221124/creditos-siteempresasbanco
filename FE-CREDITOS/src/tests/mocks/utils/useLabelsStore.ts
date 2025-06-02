const garantiasTabsMock = [
  { path: "detalhes", label: "Detalhes" },
  { path: "documentos", label: "Documentos" },
];

const mockState = {
  garantiasTabs: garantiasTabsMock,
  garantiasHeaders: [],
  documentosHeaders: [],
};

const useLabelsStore = jest.fn((selector) => selector(mockState));
(useLabelsStore as any).getState = () => mockState;

export { useLabelsStore };
