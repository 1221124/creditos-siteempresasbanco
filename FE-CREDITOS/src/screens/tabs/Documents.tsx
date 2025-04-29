import { Row, Col } from "react-bootstrap";
import TableComponent from "../../components/TableComponent";
import { useLabelsStore } from "../../store/useLabelsStore";

const Documents = ({ data }: { data: { date: string; nome: string }[] }) => {
  const documentosHeaders = useLabelsStore((state) => state.documentosHeaders);

  return (
    <Row>
      <Col>
        <TableComponent headers={documentosHeaders} data={data} />
      </Col>
    </Row>
  );
};

export default Documents;
