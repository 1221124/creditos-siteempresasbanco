import React from "react";
import { Row } from "react-bootstrap";
import { Garantia } from "../types/types";
import CardItem from "./CardItem";

interface OperationsSummaryProps {
  data: Garantia[];
}

const OperationsSummary: React.FC<OperationsSummaryProps> = ({ data }) => {
  const numberOfOperations = data.length;
  const nationalTotal = getTotalByLocal(data, "Portugal");
  const internationalTotal = getTotalByLocal(data);

  function getTotalByLocal(data: Garantia[], local?: string): number {
    return data
      .filter((item) =>
        local ? item.local === local : item.local !== "Portugal"
      )
      .reduce((acc, item) => acc + item.montante, 0);
  }

  return (
    <Row className="text-center mb-4">
      <CardItem
        title="Número de Operações"
        value={numberOfOperations}
        start={true}
      />
      <CardItem title="Nacionais" value={nationalTotal} isCurrency={true} />
      <CardItem
        title="Internacionais"
        value={internationalTotal}
        isCurrency={true}
        end={true}
      />
    </Row>
  );
};

export default OperationsSummary;
