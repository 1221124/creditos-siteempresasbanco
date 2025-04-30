import React from "react";
import { Container } from "react-bootstrap";
import NavTabs from "../components/NavTabs";
import Details from "./tabs/Details";
import { useCreditosDocImportFetch } from "../hooks/useCreditosDocImportFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useLabelsStore } from "../store/useLabelsStore";

const CreditosDocImportacaoScreen: React.FC = () => {
  const { data, loading, error } = useCreditosDocImportFetch();
  const creditosDocImportTabs = useLabelsStore(
    (state) => state.creditosDocImportTabs
  );

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <Container className="mt-4">
      <NavTabs tabs={creditosDocImportTabs} align="start" />
      <Details data={data} isCreditoDocImportacao={true} />
    </Container>
  );
};

export default CreditosDocImportacaoScreen;
