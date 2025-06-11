import { Row, Col, Button } from "react-bootstrap";
import TableComponent from "../../components/TableComponent";
import { useLabelsStore } from "utils/useLabelsStore";
import { Documento } from "../../types/types";
import React, { useState } from "react";
import { useEmailSender } from "../../hooks/useEmailSender";

type DocumentsProps = {
  data: Documento[];
};

const Documents: React.FC<DocumentsProps> = ({ data }) => {
  const documentosHeaders = useLabelsStore((state) => state.documentosHeaders);
  const sendEmailLabel = useLabelsStore((state) => state.sendEmailLabel);
  const emailSubjectText = useLabelsStore((state) => state.emailSubjectText);
  const emailBodyText = useLabelsStore((state) => state.emailBodyText);
  const [selectedDocuments, setSelectedDocuments] = useState<Documento[]>([]);

  const { sendEmail } = useEmailSender({
    documents: selectedDocuments,
    bodyText: emailBodyText,
    subject: emailSubjectText,
  });

  return (
    <Row data-testid="documents">
      <Col>
        <TableComponent
          headers={documentosHeaders}
          data={data}
          selectedDocuments={selectedDocuments}
          setSelectedDocuments={setSelectedDocuments}
        />

        <Button
          onClick={sendEmail}
          variant="outline-dark"
          className="mt-3"
          disabled={selectedDocuments.length === 0}
        >
          {sendEmailLabel}
        </Button>
      </Col>
    </Row>
  );
};

export default Documents;
