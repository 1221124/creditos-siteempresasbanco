import React from "react";
import { Container } from "react-bootstrap";
import Details from "./tabs/Details";
import { useCreditosDocImportFetch } from "../hooks/useCreditosDocImportFetch";
import { useLabelsStore } from "utils/useLabelsStore";

const Loading = React.lazy(() => import("utils/Loading"));
const Error = React.lazy(() => import("utils/Error"));
const NavTabs = React.lazy(() => import("utils/NavTabs"));

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
