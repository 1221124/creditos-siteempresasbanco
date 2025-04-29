import React from "react";
import { Container } from "react-bootstrap";
import NavTabs from "../components/NavTabs";
import Details from "./tabs/Details";
import { useLocation } from "react-router-dom";
import Documents from "./tabs/Documents";
import { useGarantiasFetch } from "../hooks/useGarantiasFetch";
import { useDocumentosFetch } from "../hooks/useDocumentosFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

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

  const tabs = [
    {
      label: "Detalhes",
      path: "/creditos/garantias-e-avales",
    },
    {
      label: "Documentos",
      path: "/creditos/garantias-e-avales/documentos",
    },
  ];

  if (loadingGarantias || loadingDocumentos) return <Loading />;
  if (errorGarantias || errorDocumentos)
    return (
      <Error
        message={
          errorGarantias || errorDocumentos || "Um erro inesperado ocorreu"
        }
      />
    );

  return (
    <Container className="mt-4">
      <NavTabs tabs={tabs} align="start" />
      {pathname.includes("/documentos") ? (
        <Documents data={documentosData} />
      ) : (
        <Details data={garantiasData} isCreditoDocImportacao={false} />
      )}
    </Container>
  );
};

export default GarantiasScreen;
