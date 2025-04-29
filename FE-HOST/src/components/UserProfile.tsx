import { Badge, Container, Row, Col } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

type UserProfileProps = {
  company: string;
  person: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ company, person }) => {
  return (
    <Container className="p-0">
      <Row className="align-items-center g-2">
        <Col xs="auto">
          <Badge bg="dark" className="px-2 py-1">
            {company}
          </Badge>
        </Col>
        <Col xs="auto">
          <PersonCircle size={24} />
        </Col>
        <Col xs="auto">
          <span className="fw-semibold fs-5">{person}</span>
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfile;
