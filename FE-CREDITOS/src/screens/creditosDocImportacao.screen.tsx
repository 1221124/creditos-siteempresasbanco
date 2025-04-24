import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavTabs from "../components/NavTabs";
import { useCreditoDocImportStore } from "../store/useCreditoDocImportStore";
import Details from "./tabs/Details";

const CreditosDocImportacaoScreen: React.FC = () => {
  const { data } = useCreditoDocImportStore();
  const [filteredData, setFilteredData] = useState(data);

  const tabs = [
    {
      label: "Detalhes",
      path: "/creditos/doc-importacao",
    },
  ];

  return (
    <Container className="mt-4">
      <NavTabs tabs={tabs} align="start" />
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
