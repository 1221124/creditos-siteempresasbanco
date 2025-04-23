import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch, FaFileExport } from "react-icons/fa";

const CreditosDocImportacaoPage: React.FC = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col className="d-flex gap-4 border-bottom pb-2 mb-4">
          <span className="fw-bold" style={{ cursor: "pointer" }}>
            Detalhes
          </span>
        </Col>
      </Row>

      <Row className="d-flex mb-3 align-items-center justify-content-between">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl placeholder="Pesquisar por beneficiário" />
          </InputGroup>
        </Col>
        <Col className="text-end d-flex justify-content-end">
          <Button variant="light" className="d-flex align-items-center gap-2">
            <FaFileExport />
            Exportar
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table responsive borderless>
            <thead>
              <tr className="border-bottom">
                <th className="fw-normal">
                  <strong>Nome do Beneficiário</strong>
                </th>
                <th className="fw-normal">
                  <strong>Local</strong>
                </th>
                <th className="fw-normal">
                  <strong>Nº Operação</strong>
                </th>
                <th className="fw-normal">
                  <strong>Data inicial</strong>
                </th>
                <th className="fw-normal">
                  <strong>Data final</strong>
                </th>
                <th className="fw-normal">
                  <strong>Montante</strong>
                </th>
                <th className="fw-normal">
                  <strong>Responsabilidade Atual</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Beneficiário 1</td>
                <td>Portugal</td>
                <td>1</td>
                <td>01/01/1900</td>
                <td>01/01/2100</td>
                <td className="text-danger">-500 EUR</td>
                <td className="text-danger">-500 EUR</td>
              </tr>
              <tr className="border-top">
                <td>Beneficiário 2</td>
                <td>Portugal</td>
                <td>2</td>
                <td>01/01/1900</td>
                <td>01/01/2100</td>
                <td className="text-danger">-500 EUR</td>
                <td className="text-danger">-500 EUR</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CreditosDocImportacaoPage;
