import React from "react";
import { Container } from "react-bootstrap";
import Details from "./tabs/Details";
import { useLocation } from "react-router-dom";
import { useGarantiasFetch } from "../hooks/useGarantiasFetch";
import { useDocumentosFetch } from "../hooks/useDocumentosFetch";
import Documents from "./tabs/Documents";
import { useLabelsStore } from "utils/useLabelsStore";

const Loading = React.lazy(() => import("utils/Loading"));
const Error = React.lazy(() => import("utils/Error"));
const NavTabs = React.lazy(() => import("utils/NavTabs"));

const GarantiasScreen: React.FC = () => {
  const {
    data: garantiasData,
    loading: loadingGarantias,
    error: errorGarantias,
  } = useGarantiasFetch();
  const {
    data: documentosData,
    loading: loadingDocumentos,
    error: errorDocumentos,
  } = useDocumentosFetch();

  const { pathname } = useLocation();
  const garantiasTabs = useLabelsStore((state) => state.garantiasTabs);

  if (loadingGarantias || loadingDocumentos) return <Loading />;
  if (errorGarantias || errorDocumentos)
    return <Error message={(errorGarantias || errorDocumentos) as string} />;

  return (
    <Container className="mt-4">
      <NavTabs data-testid="nav-tabs" tabs={garantiasTabs} align="start" />
      {pathname.includes("/documentos") ? (
        <Documents data={documentosData} />
      ) : (
        <Details data={garantiasData} isCreditoDocImportacao={false} />
      )}
    </Container>
  );
};

export default GarantiasScreen;
