import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("!root FE-CREDITOS");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
