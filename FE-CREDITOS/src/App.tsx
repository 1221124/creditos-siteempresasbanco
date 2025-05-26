import { Routes, Route, Navigate } from "react-router-dom";
import GarantiasScreen from "./screens/garantias.screen";
import CreditosDocImportacaoScreen from "./screens/creditosDocImportacao.screen";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="garantias-e-avales" />} />
      <Route path="garantias-e-avales/*" element={<GarantiasScreen />} />
      <Route path="doc-importacao" element={<CreditosDocImportacaoScreen />} />
      <Route path="*" element={<div>Não encontrado</div>} />
    </Routes>
  );
}
