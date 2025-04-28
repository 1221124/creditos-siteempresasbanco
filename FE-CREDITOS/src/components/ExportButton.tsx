import React from "react";
import { Button } from "react-bootstrap";
import { FaFileExport } from "react-icons/fa";

const ExportButton: React.FC = () => {
  return (
    <Button
      variant="light"
      className="d-flex align-items-center gap-2"
      onClick={() => alert("Exportar!")} //simulação de exportação
    >
      <FaFileExport />
      Exportar
    </Button>
  );
};

export default ExportButton;
