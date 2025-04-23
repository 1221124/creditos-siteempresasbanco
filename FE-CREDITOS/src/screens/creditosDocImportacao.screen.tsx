import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useCreditoDocImportStore } from "../store/useCreditoDocImportStore";
import CreditoTabs from "../components/CreditoTabs";
import Details from "./Details";

const CreditosDocImportacaoScreen: React.FC = () => {
  const { data } = useCreditoDocImportStore();
  const [filteredData, setFilteredData] = useState(data);

  return (
    <Container className="mt-4">
      <CreditoTabs tabs={["Detalhes"]} />
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
