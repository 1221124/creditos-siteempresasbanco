/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Garantia } from "../store/creditos.types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ExpandableInfo from "./ExpandableInfo";

interface TableComponentProps {
  headers: string[];
  data: any[];
  isCreditoDocImportacao: boolean;
  isCurrency?: boolean;
}

const TableComponent = ({
  headers,
  data,
  isCreditoDocImportacao,
  isCurrency = false,
}: TableComponentProps) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

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
                .slice(0, isCreditoDocImportacao ? undefined : -1)
                .map((value, colIndex) => {
                  const isNegative =
                    isCurrency && typeof value === "number" && value < 0;

                  return (
                    <td
                      key={colIndex}
                      className={`${isNegative ? "text-danger" : ""}`}
                    >
                      {isCurrency && typeof value === "number"
                        ? `${value} EUR`
                        : String(value)}
                    </td>
                  );
                })}
              {!isCreditoDocImportacao && (
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
            {expandedRow === rowIndex && !isCreditoDocImportacao && (
              <tr>
                <td colSpan={headers.length + 1} className="bg-light">
                  {<ExpandableInfo data={(row as Garantia).extra} />}
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
