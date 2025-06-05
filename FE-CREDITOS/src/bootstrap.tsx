import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HostedProvider } from "utils/HostedContext";
import "utils/styles";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("!root FE-CREDITOS");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HostedProvider hosted={false}>
      <App />
    </HostedProvider>
  </React.StrictMode>
);
