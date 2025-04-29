import React, { useEffect } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Row className="justify-content-center mt-5">
      <Col md={6} lg={4}>
        <Alert variant="danger" className="text-center">
          <Alert.Heading>Ocorreu um erro!</Alert.Heading>
          <p>{message}</p>
          <Button
            variant="outline-danger"
            onClick={() => window.location.reload()}
          >
            Tentar novamente
          </Button>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error;
