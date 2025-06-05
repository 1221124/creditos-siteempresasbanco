import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BankProfile from "./components/BankProfile";
import UserProfile from "./components/UserProfile";

const NavTabs = lazy(() => import("utils/NavTabs"));
const Loading = lazy(() => import("utils/Loading"));

const DashboardApp = lazy(() => import("dashboard/App"));
const CreditosApp = lazy(() => import("creditos/App"));

const App: React.FC = () => {
  const [appTabs, setAppTabs] = useState([]);
  const [bankNameLabel, setBankNameLabel] = useState("");
  const [companyNameLabel, setCompanyNameLabel] = useState("");
  const [personNameLabel, setPersonNameLabel] = useState("");

  useEffect(() => {
    const fetchTabs = async () => {
      const useLabelsStore = await import("utils/useLabelsStore").then(
        (mod) => mod.useLabelsStore
      );
      setAppTabs(useLabelsStore.getState().appTabs);
      setBankNameLabel(useLabelsStore.getState().bankNameLabel);
      setCompanyNameLabel(useLabelsStore.getState().companyNameLabel);
      setPersonNameLabel(useLabelsStore.getState().personNameLabel);
    };

    fetchTabs();
  }, []);

  return (
    <Container className="py-4">
      <Row className="d-flex align-items-center justify-content-between mt-4">
        <Col xs="auto">
          <BankProfile name={bankNameLabel} />
        </Col>
        <Col xs="auto">
          <NavTabs tabs={appTabs} />
        </Col>
        <Col xs="auto">
          <UserProfile company={companyNameLabel} person={personNameLabel} />
        </Col>
      </Row>

      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Container>
  );
};

export default App;
