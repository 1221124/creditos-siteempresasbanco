import { Row, Col } from "react-bootstrap";
import SearchInput from "./SearchInput";
import ExportButton from "./ExportButton";

interface SearchAndExportBarProps<T> {
  placeholder: string;
  data: T[];
  setData: (newData: T[]) => void;
}

const SearchAndExportBar = <T extends { beneficiario: string }>({
  placeholder,
  data,
  setData,
}: SearchAndExportBarProps<T>) => {
  const originalData = data.map((item) => ({ ...item }));

  const handleSearch = (value: string) => {
    let updatedData: T[];

    if (value === "") {
      updatedData = [...originalData];
    } else {
      updatedData = originalData.filter((item) =>
        item.beneficiario.toLowerCase().includes(value.toLowerCase())
      );
    }

    setData(updatedData);
  };

  return (
    <Row className="d-flex mb-3 align-items-center justify-content-between">
      <Col md={6}>
        <SearchInput placeholder={placeholder} onSearch={handleSearch} />
      </Col>
      <Col className="text-end d-flex justify-content-end">
        <ExportButton />
      </Col>
    </Row>
  );
};

export default SearchAndExportBar;
