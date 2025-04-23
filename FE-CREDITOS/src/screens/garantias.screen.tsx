import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableComponent from "../components/TableComponent";
import { useGarantiasStore } from "../store/useGarantiasStore";
import ResumoOperacoes from "../components/ResumoOperacoes";
import CreditoTabs from "../components/CreditoTabs";
import SearchAndExportBar from "../components/SearchAndExportBar";

const GarantiasScreen: React.FC = () => {
  const { data, setData } = useGarantiasStore();

  return (
    <Container className="mt-4">
      <CreditoTabs tabs={["Detalhes", "Documentos"]} />

      <ResumoOperacoes data={data} />

      <SearchAndExportBar
        placeholder="Pesquisar por beneficiário"
        data={data}
        setData={setData}
      />

      <Row>
        <Col>
          <TableComponent
            data={data}
            headers={[
              "Nome do Beneficiário",
              "Local",
              "Nº Operação",
              "Data inicial",
              "Data final",
              "Montante",
            ]}
            isCurrency
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GarantiasScreen;
