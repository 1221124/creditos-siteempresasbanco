import React from "react";
import { Row } from "react-bootstrap";
import { Garantia } from "../types/types";
import CardItem from "./CardItem";
import { useLabelsStore } from "../store/useLabelsStore";

interface OperationsSummaryProps {
  data: Garantia[];
}

const OperationsSummary: React.FC<OperationsSummaryProps> = ({ data }) => {
  const operationsSummaryHeaders = useLabelsStore(
    (state) => state.operationsSummaryHeaders
  );
  const portugalLabel = useLabelsStore((state) => state.portugalLabel);

  const numberOfOperations = data.length;
  const nationalTotal = getTotalByLocal(data, portugalLabel);
  const internationalTotal = getTotalByLocal(data);

  function getTotalByLocal(data: Garantia[], local?: string): number {
    return data
      .filter((item) =>
        local ? item.local === local : item.local !== portugalLabel
      )
      .reduce((acc, item) => {
        const montanteStr = item.montante.trim();
        const decimalPart = montanteStr.includes(",")
          ? montanteStr.split(",")[1]
          : montanteStr.split(".")[1];

        const montanteDecimal = decimalPart ? Number("0." + decimalPart) : 0;

        const montanteInteiro = Number(montanteStr.split(/[.,]/)[0]);

        return acc + montanteInteiro + montanteDecimal;
      }, 0);
  }

  return (
    <Row className="text-center mb-4">
      <CardItem
        title={operationsSummaryHeaders[0]}
        value={numberOfOperations}
        start={true}
      />
      <CardItem
        title={operationsSummaryHeaders[1]}
        value={nationalTotal}
        isCurrency={true}
      />
      <CardItem
        title={operationsSummaryHeaders[2]}
        value={internationalTotal}
        isCurrency={true}
        end={true}
      />
    </Row>
  );
};

export default OperationsSummary;
