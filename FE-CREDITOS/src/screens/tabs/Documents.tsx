import { Row, Col } from "react-bootstrap";
import TableComponent from "../../components/TableComponent";

const Documents = () => {
  const headers = ["Data", "Nome", "Ações"];

  const data = [
    {
      data: "2023-10-01",
      nome: "Documento 1",
      acoes: "Ação 1",
    },
    {
      data: "2023-10-02",
      nome: "Documento 2",
      acoes: "Ação 2",
    },
    {
      data: "2023-10-03",
      nome: "Documento 3",
      acoes: "Ação 3",
    },
    {
      data: "2023-10-04",
      nome: "Documento 4",
      acoes: "Ação 4",
    },
  ];

  return (
    <Row>
      <Col>
        <TableComponent
          headers={headers}
          data={data}
          isCreditoDocImportacao={false}
          isCurrency={false}
        />
      </Col>
    </Row>
  );
};

export default Documents;
