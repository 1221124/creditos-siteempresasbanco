import { useLabelsStore } from "utils/useLabelsStore";
import { Garantia, CreditoDocImport } from "../types/types";

type UseCalculateAmountResult = {
  numberOfOperations: number;
  nationalTotal: number;
  internationalTotal: number;
};

function isCreditoDocImport(
  item: Garantia | CreditoDocImport
): item is CreditoDocImport {
  return (item as CreditoDocImport).responsabilidade !== undefined;
}

export function useCalculateAmount<T extends Garantia | CreditoDocImport>(
  data: T[]
): UseCalculateAmountResult {
  const portugalLabel = useLabelsStore((state) => state.portugalLabel);

  function parseAmount(value: unknown): number {
    if (value == null) return 0;
    const val = String(value).trim();
    if (val === "") return 0;

    const decimalPart = val.includes(",")
      ? val.split(",")[1]
      : val.split(".")[1];
    const montanteDecimal = decimalPart ? Number("0." + decimalPart) : 0;
    const montanteInteiro = Number(val.split(/[.,]/)[0]);

    return montanteInteiro + montanteDecimal;
  }

  function getAmount(item: T): number {
    if (isCreditoDocImport(item)) {
      return parseAmount(item.responsabilidade);
    }
    return parseAmount(item.montante);
  }

  function getTotalByLocal(data: T[], local?: string): number {
    return data
      .filter((item) =>
        local ? item.local === local : item.local !== portugalLabel
      )
      .reduce((acc, item) => acc + getAmount(item), 0);
  }

  const numberOfOperations = data.length;
  const nationalTotal = getTotalByLocal(data, portugalLabel);
  const internationalTotal = getTotalByLocal(data);

  return { numberOfOperations, nationalTotal, internationalTotal };
}
