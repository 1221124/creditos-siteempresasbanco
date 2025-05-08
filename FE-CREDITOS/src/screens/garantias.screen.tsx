import React from "react";
import { Container } from "react-bootstrap";
import NavTabs from "../components/NavTabs";
import Details from "./tabs/Details";
import { useLocation } from "react-router-dom";
import { useGarantiasFetch } from "../hooks/useGarantiasFetch";
import { useDocumentosFetch } from "../hooks/useDocumentosFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useLabelsStore } from "../store/useLabelsStore";
import Documents from "./tabs/Documents";

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
