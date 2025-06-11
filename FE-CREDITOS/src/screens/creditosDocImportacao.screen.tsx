import React from "react";
import Details from "./tabs/Details";
import { useLabelsStore } from "utils/useLabelsStore";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreditoDocImport } from "../types/types";

const NavTabs = React.lazy(() => import("utils/NavTabs"));

type CreditosDocImportacaoScreenProps = {
  creditosData: CreditoDocImport[];
};

const CreditosDocImportacaoScreen: React.FC<
  CreditosDocImportacaoScreenProps
> = ({ creditosData }) => {
  const creditosDocImportHeaders = useLabelsStore(
    (state) => state.creditosDocImportHeaders
  );
  const creditosDocImportTabs = useLabelsStore(
    (state) => state.creditosDocImportTabs
  );
  const walletTabs = useLabelsStore((state) => state.walletTabs);
  const creditosDocImportLabel = useLabelsStore(
    (state) => state.creditosDocImportLabel
  );

  const combinedTabs = [
    ...walletTabs,
    {
      label: creditosDocImportLabel,
      path: "/doc-importacao",
      module: "creditos",
    },
  ];

  return (
    <div>
      <h2 className="mb-4">{creditosDocImportLabel}</h2>
      <NavTabs tabs={combinedTabs} tabsStyle={1} />
      <div className="mb-4">
        <NavTabs tabs={creditosDocImportTabs} tabsStyle={2} />
      </div>
      <Routes>
        <Route index element={<Navigate to="detalhes" replace />} />
        <Route
          path="detalhes"
          element={
            <Details
              headers={creditosDocImportHeaders}
              data={creditosData}
              showOperationsSummary={false}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default CreditosDocImportacaoScreen;
