import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import { useHosted } from "utils/HostedContext";
import "utils/styles";

const Loading = lazy(() => import("utils/Loading"));

const App: React.FC = () => {
  const { hosted } = useHosted();

  const DashboardApp = (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );

  return hosted ? DashboardApp : <BrowserRouter>{DashboardApp}</BrowserRouter>;
};

export default App;
