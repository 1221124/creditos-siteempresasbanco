import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BankProfile from "./components/BankProfile";
import UserProfile from "./components/UserProfile";
import Sidebar from "./components/Sidebar";
import "utils/styles";
import { useLabelsStore } from "utils/useLabelsStore";

const Loading = lazy(() => import("utils/Loading"));

const DashboardApp = lazy(() => import("dashboard/App"));
const CreditosApp = lazy(() => import("creditos/App"));

const App: React.FC = () => {
  const bankNameLabel = useLabelsStore((state) => state.bankNameLabel);
  const companyNameLabel = useLabelsStore((state) => state.companyNameLabel);
  const personNameLabel = useLabelsStore((state) => state.personNameLabel);

  return (
    <div
      className="pt-4 pe-4 pb-4 d-flex flex-column"
      style={{ height: "100%" }}
    >
      <Row className="align-items-center justify-content-between mb-4">
        <Col xs="auto">
          <BankProfile name={bankNameLabel} />
        </Col>
        <Col xs="auto">
          <UserProfile company={companyNameLabel} person={personNameLabel} />
        </Col>
      </Row>

      <Suspense fallback={<Loading />}>
        <Row className="flex-grow-1" style={{ minHeight: 0 }}>
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
    </div>
  );
};

export default App;
