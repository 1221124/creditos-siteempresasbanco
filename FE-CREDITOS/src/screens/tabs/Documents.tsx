import { Row, Col } from "react-bootstrap";
import TableComponent from "../../components/TableComponent";
import { useLabelsStore } from "utils/useLabelsStore";
import { Documento } from "../../types/types";
import React from "react";

type DocumentsProps = {
  data: Documento[];
};

const Documents: React.FC<DocumentsProps> = ({ data }) => {
  const documentosHeaders = useLabelsStore((state) => state.documentosHeaders);

  return (
    <Row data-testid="documents">
      <Col>
        <TableComponent headers={documentosHeaders} data={data} />
      </Col>
    </Row>
  );
};

export default Documents;
