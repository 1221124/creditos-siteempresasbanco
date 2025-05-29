import React, { createContext, useContext } from "react";

type HostedContextType = {
  hosted: boolean;
};

const HostedContext = createContext<HostedContextType | undefined>(undefined);

export const HostedProvider: React.FC<{
  hosted: boolean;
  children: React.ReactNode;
}> = ({ hosted, children }) => (
  <HostedContext.Provider value={{ hosted }}>{children}</HostedContext.Provider>
);

export function useHosted() {
  const context = useContext(HostedContext);
  if (!context) throw new Error("useHosted must be used within HostedProvider");
  return context;
}
