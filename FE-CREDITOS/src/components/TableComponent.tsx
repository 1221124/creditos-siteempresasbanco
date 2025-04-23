import React from "react";
import { Table } from "react-bootstrap";
import { CreditoDocImport, Garantia } from "../store/creditos.types";

interface TableComponentProps {
  headers: string[];
  data: Garantia[] | CreditoDocImport[];
  isCurrency?: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({
  headers,
  data,
  isCurrency,
}) => {
  const renderRow = (row: Garantia | CreditoDocImport, index: number) => {
    return (
      <tr key={index} className={index !== 0 ? "border-top" : ""}>
        {headers.map((header, headerIndex) => {
          let cellValue: string | number = "";

          switch (header) {
            case "Nome do Beneficiário":
              cellValue = row.beneficiario;
              break;
            case "Local":
              cellValue = row.local;
              break;
            case "Nº Operação":
              cellValue = row.operacao;
              break;
            case "Data inicial":
              cellValue = row.dataInicial;
              break;
            case "Data final":
              cellValue = row.dataFinal;
              break;
            case "Montante":
              cellValue = row.montante;
              break;
            case "Responsabilidade Atual":
              cellValue = "responsabilidade" in row ? row.responsabilidade : -1;
              break;
            default:
              cellValue = "";
          }

          return (
            <td
              key={headerIndex}
              className={
                isCurrency && typeof cellValue === "number" && cellValue < 0
                  ? "text-danger"
                  : ""
              }
            >
              {isCurrency && typeof cellValue === "number"
                ? `${cellValue} EUR`
                : cellValue}
            </td>
          );
        })}
      </tr>
    );
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
      <tbody>{data.map((row, index) => renderRow(row, index))}</tbody>
    </Table>
  );
};

export default TableComponent;
