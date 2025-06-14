import React, { Suspense, useState } from "react";
import { Table } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ExpandableInfo from "./ExpandableInfo";
import { useLabelsStore } from "utils/useLabelsStore";
import { Documento } from "../types/types";
import Loading from "utils/Loading";
import { ENDPOINTS } from "../api/config";
import { useFetchData } from "../services/service";

const PdfPreview = React.lazy(() => import("utils/PdfPreview"));

type TableComponentProps = {
  headers: string[];
  data: any[];
  selectedDocuments?: Documento[];
  setSelectedDocuments?: React.Dispatch<React.SetStateAction<Documento[]>>;
};

const TableComponent = ({
  headers,
  data,
  selectedDocuments,
  setSelectedDocuments,
}: TableComponentProps) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const {
    data: invoicesData,
    loading,
    error,
  } = useFetchData<Documento>(ENDPOINTS.faturas);
  const extraInfoHeaders = useLabelsStore((state) => state.extraInfoHeaders);

  const extra = data.length > headers.length;

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const toggleSelectDocument = (doc: Documento) => {
    if (!setSelectedDocuments || !selectedDocuments) return;

    const isSelected = selectedDocuments.some((d) => d.nome === doc.nome);

    if (isSelected) {
      setSelectedDocuments(
        selectedDocuments.filter((d) => d.nome !== doc.nome)
      );
    } else {
      setSelectedDocuments([...selectedDocuments, doc]);
    }
  };

  const isDocumentSelected = (doc: Documento) => {
    if (!selectedDocuments) return false;
    return selectedDocuments.some((d) => d.nome === doc.nome);
  };

  return (
    <Table responsive borderless>
      <thead>
        <tr className="border-bottom border-secondary">
          {selectedDocuments && setSelectedDocuments && (
            <th style={{ backgroundColor: "#f8f9fa", width: "40px" }}></th>
          )}
          {headers.map((header, index) => (
            <th
              key={index}
              className="fw-normal"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <strong>{header}</strong>
            </th>
          ))}
          {extra && <th style={{ backgroundColor: "#f8f9fa" }} />}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr className={rowIndex !== 0 ? "border-top" : ""}>
              {selectedDocuments && setSelectedDocuments && (
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={isDocumentSelected(row as Documento)}
                    onChange={() => toggleSelectDocument(row as Documento)}
                    style={{ width: "20px", height: "20px" }}
                  />
                </td>
              )}
              {Object.entries(row)
                .slice(0, row.extra === undefined ? undefined : -1)
                .map(([key, value], colIndex) => {
                  if (key === "pdf") return null;
                  const isCurrency = /[.,]\d+$/.test(value as string);
                  const isNegative = isCurrency && Number(value) < 0;

                  return (
                    <td
                      key={colIndex}
                      className={`${isNegative ? "text-danger" : ""}`}
                    >
                      {isCurrency
                        ? new Intl.NumberFormat("pt-PT", {
                            style: "currency",
                            currency: "EUR",
                          }).format(Number(value))
                        : String(value)}
                    </td>
                  );
                })}
              {extra && (
                <td className="text-center">
                  <button
                    onClick={() => toggleRow(rowIndex)}
                    className="btn btn-sm btn-link p-0"
                  >
                    {expandedRow === rowIndex ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </td>
              )}
            </tr>
            {expandedRow === rowIndex && extra && (
              <tr>
                <td
                  colSpan={
                    headers.length +
                    1 +
                    (selectedDocuments && setSelectedDocuments ? 1 : 0)
                  }
                  className="bg-light"
                >
                  {row.extra != null ? (
                    <ExpandableInfo
                      headers={extraInfoHeaders}
                      data={row.extra}
                      invoices={invoicesData}
                      loading={loading}
                      error={error}
                    />
                  ) : (
                    <Suspense fallback={<Loading />}>
                      <div className="p-3">
                        <PdfPreview
                          fileUrl={(row as unknown as Documento).pdf}
                        />
                      </div>
                    </Suspense>
                  )}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
