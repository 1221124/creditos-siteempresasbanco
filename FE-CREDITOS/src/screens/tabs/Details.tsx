import { Row, Col } from "react-bootstrap";
import SearchAndExportBar from "../../components/SearchAndExportBar";
import TableComponent from "../../components/TableComponent";
import { Garantia } from "../../types/types";
import ResumoOperacoes from "../../components/ResumoOperacoes";
import { useState } from "react";

type DetailsProps<T> = {
  data: T[];
  isCreditoDocImportacao: boolean;
};

const Details = <T extends { beneficiario: string }>({
  data,
  isCreditoDocImportacao,
}: DetailsProps<T>) => {
  const headers = [
    "Nome do Beneficiário",
    "Local",
    "Nº Operação",
    "Data inicial",
    "Data final",
    "Montante",
  ];

  const [filteredData, setFilteredData] = useState<T[]>(data);

  if (isCreditoDocImportacao) {
    headers.push("Responsabilidade Atual");
  }

  return (
    <>
      {!isCreditoDocImportacao && (
        <ResumoOperacoes data={data as unknown as Garantia[]} />
      )}

      <SearchAndExportBar
        placeholder="Pesquisar por beneficiário"
        data={data}
        setData={setFilteredData}
      />

      <Row>
        <Col>
          <TableComponent headers={headers} data={filteredData} />
        </Col>
      </Row>
    </>
  );
};

export default Details;
