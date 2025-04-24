import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useGarantiasStore } from "../store/useGarantiasStore";
import NavTabs from "../components/NavTabs";
import Details from "./tabs/Details";
import { useLocation } from "react-router-dom";
import Documents from "./tabs/Documents";
import { useDocumentosStore } from "../store/useDocumentosStore";

const GarantiasScreen: React.FC = () => {
  const { data: garantiasData } = useGarantiasStore();
  const { data: documentosData } = useDocumentosStore();

  const { pathname } = useLocation();

  const [filteredData, setFilteredData] = useState(garantiasData);

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

  return (
    <Container className="mt-4">
      <NavTabs tabs={tabs} align="start" />
      {pathname.includes("/documentos") ? (
        <Documents data={documentosData} />
      ) : (
        <Details
          data={garantiasData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          isCreditoDocImportacao={false}
        />
      )}
    </Container>
  );
};

export default GarantiasScreen;
