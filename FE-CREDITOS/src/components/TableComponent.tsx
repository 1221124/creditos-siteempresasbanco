/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ExpandableInfo from "./ExpandableInfo";
import { useFaturasFetch } from "../hooks/useFaturasFetch";
import { useLabelsStore } from "../store/useLabelsStore";
import PdfPreview from "./PdfPreview";

interface TableComponentProps {
  headers: string[];
  data: any[];
}

const TableComponent = ({ headers, data }: TableComponentProps) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const { data: invoicesData, loading, error } = useFaturasFetch();
  const extraInfoHeaders = useLabelsStore((state) => state.extraInfoHeaders);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <Table responsive borderless>
      <thead>
        <tr className="border-bottom">
          {headers.map((header, index) => (
            <th key={index} className="fw-normal">
              <strong>{header}</strong>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr className={rowIndex !== 0 ? "border-top" : ""}>
              {Object.values(row)
                .slice(0, row.extra === undefined ? undefined : -1)
                .map((value, colIndex) => {
                  const isNegative = typeof value === "number" && value < 0;

                  return (
                    <td
                      key={colIndex}
                      className={`${isNegative ? "text-danger" : ""}`}
                    >
                      {isNegative
                        ? new Intl.NumberFormat("pt-PT", {
                            style: "currency",
                            currency: "EUR",
                          }).format(value)
                        : String(value)}
                    </td>
                  );
                })}
              {row.responsabilidade === undefined && (
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
            {expandedRow === rowIndex && row.responsabilidade === undefined && (
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
                    <div className="p-3">
                      <PdfPreview fileUrl="/fake.pdf" />
                    </div>
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
