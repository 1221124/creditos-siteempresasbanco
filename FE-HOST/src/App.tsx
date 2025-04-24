import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTabs from "./components/NavTabs";
import BankProfile from "./components/BankProfile";
import UserProfile from "./components/UserProfile";

const CreditosApp = lazy(() => import("creditos/App"));

const App: React.FC = () => {
  return (
    <Container className="py-4">
      <Row className="d-flex align-items-center justify-content-between my-4">
        <Col xs="auto">
          <BankProfile />
        </Col>
        <Col xs="auto">
          <NavTabs />
        </Col>
        <Col xs="auto">
          <UserProfile />
        </Col>
      </Row>

      <Suspense
        fallback={
          <Spinner
            className="d-flex justify-content-center align-items-center"
            animation="border"
          />
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="d-flex justify-content-center align-items-center">
                Bem-vindo ao módulo de Créditos do Site de Empresas do Banco
              </h1>
            }
          />
          <Route
            path="/creditos/*"
            element={
              <Suspense
                fallback={
                  <Spinner
                    className="d-flex justify-content-center align-items-center"
                    animation="border"
                  />
                }
              >
                <CreditosApp />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
