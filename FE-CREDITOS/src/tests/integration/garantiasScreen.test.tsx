/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { render, screen } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { useGarantiasFetch } from "../../hooks/useGarantiasFetch";
import { useDocumentosFetch } from "../../hooks/useDocumentosFetch";
import { useLabelsStore } from "../../store/useLabelsStore";
import GarantiasScreen from "../../screens/garantias.screen";

jest.mock("../../components/NavTabs", () => () => (
  <div data-testid="nav-tabs">NavTabs</div>
));
jest.mock("../../components/Loading", () => () => (
  <div data-testid="loading">Loading...</div>
));
jest.mock(
  "../../components/Error",
  () =>
    ({ message }: { message: string }) =>
      <div data-testid="error">{message}</div>
);
jest.mock("../../screens/tabs/Details", () => ({ data }: any) => (
  <div data-testid="details">Details: {JSON.stringify(data)}</div>
));
jest.mock("../../screens/tabs/Documents", () => ({ data }: any) => (
  <div data-testid="documents">Documents: {JSON.stringify(data)}</div>
));

jest.mock("../../hooks/useGarantiasFetch", () => ({
  useGarantiasFetch: jest.fn(),
}));
jest.mock("../../hooks/useDocumentosFetch", () => ({
  useDocumentosFetch: jest.fn(),
}));
jest.mock("../../store/useLabelsStore", () => ({ useLabelsStore: jest.fn() }));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

const mockGarantiasData = { mock: "garantia" };
const mockDocumentosData = { mock: "documento" };

describe("<GarantiasScreen />", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useGarantiasFetch as jest.Mock).mockReturnValue({
      data: mockGarantiasData,
      loading: false,
      error: null,
    });

    (useDocumentosFetch as jest.Mock).mockReturnValue({
      data: mockDocumentosData,
      loading: false,
      error: null,
    });

    (useLabelsStore as unknown as jest.Mock).mockReturnValue({
      garantiasTabs: [],
    });

    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/creditos/garantias",
    });
  });

  it("deve mostrar loading quando os dados estão a ser carregados", () => {
    (useGarantiasFetch as jest.Mock).mockReturnValueOnce({
      data: null,
      loading: true,
      error: null,
    });

    (useDocumentosFetch as jest.Mock).mockReturnValueOnce({
      data: null,
      loading: true,
      error: null,
    });

    render(<GarantiasScreen />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("deve mostrar erro quando ocorre erro em qualquer fetch", () => {
    (useGarantiasFetch as jest.Mock).mockReturnValueOnce({
      data: null,
      loading: false,
      error: "Erro Garantias",
    });

    render(<GarantiasScreen />);
    expect(screen.getByTestId("error")).toHaveTextContent("Erro Garantias");
  });

  it("deve renderizar Details quando o path não tem /documentos", () => {
    render(<GarantiasScreen />);
    expect(screen.getByTestId("nav-tabs")).toBeInTheDocument();
    expect(screen.getByTestId("details")).toBeInTheDocument();
    expect(screen.queryByTestId("documents")).not.toBeInTheDocument();
  });

  it("deve renderizar Documents quando o path tem /documentos", () => {
    (useLocation as jest.Mock).mockReturnValueOnce({
      pathname: "/creditos/garantias/documentos",
    });

    render(<GarantiasScreen />);
    expect(screen.getByTestId("nav-tabs")).toBeInTheDocument();
    expect(screen.getByTestId("documents")).toBeInTheDocument();
    expect(screen.queryByTestId("details")).not.toBeInTheDocument();
  });
});
