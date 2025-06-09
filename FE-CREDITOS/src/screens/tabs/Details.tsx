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
  const creditosDocImportHeaders = useLabelsStore(
    (state) => state.creditosDocImportHeaders
  );
  const garantiasHeaders = useLabelsStore((state) => state.garantiasHeaders);
  const beneficiarySearchLabel = useLabelsStore(
    (state) => state.beneficiarySearchLabel
  );

  const headers = isCreditoDocImportacao
    ? creditosDocImportHeaders
    : garantiasHeaders;

  const [filteredData, setFilteredData] = useState<T[]>(data);

  return (
    <div className="d-flex w-100 flex-column">
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
    </div>
  );
};

export default Details;
