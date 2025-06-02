import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import { useHosted } from "utils/HostedContext";
import "./styles/App.css";

const Loading = lazy(() => import("utils/Loading"));

const App: React.FC = () => {
  const [homeLabel, setHomeLabel] = useState("");
  const [bankNameLabel, setBankNameLabel] = useState("");

  const { hosted } = useHosted();

  useEffect(() => {
    const fetchTabs = async () => {
      const useLabelsStore = await import("utils/useLabelsStore").then(
        (mod) => mod.useLabelsStore
      );
      setHomeLabel(useLabelsStore.getState().homeLabel);
      setBankNameLabel(useLabelsStore.getState().bankNameLabel);
    };

    fetchTabs();
  }, []);

  const DashboardApp = (
    <Container className="py-4">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            index
            path="/"
            element={<HomePage bankName={bankNameLabel} message={homeLabel} />}
          />
        </Routes>
      </Suspense>
    </Container>
  );

  return hosted ? DashboardApp : <BrowserRouter>{DashboardApp}</BrowserRouter>;
};

export default App;
