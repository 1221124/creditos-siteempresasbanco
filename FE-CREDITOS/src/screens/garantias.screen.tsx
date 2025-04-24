import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useGarantiasStore } from "../store/useGarantiasStore";
import CreditoTabs from "../components/CreditoTabs";
import Details from "./tabs/Details";
import Documents from "./tabs/Documents";
import { useDocumentosStore } from "../store/useDocumentosStore";

const GarantiasScreen: React.FC = () => {
  const { data: garantiasData } = useGarantiasStore();
  const { data: documentosData } = useDocumentosStore();

  const [filteredData, setFilteredData] = useState(garantiasData);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container className="mt-4">
      <CreditoTabs
        tabs={["Detalhes", "Documentos"]}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      {activeTab === 0 ? (
        <Details
          data={garantiasData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          isCreditoDocImportacao={false}
        />
      ) : (
        <Documents data={documentosData} />
      )}
    </Container>
  );
};

export default GarantiasScreen;
