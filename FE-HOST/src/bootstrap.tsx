import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HostedProvider } from "utils/HostedContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("!root FE-HOST");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HostedProvider hosted={true}>
        <App />
      </HostedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
