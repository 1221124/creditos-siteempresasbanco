import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BankProfile from "./components/BankProfile";
import UserProfile from "./components/UserProfile";
import HomePage from "./components/HomePage";

const NavTabs = lazy(() => import("creditos/NavTabs"));
const Loading = lazy(() => import("creditos/Loading"));
const CreditosApp = lazy(() => import("creditos/App"));

const App: React.FC = () => {
  const [appTabs, setAppTabs] = useState([]);
  const [homeLabel, setHomeLabel] = useState("");
  const [bankNameLabel, setBankNameLabel] = useState("");
  const [companyNameLabel, setCompanyNameLabel] = useState("");
  const [personNameLabel, setPersonNameLabel] = useState("");

  useEffect(() => {
    const fetchTabs = async () => {
      const useLabelsStore = await import("creditos/useLabelsStore").then(
        (mod) => mod.useLabelsStore
      );
      setAppTabs(useLabelsStore.getState().appTabs);
      setHomeLabel(useLabelsStore.getState().homeLabel);
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
          {/*tabs de nível máximo*/}
          <NavTabs tabs={appTabs} topLevel={true} />
        </Col>
        <Col xs="auto">
          <UserProfile company={companyNameLabel} person={personNameLabel} />
        </Col>
      </Row>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Navigate to="/creditos" />} />
          <Route
            path="/creditos"
            element={<HomePage bankName={bankNameLabel} message={homeLabel} />}
          />
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
