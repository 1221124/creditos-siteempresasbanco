import { Badge, Container, Row, Col } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

const UserProfile: React.FC = () => {
  return (
    <Container className="p-0">
      <Row className="align-items-center g-2">
        <Col xs="auto">
          <Badge bg="dark" className="px-2 py-1">
            EMPRESA X
          </Badge>
        </Col>
        <Col xs="auto">
          <PersonCircle size={24} />
        </Col>
        <Col xs="auto">
          <span className="fw-semibold fs-5">Nome Falso</span>
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfile;
