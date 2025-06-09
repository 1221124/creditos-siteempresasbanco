import { Badge, Container, Row, Col } from "react-bootstrap";

type UserProfileProps = {
  company: string;
  person: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ company, person }) => {
  return (
    <Container className="p-0">
      <Row className="align-items-center g-0">
        <Col xs="auto" className="me-3">
          <Badge bg="dark" className="px-2 py-1">
            {company}
          </Badge>
        </Col>
        <Col xs="auto" className="d-flex align-items-center gap-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/480px-User_icon_2.svg.png"
            alt="User"
            style={{ width: "24px", height: "24px", objectFit: "contain" }}
          />
          <span className="fw-bold fs-5">{person}</span>
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfile;
