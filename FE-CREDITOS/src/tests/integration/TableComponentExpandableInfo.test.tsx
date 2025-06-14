/* eslint-disable react/display-name */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import * as fetchHook from "../../services/service";
import * as labelsStore from "utils/useLabelsStore";
import TableComponent from "../../components/TableComponent";

// Mocks parciais
jest.mock("utils/PdfPreview", () => () => <div data-testid="pdf-preview">PDF Preview</div>);
jest.mock("../../components/Invoices", () => () => <div data-testid="invoices">Invoices Preview</div>);
jest.mock("../../components/CardItem", () => ({ title, value }: any) => <div data-testid="card-item">{`${title}: ${value}`}</div>);

describe("TableComponent + ExpandableInfo Integration", () => {
  const headers = ["ID", "Nome"];
  const defaultExtraInfo = {
    field1: 1,
    field2: 2
  };

  const mockDataWithExtra = [
    { id: 1, nome: "Nome", extra: defaultExtraInfo },
  ];

  const mockDataWithoutExtra = [
    { nome: "Doc1", data: "01/01/1900", pdf: "/fake.pdf" },
    { nome: "Doc2", valor: "01/01/1900", pdf: "/fake.pdf" },
  ];

  beforeEach(() => {
    jest.spyOn(fetchHook, "useFetchData").mockReturnValue({
      data: mockDataWithoutExtra,
      loading: false,
      error: null,
    });

    jest
      .spyOn(labelsStore, "useLabelsStore")
      .mockImplementation((...args: any[]) =>
        args[0]({
          extraInfoHeaders: ["Field1", "Field2"],
          seeInvoicesLabel: "Ver Faturas",
        })
      );
  });
  test("Teste 1: renderiza ExpandableInfo quando \"data\" tem atributo \"extra\"", async () => {
    render(<TableComponent headers={headers} data={mockDataWithExtra} />);

    fireEvent.click(screen.getAllByTestId("expand-row-button")[0]);

    await waitFor(() => {
      expect(screen.getByTestId("expandable-info")).toBeInTheDocument();
    });
  });

  test("Teste 2: renderiza PdfPreview quando \"data\" não tem atributo \"extra\"", async () => {
    render(<TableComponent headers={headers} data={mockDataWithoutExtra} />);

    fireEvent.click(screen.getAllByTestId("expand-row-button")[0]);

    await waitFor(() => {
      expect(screen.getByTestId("pdf-preview")).toBeInTheDocument();
    });
  });
});
