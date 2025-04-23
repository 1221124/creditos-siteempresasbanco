import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useGarantiasStore } from "../store/useGarantiasStore";
import CreditoTabs from "../components/CreditoTabs";
import Details from "./Details";

const GarantiasScreen: React.FC = () => {
  const { data } = useGarantiasStore();
  const [filteredData, setFilteredData] = useState(data);

  return (
    <Container className="mt-4">
      <CreditoTabs tabs={["Detalhes", "Documentos"]} />
      <Details
        data={data}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        isCreditoDocImportacao={false}
      />
    </Container>
  );
};

export default GarantiasScreen;
