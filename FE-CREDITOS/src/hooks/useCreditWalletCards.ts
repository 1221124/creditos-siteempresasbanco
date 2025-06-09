import { useCalculateAmount } from "./useCalculateAmount";
import { Garantia, CreditoDocImport, CreditWalletCard } from "../types/types";
import { useLabelsStore } from "utils/useLabelsStore";
import { ENDPOINTS } from "../api/endpoints";
import { useFetchData } from "./useFetchData";

type UseCreditWalletCardsResult = {
  loading: boolean;
  error: string | null;
  garantiasData: Garantia[];
  creditosData: CreditoDocImport[];
  cards: CreditWalletCard[];
};

export function useCreditWalletCards(): UseCreditWalletCardsResult {
  const garantiasLabel = useLabelsStore((state) => state.garantiasLabel);
  const creditosDocImportLabel = useLabelsStore(
    (state) => state.creditosDocImportLabel
  );
  const errorOccuredLabel = useLabelsStore((state) => state.errorOccuredLabel);

  const {
    data: garantiasData = [],
    loading: loadingGarantias,
    error: errorGarantias,
  } = useFetchData<Garantia>(ENDPOINTS.garantias);

  const {
    data: creditosData = [],
    loading: loadingCreditos,
    error: errorCreditos,
  } = useFetchData<CreditoDocImport>(ENDPOINTS.creditosDocImport);

  const garantiasSummary = useCalculateAmount(garantiasData);
  const creditosSummary = useCalculateAmount(creditosData);

  const cards: CreditWalletCard[] = [
    {
      title: garantiasLabel,
      operations: garantiasSummary.numberOfOperations,
      amount:
        (garantiasSummary.nationalTotal + garantiasSummary.internationalTotal)
          .toFixed(2)
          .replace(".", ",") + " EUR",
    },
    {
      title: creditosDocImportLabel,
      operations: creditosSummary.numberOfOperations,
      amount:
        (creditosSummary.nationalTotal + creditosSummary.internationalTotal)
          .toFixed(2)
          .replace(".", ",") + " EUR",
    },
  ];

  const loading = loadingGarantias || loadingCreditos;
  const error = errorGarantias || errorCreditos ? errorOccuredLabel : null;

  return {
    cards,
    garantiasData,
    creditosData,
    loading,
    error,
  };
}
