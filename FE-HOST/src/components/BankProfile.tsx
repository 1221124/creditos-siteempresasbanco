import { Container, Row, Col } from "react-bootstrap";
import { Bank } from "react-bootstrap-icons";

const BankProfile: React.FC = () => {
  return (
    <Container className="p-0">
      <Row className="align-items-center">
        <Col xs="auto">
          <Bank size={24} />
        </Col>
        <Col xs="auto">
          <span className="fw-semibold fs-5">Site de Empresas - Banco</span>
        </Col>
      </Row>
    </Container>
  );
};

export default BankProfile;
