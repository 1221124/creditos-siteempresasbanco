import { Row, Col } from "react-bootstrap";
import SearchAndExportBar from "../../components/SearchAndExportBar";
import TableComponent from "../../components/TableComponent";
import { Garantia } from "../../store/creditos.types";
import ResumoOperacoes from "../../components/ResumoOperacoes";

type DetailsProps<T> = {
  data: T[];
  filteredData: T[];
  setFilteredData: (newData: T[]) => void;
  isCreditoDocImportacao: boolean;
};

const Details = <T extends { beneficiario: string }>({
  data,
  filteredData,
  setFilteredData,
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
          <TableComponent
            headers={headers}
            data={filteredData}
            isCreditoDocImportacao={isCreditoDocImportacao}
            isCurrency={true}
          />
        </Col>
      </Row>
    </>
  );
};

export default Details;
