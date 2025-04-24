import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BankProfile from "./components/BankProfile";
import UserProfile from "./components/UserProfile";
import HomePage from "./components/HomePage";

const NavTabs = lazy(() => import("creditos/NavTabs"));
const CreditosApp = lazy(() => import("creditos/App"));

const App: React.FC = () => {
  const tabs = [
    {
      label: "Início",
      path: "/creditos",
    },
    {
      label: "Garantias e Avales",
      path: "/creditos/garantias-e-avales",
    },
    {
      label: "Créditos Doc. Importação",
      path: "/creditos/doc-importacao",
    },
  ];

  return (
    <Container className="py-4">
      <Row className="d-flex align-items-center justify-content-between mt-4">
        <Col xs="auto">
          <BankProfile />
        </Col>
        <Col xs="auto">
          {/* Tabs de nível máximo */}
          <NavTabs tabs={tabs} topLevel={true} />
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
          <Route index element={<Navigate to="creditos" />} />
          <Route path="/creditos" element={<HomePage />} />
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
