import React, { useEffect } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLabelsStore } from "../store/useLabelsStore";

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();
  const errorOccuredLabel = useLabelsStore((state) => state.errorOccuredLabel);
  const tryAgainLabel = useLabelsStore((state) => state.tryAgainLabel);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Row data-testid="error" className="justify-content-center mt-5">
      <Col md={6} lg={4}>
        <Alert variant="danger" className="text-center">
          <Alert.Heading>{errorOccuredLabel}</Alert.Heading>
          <p>{message}</p>
          <Button
            variant="outline-danger"
            onClick={() => window.location.reload()}
          >
            {tryAgainLabel}
          </Button>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error;
