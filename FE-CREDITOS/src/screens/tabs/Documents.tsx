import { Row, Col } from "react-bootstrap";
import TableComponent from "../../components/TableComponent";

const Documents = ({ data }: { data: { date: string; nome: string }[] }) => {
  const headers = ["Data", "Nome"];

  return (
    <Row>
      <Col>
        <TableComponent headers={headers} data={data} />
      </Col>
    </Row>
  );
};

export default Documents;
