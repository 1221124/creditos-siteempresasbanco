import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useGarantiasStore } from "../store/useGarantiasStore";
import CreditoTabs from "../components/CreditoTabs";
import Details from "./tabs/Details";
import Documents from "./tabs/Documents";

const GarantiasScreen: React.FC = () => {
  const { data } = useGarantiasStore();
  const [filteredData, setFilteredData] = useState(data);
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
          data={data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          isCreditoDocImportacao={false}
        />
      ) : (
        <Documents />
      )}
    </Container>
  );
};

export default GarantiasScreen;
