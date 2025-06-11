import { Row, Col } from "react-bootstrap";
import SearchAndExportBar from "../../components/SearchAndExportBar";
import TableComponent from "../../components/TableComponent";
import { Garantia } from "../../types/types";
import OperationsSummary from "../../components/OperationsSummary";
import { useState } from "react";
import { useLabelsStore } from "utils/useLabelsStore";

type DetailsProps<T> = {
  headers: string[];
  data: T[];
  showOperationsSummary: boolean;
};

const Details = <T extends { beneficiario: string }>({
  headers,
  data,
  showOperationsSummary,
}: DetailsProps<T>) => {
  const beneficiarySearchLabel = useLabelsStore(
    (state) => state.beneficiarySearchLabel
  );

  const [filteredData, setFilteredData] = useState<T[]>(data);

  return (
    <div className="d-flex w-100 flex-column">
      {showOperationsSummary && (
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
