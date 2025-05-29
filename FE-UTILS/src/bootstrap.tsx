import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HostedProvider } from "./context/HostedContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("!root FE-HOST");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HostedProvider hosted={true}>
      <App />
    </HostedProvider>
  </React.StrictMode>
);
