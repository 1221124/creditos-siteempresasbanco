import React from "react";
import { Row, Col } from "react-bootstrap";
import { Garantia } from "../types/types";

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
      <Col className="bg-light py-4 rounded-start border">
        <div className="fw-bold">Número de Operações</div>
        <div>{numberOfOperations}</div>
      </Col>
      <Col className="bg-light py-4 border">
        <div className="fw-bold">Nacionais</div>
        <div>
          {nationalTotal} <span className="ms-1">EUR</span>
        </div>
      </Col>
      <Col className="bg-light py-4 rounded-end border">
        <div className="fw-bold">Internacionais</div>
        <div>
          {internationalTotal} <span className="ms-1">EUR</span>
        </div>
      </Col>
    </Row>
  );
};

export default OperationsSummary;
