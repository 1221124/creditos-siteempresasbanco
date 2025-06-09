import React from "react";
import { Row } from "react-bootstrap";
import { Garantia } from "../types/types";
import CardItem from "./CardItem";
import { useLabelsStore } from "utils/useLabelsStore";
import { useCalculateAmount } from "../hooks/useCalculateAmount";

type OperationsSummaryProps = {
  data: Garantia[];
};

const OperationsSummary: React.FC<OperationsSummaryProps> = ({ data }) => {
  const operationsSummaryHeaders = useLabelsStore(
    (state) => state.operationsSummaryHeaders
  );

  const { numberOfOperations, nationalTotal, internationalTotal } =
    useCalculateAmount(data);

  return (
    <Row className="align-self-center text-center mb-4 w-100">
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
