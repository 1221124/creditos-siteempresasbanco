import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("!root FE-CREDITOS");
}

const root = createRoot(rootElement);
const isStandalone = () => !window.history.state?.hosted;

root.render(
  <React.StrictMode>
    {isStandalone() ? (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ) : (
      <App />
    )}
  </React.StrictMode>
);
