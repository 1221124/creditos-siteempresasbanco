import { Row, Col } from "react-bootstrap";
import SearchAndExportBar from "../../components/SearchAndExportBar";
import TableComponent from "../../components/TableComponent";
import { Garantia } from "../../types/types";
import OperationsSummary from "../../components/OperationsSummary";
import { useState } from "react";
import { useLabelsStore } from "utils/useLabelsStore";

type DetailsProps<T> = {
  data: T[];
  isCreditoDocImportacao: boolean;
};

const Details = <T extends { beneficiario: string }>({
  data,
  isCreditoDocImportacao,
}: DetailsProps<T>) => {
  const state = useLabelsStore.getState();
  const headers = isCreditoDocImportacao
    ? state.creditosDocImportHeaders
    : state.garantiasHeaders;
  const beneficiarySearchLabel = state.beneficiarySearchLabel;

  const [filteredData, setFilteredData] = useState<T[]>(data);

  return (
    <>
      {!isCreditoDocImportacao && (
        <OperationsSummary data={data as unknown as Garantia[]} />
      )}

      <SearchAndExportBar
        placeholder={beneficiarySearchLabel}
        data={data}
        setData={setFilteredData}
      />

      <Row data-testid="details">
        <Col>
          <TableComponent headers={headers} data={filteredData} />
        </Col>
      </Row>
    </>
  );
};

export default Details;
