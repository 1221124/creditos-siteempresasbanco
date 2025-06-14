/* eslint-disable react/display-name */
import { render, screen, waitFor } from "@testing-library/react";
import * as fetchHook from "../../services/service";
import * as labelsStore from "utils/useLabelsStore";
import { MemoryRouter } from "react-router-dom";
import GarantiasScreen from "../../screens/garantias.screen";

jest.mock("utils/Loading", () => ({
  __esModule: true,
  default: () => <div data-testid="loading">Loading Component</div>,
}));

jest.mock("utils/Error", () => ({
  __esModule: true,
  default: () => <div data-testid="error">Error Component</div>,
}));

jest.mock("utils/NavTabs", () => ({
  __esModule: true,
  default: () => <div data-testid="nav-tabs">NavTabs Component</div>,
}));
jest.mock("../../screens/tabs/Details", () => ({
  __esModule: true,
  default: () => <div data-testid="details">Details Component</div>,
}));
jest.mock("../../screens/tabs/Documents", () => ({
  __esModule: true,
  default: () => <div data-testid="documents">Documents Component</div>,
}));

describe("GarantiasScreen", () => {
  beforeEach(() => {
    jest
      .spyOn(labelsStore, "useLabelsStore")
      .mockImplementation((...args: any[]) =>
        args[0]({
          garantiasTabs: [
            { path: "detalhes", label: "Detalhes" },
            { path: "documentos", label: "Documentos" },
          ],
          garantiasHeaders: [],
          creditosDocImportHeaders: [],
          beneficiarySearchLabel: "Pesquisar beneficiário",
          documentosHeaders: [],
          walletTabs: [],
          garantiasLabel: "Garantias",
        })
      );
  });

  test("Teste 1: renderiza Loading quando useFetchData retorna loading=true", async () => {
    jest.spyOn(fetchHook, "useFetchData").mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/detalhes"]}>
        <GarantiasScreen garantiasData={[]} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toBeInTheDocument();
    });
  });

  test("Teste 2: renderiza Error quando useFetchData retorna error!==null", async () => {
    jest.spyOn(fetchHook, "useFetchData").mockReturnValue({
      data: [],
      loading: false,
      error: "Erro",
    });

    render(
      <MemoryRouter initialEntries={["/detalhes"]}>
        <GarantiasScreen garantiasData={[]} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("error")).toBeInTheDocument();
    });
  });

  test("Teste 3: renderiza Details quando loading e error são, respetivamente, false e null e pathname não inclui 'documentos'", async () => {
    jest.spyOn(fetchHook, "useFetchData").mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/detalhes"]}>
        <GarantiasScreen garantiasData={[]} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("details")).toBeInTheDocument();
    });
  });

  test("Teste 4: renderiza Documents quando loading e error documentos são, respetivamente, false e null e pathname inclui 'documentos'", async () => {
    jest.spyOn(fetchHook, "useFetchData").mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/documentos"]}>
        <GarantiasScreen garantiasData={[]} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("documents")).toBeInTheDocument();
    });
  });
});
