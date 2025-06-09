import React from "react";
import Details from "./tabs/Details";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGarantiasFetch } from "../hooks/useGarantiasFetch";
import { useDocumentosFetch } from "../hooks/useDocumentosFetch";
import Documents from "./tabs/Documents";
import { useLabelsStore } from "utils/useLabelsStore";

const Loading = React.lazy(() => import("utils/Loading"));
const Error = React.lazy(() => import("utils/Error"));
const NavTabs = React.lazy(() => import("utils/NavTabs"));

const GarantiasScreen: React.FC = () => {
  const {
    data: garantiasData,
    loading: loadingGarantias,
    error: errorGarantias,
  } = useGarantiasFetch();
  const {
    data: documentosData,
    loading: loadingDocumentos,
    error: errorDocumentos,
  } = useDocumentosFetch();

  const garantiasTabs = useLabelsStore((state) => state.garantiasTabs);
  const walletTabs = useLabelsStore((state) => state.walletTabs);
  const garantiasLabel = useLabelsStore((state) => state.garantiasLabel);

  const combinedTabs = [
    ...walletTabs,
    {
      label: garantiasLabel,
      path: "/garantias-e-avales",
      module: "creditos",
    },
  ];

  if (loadingGarantias || loadingDocumentos) return <Loading />;
  if (errorGarantias || errorDocumentos)
    return <Error message={(errorGarantias || errorDocumentos) as string} />;

  return (
    <div>
      <h2 className="mb-4">{garantiasLabel}</h2>
      <NavTabs tabs={combinedTabs} tabsStyle={1} />
      <NavTabs tabs={garantiasTabs} tabsStyle={2} />
      <Routes>
        <Route index element={<Navigate to="detalhes" replace />} />
        <Route
          path="detalhes"
          element={
            <Details data={garantiasData} isCreditoDocImportacao={false} />
          }
        />
        <Route
          path="documentos"
          element={<Documents data={documentosData} />}
        />
      </Routes>
    </div>
  );
};

export default GarantiasScreen;
