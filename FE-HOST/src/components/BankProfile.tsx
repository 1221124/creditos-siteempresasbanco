import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type BankProfileProps = {
  name: string;
};

const BankProfile: React.FC<BankProfileProps> = ({ name }) => {
  const navigate = useNavigate();

  return (
    <Container style={{ cursor: "pointer" }}>
      <Row onClick={() => navigate("/dashboard")}>
        <Col xs="auto" className="d-flex align-items-center gap-2 ms-1">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-bank-icon-download-in-svg-png-gif-file-formats--building-courthouse-finance-filled-outline-pack-business-icons-1571030.png?f=webp"
            alt="Bank"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
          <span className="fw-bold fs-5">{name}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default BankProfile;
