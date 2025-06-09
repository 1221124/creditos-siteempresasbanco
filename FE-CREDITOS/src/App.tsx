import { Routes, Route, BrowserRouter } from "react-router-dom";
import GarantiasScreen from "./screens/garantias.screen";
import CreditosDocImportacaoScreen from "./screens/creditosDocImportacao.screen";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHosted } from "utils/HostedContext";
import "utils/styles";
import CreditWallet from "./components/CreditWallet";

export default function App() {
  const { hosted } = useHosted();

  const CreditosApp = (
    <Routes>
      <Route index element={<CreditWallet />} />
      <Route path="garantias-e-avales/*" element={<GarantiasScreen />} />
      <Route
        path="doc-importacao/*"
        element={<CreditosDocImportacaoScreen />}
      />
    </Routes>
  );

  return hosted ? CreditosApp : <BrowserRouter>{CreditosApp}</BrowserRouter>;
}
