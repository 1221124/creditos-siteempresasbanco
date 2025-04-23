import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CreditoTabs from "../components/CreditoTabs";
import { useCreditoDocImportStore } from "../store/useCreditoDocImportStore";
import Details from "./tabs/Details";

const CreditosDocImportacaoScreen: React.FC = () => {
  const { data } = useCreditoDocImportStore();
  const [filteredData, setFilteredData] = useState(data);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container className="mt-4">
      <CreditoTabs
        tabs={["Detalhes"]}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      <Details
        data={data}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        isCreditoDocImportacao={true}
      />
    </Container>
  );
};

export default CreditosDocImportacaoScreen;
