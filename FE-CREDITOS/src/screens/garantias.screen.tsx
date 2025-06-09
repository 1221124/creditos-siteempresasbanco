import React from "react";
import Details from "./tabs/Details";
import { Routes, Route, Navigate } from "react-router-dom";
import Documents from "./tabs/Documents";
import { useLabelsStore } from "utils/useLabelsStore";
import { useFetchData } from "../hooks/useFetchData";
import { Documento, Garantia } from "../types/types";
import { ENDPOINTS } from "../api/endpoints";

const Loading = React.lazy(() => import("utils/Loading"));
const Error = React.lazy(() => import("utils/Error"));
const NavTabs = React.lazy(() => import("utils/NavTabs"));

type GarantiasScreenProps = {
  garantiasData: Garantia[];
};

const GarantiasScreen: React.FC<GarantiasScreenProps> = ({ garantiasData }) => {
  const {
    data: documentosData,
    loading,
    error,
  } = useFetchData<Documento>(ENDPOINTS.documentos);

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

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h2 className="mb-4">{garantiasLabel}</h2>
      <NavTabs tabs={combinedTabs} tabsStyle={1} />
      <div className="mb-4">
        <NavTabs tabs={garantiasTabs} tabsStyle={2} />
      </div>
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
