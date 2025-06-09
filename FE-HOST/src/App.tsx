import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BankProfile from "./components/BankProfile";
import UserProfile from "./components/UserProfile";
import Sidebar from "./components/Sidebar";
import "utils/styles";

const Loading = lazy(() => import("utils/Loading"));

const DashboardApp = lazy(() => import("dashboard/App"));
const CreditosApp = lazy(() => import("creditos/App"));

const App: React.FC = () => {
  const [bankNameLabel, setBankNameLabel] = useState("");
  const [companyNameLabel, setCompanyNameLabel] = useState("");
  const [personNameLabel, setPersonNameLabel] = useState("");

  useEffect(() => {
    const fetchTabs = async () => {
      const useLabelsStore = await import("utils/useLabelsStore").then(
        (mod) => mod.useLabelsStore
      );
      setBankNameLabel(useLabelsStore.getState().bankNameLabel);
      setCompanyNameLabel(useLabelsStore.getState().companyNameLabel);
      setPersonNameLabel(useLabelsStore.getState().personNameLabel);
    };

    fetchTabs();
  }, []);

  return (
    <Container fluid className="pt-4 pe-4 pb-4">
      <Row className="align-items-center justify-content-between mb-4">
        <Col xs="auto">
          <BankProfile name={bankNameLabel} />
        </Col>
        <Col xs="auto">
          <UserProfile company={companyNameLabel} person={personNameLabel} />
        </Col>
      </Row>

      <Suspense fallback={<Loading />}>
        <Row>
          <Col xs="auto" className="pe-4">
            <Sidebar />
          </Col>

          <Col>
            <Routes>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard/*" element={<DashboardApp />} />
              <Route
                path="/creditos/*"
                element={
                  <Suspense fallback={<Loading />}>
                    <CreditosApp />
                  </Suspense>
                }
              />
            </Routes>
          </Col>
        </Row>
      </Suspense>
    </Container>
  );
};

export default App;
