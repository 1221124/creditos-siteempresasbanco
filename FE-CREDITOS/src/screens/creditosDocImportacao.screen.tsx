import React from "react";
import { Container } from "react-bootstrap";
import NavTabs from "../components/NavTabs";
import Details from "./tabs/Details";
import { useCreditosDocImportFetch } from "../hooks/useCreditosDocImportFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const CreditosDocImportacaoScreen: React.FC = () => {
  const { data, loading, error } = useCreditosDocImportFetch();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const tabs = [
    {
      label: "Detalhes",
      path: "/creditos/doc-importacao",
    },
  ];

  return (
    <Container className="mt-4">
      <NavTabs tabs={tabs} align="start" />
      <Details data={data} isCreditoDocImportacao={true} />
    </Container>
  );
};

export default CreditosDocImportacaoScreen;
