import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { CreditoDocImport, Garantia } from "../store/creditos.types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ExpandableInfo from "./ExpandableInfo";

interface TableComponentProps {
  headers: string[];
  data: Garantia[] | CreditoDocImport[];
  isCreditoDocImportacao: boolean;
  isCurrency?: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({
  headers,
  data,
  isCreditoDocImportacao,
  isCurrency = false,
}) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const renderCell = (
    header: string,
    row: Garantia | CreditoDocImport
  ): string | number => {
    switch (header) {
      case "Nome do Beneficiário":
        return row.beneficiario;
      case "Local":
        return row.local;
      case "Nº Operação":
        return row.operacao;
      case "Data inicial":
        return row.dataInicial;
      case "Data final":
        return row.dataFinal;
      case "Montante":
        return row.montante;
      case "Responsabilidade Atual":
        return "responsabilidade" in row ? row.responsabilidade : "";
      default:
        return "";
    }
  };

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <Table responsive borderless>
      <thead>
        <tr className="border-bottom">
          {headers.map((header, index) => (
            <th key={index} className={"fw-normal"}>
              <strong>{header}</strong>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr className={rowIndex !== 0 ? "border-top" : ""}>
              {headers.map((header, colIndex) => {
                const value = renderCell(header, row);
                const isNegative =
                  isCurrency && typeof value === "number" && value < 0;

                return (
                  <td
                    key={colIndex}
                    className={`${isNegative ? "text-danger" : ""}`}
                  >
                    {isCurrency && typeof value === "number"
                      ? `${value} EUR`
                      : value}
                  </td>
                );
              })}
              {Array.isArray(data) && data.every((item) => "extra" in item) ? (
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
              ) : null}
            </tr>
            {expandedRow === rowIndex && !isCreditoDocImportacao && (
              <tr>
                <td colSpan={headers.length + 1} className="bg-light">
                  {"extra" in row && <ExpandableInfo data={row.extra} />}
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
