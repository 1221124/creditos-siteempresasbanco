import React from "react";
import { Row, Col } from "react-bootstrap";
import { Garantia } from "../store/creditos.types";

interface ResumoOperacoesProps {
  data: Garantia[];
}

const ResumoOperacoes: React.FC<ResumoOperacoesProps> = ({ data }) => {
  const numeroOperacoes = data.length;
  const totalNacionais = getTotalByLocal(data, "Portugal");
  const totalInternacionais = getTotalByLocal(data);

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
        <div>{numeroOperacoes}</div>
      </Col>
      <Col className="bg-light py-4 border">
        <div className="fw-bold">Nacionais</div>
        <div>
          {totalNacionais} <span className="ms-1">EUR</span>
        </div>
      </Col>
      <Col className="bg-light py-4 rounded-end border">
        <div className="fw-bold">Internacionais</div>
        <div>
          {totalInternacionais} <span className="ms-1">EUR</span>
        </div>
      </Col>
    </Row>
  );
};

export default ResumoOperacoes;
