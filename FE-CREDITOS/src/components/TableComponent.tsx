import React, { Suspense, useState } from "react";
import { Table } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ExpandableInfo from "./ExpandableInfo";
import { useFaturasFetch } from "../hooks/useFaturasFetch";
import { useLabelsStore } from "utils/useLabelsStore";
import { Documento } from "../types/types";
import Loading from "utils/Loading";

const PdfPreview = React.lazy(() => import("utils/PdfPreview"));

type TableComponentProps = {
  headers: string[];
  data: any[];
};

const TableComponent = ({ headers, data }: TableComponentProps) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const { data: invoicesData, loading, error } = useFaturasFetch();
  const extraInfoHeaders = useLabelsStore((state) => state.extraInfoHeaders);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const extra = data.length > headers.length;

  return (
    <Table responsive borderless>
      <thead>
        <tr className="border-bottom border-secondary">
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
                <td colSpan={headers.length + 1} className="bg-light">
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
