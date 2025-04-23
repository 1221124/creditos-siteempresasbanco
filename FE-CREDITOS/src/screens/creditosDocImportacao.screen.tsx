import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TableComponent from "../components/TableComponent";
import { useCreditoDocImportStore } from "../store/useCreditoDocImportStore";
import CreditoTabs from "../components/CreditoTabs";
import SearchAndExportBar from "../components/SearchAndExportBar";

const CreditosDocImportacaoScreen: React.FC = () => {
  const { data, setData } = useCreditoDocImportStore();

  return (
    <Container className="mt-4">
      <CreditoTabs tabs={["Detalhes"]} />

      <SearchAndExportBar
        placeholder="Pesquisar por beneficiário"
        data={data}
        setData={setData}
      />

      <Row>
        <Col>
          <TableComponent
            headers={[
              "Nome do Beneficiário",
              "Local",
              "Nº Operação",
              "Data inicial",
              "Data final",
              "Montante",
              "Responsabilidade Atual",
            ]}
            data={data}
            isCurrency={true}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CreditosDocImportacaoScreen;
