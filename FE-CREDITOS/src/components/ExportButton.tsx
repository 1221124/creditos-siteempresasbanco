import React from "react";
import { Button } from "react-bootstrap";
import { FaFileExport } from "react-icons/fa";
import { useLabelsStore } from "../store/useLabelsStore";

const ExportButton: React.FC = () => {
  const exportLabel = useLabelsStore((state) => state.exportLabel);

  return (
    <Button
      variant="light"
      className="d-flex align-items-center gap-2"
      onClick={() => alert(`${exportLabel}!`)} //simulação de exportação
    >
      <FaFileExport />
      {exportLabel}
    </Button>
  );
};

export default ExportButton;
