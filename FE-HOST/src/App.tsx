import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTabs from "./components/NavTabs";

const GarantiasScreen = lazy(() => import("creditos/GarantiasEAvales"));
const CreditosDocImportacaoScreen = lazy(
  () => import("creditos/CreditosDocImportacao")
);

const App: React.FC = () => {
  return (
    <Container className="py-4">
      <NavTabs />
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
            path="/garantias-e-avales"
            element={
              <Suspense
                fallback={
                  <Spinner
                    className="d-flex justify-content-center align-items-center"
                    animation="border"
                  />
                }
              >
                <GarantiasScreen />
              </Suspense>
            }
          />
          <Route
            path="/creditos-doc-importacao"
            element={
              <Suspense
                fallback={
                  <Spinner
                    className="d-flex justify-content-center align-items-center"
                    animation="border"
                  />
                }
              >
                <CreditosDocImportacaoScreen />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
