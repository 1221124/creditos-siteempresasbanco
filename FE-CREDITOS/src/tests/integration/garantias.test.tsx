import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGarantiasFetch } from "../../hooks/useGarantiasFetch";
import { useDocumentosFetch } from "../../hooks/useDocumentosFetch";
import GarantiasScreen from "../../screens/garantias.screen";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

jest.mock("../../hooks/useGarantiasFetch");
jest.mock("../../hooks/useDocumentosFetch");

const mockUseGarantiasFetch = useGarantiasFetch as jest.Mock;
const mockUseDocumentosFetch = useDocumentosFetch as jest.Mock;
const mockUseLocation = useLocation as jest.Mock;

describe("GarantiasScreen", () => {
  it("mostra o componente Loading quando loading é true (useGarantiasFetch)", () => {
    // ARRANGE
    mockUseGarantiasFetch.mockReturnValue({
      loading: true,
      error: null,
      data: null,
    });
    mockUseDocumentosFetch.mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });
    mockUseLocation.mockReturnValue({ pathname: "/" });

    // ACT
    render(
      <MemoryRouter>
        <GarantiasScreen />
      </MemoryRouter>
    );

    // ASSERT
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("mostra o componente Error quando error não é null (useGarantiasFetch)", () => {
    // ARRANGE
    mockUseGarantiasFetch.mockReturnValue({
      loading: false,
      error: "Erro em garantias",
      data: null,
    });
    mockUseDocumentosFetch.mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });
    mockUseLocation.mockReturnValue({ pathname: "/" });

    // ACT
    render(
      <MemoryRouter>
        <GarantiasScreen />
      </MemoryRouter>
    );

    // ASSERT
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("mostra o componente Details com o data retornado quando loading é false e error é null (useGarantiasFetch) e pathname não contém '/documentos'", () => {
    // ARRANGE
    const mockData = [{ id: 1, montante: "100 EUR" }];
    mockUseGarantiasFetch.mockReturnValue({
      loading: false,
      error: null,
      data: mockData,
    });
    mockUseDocumentosFetch.mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });
    mockUseLocation.mockReturnValue({ pathname: "/" });

    // ACT
    render(
      <MemoryRouter>
        <GarantiasScreen />
      </MemoryRouter>
    );

    // ASSERT
    expect(screen.getByTestId("details")).toBeInTheDocument();
  });

  it("mostra o componente Loading quando loading é true (useDocumentosFetch)", () => {
    // ARRANGE
    mockUseGarantiasFetch.mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });
    mockUseDocumentosFetch.mockReturnValue({
      loading: true,
      error: null,
      data: null,
    });
    mockUseLocation.mockReturnValue({ pathname: "/documentos" });

    // ACT
    render(
      <MemoryRouter>
        <GarantiasScreen />
      </MemoryRouter>
    );

    // ASSERT
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("mostra o componente Error quando error não é null (useDocumentosFetch)", () => {
    // ARRANGE
    mockUseGarantiasFetch.mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });
    mockUseDocumentosFetch.mockReturnValue({
      loading: false,
      error: "Erro em documentos",
      data: null,
    });
    mockUseLocation.mockReturnValue({ pathname: "/documentos" });

    // ACT
    render(
      <MemoryRouter>
        <GarantiasScreen />
      </MemoryRouter>
    );

    // ASSERT
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("mostra o componente Documents com o data retornado quando loading é false e error é null (useDocumentosFetch) e pathname contém '/documentos'", () => {
    // ARRANGE
    const mockData = [{ id: 1, name: "Documento 1" }];
    mockUseGarantiasFetch.mockReturnValue({
      loading: false,
      error: null,
      data: null,
    });
    mockUseDocumentosFetch.mockReturnValue({
      loading: false,
      error: null,
      data: mockData,
    });
    mockUseLocation.mockReturnValue({ pathname: "/documentos" });

    // ACT
    render(
      <MemoryRouter>
        <GarantiasScreen />
      </MemoryRouter>
    );

    // ASSERT
    expect(screen.getByTestId("documents")).toBeInTheDocument();
  });
});
