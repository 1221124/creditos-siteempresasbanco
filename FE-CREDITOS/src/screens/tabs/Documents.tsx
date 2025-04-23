import { Row, Col } from "react-bootstrap";
import TableComponent from "../../components/TableComponent";
import { useDocumentosStore } from "../../store/useDocumentosStore";

const Documents = () => {
  const headers = ["Data", "Nome", "Ações"];

  const { data } = useDocumentosStore();

  return (
    <Row>
      <Col>
        <TableComponent headers={headers} data={data} />
      </Col>
    </Row>
  );
};

export default Documents;
