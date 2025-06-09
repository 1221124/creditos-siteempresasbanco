import { Routes, Route, BrowserRouter } from "react-router-dom";
import GarantiasScreen from "./screens/garantias.screen";
import CreditosDocImportacaoScreen from "./screens/creditosDocImportacao.screen";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHosted } from "utils/HostedContext";
import "utils/styles";
import CreditWallet from "./components/CreditWallet";
import { useCreditWalletCards } from "./hooks/useCreditWalletCards";
import Loading from "utils/Loading";
import Error from "utils/Error";

export default function App() {
  const { hosted } = useHosted();
  const { cards, garantiasData, creditosData, loading, error } =
    useCreditWalletCards();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const content = (
    <Routes>
      <Route index element={<CreditWallet cards={cards} />} />
      <Route
        path="garantias-e-avales/*"
        element={<GarantiasScreen garantiasData={garantiasData} />}
      />
      <Route
        path="doc-importacao/*"
        element={<CreditosDocImportacaoScreen creditosData={creditosData} />}
      />
    </Routes>
  );

  return hosted ? content : <BrowserRouter>{content}</BrowserRouter>;
}
