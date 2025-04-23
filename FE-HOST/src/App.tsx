import React, { lazy } from "react";

const CreditosApp = lazy(() => import("creditos/App"));

const App: React.FC = () => {
  return <CreditosApp />;
};

export default App;
